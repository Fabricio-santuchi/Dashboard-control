import prisma from "@/lib/prisma";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const now = new Date();

    /* ============================
       DATAS BASE
    ============================ */
    const last90Days = new Date();
    last90Days.setDate(now.getDate() - 90);

    const last30Days = new Date();
    last30Days.setDate(now.getDate() - 30);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    /* ============================
       MÉTRICAS (CARDS)
    ============================ */
    const [totalSales90Days, ordersToday, orders30Days, newCustomers30Days] =
      await Promise.all([
        prisma.order.aggregate({
          where: { createdAt: { gte: last90Days } },
          _sum: { total: true },
        }),

        prisma.order.count({
          where: { createdAt: { gte: today } },
        }),

        prisma.order.count({
          where: { createdAt: { gte: last30Days } },
        }),

        prisma.customer.count({
          where: { createdAt: { gte: last30Days } },
        }),
      ]);

    /* ============================
       GRÁFICO – VENDAS MENSAIS
       Janeiro → Dezembro
    ============================ */
    const year = now.getFullYear();

    const startOfYear = new Date(year, 0, 1); // Jan
    const endOfYear = new Date(year, 11, 31); // Dez

    const ordersYear = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: startOfYear,
          lte: endOfYear,
        },
      },
      select: {
        createdAt: true,
        total: true,
      },
    });

    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    // inicia todos os meses com 0
    const monthlyTotals = new Array(12).fill(0);

    // soma vendas por mês
    for (const order of ordersYear) {
      const monthIndex = order.createdAt.getMonth(); // 0–11
      monthlyTotals[monthIndex] += order.total;
    }

    const monthlySales = months.map((month, index) => {
      const total = monthlyTotals[index];

      // se não teve venda no mês
      if (total === 0) {
        return {
          month,
          total: 0,
          desktop: 0,
          mobile: 0,
        };
      }

      // proporção desktop / mobile
      const desktopPercent = 0.64; 
      const desktop = Math.round(total * desktopPercent);
      const mobile = total - desktop;

      return {
        month,
        total,
        desktop,
        mobile,
      };
    });

    /* ============================
       RESPONSE FINAL
    ============================ */
    return Response.json({
      metrics: {
        totalSales90Days: totalSales90Days._sum.total ?? 0,
        ordersToday,
        orders30Days,
        newCustomers30Days,
      },
      charts: {
        monthlySales,
      },
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[DASHBOARD_API_ERROR]", error);
    return Response.json(
      { error: "Erro ao buscar dados do dashboard" },
      { status: 500 }
    );
  }
}

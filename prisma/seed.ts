import prisma from "@/lib/prisma";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const year = new Date().getFullYear();

  /* ============================
     ORDERS – JAN → DEZ
  ============================ */
  for (let month = 0; month < 12; month++) {
    // quantidade de pedidos por mês (sazonalidade leve)
    const ordersInMonth = randomBetween(15, 40);

    for (let i = 0; i < ordersInMonth; i++) {
      const day = randomBetween(1, 28); // evita bug de mês
      const total = randomBetween(120, 1500); // ticket médio realista

      await prisma.order.create({
        data: {
          total,
          createdAt: new Date(year, month, day),
        },
      });
    }
  }

  /* ============================
     CUSTOMERS – ÚLTIMOS 6 MESES
  ============================ */
  for (let i = 0; i < 80; i++) {
    const daysAgo = randomBetween(0, 180);

    await prisma.customer.create({
      data: {
        createdAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
      },
    });
  }

  console.log("🌱 Seed anual concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

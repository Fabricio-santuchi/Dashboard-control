import prisma from "@/lib/prisma";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const now = new Date();

  console.log("🌱 Limpando dados antigos...");
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();

  /* ============================
     ORDERS – ÚLTIMOS 12 MESES
  ============================ */
  for (let i = 11; i >= 0; i--) {
    const dateBase = new Date(now.getFullYear(), now.getMonth() - i, 1);

    const ordersInMonth = randomBetween(20, 45);

    for (let j = 0; j < ordersInMonth; j++) {
      const day = randomBetween(1, 28);
      const total = randomBetween(300, 1800);

      await prisma.order.create({
        data: {
          total,
          createdAt: new Date(
            dateBase.getFullYear(),
            dateBase.getMonth(),
            day
          ),
        },
      });
    }
  }

  /* ============================
     CUSTOMERS – ÚLTIMOS 6 MESES
  ============================ */
  for (let i = 0; i < 90; i++) {
    const daysAgo = randomBetween(0, 180);

    await prisma.customer.create({
      data: {
        createdAt: new Date(
          now.getTime() - daysAgo * 24 * 60 * 60 * 1000
        ),
      },
    });
  }

  console.log("✅ Seed temporal concluído com sucesso!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

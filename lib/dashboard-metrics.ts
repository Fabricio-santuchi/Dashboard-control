export async function getDashboardMetrics() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar métricas");
  }

  return res.json();
}

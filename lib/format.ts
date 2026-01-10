export function formatBRLFromString(value: string | number) {
  const numberValue =
    typeof value === "string"
      ? Number(value.replace(/[^\d.-]/g, ""))
      : value;

  if (isNaN(numberValue)) return "R$ 0";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(numberValue);
}

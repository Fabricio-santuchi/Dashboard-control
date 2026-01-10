import { DollarSign, Users, Percent, BadgeDollarSign } from "lucide-react";
import type { DashboardResponse } from "@/types/dashboard";

export const dashboardCards = [
  {
    id: "total-sales",
    title: "Total vendas",
    description: "Total de vendas em 90 dias",
    icon: DollarSign,
    getValue: (data: DashboardResponse) =>
      `R$ ${data.metrics.totalSales90Days}`,
    format: "currency" as const,
    trend: {
      value: 12,
      label: "em relação ao mês passado",
    },
  },
  {
    id: "new-customers",
    title: "Novos clientes",
    description: "Novos clientes em 30 dias",
    icon: Users,
    getValue: (data?: DashboardResponse) =>
      data ? data.metrics.newCustomers30Days : "—",
    format: "number" as const,
    trend: {
      value: 10,
      label: "em relação ao mês passado",
    },
  },
  {
    id: "orders-today",
    title: "Pedidos hoje",
    description: "Total de pedidos hoje",
    icon: Percent,
    getValue: (data?: DashboardResponse) =>
      data ? data.metrics.ordersToday : "—",
    format: "number" as const,
    trend: {
      value: -4,
      label: "em relação a ontem",
    },
  },
  {
    id: "orders-30-days",
    title: "Total pedidos",
    description: "Total pedidos em 30 dias",
    icon: BadgeDollarSign,
    getValue: (data: DashboardResponse) => data.metrics.orders30Days,
    format: "number" as const,
    trend: {
      value: 8,
      label: "em relação ao mês passado",
    },
  },
];

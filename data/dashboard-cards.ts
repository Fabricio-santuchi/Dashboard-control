import { DollarSign, Users, Percent, BadgeDollarSign } from "lucide-react";

export type Trend = {
  value: number; // ex: 10 ou -4
  label: string; // "em relação ao mês passado"
};

export type DashboardCardConfig = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  getValue: () => string | number;
  trend: Trend;
};

import { dashboardData } from "./dashboard";
import { getTotalSalesLast90Days } from "@/lib/dashboard-metrics";

const totalSales90Days = getTotalSalesLast90Days(dashboardData.monthlySales);

export const dashboardCards: DashboardCardConfig[] = [
  {
    id: "total-sales",
    title: "Total vendas",
    description: "Total de vendas em 90 dias",
    icon: DollarSign,
    getValue: () => `R$ ${totalSales90Days.toLocaleString("pt-BR")}`,
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
    getValue: () => dashboardData.metrics.newCustomers30Days,
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
    getValue: () => dashboardData.metrics.ordersToday,
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
    getValue: () => dashboardData.metrics.orders30Days,
    trend: {
      value: 8,
      label: "em relação ao mês passado",
    },
  },
];

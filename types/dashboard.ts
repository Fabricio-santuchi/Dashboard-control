// types/dashboard.ts
export type DashboardResponse = {
  metrics: {
    totalSales90Days: number;
    ordersToday: number;
    orders30Days: number;
    newCustomers30Days: number;
    currentMonthSales: number;
    previousMonthSales: number;
    monthGrowth: number;
  };
  charts: {
    monthlySales: {
      month: string;
      total: number;
      desktop: number;
      mobile: number;
    }[];
  };
  lastUpdated: string;
};

// types/dashboard.ts
export type DashboardResponse = {
  lastUpdated: string;
  metrics: {
    totalSales90Days: string;
    ordersToday: number;
    orders30Days: number;
    newCustomers30Days: number;
  };
  charts: {
    monthlySales: [
      { month: string; total: number; desktop: number; mobile: number }
    ];
  };
};

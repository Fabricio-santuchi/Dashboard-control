type DashboardData = {
  lastUpdated: string;

  metrics: {
    totalSales90Days: number;
    newCustomers30Days: number;
    ordersToday: number;
    orders30Days: number;
    averageTicket: number;
  };

  // 📊 Gráfico anual / geral
  monthlySales: {
    month: string;
    desktop: number;
    mobile: number;
    total: number;
  }[];

  recentCustomers: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    value: number;
  }[];
};

const monthlySales = [
  { month: "Janeiro", desktop: 4200, mobile: 3100, total: 7300 },
  { month: "Fevereiro", desktop: 4800, mobile: 3600, total: 8400 },
  { month: "Março", desktop: 5100, mobile: 3900, total: 9000 },
  { month: "Abril", desktop: 4600, mobile: 3500, total: 8100 },
  { month: "Maio", desktop: 5200, mobile: 4000, total: 9200 },
  { month: "Junho", desktop: 4800, mobile: 3800, total: 8600 },
  { month: "Julho", desktop: 4900, mobile: 3700, total: 8600 },
  { month: "Agosto", desktop: 5400, mobile: 4200, total: 9600 },
  { month: "Setembro", desktop: 5100, mobile: 3900, total: 9000 },
  { month: "Outubro", desktop: 5600, mobile: 4400, total: 10000 },
  { month: "Novembro", desktop: 6200, mobile: 4800, total: 11000 },
  { month: "Dezembro", desktop: 7000, mobile: 5400, total: 12400 },
];

const totalSales90Days = monthlySales
  .slice(-3)
  .reduce((acc, month) => acc + month.total, 0);

export const dashboardData: DashboardData = {
  lastUpdated: new Date().toISOString(),

  metrics: {
    orders30Days: 680,
    ordersToday: 23,
    newCustomers30Days: 198,
    averageTicket: 92,
    totalSales90Days,
  },

  monthlySales,

  recentCustomers: [
    {
      id: 1,
      name: "Ana Souza",
      email: "ana.souza@email.com",
      avatar: "/avatars/Avatar1.png",
      value: 189,
    },
    {
      id: 2,
      name: "Carlos Lima",
      email: "carlos.lima@email.com",
      avatar: "/avatars/Avatar2.png",
      value: 92,
    },
    {
      id: 3,
      name: "Mariana Costa",
      email: "mariana.costa@email.com",
      avatar: "/avatars/Avatar3.png",
      value: 276,
    },
    {
      id: 4,
      name: "Rafael Almeida",
      email: "rafael.almeida@email.com",
      avatar: "/avatars/Avatar4.png",
      value: 134,
    },
    {
      id: 5,
      name: "Bruno Ferreira",
      email: "bruno.ferreira@email.com",
      avatar: "/avatars/Avatar5.png",
      value: 410,
    },
    {
      id: 6,
      name: "Juliana Pires",
      email: "juliana.pires@email.com",
      avatar: "/avatars/Avatar6.png",
      value: 610,
    },
  ],
};

type DashboardData = {
  recentCustomers: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    value: number;
  }[];
};

export const dashboardData: DashboardData = {
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
  ],
};

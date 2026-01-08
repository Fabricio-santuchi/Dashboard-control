"use client";

import ChartOverview from "@/components/chart";
import ChartTotal from "@/components/chart-total";
import Sales from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { dashboardData } from "@/data/dashboard";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="sm:ml-14 p-4">
      <h1 className="text-sm text-muted-foreground mb-3">
        Última atualização:{" "}
        {new Date(dashboardData.lastUpdated).toLocaleString("pt-BR")}
      </h1>
      {isLoading ? (
        <>
          {/* Skeleton dos cards */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </section>

          {/* Skeleton dos gráficos + lista */}
          <section className="mt-4 flex flex-col gap-4">
            <section className="flex flex-col md:flex-row gap-4">
              <Skeleton className="min-h-87.5 flex-1 rounded-xl" />
              <Skeleton className="min-h-87.5 flex-1 rounded-xl" />
            </section>

            <Skeleton className="min-h-87.5 w-full rounded-xl" />
          </section>
        </>
      ) : (
        <>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center ">
                  <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                    Total vendas
                  </CardTitle>
                  <DollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total vendas em 90 dias</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm-text-lg font-bold">
                  R${" "}
                  {dashboardData.metrics.totalSales90Days.toLocaleString(
                    "pt-BR"
                  )}
                </p>
                <CardDescription className="text-green-600 text-xs md:text-sm">
                  ▲ 12% em relação ao mês passado
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center ">
                  <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                    Novos clientes
                  </CardTitle>
                  <Users className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Novos clientes em 30 dias</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm-text-lg font-bold">
                  {" "}
                  {dashboardData.metrics.newCustomers30Days}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center ">
                  <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                    Pedidos hoje
                  </CardTitle>
                  <Percent className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total de pedidos hoje</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm-text-lg font-bold">
                  {dashboardData.metrics.ordersToday}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center ">
                  <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                    Total pedidos
                  </CardTitle>
                  <BadgeDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total pedidos em 30 dias</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm-text-lg font-bold">
                  {" "}
                  {dashboardData.metrics.orders30Days}
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mt-4 flex flex-col gap-4">
            <section className="flex flex-col md:flex-row gap-4">
              <ChartOverview />
              <Sales />
            </section>

            <ChartTotal />
          </section>
        </>
      )}
    </main>
  );
};
export default Home;

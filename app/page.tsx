"use client";

import ChartOverview from "@/components/chart";
import ChartTotal from "@/components/chart-total";
import MetricCard from "@/components/metricCard";
import Sales from "@/components/sales";
import { Skeleton } from "@/components/ui/skeleton";
import { dashboardData } from "@/data/dashboard";
import { dashboardCards } from "@/data/dashboard-cards";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lastUpdated = new Date(dashboardData.lastUpdated);
  const FAKE_LOADING_TIME = 1200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, FAKE_LOADING_TIME);

    return () => clearTimeout(timer);
  }, [FAKE_LOADING_TIME]);

  return (
    <main className="sm:ml-14 p-4">
      <h1 className="text-sm text-muted-foreground mb-3">
        Última atualização: {lastUpdated.toLocaleString("pt-BR")}
      </h1>
      {isLoading ? (
        <>
          {/* Skeleton dos cards */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardCards.map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
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
            {dashboardCards.map((card) => (
              <MetricCard
                key={card.id}
                title={card.title}
                description={card.description}
                value={card.getValue()}
                icon={card.icon}
                trend={card.trend}
              />
            ))}
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
export default DashboardPage;

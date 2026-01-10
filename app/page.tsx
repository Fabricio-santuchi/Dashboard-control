"use client";

import ChartOverview from "@/components/chart";
import ChartTotal from "@/components/chart-total";
import MetricCard from "@/components/metricCard";
import MonthComparisonCard from "@/components/monthComparisonCard";
import Sales from "@/components/sales";
import { Skeleton } from "@/components/ui/skeleton";
import { dashboardCards } from "@/data/dashboard-cards";
import { DashboardResponse } from "@/types/dashboard";
import { useEffect, useState } from "react";

async function fetchDashboard() {
  const res = await fetch("/api/dashboard");
  const data = await res.json();

  if (!res.ok) throw new Error("Erro ao buscar dados");
  return data;
}

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardResponse>();
  const lastUpdated = dashboardData
    ? new Date(dashboardData.lastUpdated)
    : null;

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchDashboard();
        setDashboardData(data);
        console.log(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <main className="sm:ml-14 p-4">
      <h1 className="text-sm text-muted-foreground mb-3">
        Última atualização:{" "}
        {lastUpdated ? lastUpdated.toLocaleString("pt-BR") : "--"}
      </h1>
      {isLoading || !dashboardData ? (
        <>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardCards.map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
            ))}
          </section>

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
                value={card.getValue(dashboardData)}
                format={card.format}
                icon={card.icon}
                trend={card.trend}
              />
            ))}
          </section>

          <section className="mt-4 flex flex-col gap-4">
            <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <MonthComparisonCard
                current={dashboardData.metrics.currentMonthSales}
                previous={dashboardData.metrics.previousMonthSales}
                growth={dashboardData.metrics.monthGrowth}
              />
            </section>
            <section className="flex flex-col md:flex-row gap-4">
              <ChartOverview data={dashboardData.charts.monthlySales} />

              <Sales />
            </section>
            <ChartTotal data={dashboardData.charts.monthlySales} />
          </section>
        </>
      )}
    </main>
  );
};

export default DashboardPage;

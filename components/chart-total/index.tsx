"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";
import { PropsMonthlySales } from "../chart";

const chartConfig = {
  total: {
    label: "Faturamento",
    color: "#16a34a",
  },
} satisfies ChartConfig;

const ChartTotal = ({ data }: PropsMonthlySales) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Faturamento mensal</CardTitle>
          <TrendingUp className="w-4 h-4" />
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-87.5 w-full">
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="var(--color-total)"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartTotal;

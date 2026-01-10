"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatBRLFromString } from "@/lib/format";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type Props = {
  current: number;
  previous: number;
  growth: number;
};

const MonthComparisonCard = ({ current, previous, growth }: Props) => {
  const isPositive = growth >= 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Mês atual vs mês anterior</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-muted-foreground">Mês atual</p>
          <p className="text-xl font-bold">{formatBRLFromString(current)}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Mês anterior</p>
          <p className="text-base">{formatBRLFromString(previous)}</p>
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          {Math.abs(growth)}%
          <span className="text-muted-foreground ml-1">vs mês anterior</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthComparisonCard;

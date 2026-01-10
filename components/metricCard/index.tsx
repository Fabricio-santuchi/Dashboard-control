import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatBRLFromString } from "@/lib/format";
import { MetricCardProps } from "@/types/metricCard";

function formatValue(
  value: string | number,
  format: "currency" | "number" = "number"
) {
  if (format === "currency") {
    return formatBRLFromString(value);
  }

  return new Intl.NumberFormat("pt-BR").format(
    typeof value === "string" ? Number(value) : value
  );
}

const MetricCard = ({
  title,
  description,
  value,
  format = "number",
  icon: Icon,
  trend,
}: MetricCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            {title}
          </CardTitle>
          <Icon className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-base sm:text-lg font-bold">
          {formatValue(value, format)}
        </p>
        {trend && (
          <div
            className={`mt-1 flex items-center gap-1 text-xs md:text-sm ${
              trend.value >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>{trend.value >= 0 ? "▲" : "▼"}</span>
            <span>
              {Math.abs(trend.value)}% {trend.label}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;

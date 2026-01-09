import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trend } from "@/data/dashboard-cards";

type MetricCardProps = {
  title: string;
  description: string;
  value: string | number;
  icon: React.ElementType;
  trend?: Trend;
};

const MetricCard = ({
  title,
  description,
  value,
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
        <p className="text-base sm:text-lg font-bold">{value}</p>
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

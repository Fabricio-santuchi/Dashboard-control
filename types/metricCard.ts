export type MetricCardProps = {
  title: string;
  description: string;
  value: string | number;
  format?: "currency" | "number";
  icon: React.ElementType;
  trend?: {
    value: number;
    label: string;
  };
};

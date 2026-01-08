import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { dashboardData } from "@/data/dashboard";

const Sales = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Últimos clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        {dashboardData.recentCustomers.map((customer) => (
          <article
            key={customer.id}
            className="flex items-center gap-2 border-b py-2"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={customer.avatar} />
              <AvatarFallback>{customer.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm sm:text-base font-semibold">
                {customer.name}
              </p>
              <span className="text-xs sm:text-sm text-gray-400">
                {customer.email}
              </span>
            </div>
            <span className="font-medium">R$ {customer.value}</span>
          </article>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sales;

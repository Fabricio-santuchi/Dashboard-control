import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">


        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}

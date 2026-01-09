type MonthlySale = {
  month: string;
  total: number;
};

export function getTotalSalesLast90Days(data: MonthlySale[]) {
  return data.slice(-3).reduce((acc, month) => acc + month.total, 0);
}

import { Line } from "react-chartjs-2";
import { CountryDetailSum } from "../../API/serviceTypes";

interface TrendProps {
  data: CountryDetailSum[];
  label: "confirmed" | "deaths" | "recovered" | "active";
}

export const Trend = ({ data, label }: TrendProps) => {
  const chartData: any = {
    labels: data.map((d: CountryDetailSum) => d.date),
    datasets: [
      {
        label: label,
        data: data.map((d: CountryDetailSum) => d[label]),
        fill: false,
        tension: 0.1,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return <Line data={chartData} />;
};

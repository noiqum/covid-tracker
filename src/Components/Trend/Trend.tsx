import React from "react";
import { CountryDetailSum } from "../../API/serviceTypes";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TrendProps {
  data: CountryDetailSum[];
  label: "confirmed" | "deaths" | "recovered" | "active";
}

const Trend = React.memo(function ({ data, label }: TrendProps) {
  const chartData = data.map((d) => {
    return {
      name: d.date,
      [label]: d[label],
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey={label} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={label}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

export default Trend;

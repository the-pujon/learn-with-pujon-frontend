import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

export default function Charts({ earningsDetails }) {
  const data = earningsDetails.map((earning) => ({
    date: new Date(Number(earning.date)).toLocaleDateString(),
    totalAmount: earning.totalAmount,
  }));

  // Group data by date and sum totalAmount for each date
  const groupedData = data.reduce((acc, entry) => {
    const date = entry.date;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += entry.totalAmount;
    return acc;
  }, {});

  // Convert grouped data back to an array for rendering the chart
  const chartData = Object.keys(groupedData).map((date) => ({
    date,
    totalAmount: groupedData[date],
  }));

  return (
    <div>
      <div className="text-sm hidden md:block">
        <ResponsiveContainer width={1000} height={400}>
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalAmount"
              stroke="#213555"
              fill="#213555"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="text-sm sm:hidden">
        <ResponsiveContainer width={400} height={400}>
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalAmount"
              stroke="#213555"
              fill="#213555"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

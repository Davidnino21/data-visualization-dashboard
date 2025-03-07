import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import sampleData from "../data/sampleData.json";
console.log(sampleData);

export default class BarGraph extends PureComponent {
  render() {
    return (
        <BarChart
          width={1000}
          height={300}
          data={sampleData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="regularMarketPrice"
            fill="#8884d8"
          />
          <Bar
            dataKey="regularMarketDayHigh"
            fill="#82ca9d"
          />
          <Bar
            dataKey="regularMarketDayLow"
            fill="#fff7300"
          />
        </BarChart>
    );
  }
}

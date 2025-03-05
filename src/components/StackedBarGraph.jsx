import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import sampleData from "../data/sampleData.json";

export default class Example extends PureComponent {
  render() {
    return (
        <BarChart
          width={1000}
          height={300}
          data={sampleData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="regularMarketOpen" stackId="a" fill="#fff7300" />
          <Bar dataKey="regularMarketPreviousClose" stackId="a" fill="#82ca9d" />
        </BarChart>
    );
  }
}

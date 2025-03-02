import React, { PureComponent } from "react";
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

export default class LineGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.weatherData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="tempmax" stroke="#82ca9d" />
          <Line type="monotone" dataKey="tempmin" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

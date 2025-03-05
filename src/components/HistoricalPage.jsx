import React from "react";
import { Link } from "react-router-dom";
import HistoricalHighGraph from "./HistoricalHighGraph";
import HistoricalLowGraph from "./HistoricalLowGraph";

export default function HistoricalPage() {
  return (
    <div className="bg-white flex-grow">
      <h1 className="bg-slate-300 text-center font-bold p-10 text-4xl">
        Historical Price Visualization
      </h1>
      <div className="h-96 flex items-center flex-col p-6">
      <h1 className="text-2xl">52 Week High</h1>
        <HistoricalHighGraph />
      </div>
      <div className="h-96 flex items-center flex-col">
        <h1 className="text-2xl">52 Week Low</h1>
        <HistoricalLowGraph />
      </div>
      <div className="text-center mt-6">
        <Link to="/" className="text-blue-500 underline text-lg font-bold">
          ← Back
        </Link>
      </div>
    </div>
  );
}


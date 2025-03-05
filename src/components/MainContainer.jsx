import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StackedBarGraph from "./StackedBarGraph";
import BarGraph from "./BarGraph";

function MainContainer() {
  const navigate = useNavigate(); // Hook for navigation
  const [show, setShow] = useState("current");

  function handleChange(e) {
    const value = e.target.value;
    setShow(value);

    // Navigate to the historical page if "Historical" is selected
    if (value === "historical") {
      navigate("/historical");
    }
  }

  return (
    <div className="bg-white flex-grow">
      <h1 className="bg-slate-300 text-center font-bold p-10 text-4xl">
        Data Visualization Dashboard
      </h1>
      <div className="p-6">
        <label className="p-3 font-bold">Filter by Category:</label>
        <select className="border-1" onChange={handleChange}>
          <option value="current">Current</option>
          <option value="historical">Historical</option>
        </select>
      </div>
      {show === "current" && (
        <>
          <div className="h-96 flex items-center flex-col">
            <StackedBarGraph />
          </div>
          <div className="h-96 flex items-center flex-col">
            <BarGraph />
          </div>
        </>
      )}
    </div>
  );
}

export default MainContainer;

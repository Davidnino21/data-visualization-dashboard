import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import HistoricalPage from "./components/HistoricalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/historical" element={<HistoricalPage />} />
      </Routes>
    </Router>
  );
}
export default App;

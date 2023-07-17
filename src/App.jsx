import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import PowerBI from "./pages/PowerBI"
import BambooHR from "./pages/BambooHR";
import HubSpot from "./pages/HubSpot";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/PowerBI" element={<PowerBI/>} />
          <Route path="/BambooHR" element={<BambooHR/>} />
          <Route path="/HubSpot" element={<HubSpot/>} />
        </Routes>
  </div>)
};

export default App;

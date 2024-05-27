import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import Payment from "./pages/Payment";
import SideBar from "./component/SideBar";
import { useNavigationHistory } from "./store/NavigationHistoryContex";
import MulitpleRoute from "./pages/MulitpleRoute";
// import ScheduleTwo from "./pages/ScheduleTwo";
// import ScheduleThree from "./pages/ScheduleThree";

export default function App() {
  const location = useLocation();
  console.log(location, "locatiooooon");
  const { addPageToHistory } = useNavigationHistory();
  React.useEffect(() => {
    addPageToHistory(location.pathname);
  }, [location, addPageToHistory]);

  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule/*" element={<MulitpleRoute />} />{" "}
          {/* This is right */}
          {/* <Route path="/schedule" element={<Schedule />} /> */}
          {/* <Route path="/schedule/comoponet_one" element={<ScheduleTwo />} />
          <Route path="/schedule/comoponet_two" element={<ScheduleThree />} /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
}

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
export default function App() {
  const location = useLocation();
  const { addPageToHistory } = useNavigationHistory();
  React.useEffect(() => {
    addPageToHistory(location.pathname);
  }, [location, addPageToHistory]);

  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigationHistory } from "../store/NavigationHistoryContex";
import { Link, Route, Router } from "react-router-dom";
// import ScheduleTwo from "./ScheduleTwo";
// import ScheduleThree from "./ScheduleThree";

export default function Schedule() {
  // const [task, setTask] = useState(false);

  const { history } = useNavigationHistory();

  // const handleClick = () => {
  //   setTask(true);
  // };

  const getPageName = (path) => {
    if (!path) return null; // Handle case when path is null or undefined
    const pageName = path.substring(1); // Remove the leading slash
    return pageName.charAt(0).toUpperCase() + pageName.slice(1); // Capitalize the first letter
  };
  const previousPage =
    history.length > 1 ? getPageName(history[history.length - 2]) : null;

  return (
    <div>
      <h1>Schedule</h1>
      <p>Welcome to the Schedule page!</p>
      {previousPage && <p>You came from: {previousPage} </p>}

      <Link to="/schedule/component_one">
        <button>component one</button>
      </Link>

      <Link to="/schedule/component_two">
        <button>Component Two</button>
      </Link>
    </div>
  );
}

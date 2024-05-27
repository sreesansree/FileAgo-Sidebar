import React from "react";

import { Route, Routes } from "react-router-dom";
import Schedule from "./Schedule";
import ScheduleTwo from "./ScheduleTwo";
import ScheduleThree from "./ScheduleThree";
export default function MulitpleRoute() {
  return (
    <div>
      <Schedule />
      {/* <h3>hai</h3> */}
      <div className="">
        <Routes>
          <Route path="component_one" element={<ScheduleTwo />} />
          <Route path="component_two" element={<ScheduleThree />} />
        </Routes>
      </div>
    </div>
  );
}

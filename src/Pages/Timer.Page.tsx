import React from "react";
import "./Timer.Page.css";
import Clock from "../Components/Clock.Component";

const TimerPage = (): React.ReactElement => {
  return (
    <div className="TimerPage_container">
      <Clock />
    </div>
  );
};

export default TimerPage;

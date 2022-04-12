import React from "react";
import logo from "./logo.svg";
import "./Timer.Page.css";
import Clock from "../Components/Clock.Component";

const TimerPage = () => {
  return (
    <div className="TimerPage_container">
      <Clock />
    </div>
  );
};

export default TimerPage;

import React, { useEffect } from "react";
import "./App.css";
import TimerPage from "./Pages/Timer.Page";

function App() {
  useEffect(() => {
    document.title = "React Timer";
  }, []);

  return <TimerPage />;
}

export default App;

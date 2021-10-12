import React, { useState } from "react";
import "./App.css";

export default function Today() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  useState(() =>
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  );
  return (
    <div>
      <p>{new Date().toLocaleDateString("en-US", { weekday: "long" })}</p>
      <p>{currentTime}</p>
    </div>
  );
}

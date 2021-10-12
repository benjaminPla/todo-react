import React, { useState } from "react";

export default function Today() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  useState(() =>
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  );
  let weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return <p className="lead text-center m-0">{weekday + " - " + currentTime}</p>;
}

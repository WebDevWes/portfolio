import React, { useState } from "react";
import "./style.css";

const time = new Date().toLocaleString().split(" ")[1].split(":");
const amPM = new Date().toLocaleString().split(" ")[2];

export default function Time() {
  const [hour, setHour] = useState(time[0]);
  const [minute, setMinute] = useState(time[1]);
  const [meridiem, setMeridiem] = useState(amPM);

  setInterval(() => {
    const newTime = new Date().toLocaleString().split(" ")[1].split(":");
    const AMPM = new Date().toLocaleString().split(" ")[2];

    setHour(newTime[0]);
    setMinute(newTime[1]);
    setMeridiem(AMPM);
  }, 30000);

  return <div className="Time">{`${hour}:${minute} ${meridiem}`}</div>;
}

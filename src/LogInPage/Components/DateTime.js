import React, { useState } from "react";

const DateTime = ({ color, bgColor, txtColor }) => {
  const days = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"];

  const newDay = new Date();
  let day = days[newDay.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newMonth = new Date();
  let month = months[newMonth.getMonth()];

  const today = new Date();
  const setToday = today.getDate();

  let myDate = `${day} ${month} ${setToday}`;

  setInterval(timerd, 1000);

  const [hours, setHours] = useState(new Date().getHours());
  const [mins, setMins] = useState(new Date().getMinutes());

  function timerd() {
    let hour = newMonth.getHours();
    let min = newMonth.getMinutes();
    setHours(hour);
    setMins(min);
  }
  let a = 10;
  let q = 0;
  let w = "";

  return (
    <section className="date-time">
      <h3 className="date-style">{myDate}</h3>
      <div className="timer">
        <div className="sprt">
          <span className="span">{today.getHours() < a ? q : w}</span>
          <h1 id="hrs">{hours}</h1>
        </div>
        <h1>:</h1>
        <div className="sprt">
          <span className="span mns">{today.getMinutes() < a ? q : w}</span>
          <h1 id="mns">{mins}</h1>
        </div>
      </div>
    </section>
  );
};

export default DateTime;

import React, { useState } from "react";

const SwitchTheme = ({
  color,
  handleSwitch,
  poss,
  bgColor,
  handleLock,
  txtColor,
  navColor,
}) => {
  return (
    <nav className="top-nav" style={{ background: navColor }}>
      <h1>
        Pharma<span>Flow</span>
      </h1>
      <i
        className="fa-regular fa-airplay lock-icon nv-icon"
        onClick={handleLock}
        style={{ color: txtColor }}></i>

      <div
        className="switch"
        role="button"
        style={{ justifyContent: poss, background: color }}
        onClick={handleSwitch}>
        <div
          className="inner-switch"
          role="button"
          style={{ background: bgColor }}></div>
      </div>
    </nav>
  );
};

export default SwitchTheme;

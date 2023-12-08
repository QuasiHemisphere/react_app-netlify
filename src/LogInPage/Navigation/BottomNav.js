import React, { useState } from "react";

const BottomNav = ({
  navList,
  handleClick,
  color,
  showNav,
  handleReveal,
  reveal,
  navIcon,
  txtColor,
  handleNavClick,
}) => {
  return (
    <>
      <i
        className={reveal}
        onClick={handleReveal}
        style={{ display: navIcon, color: txtColor }}></i>
      <nav
        style={{ backgroundColor: color, display: showNav }}
        className="bot-nav">
        {navList.map((icon) => (
          <a href={icon.url} key={icon.id} target="_top">
            <i
              className={icon.link}
              role="button"
              onClick={() => handleNavClick(icon.id)}></i>
          </a>
        ))}
      </nav>
    </>
  );
};

export default BottomNav;

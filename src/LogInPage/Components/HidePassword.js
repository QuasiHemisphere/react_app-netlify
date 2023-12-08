import React from "react";

const HidePassword = ({ toogle, handleToogle }) => {
  return <i className={toogle} role="button" onClick={handleToogle}></i>;
};

export default HidePassword;

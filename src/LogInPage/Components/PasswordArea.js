import React, { useState } from "react";

const PasswordArea = ({
  hideAuth,
  setNumpad,
  length,
  fields,
  input,
  errMessage,
  passHolder,
}) => {
  return (
    <section style={{ display: hideAuth }} className="auth">
      <h4>Enter Password</h4>
      <div className="field-container">{errMessage}</div>
      <input type="text" value={passHolder} />
      <div className="numpad">
        {setNumpad}
        <i className="undo">
          <i className="fa-regular fa-angles-left"></i>
        </i>
      </div>
    </section>
  );
};

export default PasswordArea;

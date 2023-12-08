import React from "react";
import DateTime from "./Components/DateTime";
import PasswordArea from "./Components/PasswordArea";
import HidePassword from "./Components/HidePassword";

const LogPage = ({
  toogle,
  handleToogle,
  hideAuth,
  color,
  bgColor,
  txtColor,
  setTxtColor,
  setNumpad,
  length,
  fields,
  input,
  errMessage,
  passHolder,
}) => {
  return (
    <main className="log-page-container">
      <DateTime
        color={color}
        bgColor={bgColor}
        txtColor={txtColor}
        setTxtColor={setTxtColor}
      />

      <PasswordArea
        hideAuth={hideAuth}
        setNumpad={setNumpad}
        length={length}
        fields={fields}
        input={input}
        errMessage={errMessage}
        passHolder={passHolder}
      />

      <HidePassword toogle={toogle} handleToogle={handleToogle} />
    </main>
  );
};

export default LogPage;

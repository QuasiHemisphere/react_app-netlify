import React from "react";
import { useState } from "react";

const ChangePassword = ({ password, setPassword }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newPassMess, setNewPassMess] = useState("");

  const numNewPass = Number(newPassword);
  const numNewPass2 = Number(confirmPassword);
  const number = 1;

  function handleChangePassword(e) {
    e.preventDefault();

    if (typeof numNewPass != typeof number || numNewPass !== numNewPass2) {
      setNewPassMess("Did not match or not a number");
      setTimeout(remove, 2000);
      function remove() {
        setNewPassMess("");
      }
    } else {
      setPassword(newPassword);
      setNewPassword("");
      setConfirmPassword("");
    }
  }
  return (
    <form className="change-password" onSubmit={handleChangePassword}>
      <div className="change-password-cont">
        <div>
          <h1>Change Password?</h1>
        </div>
        <label>Enter new password</label>
        <input
          type="password"
          name="new-password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label>
          Confirm password <span>{newPassMess}</span>
        </label>
        <input
          type="password"
          name="conf-password"
          id="conf-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <nav className="change-nav">
          <button>Save changes</button>
        </nav>
      </div>
    </form>
  );
};

export default ChangePassword;

import React from "react";
import "./styles.css";

import { show_password, hide_password } from "../../../assets/index";

const UserPassword = ({ isVisible, setVisible, ...props }) => {
  return (
    <div className="password-data-input">
      <input {...props}></input>
      <button type="button" className="password-btn" onClick={setVisible}>
        <img className="eye" src={isVisible ? show_password : hide_password} />
      </button>
    </div>
  );
};

export default UserPassword;

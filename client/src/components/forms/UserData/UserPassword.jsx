import React from "react";
import "./styles.css";

import { show_password, hide_password } from "../../../assets/index";

const UserPassword = React.forwardRef(
  ({ error, errorMessage, isVisible, setVisible, ...props }, ref) => {
    return (
      <div className="password-data-input">
        <input
          style={{ borderColor: error && "#ff3333" }}
          ref={ref}
          {...props}
        />
        <button type="button" className="password-btn" onClick={setVisible}>
          <img
            className="eye"
            src={isVisible ? show_password : hide_password}
          />
        </button>
        {error && <p>{errorMessage}</p>}
      </div>
    );
  }
);

export default UserPassword;

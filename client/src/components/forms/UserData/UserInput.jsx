import React from "react";
import "./styles.css";

const UserInput = React.forwardRef(
  ({ error, errorMessage, section, ...props }, ref) => {
    return (
      <div className="data-input">
        {section && <h3>{section}</h3>}
        <input
          style={{ borderColor: error && "#ff3333" }}
          ref={ref}
          {...props}
        />
        {error && <p className="message">{errorMessage}</p>}
      </div>
    );
  }
);

export default UserInput;

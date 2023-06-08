import React from "react";

import "./styles.css";

const Input = React.forwardRef(({ error, errorMessage, ...props }, ref) => {
  return (
    <>
      <input
        className="auth-input"
        style={{ boxShadow: error && "4px 4px #ff3333" }}
        ref={ref}
        {...props}
      />
      {error && <p className="message">{errorMessage}</p>}
    </>
  );
});

export default Input;

import React from "react";

import "./styles.css";

const Input = React.forwardRef(
  ({ label, error, errorMessage, ...props }, ref) => {
    return (
      <div className="form__group">
        <input ref={ref} {...props} className="form__field" />
        <label className="form__label">{label}</label>
        {error && <p>{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;

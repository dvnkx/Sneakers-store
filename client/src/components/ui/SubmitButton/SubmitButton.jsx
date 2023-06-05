import React from "react";

import "./styles.css";

const SubmitButton = ({ color, children, ...props }) => {
  return (
    <button className="submit" style={{ backgroundColor: color }} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;

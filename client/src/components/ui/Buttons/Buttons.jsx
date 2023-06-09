import React from "react";

import "./styles.css";

const Buttons = ({ setVisible, ...props }) => {
  return (
    <div className="buttons">
      <button type="button" onClick={setVisible}>
        Cancel
      </button>
      <button {...props} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Buttons;

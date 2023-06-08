import React from "react";

import "./styles.css";

const Buttons = ({ setVisible }) => {
  return (
    <div className="buttons">
      <button type="button" onClick={setVisible}>
        Cancel
      </button>
      <button type="submit">Sumbit</button>
    </div>
  );
};

export default Buttons;

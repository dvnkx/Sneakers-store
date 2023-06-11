import React from "react";
import "./styles.css";

const Spinner = ({ marginLeft }) => {
  return (
    <div style={{ marginLeft: marginLeft && marginLeft }} className="spinner" />
  );
};

export default Spinner;

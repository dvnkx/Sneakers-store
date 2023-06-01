import React from "react";

import "./styles.css";

const Input = ({ ...props }) => {
  const handleSearchChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="form__group">
      <input
        {...props}
        onChange={props.onChange && handleSearchChange}
        className="form__field"
      />
      <label className="form__label">{props.label}</label>
    </div>
  );
};

export default Input;

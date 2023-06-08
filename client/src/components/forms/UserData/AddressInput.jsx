import React from "react";

import { UserInput } from "../index";

const AddressInput = ({ label, children, ...props }) => {
  return (
    <div className="address-data-input">
      <label>{label}</label>
      {children ? children : <UserInput type={props.type} />}
    </div>
  );
};

export default AddressInput;

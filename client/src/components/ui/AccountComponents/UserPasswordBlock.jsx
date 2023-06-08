import React, { useReducer } from "react";
import "./styles.css";

import { togglePasswordReducer } from "../../../helpers/PasswordReducer";
import { Buttons } from "../index";
import { UserPassword } from "../../forms/index";

const UserPasswordBlock = ({ setVisible }) => {
  const [state, dispatch] = useReducer(togglePasswordReducer, {
    old: false,
    new: false,
  });

  return (
    <form className="password-data-form">
      <label>New password</label>
      <UserPassword
        isVisible={state.old}
        setVisible={() => dispatch({ type: "old" })}
        type={state.old ? "text" : "password"}
      />
      <label>Old password</label>
      <UserPassword
        isVisible={state.new}
        setVisible={() => dispatch({ type: "new" })}
        type={state.new ? "text" : "password"}
      />
      <Buttons setVisible={setVisible} />
    </form>
  );
};

export default UserPasswordBlock;

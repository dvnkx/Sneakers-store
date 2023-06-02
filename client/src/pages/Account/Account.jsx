import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";

const Account = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div>
      <button onClick={onClickLogout}>Logout</button>
    </div>
  );
};

export default Account;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { CustomLink } from "../ui/index";

import {
  account,
  account_active,
  sneaker,
  sneaker_active,
  exit,
} from "../../assets/index";

import { getPageName } from "../../helpers/PageName";
import { logout } from "../../redux/slices/auth";

const SideNav = ({ avatar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const href = getPageName();

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="left">
      <div className="links">
        <div className="avatar">
          <img alt="avatar" className="image" src={avatar} />
        </div>
        <CustomLink className="account">
          <img alt="user" src={href !== "Account" ? account : account_active} />
          My Account
        </CustomLink>
        <CustomLink className="orders">
          <img alt="ord" src={href !== "Orders" ? sneaker : sneaker_active} />
          My Orders
        </CustomLink>
        <span />
        <button className="logout" onClick={onClickLogout}>
          <img alt="logout" src={exit} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;

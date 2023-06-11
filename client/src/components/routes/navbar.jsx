import React from "react";
import { useSelector } from "react-redux";

import { selectIsAuth } from "../../redux/slices/auth.js";

import { basket, account, logo } from "../../assets/index.js";
import { CustomLink } from "../ui/index.js";

import "./styles.css";

const Navbar = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  return (
    <nav>
      <CustomLink to="/">
        <img className="logo" alt="logo" src={logo} />
      </CustomLink>
      <CustomLink to="/sneakers/men">
        <p>Men</p>
      </CustomLink>
      <CustomLink to="/sneakers/women">
        <p>Women</p>
      </CustomLink>
      <CustomLink to="/sneakers/kids">
        <p>Kids</p>
      </CustomLink>
      <CustomLink to="/sneakers/favorites">
        <p>Favorites</p>
      </CustomLink>
      <CustomLink className="icons" to={isAuth ? "/user/account" : "/login"}>
        <img className="icon" alt="account-icon" src={account} />
      </CustomLink>
      <CustomLink className="icons2" to={isAuth ? "/user/basket" : "/login"}>
        {userData?.basket.length === null && (
          <div className="basket-counter">
            <p>{userData.basket?.length}</p>
          </div>
        )}
        <img className="icon" alt="basket-icon" src={basket} />
      </CustomLink>
    </nav>
  );
};

export default Navbar;

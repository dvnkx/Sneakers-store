import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { basket, account } from "../../assets/index.js";
import { logo } from "../../assets/index.js";
import "./styles.css";

const Navbar = () => {
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
      <CustomLink className="icons" to="/auth/account">
        <img className="icon" alt="account-icon" src={account} />
      </CustomLink>
      <CustomLink className="icons2" to="/auth/basket">
        <img className="icon" alt="basket-icon" src={basket} />
      </CustomLink>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} className={isActive && "active"} {...props}>
      {children}
    </Link>
  );
};

export default Navbar;

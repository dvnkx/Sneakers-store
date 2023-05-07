import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  Kids,
  Landing,
  Login,
  Men,
  NotFound,
  Registration,
  Women,
  Favorites,
} from "../index.js";
import logo from "../assets/logo.png";
import "../Styles/styles.css";

export const Router = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img className="logo" src={logo} />
        </NavLink>
        <NavLink to="/sneakers/men" className="nav">
          <p>Men</p>
        </NavLink>
        <NavLink to="/sneakers/women" className="nav">
          <p>Women</p>
        </NavLink>
        <NavLink to="/sneakers/kids" className="nav">
          <p>Kids</p>
        </NavLink>
        <NavLink to="/sneakers/favorites" className="nav">
          <p>Favorites</p>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sneakers">
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Landing,
  Login,
  NotFound,
  Registration,
  Category,
  Favorites,
  Sneaker,
} from "../index.js";

import { Navbar, Footer } from "../../components/routes/index.js";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sneakers">
          <Route path="men" element={<Category />} />
          <Route path="women" element={<Category />} />
          <Route path="kids" element={<Category />} />
          <Route path=":id" element={<Sneaker />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="account" />
          <Route path="basket" />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="registartion" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

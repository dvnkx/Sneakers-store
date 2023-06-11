import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Landing,
  NotFound,
  Registration,
  Login,
  Category,
  Favorites,
  Sneaker,
  Account,
  Orders,
  Basket,
} from "./pages/index.js";

import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js";

import { Navbar, Footer } from "./components/routes/index.js";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user">
          {isAuth && <Route path="account" element={<Account />} />}
          <Route path="basket" element={<Basket />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/sneakers">
          <Route path="men" element={<Category />} />
          <Route path="women" element={<Category />} />
          <Route path="kids" element={<Category />} />
          <Route path=":id" element={<Sneaker />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="registartion" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

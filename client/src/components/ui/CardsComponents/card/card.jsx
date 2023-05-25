import React from "react";
import "./styles.css";

import CustomLink from "../../customLink/customLink";

const Card = () => {
  return (
    <CustomLink to={"/sneakers/sneaker"} className="card-container">
      <div className="card-head">
        <h1>Vans</h1>
        <p>$60.00</p>
      </div>
      <div className="card-img">
        <img
          className="main-img"
          src="https://catalog.hkstore.com/pub/media/catalog/product/cache/f6ba1e70ed71d59797ccd3471b310de4/1/0/105vn0a5krfb0b_1.jpg"
        />
        <img
          className="alt-img"
          src="https://static.supersklep.cz/1298344-boty-vans-old-skool-love-me-love-me-not-daisy-true-white.jpg?w=1920"
        />
      </div>
      <div className="card-foot">
        <h1>Vans Old School Love Me</h1>
        <p>White</p>
      </div>
    </CustomLink>
  );
};

export default Card;

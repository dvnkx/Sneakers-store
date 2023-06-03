import React from "react";
import "./styles.css";

import { CustomLink } from "../../index";

const Card = ({ card }) => {
  return (
    <CustomLink to={`/sneakers/${card._id}`} className="card-container">
      <div className="card-head">
        <h1>{card.brand}</h1>
        <p>{card.cost}$</p>
      </div>
      <div className="card-img">
        <img alt="main" className="main-img" src={card.images[0]} />
        <img alt="alt" className="alt-img" src={card.images[1]} />
      </div>
      <div className="card-foot">
        <h1>{card.model}</h1>
        <p>{card.color}</p>
      </div>
    </CustomLink>
  );
};

export default Card;

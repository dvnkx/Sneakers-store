import React from "react";
import "./styles.css";

import { CustomLink } from "../../index";

const Card = ({ card, isDeletable, handleDelete }) => {
  return (
    <div className="card-container">
      <CustomLink to={`/sneakers/${card._id}`}>
        <div className="card-head">
          <h1>{card.brand}</h1>
          <p style={{ marginRight: isDeletable && "28%" }}>{card.cost}$</p>
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
      {isDeletable && (
        <button onClick={() => handleDelete && handleDelete(card?._id)}>
          <p>✕</p>
        </button>
      )}
    </div>
  );
};

export default Card;

import React from "react";
import "./styles.css";

const BasketCard = ({ card, isDeletable, handleDelete }) => {
  return (
    <div className="basket-card-wrapper">
      <img src={card.images[0]} />
      <div className="card">
        <div className="card-info">
          <h2>{card.brand}</h2>
          <h3>{card.model}</h3>
          <h2>{card.cost}$</h2>
        </div>
        {isDeletable && (
          <button onClick={() => handleDelete && handleDelete(card?._id)}>
            <p>✕</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketCard;

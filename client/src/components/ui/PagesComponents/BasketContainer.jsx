import React from "react";

import { BasketCard } from "../CardsComponents/index";
import { CardsSum } from "../../../helpers/CardsSum";
import { sneaker_box } from "../../../assets/index";

const BasketContainer = ({ cards, handleToDelete, handleToBuy }) => {
  return (
    <>
      <div className="cards">
        <h2 className="counter">Basket: ({cards.length})</h2>
        {cards.map((card) => (
          <BasketCard
            key={card._id}
            card={card}
            isDeletable={true}
            handleDelete={handleToDelete}
          />
        ))}
      </div>
      <div className="checkout">
        <div className="checkout-content">
          <div className="checkout-info">
            <h1>Bag</h1>
            <h2>
              Product{cards.length > 1 && "s"} Cost: {CardsSum(cards)}$
            </h2>
            <button onClick={handleToBuy}>Order and Buy</button>
          </div>
          <img src={sneaker_box} />
        </div>
      </div>
    </>
  );
};

export default BasketContainer;

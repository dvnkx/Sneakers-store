import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import axios from "../../axios";
import { selectIsAuth } from "../../redux/slices/auth";

import { EmptyContainer, Spinner } from "../../components/ui/index";
import { BasketCard } from "../../components/ui/CardsComponents/index";
import { CardsSum } from "../../helpers/CardsSum";
import { sneaker_box } from "../../assets/index";

const Basket = () => {
  const [cards, setCards] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  const handleDelete = (cardId) => {
    axios.put(`/basket:${userData?._id}`, { cardId, type: "remove" });
    return setCards((prev) => prev.filter((card) => card._id !== cardId));
  };

  useEffect(() => {
    if (isAuth) {
      axios.get(`/basket:${userData?._id}`).then((res) => {
        setCards(res.data.cards);
        setIsLoading(false);
      });
    }
  }, [isAuth]);

  const handleToBuy = () => {
    axios.delete(`/basket:${userData?._id}`).then((res) => {
      alert(`Your order ${res.data.orderId} now in proccess`);
      setCards([]);
    });
  };

  return (
    <div className="basket-container">
      {isLoading ? (
        <Spinner marginLeft={"45%"} />
      ) : cards.length === 0 ? (
        <EmptyContainer />
      ) : (
        <>
          <div className="cards">
            <h2 className="counter">Basket: ({cards.length})</h2>
            {cards.map((card) => (
              <BasketCard
                key={card._id}
                card={card}
                isDeletable={true}
                handleDelete={handleDelete}
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
      )}
    </div>
  );
};

export default Basket;

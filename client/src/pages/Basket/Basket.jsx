import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import axios from "../../axios";
import { selectIsAuth } from "../../redux/slices/auth";

import {
  EmptyContainer,
  Spinner,
  BasketContainer,
} from "../../components/ui/index";

const Basket = () => {
  const [cards, setCards] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  const handleToDelete = (cardId) => {
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
        <BasketContainer
          cards={cards}
          handleToDelete={handleToDelete}
          handleToBuy={handleToBuy}
        />
      )}
    </div>
  );
};

export default Basket;

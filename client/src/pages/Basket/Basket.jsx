import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import axios from "../../axios";
import { selectIsAuth } from "../../redux/slices/auth";

import {
  CardSkeleton,
  NotAuth,
  EmptyContainer,
} from "../../components/ui/index";
import { Card } from "../../components/ui/CardsComponents/index";

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

  return (
    <div className="basket-container">
      {isLoading ? (
        <CardSkeleton cards={4} />
      ) : !isAuth ? (
        <NotAuth />
      ) : cards.length === 0 ? (
        <EmptyContainer />
      ) : (
        cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            isDeletable={true}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Basket;

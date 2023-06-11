import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import axios from "../../axios";
import { selectIsAuth } from "../../redux/slices/auth";

import { CardSkeleton, EmptyContainer } from "../../components/ui/index";
import { Card } from "../../components/ui/CardsComponents/index";

const Favorites = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!isAuth) {
    setTimeout(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (isAuth) {
      axios.get(`/favorites:${userData?._id}`).then((res) => {
        setCards(res.data.cards);
        setIsLoading(false);
      });
    }
  }, [isAuth]);

  return (
    <div className="favorites-contaner">
      {isLoading ? (
        <CardSkeleton cards={4} />
      ) : cards.length === 0 ? (
        <EmptyContainer />
      ) : (
        cards.map((card) => <Card key={card._id} card={card} />)
      )}
    </div>
  );
};

export default Favorites;

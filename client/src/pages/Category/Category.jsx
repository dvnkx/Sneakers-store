import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

import { fetchCards } from "../../redux/slices/cards";
import { getPageName } from "../../helpers/PageName";

import { Card, CardSkeleton } from "../../components/ui/index";

export const Cards = () => {
  const currentPage = getPageName();

  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  const isCardsLoading = cards.status === "loading";

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="humans-container">
      <div className="head">
        <p>{currentPage}`s sneakers</p>
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Search" />
          <label className="form__label">SEARCH</label>
        </div>
      </div>
      <div className="cards">
        {isCardsLoading ? (
          <CardSkeleton cards={4} />
        ) : (
          cards.items.map((sneaker) => {
            return sneaker.sex === currentPage ? (
              <Card
                key={sneaker._id}
                id={sneaker._id}
                brand={sneaker.brand}
                model={sneaker.model}
                cost={sneaker.cost}
                images={sneaker.images}
                color={sneaker.color}
              />
            ) : currentPage !== "Kids" &&
              sneaker.sex === "Unisex" &&
              !sneaker.forKids ? (
              <Card
                key={sneaker._id}
                id={sneaker._id}
                brand={sneaker.brand}
                model={sneaker.model}
                cost={sneaker.cost}
                images={sneaker.images}
                color={sneaker.color}
              />
            ) : (
              currentPage === "Kids" &&
              sneaker.forKids && (
                <Card
                  key={sneaker._id}
                  id={sneaker._id}
                  brand={sneaker.brand}
                  model={sneaker.model}
                  cost={sneaker.cost}
                  images={sneaker.images}
                  color={sneaker.color}
                />
              )
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cards;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

import { fetchCards } from "../../redux/slices/cards";
import { getPageName } from "../../helpers/PageName";

import { Card, CardSkeleton, FilterInput } from "../../components/ui/index";

export const Cards = () => {
  const [searchResult, setSearchResult] = useState("");
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
        <FilterInput
          placeholder={"SEARCH"}
          label={"SEARCH"}
          type={"text"}
          searchResult={searchResult}
          setSearchResults={setSearchResult}
        />
      </div>
      <div className="cards">
        {isCardsLoading ? (
          <CardSkeleton cards={4} />
        ) : (
          cards.items
            .filter((card) => {
              const searchTerm = searchResult.toLowerCase();
              const model = card.model.toLowerCase();
              const brand = card.brand.toLowerCase();

              return brand.includes(searchTerm) || model.includes(searchTerm);
            })
            .map((card) => {
              return card.sex === currentPage ? (
                <Card card={card} />
              ) : currentPage !== "Kids" &&
                card.sex === "Unisex" &&
                !card.forKids ? (
                <Card card={card} />
              ) : (
                currentPage === "Kids" && card.forKids && <Card card={card} />
              );
            })
        )}
      </div>
    </div>
  );
};

export default Cards;

import React, { useCallback } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/slices/favorites";

import { heart, filledHeart } from "../../../assets/index";

const CardInfo = ({ brand, model, cost, description, materials }) => {
  const { id } = useParams();

  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const toggleHeart = useCallback(() => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  }, [favorites, dispatch, id]);

  return (
    <div className="right">
      <div className="name">
        <h1>{model}</h1>
        <h2>{brand}</h2>
      </div>
      <div className="price-line">
        <h1>{cost}</h1>
        <h2>$</h2>
        <button className="heart" onClick={toggleHeart}>
          <img alt="heart" src={favorites.includes(id) ? filledHeart : heart} />
        </button>
        <button className="buy">
          <p>Buy</p>
        </button>
      </div>
      <div className="description">
        <p className="text">{description}</p>
        <b>Materials</b>
        <p className="materials">{materials}</p>
      </div>
    </div>
  );
};

export default CardInfo;

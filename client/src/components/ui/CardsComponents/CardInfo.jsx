import React, { useCallback, useState } from "react";

import { heart, filledHeart } from "../../../assets/index";

const CardInfo = ({ brand, model, cost, description, materials }) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleHeart = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

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
          <img alt="heart" src={isFocused ? filledHeart : heart} />
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

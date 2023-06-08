import React from "react";

import { heart } from "../../../assets/index";

const CardInfo = ({ brand, model, cost, description, materials }) => {
  return (
    <div className="right">
      <div className="name">
        <h1>{model}</h1>
        <h2>{brand}</h2>
      </div>
      <div className="price-line">
        <h1>{cost}</h1>
        <h2>$</h2>
        <button className="heart">
          <img alt="heart" src={heart} />
        </button>
        <button className="buy">Buy</button>
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

import React from "react";

import { heart } from "../../../assets/index";

const CardInfo = ({
  brand,
  model,
  cost,
  materials,
  technology,
  generalHeight,
  soleHeight,
  fastener,
  color,
  sex,
}) => {
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
        <h2>Materials :</h2>
        <ul>
          <li>{materials}</li>
        </ul>
        <h2>Sex :</h2>
        <ul>
          <li>{sex}</li>
        </ul>
        <h2>Color :</h2>
        <ul>
          <li>{color}</li>
        </ul>
        <h2>Fastener :</h2>
        <ul>
          <li>{fastener}</li>
        </ul>
        <h2>Technology :</h2>
        <ul>
          <li>{technology}</li>
        </ul>
        <h2>Height :</h2>
        <ul>
          <li>General heigth: {generalHeight}</li>
          <li>Sole heigth: {soleHeight}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardInfo;

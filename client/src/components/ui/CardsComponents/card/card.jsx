import React from "react";
import "./styles.css";

import CustomLink from "../../CustomLink";

const Card = ({ brand, model, cost, images, color, id }) => {
  return (
    <CustomLink to={`/sneakers/${id}`} className="card-container">
      <div className="card-head">
        <h1>{brand}</h1>
        <p>{cost}$</p>
      </div>
      <div className="card-img">
        <img alt="main" className="main-img" src={images[0]} />
        <img alt="alt" className="alt-img" src={images[1]} />
      </div>
      <div className="card-foot">
        <h1>{model}</h1>
        <p>{color}</p>
      </div>
    </CustomLink>
  );
};

export default Card;

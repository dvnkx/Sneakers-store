import React from "react";
import "./styles.css";

import { CustomLink } from "../index";

import { empty_fav } from "../../../assets/index";

const EmptyContainer = () => {
  return (
    <div className="empty-container">
      <h1>Something is missing here</h1>
      <CustomLink to={"/sneakers/men"}>View our products</CustomLink>
      <img src={empty_fav} />
    </div>
  );
};

export default EmptyContainer;

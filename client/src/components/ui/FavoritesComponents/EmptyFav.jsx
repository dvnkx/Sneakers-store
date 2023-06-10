import React from "react";

import { CustomLink } from "../index";

import { empty_fav } from "../../../assets/index";

const EmptyFav = () => {
  return (
    <div className="empty-fav">
      <h1>Something is missing here</h1>
      <CustomLink to={"/sneakers/men"}>View products</CustomLink>
      <img src={empty_fav} />
    </div>
  );
};

export default EmptyFav;

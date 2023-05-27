import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="top">
          <Skeleton />
        </div>
        <div className="middle">
          <Skeleton />
        </div>
        <div className="bottom">
          <Skeleton count={2} />
        </div>
      </div>
    ));
};

export default CardSkeleton;

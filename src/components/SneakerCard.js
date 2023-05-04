import React from "react";

export const SneakersCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.cost}</h3>
      <h3>{props.color}</h3>
    </div>
  );
};

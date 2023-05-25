import React from "react";
import "./styles.css";

import { Carousel, CardInfo } from "../../components/ui/CardsComponents/index";
import BackLine from "../../components/ui/backLine/backLine.jsx";

const CardPage = () => {
  return (
    <div className="card-page">
      <BackLine />
      <div className="sneaker-content">
        <Carousel />
        <CardInfo />
      </div>
    </div>
  );
};

export default CardPage;

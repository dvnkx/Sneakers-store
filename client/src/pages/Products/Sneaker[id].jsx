import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

import axios from "../../axios.js";

import {
  ImagesModel,
  CardInfo,
  BackLine,
  Spinner,
} from "../../components/ui/index";

const CardPage = () => {
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/cards/${id}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-page">
      <BackLine />
      <div className="sneaker-content">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ImagesModel images={card.images} />
            <CardInfo
              brand={card.brand}
              model={card.model}
              cost={card.cost}
              description={card.description}
              materials={card.materials}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardPage;

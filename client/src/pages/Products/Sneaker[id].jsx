import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles.css";

import { fetchCardData } from "../../redux/slices/cardData";

import {
  ImagesModel,
  CardInfo,
  BackLine,
  Spinner,
} from "../../components/ui/index";

const CardPage = () => {
  const { id } = useParams();
  const { card } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const isCardLoading = card.status === "loading";

  const { images, brand, model, cost, materials, description } = card.data;

  useEffect(() => {
    dispatch(fetchCardData(id));
  }, [dispatch, id]);

  return (
    <div className="card-page">
      <BackLine />
      <div className="sneaker-content">
        {isCardLoading ? (
          <Spinner />
        ) : (
          <>
            <ImagesModel images={images} />
            <CardInfo
              brand={brand}
              model={model}
              cost={cost}
              description={description}
              materials={materials}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardPage;

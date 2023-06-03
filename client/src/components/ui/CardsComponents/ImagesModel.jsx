import React, { useState } from "react";

import { toparrow, bottomarrow } from "../../../assets/index";

const ImagesModel = ({ images }) => {
  const [current, setCurrent] = useState(images[0]);

  const goToPrevImg = () => {
    const listLength = images.length - 1;

    if (current === images[0]) {
      setCurrent(images[listLength]);
    } else {
      const currentImg = images.indexOf(current);
      setCurrent(images[currentImg - 1]);
    }
  };

  const goToNextImg = () => {
    const listLength = images.length - 1;

    if (current === images[listLength]) {
      setCurrent(images[0]);
    } else {
      const currentImg = images.indexOf(current);
      setCurrent(images[currentImg + 1]);
    }
  };

  const pickImg = (v) => {
    setCurrent(v);
  };

  return (
    <div className="mat-images">
      <div className="swiper-container">
        <button onClick={goToPrevImg} className="prev">
          <img alt="top" src={toparrow} />
        </button>
        <div className="swiper-wrapper">
          {images.map((v, index) => {
            return (
              <button key={index} onClick={() => pickImg(v)}>
                <img
                  alt=""
                  src={v}
                  style={{
                    border: v === current && "1px solid #44444c",
                  }}
                />
              </button>
            );
          })}
        </div>
        <button onClick={goToNextImg} className="next">
          <img alt="bottom" src={bottomarrow} />
        </button>
      </div>
      <div className="clone-image">
        <img alt="clone" src={current} />
      </div>
    </div>
  );
};

export default ImagesModel;

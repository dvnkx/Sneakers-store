import React, { useCallback, useState } from "react";

import { toparrow, bottomarrow } from "../../../../assets/index";

const Carousel = () => {
  const vans = [
    "https://img.modivo.cloud/product(e/e/6/2/ee62c989af99233dafe014b3b2cecfb6c1340655_01__0000301036579_mg.jpg,webp)/vans-krosivki-old-skool-plat-vn0a5krgbml1-chornii.webp",
    "https://img.modivo.cloud/product(0/6/c/f/06cf32c3c8df1febee7b934ff86ccb1f68305615_02__0000301036579_mg.jpg,webp)/vans-krosivki-old-skool-plat-vn0a5krgbml1-chornii.webp",
    "https://img.modivo.cloud/product(7/6/9/6/7696e9118cf17dba6d837561e375e7baaf048c93_03__0000301036579_mg.jpg,webp)/vans-krosivki-old-skool-plat-vn0a5krgbml1-chornii.webp",
    "https://img.modivo.cloud/product(1/8/f/f/18ffd87ff8bcb3063521fc716ebfbd25ffb724e4_04__0000301036579_mg.jpg,webp)/vans-krosivki-old-skool-plat-vn0a5krgbml1-chornii.webp",
  ];

  const [current, setCurrent] = useState(vans[0]);

  const goToPrevImg = () => {
    const listLength = vans.length - 1;

    if (current === vans[0]) {
      setCurrent(vans[listLength]);
    } else {
      const currentImg = vans.indexOf(current);
      setCurrent(vans[currentImg - 1]);
    }
  };

  const goToNextImg = () => {
    const listLength = vans.length - 1;

    if (current === vans[listLength]) {
      setCurrent(vans[0]);
    } else {
      const currentImg = vans.indexOf(current);
      setCurrent(vans[currentImg + 1]);
    }
  };

  const pickImg = useCallback(
    (v) => {
      setCurrent(v);
    },
    [current]
  );

  return (
    <div className="mat-images">
      <div className="swiper-container">
        <button onClick={goToPrevImg} className="prev">
          <img src={toparrow} />
        </button>
        <div className="swiper-wrapper">
          {vans.map((v) => {
            return (
              <button onClick={() => pickImg(v)}>
                <img
                  src={v}
                  style={{
                    border: v === current && "1px solid red",
                  }}
                />
              </button>
            );
          })}
        </div>
        <button onClick={goToNextImg} className="next">
          <img src={bottomarrow} />
        </button>
      </div>
      <div className="clone-image">
        <img src={current} />
      </div>
    </div>
  );
};

export default Carousel;

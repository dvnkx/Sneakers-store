import React from "react";

const CardInfo = () => {
  return (
    <div className="right">
      <div className="name">
        <h1>Old School Love Me</h1>
        <h2>Vans</h2>
      </div>
      <div className="price-line">
        <h1>90</h1>
        <h2>$</h2>
        <button>
          <p>+ to Basket</p>
        </button>
      </div>
      <div className="description">
        <p className="text">
          Vestibulum aliquet viverra leo commodo sagittis. Ut enim magna,
          tristique non accumsan et, semper nec orci. In id dui sapien. Duis
          eget odio felis. Fusce vehicula lectus nec enim vehicula lobortis.
          Pellentesque viverra erat ligula, at tincidunt urna condimentum id.{" "}
          <br /> Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In hac habitasse platea dictumst.
          Nulla ultrices nibh eget mauris laoreet, quis luctus elit faucibus.
        </p>
        <b>Materials</b>
        <p className="materials">Genuine leather - Suede, Material - Fabric</p>
      </div>
    </div>
  );
};

export default CardInfo;

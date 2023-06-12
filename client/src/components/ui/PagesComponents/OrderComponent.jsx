import React from "react";

const OrderComponent = (order) => {
  return (
    <div className="orders-wrapper">
      <h1>Order Number: {order.order._id}</h1>
      <div className="images">
        {order.order.productsImages.map((img, i) => {
          return <img key={i} src={img} />;
        })}
      </div>
      <div className="names">
        {order.order.productsNames.map((model, i) => {
          return <p key={i}>{model}</p>;
        })}
      </div>
      <h2>{order.order.cost}$</h2>
    </div>
  );
};

export default OrderComponent;

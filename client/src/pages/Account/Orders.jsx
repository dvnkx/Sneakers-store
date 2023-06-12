import React from "react";
import { SideNav } from "../../components/routes";
import { useSelector } from "react-redux";
import "./styles.css";

import { Spinner, OrderComponent } from "../../components/ui";

const Orders = () => {
  const { data, status } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  return (
    <div className="orders-container">
      {isLoading ? (
        <Spinner marginLeft={"40%"} />
      ) : data.orders.length !== 0 ? (
        <>
          <SideNav avatar={data.avatarUrl} />
          <div className="orders-block">
            <h1>Orders: {data.orders.length}</h1>
            <div className="orders">
              {data.orders &&
                data.orders.map((order) => (
                  <OrderComponent key={order._id} order={order} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <SideNav avatar={data.avatarUrl} />
          <div className="no-orders">
            <p>There are no orders</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

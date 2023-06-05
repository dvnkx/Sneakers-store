import React from "react";
import { SideNav } from "../../components/routes";
import { useSelector } from "react-redux";
import "./styles.css";

const Orders = ({ orders }) => {
  const { avatarUrl } = useSelector((state) => state.auth.data);

  return (
    <div className="orders-container">
      <SideNav avatar={avatarUrl} />
      <div className="orders-block">
        <h1>Orders</h1>
        <div className="orders">
          <ul>
            {orders ? (
              orders.map((o) => {
                <li>{o._id}</li>;
              })
            ) : (
              <li>There are no orders</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;

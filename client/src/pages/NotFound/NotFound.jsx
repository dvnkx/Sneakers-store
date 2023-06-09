import React from "react";
import "./styles.css";
import { Spinner } from "../../components/ui";

const NotFound = () => {
  return (
    <div className="not-found">
      <Spinner />
    </div>
  );
};

export default NotFound;

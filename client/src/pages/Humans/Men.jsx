import React from "react";

import "./Styles/styles.css";
import Card from "../../components/ui/CardsComponents/card/card.jsx";

export const Men = () => {
  return (
    <div className="humans-container">
      <div className="head">
        <p>Men`s sneakers</p>
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Search" />
          <label className="form__label">SEARCH</label>
        </div>
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Men;

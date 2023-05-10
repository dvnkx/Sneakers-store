import React from "react";

import "./styles.css";

const ImgIntro = ({ src, logo }) => {
  return (
    <div className="tc-container">
      <img className="main-img" src={src} />
      <img className="top-img" src={logo} />
    </div>
  );
};

export default ImgIntro;

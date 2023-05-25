import React from "react";

import "./styles.css";

const ImgIntro = ({ alt, logoAlt, src, logo }) => {
  return (
    <div className="tc-container">
      <img alt={alt} className="main-img" src={src} />
      <img alt={logoAlt} className="top-img" src={logo} />
    </div>
  );
};

export default ImgIntro;

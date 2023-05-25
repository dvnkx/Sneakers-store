import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BackLine = () => {
  const history = useNavigate();

  const goBack = useCallback(() => {
    history(-1);
  }, [history]);

  return (
    <div className="line-back">
      <button onClick={goBack}>
        <p>&larr;</p>
        <p>Back</p>
      </button>
    </div>
  );
};

export default BackLine;

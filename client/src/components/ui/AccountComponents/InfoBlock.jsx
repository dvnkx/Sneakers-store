import React from "react";

import { pencil } from "../../../assets/index";

const InfoBlock = ({ data, children, section, styles }) => {
  return (
    <div style={styles && { marginTop: styles.margin }} className="info-block">
      <h1>{section}</h1>
      <div
        style={styles && { height: styles.height, width: styles.width }}
        className="data"
      >
        {styles && !styles.width && (
          <button className="info">
            <img alt="pencil" src={pencil} />
          </button>
        )}
        {data && (
          <ul>
            {data.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        )}
      </div>
      {children}
    </div>
  );
};

export default InfoBlock;

import React from "react";
import style from "./AxisY.module.scss";

export const AxisY = ({ divisions }) => {
  const isDivision = divisions.length > 0;

  return (
    isDivision && (
      <div className={style.container}>
        {divisions.map((item, idx) => (
          <div key={idx} className={style.division}>
            {item.toLocaleString()}
          </div>
        ))}
      </div>
    )
  );
};

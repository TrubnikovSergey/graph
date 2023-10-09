import React, { useState } from "react";
import down from "../../../../public/assets/images/down.svg";
import periodStore from "@/store/period";
import { observer } from "mobx-react-lite";
import style from "./arrow.module.scss";

const Arrow = observer(() => {
  const isDown = periodStore.showDropDownPeriod;
  const handleClick = () => {
    periodStore.setShowDropDownPeriod(!periodStore.showDropDownPeriod);
  };

  return (
    <>
      <input className={style["checkbox-arrow"]} type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className={`${style.arrow} ${isDown ? style.rotate : ""}`} onClick={handleClick}>
        <img src={down.src} />
      </label>
    </>
  );
});

export default Arrow;

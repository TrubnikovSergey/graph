import React, { useEffect, useState } from "react";
import Arrow from "./arrow/arrow";
import { observer } from "mobx-react-lite";
import periodStore from "@/store/period";
import style from "./dropDownList.module.scss";

export const DropDownList = observer(() => {
  const isShowList = periodStore.showDropDownPeriod;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.dropdown}>
          <div className={style["dropdown-header"]}>
            <span>Список</span>
            <Arrow />
          </div>
          <div className={`${style["dropdown-content"]} ${isShowList ? style["show-dropdown"] : style["hide-dropdown"]}`}>
            {periodStore.periodList.map((item) => (
              <div key={item.id}>
                <span className={style["drop-item"]}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

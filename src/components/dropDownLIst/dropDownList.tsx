import React, { useEffect, useState } from "react";
import Arrow from "./arrow/arrow";
import { observer } from "mobx-react-lite";
import periodStore from "@/store/period";
import mockData from "../../mockData/data.json";
import style from "./dropDownList.module.scss";
import { divisionsFormated } from "@/utils";

export const DropDownList = observer(() => {
  const isShowList = periodStore.showDropDownPeriod;
  const period = periodStore.periodSelected;

  const handleClick = (item) => {
    const { graph } = mockData.finance.periods[0];

    periodStore.setPeriodDivisions(graph[item.id]);
    periodStore.setPeriodDivisionsFormated(divisionsFormated(graph[item.id], item));

    periodStore.setPeriodSelected(item);
    periodStore.setShowDropDownPeriod(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.dropdown}>
          <div className={style["dropdown-header"]}>
            <span>{period.title}</span>
            <Arrow />
          </div>
          {isShowList && (
            <div className={`${style["dropdown-content"]} ${isShowList ? style["show-dropdown"] : style["hide-dropdown"]}`}>
              {periodStore.periodList
                .filter((item) => item.id !== period.id)
                .map((item) => (
                  <span key={item.id} className={style["drop-item"]} onClick={() => handleClick(item)}>
                    {item.title}
                  </span>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

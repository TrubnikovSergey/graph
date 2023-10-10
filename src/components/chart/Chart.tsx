import periodStore from "@/store/period";
import style from "./Chart.module.scss";
import { calcHeight } from "@/utils";
import { useEffect, useState } from "react";

export const Chart = () => {
  const [addHeight, setAddHeight] = useState(false);
  const divisions = Object.entries(periodStore.periodDivisions);

  useEffect(() => {
    setAddHeight(false);
    setTimeout(() => {
      setAddHeight(true);
    }, 300);
  }, [periodStore.periodDivisions]);

  return (
    <div className={style.container}>
      {divisions.map((item) => {
        return (
          <div key={item[0]} className={`${style.item} ${addHeight ? style["add-height"] : ""}`} style={{ "--height": `${calcHeight(item[1])}px` }}>
            <span className={style.count}>{item[1]}</span>
          </div>
        );
      })}
    </div>
  );
};

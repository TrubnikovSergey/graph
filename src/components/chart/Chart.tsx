import periodStore from "@/store/period";
import style from "./Chart.module.scss";
import { calcHeight } from "@/utils";

export const Chart = () => {
  const divisions = Object.entries(periodStore.periodDivisions);

  return (
    <div className={style.container}>
      {divisions.map((item) => {
        // const classHeight = { height: calcHeight(item[1]), transition: "height 300ms cubic-bezier(0, 1.26, 0.7, 0.96)" };

        return (
          <div key={item[0]} className={style.item} style={{ height: calcHeight(item[1]) }}>
            <span className={style.count}>{item[1]}</span>
          </div>
        );
      })}
    </div>
  );
};
// style={`--new-height: ${calcHeight(item[1])}`}

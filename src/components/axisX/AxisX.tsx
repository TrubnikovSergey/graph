import periodStore from "@/store/period";
import { translateMonth, shortMonthName } from "@/utils";
import style from "./AxisX.module.scss";

export const AxisX = () => {
  let divisions = Object.keys(periodStore.periodDivisions);
  const period = periodStore.periodSelected;

  if (period.id === "year" || period.id === "half_year") {
    divisions = divisions.map((item) => shortMonthName(translateMonth(item)));
  }
  if (period.id === "month") {
    divisions = divisions.filter((item) => Number(item) % 5 === 0).map((item) => (Number(item) < 10 ? `0${item}` : item));
    divisions = ["01", ...divisions];
  }

  return (
    <div className={style.container}>
      {divisions.map((item, idx) => (
        <span key={idx} className={style.item}>
          {item}
        </span>
      ))}
    </div>
  );
};

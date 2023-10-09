import periodStore from "@/store/period";
import style from "./AxisX.module.scss";

export const AxisX = () => {
  let divisions = periodStore.periodDivisionsFormated;

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

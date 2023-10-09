import { AxisX } from "../axisX";
import { AxisY } from "../axisY";
import { Chart } from "../chart";
import data from "../../mockData/data.json";
import { useState } from "react";
import EmptyChart from "../emptyChart/emptyChart";
import style from "./barChart.module.scss";

export const BarChart = () => {
  const axisY = [10000, 5000, 2000, 1000, 500, 0];

  return (
    <div className={style.container}>
      <div className={style.axisy}>
        <AxisY divisions={axisY} />
      </div>
      <div className={style.chart} id="chart">
        <Chart />
      </div>
      <div className={style.zero} />
      <div className={style.axisx}>
        <AxisX />
      </div>
    </div>
  );
};

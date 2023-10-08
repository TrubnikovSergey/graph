import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import mockData from "../mockData/data.json";
import periodStore from "@/store/period";
import { BarChart } from "../components/barChart";
import { DropDownList } from "@/components/dropDownLIst/dropDownList";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

const translate = (data) => {
  switch (data) {
    case "year":
      return "За послдений год";
    case "half_year":
      return "За последние 6 месяцев";
    case "month":
      return "За послдений месяц";

    default:
      return data;
  }
};

const initPeriodStore = (mock) => {
  const periodObject = mock.finance.periods[0].graph;
  const keys = Object.keys(periodObject).map((item) => ({ id: item, title: translate(item) }));

  periodStore.setPeriodList(keys);
  periodStore.setPeriodDivisions(periodObject);
};

export default function Home() {
  const isLoading = !(periodStore.periodDivisions.length > 0 && periodStore.periodList.length > 0);

  useEffect(() => {
    initPeriodStore(mockData);
  }, []);

  return (
    isLoading && (
      <>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <DropDownList />
            <BarChart />
          </div>
        </div>
      </>
    )
  );
}

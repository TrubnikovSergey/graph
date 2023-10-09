import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import mockData from "../mockData/data.json";
import periodStore from "@/store/period";
import { BarChart } from "../components/barChart";
import { DropDownList } from "@/components/dropDownLIst/dropDownList";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { divisionsFormated, shortMonthName, translateMonth, translatePeriod } from "@/utils";
import styles from "@/styles/Home.module.css";

const initPeriodStore = (mock) => {
  const { graph } = mock.finance.periods[0];
  const periods = Object.keys(graph).map((item) => ({ id: item, title: translatePeriod(item) }));

  periodStore.setPeriodSelected(periods[0]);
  periodStore.setPeriodList(periods);
  periodStore.setPeriodDivisions(graph[periods[0].id]);
  periodStore.setPeriodDivisionsFormated(divisionsFormated(graph[periods[0].id], periods[0]));
};

export default observer(function Home() {
  const isLoading = !(periodStore.periodDivisions && periodStore.periodDivisionsFormated && periodStore.periodList.length > 0);

  useEffect(() => {
    initPeriodStore(mockData);
  }, []);

  return (
    !isLoading && (
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
});

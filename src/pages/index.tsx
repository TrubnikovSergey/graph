import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import mockData from "../mockData/data.json";
import periodStore from "@/store/period";
import { BarChart } from "../components/barChart";
import { DropDownList } from "@/components/dropDownLIst/dropDownList";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { translatePeriod } from "@/utils";
import styles from "@/styles/Home.module.css";

const initPeriodStore = (mock) => {
  const periodObject = mock.finance.periods[0].graph;
  const keys = Object.keys(periodObject).map((item) => ({ id: item, title: translatePeriod(item) }));

  periodStore.setPeriodList(keys);
  periodStore.setPeriodSelected(keys[0]);
  periodStore.setPeriodDivisions(periodObject[keys[0].id]);
};

export default observer(function Home() {
  const isLoading = !(periodStore.periodDivisions && periodStore.periodList.length > 0);

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

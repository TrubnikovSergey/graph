import { makeAutoObservable } from "mobx";

class Period {
  periodList = [];
  periodDivisions = null;
  periodDivisionsFormated = null;
  periodSelected = "";
  showDropDownPeriod = false;
  constructor() {
    makeAutoObservable(this);
  }

  setPeriodList(list) {
    this.periodList = list;
  }

  setPeriodDivisions(data) {
    this.periodDivisions = data;
  }

  setPeriodDivisionsFormated(data) {
    this.periodDivisionsFormated = data;
  }

  setPeriodSelected(data) {
    this.periodSelected = data;
  }

  setShowDropDownPeriod(flag) {
    this.showDropDownPeriod = flag;
  }
}

const periodStore = new Period();
export default periodStore;

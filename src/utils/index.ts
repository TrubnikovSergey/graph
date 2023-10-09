export const translatePeriod = (data) => {
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

export const divisionsFormated = (divisions, current) => {
  let divisionsFormat = null;

  if (current.id === "year" || current.id === "half_year") {
    divisionsFormat = Object.keys(divisions).map((item) => shortMonthName(translateMonth(item)));
  }
  if (current.id === "month") {
    divisionsFormat = Object.keys(divisions)
      .filter((item) => Number(item) % 5 === 0)
      .map((item) => (Number(item) < 10 ? `0${item}` : item));
    divisionsFormat = ["01", ...divisionsFormat];
  }

  return divisionsFormat;
};

export const translateMonth = (month) => {
  switch (month) {
    case "January":
      return "Январь";
    case "February":
      return "Февраль";
    case "March":
      return "Март";
    case "April":
      return "Апрель";
    case "May":
      return "Май";
    case "June":
      return "Июнь";
    case "July":
      return "Июль";
    case "August":
      return "Август";
    case "September":
      return "Сентябрь";
    case "October":
      return "Октябрь";
    case "November":
      return "Ноябрь";
    case "December":
      return "Декабрь";

    default:
      return month;
  }
};

export const shortMonthName = (name) => {
  switch (name) {
    case "Январь":
      return "Янв";
    case "Февраль":
      return "Фев";
    case "Март":
      return "Март";
    case "Апрель":
      return "Апр";
    case "Maй":
      return "Май";
    case "Июнь":
      return "Июнь";
    case "Июль":
      return "Июль";
    case "Август":
      return "Авг";
    case "Сентябрь":
      return "Сен";
    case "Октябрь":
      return "Окт";
    case "Ноябрь":
      return "Нояб";
    case "Декабрь":
      return "Дек";

    default:
      return name;
  }
};

export const calcHeight = (profit) => {
  const asixY = [500, 1000, 2000, 5000, 10000];
  let summ = 0;
  const stepPX = 265 / 5;
  let height = 15;

  for (let i = 0; i < asixY.length; i++) {
    if (asixY[i] >= profit) {
      if (i > 0) {
        const difference = asixY[i] - asixY[i - 1];
        const balanceProfit = profit - asixY[i - 1];

        height += (balanceProfit * stepPX) / difference;
      }
      break;
    }

    height += stepPX;
  }

  return height;
};

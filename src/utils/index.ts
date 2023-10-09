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

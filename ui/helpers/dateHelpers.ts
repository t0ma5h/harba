export const dateToString = (
  date: Date,
  separator: string | undefined = "/"
) => {
  var mm = date?.getMonth() + 1; // getMonth() is zero-based
  var dd = date?.getDate();

  return [
    date?.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ]?.join(separator);
};

export const nowDateToWeatherDate = () => {
  const today = new Date();
  const dateString = dateToString(today, "-");
  const hours = today.getHours();
  const hoursString = hours > 9 ? hours : "0" + hours;
  return dateString + "T" + hoursString + ":00";
};

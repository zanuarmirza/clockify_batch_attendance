// TODO need to move in yaml config file
const listHoliday: string[] = [
  "2022-04-15",
  "2022-04-19",
  "2022-05-01",
  "2022-05-02",
  "2022-05-03",
  "2022-05-04",
  "2022-05-05",
  "2022-05-06",
  "2022-05-16",
  "2022-05-26",
  "2022-06-01",
];
export const isHoliday = (date: Date) => {
  const dateInString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  if (listHoliday.includes(dateInString)) {
    return true;
  }
  return false;
};

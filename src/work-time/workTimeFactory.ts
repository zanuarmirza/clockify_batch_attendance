import config from "../config/index.js";
import { isHoliday } from "./isHoliday.js";
import { isWorkDay } from "./isWorkDay.js";

export interface WorkTime {
  start: string; // ISO 8601
  end: string;
  description: string;
}

export interface OptionWorkTime {
  start: Date;
  end: Date;
}

export type workTimeFactoryFunc = (options: OptionWorkTime) => WorkTime[];

const workTimeFactory: workTimeFactoryFunc = ({ start, end }) => {
  // TODO get start date to end date
  let indexDate = new Date(start);
  let listTimeWork: WorkTime[] = [];
  while (indexDate <= end) {
    if (!isHoliday(indexDate) && isWorkDay(indexDate)) {
      listTimeWork.push({
        start: new Date(indexDate.setHours(20, 0, 0)).toISOString(),
        end: new Date(indexDate.setHours(21, 0, 0)).toISOString(),
        description: config.defaultDescription,
      });
    }
    indexDate = new Date(indexDate.setDate(indexDate.getDate() + 1));
  }
  return listTimeWork;
};

export { workTimeFactory };

import { getHoursFromDateTimeString } from "./getHoursFromDateTimeString";

export const isDailyIntervalPoint = (time: string): boolean => {
  let hours: number = getHoursFromDateTimeString(time);
  return hours === 0 || hours % 6 === 0 ? true : false;
};

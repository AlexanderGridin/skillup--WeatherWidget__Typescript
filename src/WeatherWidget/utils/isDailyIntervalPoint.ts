import { getHoursFromDateTimeString } from "./getHoursFromDateTimeString";

export const isDailyIntervalPoint = (time: string): boolean => {
  let hours: number | null = getHoursFromDateTimeString(time);

  if (hours) {
    return hours === 0 || hours % 6 === 0 ? true : false;
  }

  return false;
};

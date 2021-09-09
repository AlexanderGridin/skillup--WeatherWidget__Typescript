import { getHoursFromDateTimeString } from "./getHoursFromDateTimeString";

export const getDailyIntervalNameFromTime = (time: string): string => {
  let dailyIntervalName: string = "";
  let hours: number = getHoursFromDateTimeString(time);

  switch (hours) {
    case 0:
      dailyIntervalName += "Ночью";
      break;

    case 6:
      dailyIntervalName += "Утром";
      break;

    case 12:
      dailyIntervalName += "Днем";
      break;

    case 18:
      dailyIntervalName += "Вечером";
      break;
  }

  return dailyIntervalName;
};

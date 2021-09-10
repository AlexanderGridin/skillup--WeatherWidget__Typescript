import { WEATHER_TYPES } from "../constants/weatherTypes";

export const getWeatherTypeNameBySymbolCode = (symbolCode: string): string => {
  for (let weatherType of WEATHER_TYPES) {
    if (symbolCode.includes(weatherType.code)) {
      return weatherType.name;
    }
  }

  return "";
};

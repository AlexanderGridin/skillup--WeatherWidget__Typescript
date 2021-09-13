import { WEATHER_TYPES } from "../constants/weatherTypes";

export const getWeatherTypeNameBySymbolCode = (symbolCode: string): string => {
  symbolCode = symbolCode.split("_")[0];

  for (let weatherType of WEATHER_TYPES) {
    if (symbolCode === weatherType.code) {
      return weatherType.name;
    }
  }

  return "";
};

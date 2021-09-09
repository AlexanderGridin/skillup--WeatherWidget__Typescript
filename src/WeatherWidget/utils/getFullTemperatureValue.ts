export const getFullTemperatureValue = (temperatureValue: number): string => {
  let result: string = "";
  temperatureValue = Math.ceil(temperatureValue);

  if (temperatureValue === 0) {
    result += 0;
  }

  if (temperatureValue > 0) {
    result += `+${temperatureValue}`;
  }

  if (temperatureValue < 0) {
    result += `-${temperatureValue}`;
  }

  result += "°С";

  return result;
};

import { getWeatherTypeNameBySymbolCode } from "../src/WeatherWidget/utils/getWeatherTypeNameBySymbolCode";

describe("getWeatherTypeNameBySymbolCode", () => {
  it("should return 'Сильный дождь' if symbolCode is 'heavyrainshowers'", () => {
    const f = jest.fn(getWeatherTypeNameBySymbolCode);
    f("partlycloudy_day");
    expect(f).toHaveReturnedWith("Переменная облачность");
  });

  it("should return empty string if symbolCode is absent in WEATHER_TYPES array", () => {
    const f = jest.fn(getWeatherTypeNameBySymbolCode);
    f("some symbold code");
    expect(f).toHaveReturnedWith("");
  });
});

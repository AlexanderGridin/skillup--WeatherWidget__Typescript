import { getWeatherDataOfCity } from "../src/WeatherWidget/utils/getWeatherDataOfCity";
import { createCity } from "../src/WeatherWidget/utils/createCity";
import { City } from "../src/WeatherWidget/interfaces/City";

describe("getWeatherDataOfCity", () => {
  it("should get a weather data of city", () => {
    const kharkiv: City = createCity({
      name: "Kharkiv",
      latitude: 49.98081,
      longitude: 36.25272,
      altitude: 152,
    });

    getWeatherDataOfCity(kharkiv).then((weatherDataOfKharkiv) => {
      const wdok: any = weatherDataOfKharkiv;

      expect(wdok.geometry.coordinates[0]).toBe(kharkiv.longitude);
    });
  });
});

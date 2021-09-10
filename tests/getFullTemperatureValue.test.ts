import { getFullTemperatureValue } from "../src/WeatherWidget/utils/getFullTemperatureValue";

describe("getFullTemperatureValue", () => {
  it("should return positive temperature string", () => {
    let temperatureInDegrees = 23;
    const f = jest.fn(getFullTemperatureValue);

    f(temperatureInDegrees);

    expect(f).toHaveReturnedWith("+23°С");
  });

  it("should return negative temperature string", () => {
    let temperatureInDegrees = -23;
    const f = jest.fn(getFullTemperatureValue);

    f(temperatureInDegrees);

    expect(f).toHaveReturnedWith("-23°С");
  });

  it("should return zero temperature string", () => {
    let temperatureInDegrees = 0;
    const f = jest.fn(getFullTemperatureValue);

    f(temperatureInDegrees);

    expect(f).toHaveReturnedWith("0°С");
  });
});

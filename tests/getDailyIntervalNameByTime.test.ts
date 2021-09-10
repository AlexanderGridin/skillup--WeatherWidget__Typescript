import { getDailyIntervalNameByTime } from "../src/WeatherWidget/utils/getDailyIntervalNameByTime";

describe("getDailyIntervalNameByTime", () => {
  it("should return 'Ночью' if time is midnight", () => {
    const f = jest.fn(getDailyIntervalNameByTime);

    f("2021-09-10T21:00:00Z");

    expect(f).toHaveReturnedWith("Ночью");
  });

  it("should return empty string if time is not in the time point", () => {
    const f = jest.fn(getDailyIntervalNameByTime);

    f("2021-09-11T00:00:00Z");

    expect(f).toHaveReturnedWith("");
  });
});

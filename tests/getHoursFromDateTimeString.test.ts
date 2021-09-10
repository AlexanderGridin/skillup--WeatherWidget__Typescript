import { getHoursFromDateTimeString } from "../src/WeatherWidget/utils/getHoursFromDateTimeString";

describe("getHoursFromDateTimeString", () => {
  it("should return 3 hours from string '2021-09-11T00:00:00Z'", () => {
    const string: string = "2021-09-11T00:00:00Z";
    const f = jest.fn(getHoursFromDateTimeString);

    f(string);

    expect(f).toHaveReturnedWith(3);
  });

  it("should return 'null' when dateTime string is invalid", () => {
    const result = getHoursFromDateTimeString("hello");

    expect(result).toBeNull();
  });
});

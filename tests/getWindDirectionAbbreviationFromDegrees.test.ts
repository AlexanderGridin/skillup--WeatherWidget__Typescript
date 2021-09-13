import { getWindDirectionAbbreviationFromDegrees } from "../src/WeatherWidget/utils/getWindDirectionAbbreviationFromDegrees";

describe("getWindDirectionAbbreviationFromDegrees", () => {
  it("should return ЮЗ if windDirectionInDegrees = 300", () => {
    const f = jest.fn(getWindDirectionAbbreviationFromDegrees);
    f(300);
    expect(f).toHaveReturnedWith("СЗ");
  });
});

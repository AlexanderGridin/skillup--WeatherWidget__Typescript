/**
 * @jest-environment jsdom
 */

import { createWeatherTypeIconByWeatherSymbolCode } from "../src/WeatherWidget/utils/createWeatherTypeIconByWeatherSymbolCode";

describe("createWeatherTypeIconByWeatherSymbolCode", () => {
  it("should be instance of DOMElement class", () => {
    const weatherIcon = createWeatherTypeIconByWeatherSymbolCode("rain");

    expect(weatherIcon).toBeInstanceOf(HTMLImageElement);
  });
});

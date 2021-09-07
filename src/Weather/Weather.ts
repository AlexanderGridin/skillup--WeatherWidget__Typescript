import { getWeatherDataOfCity } from "./utils/getWeatherDataOfCity";
import { getWindDirectionAbbreviationFromDegrees } from "./utils/getWindDirectionAbbreviationFromDegrees";

import { City } from "./interfaces/City";

export class Weather {
  private targetElement: Element | null;
  private weatherElement: Element;
  private city: City;

  constructor() {}

  public renderIn(targetElementSelector: string): this {
    const targetElement = this.getTargetElement(targetElementSelector);

    return this;
  }

  public ofCity(city: City): this {
    this.city = { ...city };

    getWeatherDataOfCity(this.city).then((weatherDataOfCity) => {
      console.log(weatherDataOfCity);
      return weatherDataOfCity;
    });

    return this;
  }

  private getTargetElement(targetElementSelector: string): Element | null {
    return document.querySelector(targetElementSelector);
  }
}

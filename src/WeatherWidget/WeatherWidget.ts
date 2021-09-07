import { getWeatherDataOfCity } from "./utils/getWeatherDataOfCity";
import { getWindDirectionAbbreviationFromDegrees } from "./utils/getWindDirectionAbbreviationFromDegrees";

import { DOMElement } from "./models/DOMElement";

import { City } from "./interfaces/City";

export class WeatherWidget {
  private weatherWidgetElement!: Node;
  private city!: City;

  constructor() {
    this.createWeatherWidgetElement();
  }

  public renderIn(targetElementSelector: string): this {
    const targetElement = this.getTargetElement(targetElementSelector);
    targetElement?.append(this.weatherWidgetElement);

    console.log(this.weatherWidgetElement);
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

  private createWeatherWidgetElement(): void {
    this.weatherWidgetElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget"],
      textContent: "weather-widget text content",
    }).get();
  }
}

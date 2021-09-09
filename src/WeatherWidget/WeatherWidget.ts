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

    this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
    this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
    this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());
  }

  private createWeatherWidgetHeader(): Node {
    const weatherWidgetHeader = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__header"],
      textContent: "weather-widget__header text content",
    }).get();

    return weatherWidgetHeader as Node;
  }

  private createWeatherWidgetBody(): Node {
    const weatherWidgetBody = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__body"],
      textContent: "weather-widget__body text content",
    }).get();

    return weatherWidgetBody as Node;
  }

  private createWeatherWidgetFooter(): Node {
    const weatherWidgetFooter = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__footer"],
      textContent: "weather-widget__footer text content",
    }).get();

    return weatherWidgetFooter as Node;
  }
}

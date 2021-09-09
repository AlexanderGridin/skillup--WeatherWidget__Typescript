import { getWeatherDataOfCity } from "./utils/getWeatherDataOfCity";
import { getWindDirectionAbbreviationFromDegrees } from "./utils/getWindDirectionAbbreviationFromDegrees";
import { getHoursFromDateTimeString } from "./utils/getHoursFromDateTimeString";
import { createWeatherTypeIconByWeatherSymbolCode } from "./utils/createWeatherTypeIconByWeatherSymbolCode";
import { getFullTemperatureValue } from "./utils/getFullTemperatureValue";

import { DOMElement } from "./models/DOMElement";

import { City } from "./interfaces/City";

export class WeatherWidget {
  private targetElement!: Element | null;
  private weatherWidgetElement!: Node;
  private city!: City;
  private weatherData!: any; // TODO: fix data type
  private currentWeatherData!: any; // TODO: fix data type

  constructor() {
    console.log(getHoursFromDateTimeString("2021-09-09T09:00:00Z"));
  }

  public renderIn(targetElementSelector: string): this {
    this.targetElement = this.getTargetElement(targetElementSelector);

    getWeatherDataOfCity(this.city).then((weatherDataOfCity) => {
      let {
        properties: { timeseries },
      } = weatherDataOfCity as any; //TODO: fix data type

      this.weatherData = timeseries;
      this.currentWeatherData = timeseries[0];

      console.log(this.weatherData);
      console.log(this.currentWeatherData);

      this.createWeatherWidgetElement();
      this.render();

      return weatherDataOfCity;
    });

    return this;
  }

  public ofCity(city: City): this {
    this.city = { ...city };
    console.log(this.city);

    return this;
  }

  private render(): void {
    this.targetElement?.append(this.weatherWidgetElement);
  }

  private getTargetElement(targetElementSelector: string): Element | null {
    return document.querySelector(targetElementSelector);
  }

  private createWeatherWidgetElement(): void {
    this.weatherWidgetElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget"],
    }).getNode();

    this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
    this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
    this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());

    this.weatherWidgetElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode("fair_day")
    );
  }

  private createWeatherWidgetHeader(): Node {
    const cityName = new DOMElement({
      tagName: "div",
      classNames: ["city-name"],
      textContent: `${this.city.name}`,
    }).getNode();

    const weatherIcon = new DOMElement({
      tagName: "div",
      classNames: ["current-weather-icon"],
    }).getNode();

    weatherIcon.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(
        this.currentWeatherData.data.next_1_hours.summary.symbol_code
      )
    );

    const temperature = new DOMElement({
      tagName: "div",
      textContent: getFullTemperatureValue(
        this.currentWeatherData.data.instant.details.air_temperature
      ),
    }).getNode();

    const weatherWidgetHeader = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__header"],
    }).getNode();

    weatherWidgetHeader.appendChild(cityName);
    weatherWidgetHeader.appendChild(weatherIcon);
    weatherWidgetHeader.appendChild(temperature);

    return weatherWidgetHeader as Node;
  }

  private createWeatherWidgetBody(): Node {
    const weatherWidgetBody = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__body"],
      textContent: "weather-widget__body text content",
    }).getNode();

    return weatherWidgetBody as Node;
  }

  private createWeatherWidgetFooter(): Node {
    const weatherWidgetFooter = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__footer"],
      textContent: "weather-widget__footer text content",
    }).getNode();

    return weatherWidgetFooter as Node;
  }
}

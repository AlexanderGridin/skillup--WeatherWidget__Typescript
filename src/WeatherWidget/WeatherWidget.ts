import { getWeatherDataOfCity } from "./utils/getWeatherDataOfCity";
import { getWindDirectionAbbreviationFromDegrees } from "./utils/getWindDirectionAbbreviationFromDegrees";
import { getFullTemperatureValue } from "./utils/getFullTemperatureValue";
import { getWeatherTypeNameFromSymbolCode } from "./utils/getReadableWeatherTypeFromSymbolCode";
import { getDailyIntervalNameFromTime } from "./utils/getDailyIntervalNameFromTime";
import { createWeatherTypeIconByWeatherSymbolCode } from "./utils/createWeatherTypeIconByWeatherSymbolCode";
import { isDailyIntervalPoint } from "./utils/isDailyIntervalPoint";

import { DOMElement } from "./models/DOMElement";

import { City } from "./interfaces/City";

export class WeatherWidget {
  private targetElement!: Element | null;
  private weatherWidgetElement!: Node;
  private city!: City;
  private weatherData!: any; // TODO: fix data type
  private currentWeatherData!: any; // TODO: fix data type

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

      this.createWeatherWidgetElement().render();

      return weatherDataOfCity;
    });

    return this;
  }

  public ofCity(city: City): this {
    this.city = { ...city };
    return this;
  }

  private render(): void {
    this.targetElement?.append(this.weatherWidgetElement);
  }

  private getTargetElement(targetElementSelector: string): Element | null {
    return document.querySelector(targetElementSelector);
  }

  private createWeatherWidgetElement(): this {
    this.weatherWidgetElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget"],
    }).getNode();

    this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
    this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
    // this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());

    return this;
  }

  private createWeatherWidgetHeader(): Node {
    const cityName: string = this.city.name;

    const weatherSymbolCode: string =
      this.currentWeatherData.data.next_1_hours.summary.symbol_code;

    const temperature: number =
      this.currentWeatherData.data.instant.details.air_temperature;
    const fullTemperatureValue: string = getFullTemperatureValue(temperature);

    const cityNameElement = new DOMElement({
      tagName: "div",
      classNames: ["city-name"],
      textContent: `${cityName}`,
    }).getNode();

    const weatherIconElement = new DOMElement({
      tagName: "div",
      classNames: ["current-weather-icon"],
    }).getNode();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const temperatureElement = new DOMElement({
      tagName: "div",
      classNames: ["current-temperature"],
      textContent: fullTemperatureValue,
    }).getNode();

    const weatherWidgetHeader = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__header"],
    }).getNode();

    weatherWidgetHeader.appendChild(cityNameElement);
    weatherWidgetHeader.appendChild(weatherIconElement);
    weatherWidgetHeader.appendChild(temperatureElement);

    return weatherWidgetHeader as Node;
  }

  private createWeatherWidgetBody(): Node {
    const weatherWidgetBody = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__body"],
    }).getNode();

    weatherWidgetBody.appendChild(this.createCurrentWeatherElement());
    weatherWidgetBody.appendChild(this.createWeatherOfDailyIntervalsElement());

    return weatherWidgetBody as Node;
  }

  private createCurrentWeatherElement(): Node {
    const weatherSymbolCode: string =
      this.currentWeatherData.data.next_1_hours.summary.symbol_code;
    const weatherTypeName: string =
      getWeatherTypeNameFromSymbolCode(weatherSymbolCode);

    const windSpeed: number =
      this.currentWeatherData.data.instant.details.wind_speed;
    const windDirectionInDegrees: number =
      this.currentWeatherData.data.instant.details.wind_from_direction;
    const windDirectionAbbreviation: string =
      getWindDirectionAbbreviationFromDegrees(windDirectionInDegrees);

    const weatherTypeElement = new DOMElement({
      tagName: "p",
      textContent: `${weatherTypeName}`,
    }).getNode();

    const windElement = new DOMElement({
      tagName: "p",
      textContent: `${windSpeed}м/с, ${windDirectionAbbreviation}`,
    }).getNode();

    const currentWeatherElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["current-weather"],
    }).getNode();

    currentWeatherElement.appendChild(weatherTypeElement);
    currentWeatherElement.appendChild(windElement);

    return currentWeatherElement;
  }

  private createWeatherOfDailyIntervalsElement(): Node {
    let totalDailyIntervalPoints: number = 0;
    const LIMIT_OF_DAILY_INTERVAL_POINTS = 4;

    const weatherOfDayliIntervalsElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-intervals"],
    }).getNode();

    for (let i: number = 0; i < this.weatherData.length; i++) {
      // TODO: fix data type
      const weatherDataItem: any = this.weatherData[i];
      const time: string = weatherDataItem.time;

      if (isDailyIntervalPoint(time)) {
        weatherOfDayliIntervalsElement.appendChild(
          this.createDailyIntervalElement(weatherDataItem)
        );

        totalDailyIntervalPoints++;
      }

      if (totalDailyIntervalPoints === LIMIT_OF_DAILY_INTERVAL_POINTS) {
        break;
      }
    }

    return weatherOfDayliIntervalsElement;
  }

  private createDailyIntervalElement(weatherDataItem: any): Node {
    const time: string = weatherDataItem.time;
    const weatherSymbolCode: string =
      weatherDataItem.data.next_1_hours.summary.symbol_code;

    const temperature: number =
      weatherDataItem.data.instant.details.air_temperature;
    const fullTemperatureValue = getFullTemperatureValue(temperature);

    const dailyIntervalTitle: string = getDailyIntervalNameFromTime(time);

    const dailyIntervalTitleElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__title"],
      textContent: `${dailyIntervalTitle}`,
    }).getNode();

    const weatherIconElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__weather-icon"],
    }).getNode();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const dailyIntervalTemperature = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__temerature"],
      textContent: `${fullTemperatureValue}`,
    }).getNode();

    const dailyIntervalItemElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval"],
    }).getNode();

    dailyIntervalItemElement.appendChild(dailyIntervalTitleElement);
    dailyIntervalItemElement.appendChild(weatherIconElement);
    dailyIntervalItemElement.appendChild(dailyIntervalTemperature);

    return dailyIntervalItemElement;
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

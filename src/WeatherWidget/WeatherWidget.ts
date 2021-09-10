import { getWeatherDataOfCity } from "./utils/getWeatherDataOfCity";
import { getWindDirectionAbbreviationFromDegrees } from "./utils/getWindDirectionAbbreviationFromDegrees";
import { getFullTemperatureValue } from "./utils/getFullTemperatureValue";
import { getWeatherTypeNameBySymbolCode } from "./utils/getWeatherTypeNameBySymbolCode";
import { getDailyIntervalNameByTime } from "./utils/getDailyIntervalNameByTime";
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

  public ofCity(city: City): this {
    this.city = { ...city };
    return this;
  }

  public renderIn(targetElementSelector: string): this {
    this.targetElement = this.getTargetElement(targetElementSelector);

    if (this.targetElement) {
      this.loadWeatherDataOfCity();
    }

    if (!this.targetElement) {
      console.warn("[Weather Widget]: Target element not found");
    }

    return this;
  }

  private getTargetElement(targetElementSelector: string): Element | null {
    return document.querySelector(targetElementSelector);
  }

  private loadWeatherDataOfCity(): this {
    getWeatherDataOfCity(this.city)
      .then((weatherDataOfCity) => {
        this.handleWeatherDataOfCity(weatherDataOfCity)
          .createElement()
          .render();
      })
      .catch((err) => {
        this.renderError("[Weather Widget]: Something went wrong...");
      });

    return this;
  }

  private handleWeatherDataOfCity(weatherDataOfCity: any): this {
    let {
      properties: { timeseries },
    } = weatherDataOfCity as any; //TODO: fix data type

    this.weatherData = timeseries;
    this.currentWeatherData = timeseries[0];

    // console.log(this.weatherData);
    // console.log(this.currentWeatherData);

    return this;
  }

  private createElement(): this {
    this.weatherWidgetElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget"],
    }).getNode();

    this.weatherWidgetElement.appendChild(this.createHeader());
    this.weatherWidgetElement.appendChild(this.createBody());
    this.weatherWidgetElement.appendChild(this.createFooter());

    return this;
  }

  private createHeader(): Node {
    const cityName: string = this.city.name;

    const weatherSymbolCode: string =
      this.currentWeatherData.data.next_1_hours.summary.symbol_code;

    const temperature: number =
      this.currentWeatherData.data.instant.details.air_temperature;
    const fullTemperatureValue: string = getFullTemperatureValue(temperature);

    const cityNameElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["city-name"],
      textContent: `${cityName}`,
    }).getNode();

    const weatherIconElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["weather-icon"],
    }).getNode();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const temperatureElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["temperature"],
      textContent: fullTemperatureValue,
    }).getNode();

    const weatherWidgetHeader: Node = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__header"],
    }).getNode();

    weatherWidgetHeader.appendChild(cityNameElement);
    weatherWidgetHeader.appendChild(weatherIconElement);
    weatherWidgetHeader.appendChild(temperatureElement);

    return weatherWidgetHeader;
  }

  private createBody(): Node {
    const weatherWidgetBody: Node = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__body"],
    }).getNode();

    weatherWidgetBody.appendChild(this.createCurrentWeatherElement());
    weatherWidgetBody.appendChild(this.createWeatherOfDailyIntervalsElement());

    return weatherWidgetBody;
  }

  private createCurrentWeatherElement(): Node {
    const weatherSymbolCode: string =
      this.currentWeatherData.data.next_1_hours.summary.symbol_code;
    const weatherTypeName: string =
      getWeatherTypeNameBySymbolCode(weatherSymbolCode);

    const windSpeed: number =
      this.currentWeatherData.data.instant.details.wind_speed;
    const windDirectionInDegrees: number =
      this.currentWeatherData.data.instant.details.wind_from_direction;
    const windDirectionAbbreviation: string =
      getWindDirectionAbbreviationFromDegrees(windDirectionInDegrees);

    const weatherTypeElement: Node = new DOMElement({
      tagName: "p",
      textContent: `${weatherTypeName}`,
    }).getNode();

    const windElement: Node = new DOMElement({
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

    const weatherOfDayliIntervalsElement: Node = new DOMElement({
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

    const dailyIntervalTitle: string = getDailyIntervalNameByTime(time);

    const dailyIntervalTitleElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__title"],
      textContent: `${dailyIntervalTitle}`,
    }).getNode();

    const weatherIconElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__weather-icon"],
    }).getNode();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const dailyIntervalTemperature: Node = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__temerature"],
      textContent: `${fullTemperatureValue}`,
    }).getNode();

    const dailyIntervalItemElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval"],
    }).getNode();

    dailyIntervalItemElement.appendChild(dailyIntervalTitleElement);
    dailyIntervalItemElement.appendChild(weatherIconElement);
    dailyIntervalItemElement.appendChild(dailyIntervalTemperature);

    return dailyIntervalItemElement;
  }

  private createFooter(): Node {
    const viewMoreLinkElement: Node = new DOMElement({
      tagName: "a",
      classNames: ["view-more__link"],
      textContent: "Погода на 2 недели",
      attributes: [
        {
          name: "href",
          value: "https://www.gismeteo.ua/weather-kharkiv-5053/2-weeks/",
        },
        {
          name: "target",
          value: "_blank",
        },
      ],
    }).getNode();

    const viewMoreElement: Node = new DOMElement({
      tagName: "div",
      classNames: ["view-more"],
    }).getNode();

    viewMoreElement.appendChild(viewMoreLinkElement);

    const weatherWidgetFooter: Node = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__footer"],
    }).getNode();

    weatherWidgetFooter.appendChild(viewMoreElement);

    return weatherWidgetFooter;
  }

  private render(): this {
    this.targetElement?.append(this.weatherWidgetElement);

    return this;
  }

  private renderError(errorText: string): this {
    const errorElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__error"],
      textContent: errorText,
    }).getNode();

    this.targetElement?.appendChild(errorElement);

    return this;
  }
}

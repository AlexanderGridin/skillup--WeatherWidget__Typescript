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
  private targetElement!: HTMLElement | null;
  private weatherWidgetElement!: HTMLElement;
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

  private getTargetElement(targetElementSelector: string): HTMLElement | null {
    return document.querySelector(targetElementSelector);
  }

  private loadWeatherDataOfCity(): this {
    getWeatherDataOfCity(this.city)
      .then((weatherDataOfCity) => {
        console.log(weatherDataOfCity);

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

    // console.group("weatherData");
    // console.log(this.weatherData);
    // console.groupEnd();

    // console.group("currentWeatherData");
    // console.log(this.currentWeatherData);
    // console.groupEnd();

    return this;
  }

  private createElement(): this {
    this.weatherWidgetElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget"],
    }).getHTMLElement();

    this.weatherWidgetElement.appendChild(this.createHeader());
    this.weatherWidgetElement.appendChild(this.createBody());
    this.weatherWidgetElement.appendChild(this.createFooter());

    return this;
  }

  private createHeader(): HTMLElement {
    const cityName: string = this.city.name;

    const weatherSymbolCode: string =
      this.currentWeatherData.data.next_1_hours.summary.symbol_code;

    const temperature: number =
      this.currentWeatherData.data.instant.details.air_temperature;
    const fullTemperatureValue: string = getFullTemperatureValue(temperature);

    const cityNameElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["city-name"],
      textContent: `${cityName}`,
    }).getHTMLElement();

    const weatherIconElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-icon"],
    }).getHTMLElement();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const temperatureElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["temperature"],
      textContent: fullTemperatureValue,
    }).getHTMLElement();

    const weatherWidgetHeader: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__header"],
    }).getHTMLElement();

    weatherWidgetHeader.appendChild(cityNameElement);
    weatherWidgetHeader.appendChild(weatherIconElement);
    weatherWidgetHeader.appendChild(temperatureElement);

    return weatherWidgetHeader;
  }

  private createBody(): HTMLElement {
    const weatherWidgetBody: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__body"],
    }).getHTMLElement();

    weatherWidgetBody.appendChild(this.createCurrentWeatherElement());
    weatherWidgetBody.appendChild(this.createWeatherOfDailyIntervalsElement());

    return weatherWidgetBody;
  }

  private createCurrentWeatherElement(): HTMLElement {
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

    const weatherTypeElement: HTMLElement = new DOMElement({
      tagName: "p",
      textContent: `${weatherTypeName}`,
    }).getHTMLElement();

    const windElement: HTMLElement = new DOMElement({
      tagName: "p",
      textContent: `${windSpeed}м/с, ${windDirectionAbbreviation}`,
    }).getHTMLElement();

    const currentWeatherElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["current-weather"],
    }).getHTMLElement();

    currentWeatherElement.appendChild(weatherTypeElement);
    currentWeatherElement.appendChild(windElement);

    return currentWeatherElement;
  }

  private createWeatherOfDailyIntervalsElement(): HTMLElement {
    let totalDailyIntervalPoints: number = 0;
    const LIMIT_OF_DAILY_INTERVAL_POINTS = 4;

    const weatherOfDayliIntervalsElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-intervals"],
    }).getHTMLElement();

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

  private createDailyIntervalElement(weatherDataItem: any): HTMLElement {
    const time: string = weatherDataItem.time;
    const weatherSymbolCode: string =
      weatherDataItem.data.next_1_hours.summary.symbol_code;

    const temperature: number =
      weatherDataItem.data.instant.details.air_temperature;
    const fullTemperatureValue = getFullTemperatureValue(temperature);

    const dailyIntervalTitle: string = getDailyIntervalNameByTime(time);

    const dailyIntervalTitleElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__title"],
      textContent: `${dailyIntervalTitle}`,
    }).getHTMLElement();

    const weatherIconElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__weather-icon"],
    }).getHTMLElement();

    weatherIconElement.appendChild(
      createWeatherTypeIconByWeatherSymbolCode(weatherSymbolCode)
    );

    const dailyIntervalTemperature: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval__temerature"],
      textContent: `${fullTemperatureValue}`,
    }).getHTMLElement();

    const dailyIntervalItemElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["daily-interval"],
    }).getHTMLElement();

    dailyIntervalItemElement.appendChild(dailyIntervalTitleElement);
    dailyIntervalItemElement.appendChild(weatherIconElement);
    dailyIntervalItemElement.appendChild(dailyIntervalTemperature);

    return dailyIntervalItemElement;
  }

  private createFooter(): HTMLElement {
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
    }).getHTMLElement();

    const viewMoreElement: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["view-more"],
    }).getHTMLElement();

    viewMoreElement.appendChild(viewMoreLinkElement);

    const weatherWidgetFooter: HTMLElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__footer"],
    }).getHTMLElement();

    weatherWidgetFooter.appendChild(viewMoreElement);

    return weatherWidgetFooter;
  }

  private render(): this {
    this.targetElement?.appendChild(this.weatherWidgetElement);

    return this;
  }

  private renderError(errorText: string): this {
    const errorElement = new DOMElement({
      tagName: "div",
      classNames: ["weather-widget__error"],
      textContent: errorText,
    }).getHTMLElement();

    this.targetElement?.appendChild(errorElement);

    return this;
  }
}

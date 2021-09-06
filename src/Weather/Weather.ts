import { City } from "./interfaces/City";

export class Weather {
  private targetElement: Element | null;
  private calendarElement: Element;
  private city: City;

  constructor() {}

  public renderIn(targetElementSelector: string): this {
    const targetElement = this.getTargetElement(targetElementSelector);
    console.log(targetElement);

    return this;
  }

  public of(city: City): this {
    this.city = { ...city };
    console.log(this.city);
    return this;
  }

  private getTargetElement(targetElementSelector: string): Element | null {
    return document.querySelector(targetElementSelector);
  }
}

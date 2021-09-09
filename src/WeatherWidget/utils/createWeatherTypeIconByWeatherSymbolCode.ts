import { DOMElement } from "../models/DOMElement";

export const createWeatherTypeIconByWeatherSymbolCode = (
  symbolCode: string
): Node => {
  const weatherIconsFolderPath: string = "./images/weather-icons/";

  return new DOMElement({
    tagName: "img",
    classNames: ["weather-icon__img"],
    attributes: [
      {
        name: "src",
        value: `${weatherIconsFolderPath}${symbolCode}.svg`,
      },
      {
        name: "alt",
        value: `${symbolCode}`,
      },
    ],
  }).getNode();
};

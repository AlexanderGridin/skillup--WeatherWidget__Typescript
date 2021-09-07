import { City } from "../interfaces/City";

export async function getWeatherDataOfCity(city: City): Promise<Object> {
  const apiUrl: string =
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?";

  return await fetch(
    `${apiUrl}lat=${city.latitude}&lon=${city.longitude}&altitude=${city.altitude}`
  ).then((response) => response.json());
}

import { WeatherWidget } from "./WeatherWidget/WeatherWidget";
import { City } from "./WeatherWidget/interfaces/City";
import { createCity } from "./WeatherWidget/utils/createCity";

const kharkiv: City = createCity({
  name: "Kharkiv",
  latitude: 49.98081,
  longitude: 36.25272,
  altitude: 152,
});

new WeatherWidget().ofCity(kharkiv).renderIn("#weather");

import { Weather } from "./Weather/Weather";
import { City } from "./Weather/interfaces/City";
import { createCity } from "./Weather/utils/createCity";

const samara: City = createCity({
  name: "Samara",
  latitude: 53.20007,
  longitude: 50.15,
  altitude: 117,
});

const weatherOfSamara: Weather = new Weather().of(samara).renderIn("#calendar");
console.log(weatherOfSamara);

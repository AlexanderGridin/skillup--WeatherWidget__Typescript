import { Weather } from "./Weather/Weather";
import { City } from "./Weather/interfaces/City";
import { createCity } from "./Weather/utils/createCity";

const kharkiv: City = createCity({
  name: "Kharkiv",
  latitude: 49.98081,
  longitude: 36.25272,
  altitude: 152,
});

new Weather().of(kharkiv).renderIn("#weather");

import { City } from "../interfaces/City";

export function createCity(options: City): City {
  return { ...options };
}

import { RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS } from "../constants/russianAbbreviationsForTheCardinalPoints";

export function getWindDirectionAbbreviationFromDegrees(
  windDirectionInDegrees: number
): string {
  const FULL_ANGLE: number = 360;

  let abbreviationPositionOfCardinalPoint: number =
    Math.round((windDirectionInDegrees / FULL_ANGLE) * 10) - 1;

  return RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS[
    abbreviationPositionOfCardinalPoint
  ];
}

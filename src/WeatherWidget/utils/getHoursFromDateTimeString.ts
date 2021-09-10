export const getHoursFromDateTimeString = (
  dateString: string
): number | null => {
  const hours: number | null = new Date(dateString).getHours();

  if (isNaN(hours)) {
    console.error("[getHoursFromDateTimeString]: invalid date string");

    return null;
  }

  return hours;
};

export const getHoursFromDateTimeString = (dateString: string): number =>
  new Date(dateString).getHours();

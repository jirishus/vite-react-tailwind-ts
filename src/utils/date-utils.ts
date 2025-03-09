// date parameter covers different input formats (ISO string, timestamp, or a Date object)
export const FormatDate = (date:string | number | Date): string => {
  return new Date(date).toLocaleDateString();
}
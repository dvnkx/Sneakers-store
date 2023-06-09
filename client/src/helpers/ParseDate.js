import { parse, isDate } from "date-fns";

export const parseDateString = (value) => {
  const parsedDate = isDate(value)
    ? value
    : parse(value, "yyyy-MM-dd", new Date());

  return parsedDate;
};

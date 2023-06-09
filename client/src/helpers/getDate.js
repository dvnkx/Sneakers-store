import fromUnixTime from "date-fns/fromUnixTime";
import getDate from "date-fns/getDate";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";

export const getBirthdayDate = (date) => {
  const day = getDate(fromUnixTime(date));
  const month = getMonth(fromUnixTime(date)) + 1;
  const year = getYear(fromUnixTime(date));

  return day + "." + month + "." + year;
};

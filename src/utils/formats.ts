import dayjs from "dayjs";
import "dayjs/locale/br.js";
import toObject from "dayjs/plugin/toObject.js";

dayjs.locale("br");
dayjs.extend(toObject);

const formatName = (name: string) => {
  name = name.trim().toLowerCase();
  if (name !== "admin") {
    const arr = name.split(" ");
    name = arr
      .map((word) => {
        if (word.length > 2) {
          return word[0].toUpperCase() + word.substring(1);
        }
        return word;
      })
      .join(" ");
  }
  return name;
};

const formatDate = (date: string) => {
  return dayjs(date);
};

const dateObject = (date: any) => {
  return date.toObject();
};

const endBets = () => {
  const cupDay = dayjs("2022-11-20 08:00");
  //const testDay = "2022-11-20 08:00";
  return dayjs().isAfter(cupDay);
};

export const formats = {
  formatName,
  formatDate,
  dateObject,
  endBets,
};

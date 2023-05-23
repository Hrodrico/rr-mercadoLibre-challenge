import { format } from "date-fns";

export const printDateNow = (_nameEndPoint: string) => {
  const nowDate = format(new Date(), "dd-MM-yyyy hh:mm:ss");
  const strNow = `- ${_nameEndPoint} ::: ${nowDate} -`;
  return console.log(strNow);
};

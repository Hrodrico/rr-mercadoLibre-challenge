import {format, setDefaultOptions} from 'date-fns';
import {es} from 'date-fns/locale';
setDefaultOptions({locale: es});

export function transDateToDDMMYYYYY(dateSelected: any): string {
  let newDate: Date = new Date();

  if (typeof dateSelected === 'object' || dateSelected instanceof Date) newDate = new Date(dateSelected);
  if (typeof dateSelected === 'string' && dateSelected.length === 29) newDate = new Date(dateSelected);

  const result: string = format(newDate, 'dd-MM-yyyy'); // ex. 12-12-2023
  return result;
}

import { parse, isDate, isValid } from "date-fns";

export function parseDateString(value, originalValue,) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd/MM/yyyy", new Date());

    //console.log(originalValue, "\t", parsedDate, "\t",);
    if (!isValid(parsedDate)) {
        new Date('');
    }

    return parsedDate;
}
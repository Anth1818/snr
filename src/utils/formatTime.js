import { format, getTime, formatDistanceToNow } from "date-fns";

// ----------------------------------------------------------------------
const timestamp = Date.now();

// Formatea la marca de tiempo en la fecha y hora deseada
export const formattedDate = format(timestamp, "dd/MM/yyyy HH:mm a");


export function fDate(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}

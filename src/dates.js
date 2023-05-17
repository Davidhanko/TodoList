import { format, parseISO, isPast } from "date-fns";

export function formatDate(date) {
  return format(parseISO(date), "dd/MM/yyyy");
}

import { format, parseISO, isValid } from "date-fns";

// Function to parse a query parameter into an option object
export const parseOption = (param: string | null) => (param ? { label: param, value: param } : null);

// Format a Date object as YYYY-MM-DD for URL
export const formatDateForURL = (date: Date) => format(date, "dd-MM-yyyy");

// Parse a YYYY-MM-DD string to a Date object
export const parseDateFromURL = (param: string | null) => {
  const date = param ? parseISO(param) : new Date();
  return isValid(date) ? date : new Date(); // Fallback to current date if invalid
};

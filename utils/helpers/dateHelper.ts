import { tSystemMessage } from "../internacionalization/tMessages";
/**
 * Formats a timestamp into a user-friendly string based on how long ago it was.
 * 
 * Logic:
 * - Today: Returns time (HH:mm)
 * - Yesterday: Returns "Ontem"
 * - Within 7 days: Returns day of the week (e.g., "Segunda-feira")
 * - Otherwise: Returns date (DD/MM/YYYY)
 * 
 * @param timestamp - The ISO string or timestamp to format
 * @returns Formatted date string
 */
export const formatMessageDate = (timestamp: string | undefined, isSeparator = false): string => {
  if(timestamp == undefined) {
    return "";
  }
  const date = new Date(timestamp);
  const now = new Date();

  // Reset times for accurate day comparison
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const compareDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const diffInDays = Math.floor((today.getTime() - compareDate.getTime()) / (1000 * 60 * 60 * 24));

  // Today
  if (diffInDays === 0) {
    if(isSeparator) return tSystemMessage("today", "hoje");
    return new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(date);
  }

  // Yesterday
  if (diffInDays === 1) {
    return tSystemMessage("yestarday", "ontem");
  }

  // Within last 7 days
  if (diffInDays > 1 && diffInDays <= 7) {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date);
  }

  // Otherwise
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
};

export const formatSeparatorMessageDate = (timestamp: string | undefined): string => {
  return formatMessageDate(timestamp, true);
};

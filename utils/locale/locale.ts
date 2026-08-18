import { Locale } from "@/stores/useSettingsStore";
export function getBrowserLocale(): Locale {
  const browserLocale = navigator.language;

  if (browserLocale.toLowerCase().startsWith("en")) {
    return "en-US";
  }

  return "pt-BR";
}
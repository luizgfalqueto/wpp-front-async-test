import enMessages from "@/database/en-db.json";
import { useSettingsStore } from "@/stores/useSettingsStore";

type SystemTranslations = Record<string, string>;

const systemTranslations: SystemTranslations = enMessages;

export function tSystemMessage(
  messageId: string,
  originalMessage: string
) {
  const locale = useSettingsStore.getState().locale;

  if (locale === "en-US") {
    return systemTranslations[messageId] ?? originalMessage;
  }

  return originalMessage;
}
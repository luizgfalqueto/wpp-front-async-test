import { create } from "zustand";

export type Locale = "pt-BR" | "en-US";

type SettingsState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  locale: "pt-BR",

  setLocale: (locale) => set({ locale }),
}));
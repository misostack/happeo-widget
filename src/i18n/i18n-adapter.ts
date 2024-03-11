import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import ICU from "i18next-icu";
import en from "./locales/en";
import vn from "./locales/vn";
import enviroment from "../shared/environment";

export const i18nResources = {
  en: {
    translation: {
      ...en,
    },
  },
  vn: {
    translation: {
      ...vn,
    },
  },
};

const i18nActiveLanguage =
  localStorage.getItem("lang") ?? enviroment.APP_DEFAULT_LANG;

const i18nAdapter = createInstance({
  fallbackLng: i18nActiveLanguage,
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: i18nResources,
});

i18nAdapter.use(initReactI18next).use(ICU).init();

export default i18nAdapter;

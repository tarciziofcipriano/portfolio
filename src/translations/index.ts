import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import { getLanguageCode } from "./languages";
import resources from "./translations";

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageCode(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

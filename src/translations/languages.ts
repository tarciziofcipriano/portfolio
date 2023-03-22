import { LanguageCode, Languages } from "./types";

const DEFAULT_LANGUAGE = "pt";

export const languages: Languages[] = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export const getLanguageCode = () => {
  const language = (localStorage.getItem("lang") ??
    DEFAULT_LANGUAGE) as LanguageCode;
  return languages.some((lang) => lang.code === language)
    ? language
    : DEFAULT_LANGUAGE;
};

export const getLanguage = () =>
  languages.find((lang) => lang.code === getLanguageCode()) ?? languages[0];

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    lng: localStorage.getItem('language') ?? 'ru',
    fallbackLng: 'ru',
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

export type TLanguage = 'ru' | 'en';

export const setLanguage = (language: TLanguage) => {
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }
};

export const getLanguage = () => i18n.language as TLanguage;

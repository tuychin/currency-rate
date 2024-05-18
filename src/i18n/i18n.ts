import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

export type TLanguage = 'ru' | 'en';

export const setLanguage = (language: TLanguage) => {
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }
};

export const getLanguage = () => i18n.language as TLanguage;

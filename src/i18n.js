// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'; 
import fr from './locales/fr.json'; 
import ind from './locales/ind.json'; 
import mal from './locales/mal.json';
import pt from './locales/pt.json';
import cz from './locales/cz.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ind: { translation: ind },
      mal: { translation: mal },
      pt: { translation: pt },
      cz: { translation: cz }


    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

// Importa las dependencias necesarias
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './src/locales/es/Translation.json';
import translationEN from './src/locales/en/Translation.json';

// Configuración básica
i18n
  .use(initReactI18next) // inicializa react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES  // <-- Sin coma adicional aquí
      }  // <-- Sin coma adicional aquí
    },
    lng: 'en', // idioma predeterminado
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
      escapeValue: false, // no escapar valores de traducción
    }  // <-- Sin coma adicional aquí
  });

export default i18n;

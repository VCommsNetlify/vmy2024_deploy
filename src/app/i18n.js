import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'id', 'fr', 'ru', 'si', 'ta', 'vi'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

// Apply RTL styles if the language is Arabic
i18n.on('languageChanged', (lng) => {
  if (typeof window === "undefined") return;

  if (lng === 'ar') {
    document.documentElement.dir = 'rtl';
    import('@/app/rtl.css'); // Ensure this path is correct
  } else {
    document.documentElement.dir = 'ltr';
  }
});

export default i18n;

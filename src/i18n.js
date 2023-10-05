import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navigationBar: {
            start: "Start",
            machineLearning: "Machine Learning",
            example1: "Example 1",
            example2: "Example 2",
            example3: "Example 3",
            language: "Language:"
          },
          certificatePage: {
            supplier: "Supplier",
            certificateType: "Certificate type",
            validFrom: "Valid from",
            button: "New certificate",
            validTo: "Valid to"
          },
        },
      },
      ba: {
        translation: {
            navigationBar: {
                start: "Pocetak",
                machineLearning: "Masinsko ucenje",
                example1: "Primjer 1",
                example2: "Primjer 2",
                example3: "Primjer 3",
                language: "Jezik:"
              },
            certificatePage: {
                supplier: "Dobavljac",
                certificateType: "Tip certifikata",
                validFrom: "Vrijedi od",
                button: "Novi certifikat",
                validTo: "Vrijedi do"
              },
        },
      },
    },
  });

export default i18n;
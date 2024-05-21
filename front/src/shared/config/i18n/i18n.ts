import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector) // passes i18n down to react-i18next
    .init({
        lng: "en",
        detection: {
            order: [
                "querystring",
                "cookie",
                "localStorage",
                "navigator",
                "htmlTag",
                "path",
                "subdomain",
            ],
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;

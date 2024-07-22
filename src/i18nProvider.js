// in src/i18nProvider.js
import i18n from 'i18next';
import { useI18nextProvider, convertRaTranslationsToI18next } from 'ra-i18n-i18next';

const i18nInstance = i18n.use(
    resourcesToBackend(language => {
        if (language === 'fr') {
            return import(
                `ra-language-french`
            ).then(({ default: messages }) =>
                convertRaTranslationsToI18next(messages)
            );
        }
        return import(`ra-language-english`).then(({ default: messages }) =>
            convertRaTranslationsToI18next(messages)
        );
    })
);

export const useMyI18nProvider = () => useI18nextProvider({
    i18nInstance,
    availableLocales: [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'French' },
    ],
});
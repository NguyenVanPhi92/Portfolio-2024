import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HERO_EN from '../locales/en/hero.json'
import HERO_VI from '../locales/vi/hero.json'

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
}

export const resources = {
    en: {
        // namespace and value
        hero: HERO_EN
    },
    vi: {
        hero: HERO_VI
    }
}

// export const defaultNS = 'hero'

i18n.use(initReactI18next).init({
    resources,
    // default langue
    lng: 'vi',
    ns: ['hero'], // cac namespace dung i18n
    fallbackLng: 'vi', // khi không xác định đc ngôn ngữ gì thì sẽ chuyển về ngôn ngữ vi
    // defaultNS, // set namespace default
    interpolation: {
        escapeValue: false // react already safes from xss
    }
})

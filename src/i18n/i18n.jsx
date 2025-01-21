import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HERO_EN from '../locales/en/hero.json'
import ABOUT_EN from '../locales/en/about.json'
import CONTACT_EN from '../locales/en/contact.json'
import EDUCATION_EN from '../locales/en/education.json'
import EXPERIENCE_EN from '../locales/en/experience.json'
import INTEREST_EN from '../locales/en/interest.json'
import NAVBAR_EN from '../locales/en/navbar.json'
import PROJECT_EN from '../locales/en/project.json'
import TECHNOLOGIES_EN from '../locales/en/technologies.json'
//VI
import HERO_VI from '../locales/vi/hero.json'
import ABOUT_VI from '../locales/vi/about.json'
import CONTACT_VI from '../locales/vi/contact.json'
import EDUCATION_VI from '../locales/vi/education.json'
import EXPERIENCE_VI from '../locales/vi/experience.json'
import INTEREST_VI from '../locales/vi/interest.json'
import NAVBAR_VI from '../locales/vi/navbar.json'
import PROJECT_VI from '../locales/vi/project.json'
import TECHNOLOGIES_VI from '../locales/vi/technologies.json'

export const locales = { en: 'English', vi: 'Tiếng Việt' }
export const resources = {
  en: {
    // namespace and value
    about: ABOUT_EN,
    contact: CONTACT_EN,
    education: EDUCATION_EN,
    experience: EXPERIENCE_EN,
    hero: HERO_EN,
    interest: INTEREST_EN,
    navbar: NAVBAR_EN,
    project: PROJECT_EN,
    technologies: TECHNOLOGIES_EN
  },
  vi: {
    about: ABOUT_VI,
    contact: CONTACT_VI,
    education: EDUCATION_VI,
    experience: EXPERIENCE_VI,
    hero: HERO_VI,
    interest: INTEREST_VI,
    navbar: NAVBAR_VI,
    project: PROJECT_VI,
    technologies: TECHNOLOGIES_VI
  }
}

// export const defaultNS = 'hero'

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi', // default langue
  ns: ['about', 'contact', 'education', 'experience', 'hero', 'interest', 'navbar', 'project', 'technologies'], // cac namespace dung i18n
  fallbackLng: 'vi', // khi không xác định đc ngôn ngữ gì thì sẽ chuyển về ngôn ngữ vi
  // defaultNS, // set namespace default
  interpolation: { escapeValue: false } // react already safes from xss
})

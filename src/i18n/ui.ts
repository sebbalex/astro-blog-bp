import { LabelLangs, Langs, UILangs } from "../types/post";

export const languages: LabelLangs = {
  it: "Italian 🇮🇹",
  en: "English 🇺🇸",
};

export const defaultLang: Langs = "it";

export const ui: UILangs = {
  en: {
    "app.changeLocale": "Change language",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "blog.recent_text": "Recent articles",
    "blog.recent_subtext": "Most recent posts for bikepacking",
  },
  it: {
    "app.changeLocale": "Change language",
    "nav.home": "Acceuil",
    "nav.about": "À propos",
    "blog.recent_text": "Articoli recenti",
    "blog.recent_subtext": "Articoli più recenti per il bikepacking",
  },
} as const;

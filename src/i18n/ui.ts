import { LabelLangs } from "../types/post";

// export const languages = {
//   it: "Italiano",
//   en: "English",
// };
export const languages: LabelLangs = {
  it: "Italian 🇮🇹",
  en: "English 🇺🇸",
};

export const defaultLang = "it";

export const ui = {
  en: {
    "app.changeLocale": "Change language",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "blog.recent_text": "Recent articles",
    "blog.recent_subtext": "Most Recent Posts From ...",
  },
  it: {
    "app.changeLocale": "Change language",
    "nav.home": "Acceuil",
    "nav.about": "À propos",
    "blog.recent_text": "Articoli recenti",
    "blog.recent_subtext": "Articoli più recenti da ...",
  },
} as const;

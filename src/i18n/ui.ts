import { LabelLangs, Langs, UILangs } from "../types/post";

export const languages: LabelLangs = {
  it: "Italian 🇮🇹",
  en: "English 🇺🇸",
};

export const defaultLang: Langs = "it";

export const ui: UILangs = {
  en: {
    "app.changeLocale": "Change language",
    "blog.recent_text": "Recent articles",
    "blog.recent_subtext": "Most recent posts for bikepacking",
    "post.fromuser": "By",
    "post.published": "published",
    "post.specification": "Specification",
    "post.reasons": "Reasons",
    "post.reasons.tobuy": "To buy",
    "post.reasons.toavoid": "To avoid",
    "post.review": "Review",
    "post.button": "Buy",
    "footer.company.name": "ACME Industries Ltd.",
    "footer.company.desc": "Providing reliable tech since 1992",
    "footer.nav.pages": "Pages",
    "footer.nav.legal": "Legal",
    "footer.newsletter.label": "Enter your email addres",
    "footer.newsletter.button": "Subscribe",
  },
  it: {
    "app.changeLocale": "Change language",
    "blog.recent_text": "Articoli recenti",
    "blog.recent_subtext": "Articoli più recenti per il bikepacking",
    "post.fromuser": "Dall'utente",
    "post.published": "pubblicato il",
    "post.specification": "Specifiche tecniche",
    "post.reasons": "Motivazioni",
    "post.reasons.tobuy": "Per comprare",
    "post.reasons.toavoid": "Per evitare",
    "post.review": "Recensione",
    "post.button": "Acquista",
    "footer.company.name": "ACME Industries Ltd.",
    "footer.company.desc": "Providing reliable tech since 1992",
    "footer.nav.pages": "Pagine",
    "footer.nav.legal": "Privacy",
    "footer.newsletter.label":
      "Resta aggiornato, inserisci il tuo indirizzo email",
    "footer.newsletter.button": "Invia",
  },
} as const;

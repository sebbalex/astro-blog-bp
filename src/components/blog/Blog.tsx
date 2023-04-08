import { localizedData, indexData } from "../../data";
import { Card } from "./card";
import {
  HeroCarousel,
  HeroCarouselProps,
} from "./hero-carousel";
import { useTranslations } from "../../i18n/utils";
import { BlogProps, Langs } from "../../types/post";
import { defaultLang } from "../../i18n/ui";

export const getPosts = (l: string) => {
  const links: JSX.Element[] = [];
  const lang: Langs = l === "it" ? l : l === "en" ? "en" : defaultLang;

  for (const [i, {slug, ...v}] of Object.entries(localizedData[lang])) {
    links.push(<Card slug={getAbsoluteURL(lang, slug)} key={i} {...v} />);
  }
  return links;
};
export const getPostsForHero = (l: string) => {
  const slides: HeroCarouselProps = {};
  const lang: Langs = l === "it" ? l : l === "en" ? "en" : defaultLang;

  return Object.keys(localizedData[lang]).map((v, i) => {
    const idx = "slide" + i;
    const val = localizedData[lang][v];
    slides[idx] = {
      url: val.splash,
      title: val.title,
      description: val.description,
      cta: getAbsoluteURL(lang, val.slug),
    };

    return slides;
  });
};

function getAbsoluteURL(lang: Langs, slug: string): string {
  return `/${lang}/blog/${slug}`;
}

export default ({ lang }: BlogProps) => {
  const locale = { lang };
  const t = useTranslations(lang);

  return (
    <>
      <HeroCarousel {...getPostsForHero(locale.lang).at(0)} />
      {/* <HeroImage
        title={t("blog.title")}
        description={t("blog.desc")}
        url="/assets/images/blog-hero.webp"
        alt="Photo by Enric Cruz López: https://www.pexels.com/photo/bikes-parked-on-city-embankment-near-canal-and-old-buildings-on-cloudy-day-6039194/"
        ctaText="vai"
      /> */}
      <div className="container">
        <div className="py-10 text-center">
          <h2 className="min-w-full prose text-5xl pb-4">
            {t("blog.recent_text")}
          </h2>
          <h3 className="min-w-full prose prose-slate prose-md">
            {t("blog.recent_subtext")}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5 py-5 px-2 md:px-5">
          {getPosts(locale.lang)}
        </div>
      </div>
    </>
  );
};

export const head = {
  title: indexData.title,
  meta: [
    {
      name: "description",
      content: indexData.description,
    },
  ],
};

import type { HeroProps } from "./hero-image";

export interface HeroCarouselProps {
  [key: string]: HeroProps;
}

export const HeroCarousel = (items: HeroCarouselProps) => (
  <div className="carousel w-full">
    {Object.keys(items).map((v, i) => {
      const prev = items["slide" + (i - 1)]
        ? "#slide" + (i - 1)
        : "#slide" + (Object.keys(items).length - 1);
      const next = items["slide" + (i + 1)] ? "#slide" + (i + 1) : "#slide0";
      const { title, url, cta, description } = items[v];
      return (
        <div key={i} id={v} className="carousel-item relative w-full">
          <img src={url} className="object-cover h-96 w-full" alt={title} />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="hero-content text-center text-neutral-content">
              <a href={cta}>
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                  <p className="mb-5">{description}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={prev} className="btn btn-circle">
              ❮
            </a>
            <a href={next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      );
    })}
  </div>
);

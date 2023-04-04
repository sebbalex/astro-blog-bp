export interface HeroProps {
  url: string;
  alt?: string;
  title: string;
  description: string;
  ctaText?: string;
  cta?: string;
}

export const HeroImage = ({
  title,
  url,
  description,
  ctaText,
  cta,
}: HeroProps) => (
  <div className="hero h-96" style={{ backgroundImage: `url(${url})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5">{description}</p>
        {cta && ctaText && (
          <a className="btn btn-primary" href={cta}>
            {ctaText}
          </a>
        )}
      </div>
    </div>
  </div>
);

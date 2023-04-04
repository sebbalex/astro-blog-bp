import { CardProps } from "../../types/post";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Mail } from "../icons/mail";
import { Pinterest } from "../icons/pinterest";
import { Sharing } from "../icons/sharing";

export const Card = ({
  title,
  splash,
  alt,
  publish_date,
  author,
  description,
  slug,
  isNew,
  isTrending,
  tags,
}: CardProps) => (
  <div className="card w-96 bg-base-100 shadow-xl mb-5 md:mb-0">
    <a href={slug}>
      <figure>
        <img src={splash} alt={alt} />
      </figure>
    </a>
    <div className="card-body">
      <h2 className="card-title">
        <a href={slug}>{title}</a>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        {isTrending && <div className="badge badge-secondary">TRENDING</div>}
      </h2>
      <p>{description}</p>
      <div className="mt-3 mb-2 uppercase prose prose-slate prose-sm">
        {author} <span className="text-red-500 text-xl">&nbsp;-&nbsp;</span>{" "}
        {publish_date}
      </div>
      <div className="flex flex-row justify-end">
        <Facebook />
        <span className="mr-2" />
        <Instagram />
        <span className="mr-2" />
        <Pinterest />
        <span className="mr-2" />
        <Sharing />
        <span className="mr-2" />
        <Mail />
      </div>
      <div className="card-actions justify-end mt-3">
        {tags?.map((t,i) => (
          <div key={i} className="badge badge-outline">{t}</div>
        ))}
      </div>
    </div>
  </div>
);

import { Frontmatter } from "../../types/post";

export default (props: Frontmatter) => (
  <>
    <h1 className="text-3xl">{props.title}</h1>
    <h2 className="text-sm">
      By <a href="#">{props.username}</a> published {props.published_at}
    </h2>
    <h3 className="text-lg font-light">{props.subtitle}</h3>
  </>
);

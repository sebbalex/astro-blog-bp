import React from "react";
import Frontmatter from "../../../components/blog/frontmatter";
import { Rating } from "../../../components/blog/rating";
import { Back } from "../../../components/icons/back";
import { Cart } from "../../../components/icons/cart";
import { Facebook } from "../../../components/icons/facebook";
import { Instagram } from "../../../components/icons/instagram";
import { Mail } from "../../../components/icons/mail";
import { Pinterest } from "../../../components/icons/pinterest";
import { Sharing } from "../../../components/icons/sharing";
import all_data from "../../../data";
import { BlogProps, Post } from "../../../types/post";

// export const getDataFromSlug = routeLoader$(
//   ({ params: { slug }, error, locale }) => {
//     const lang: Langs =
//       locale() === "it" ? "it" : locale() === "en" ? "en" : "en";
//     const year = slug.match(/\d{4}$/)
//       ? [slug.match(/\d{4}$/)].toString()
//       : 2023;
//     const data = all_data[lang][year];
//     if (!data) throw error(404, "no data found!");
//     return data; //this must return serializable data!
//   }
// );

export default ({ lang, slug }: BlogProps) => {
  const data = all_data[lang];
  const {posts, frontmatter} = data.find((v) => v.slug === slug);
  return (
    <div className="p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col">
      <a href={`/${lang}/blog/`}>
        <div className="flex flex-row align-middle">
          <Back />
          <div
            className="flex pl-3"
            style={{ height: "36px", alignItems: "center" }}
          >
            {"Blog"}
          </div>
        </div>
      </a>
      <Frontmatter {...frontmatter} />
      <div id="social" className="flex space-x-1">
        <Facebook />
        <Instagram />
        <Pinterest />
        <Mail />
        <Sharing />
      </div>
      {posts.map((post, i) => (
        <React.Fragment key={i}>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <a key={post.id} href={post.slug}>
                <img src={post.image} alt={post.title} />
              </a>
            </figure>
            <div className="card-body">
              <a key={post.id} href={post.slug}>
                <h2 className="card-title pb-7">
                  {post.title}
                  {post.isNew && (
                    <div className="badge badge-secondary uppercase">new</div>
                  )}
                </h2>
                <p>{post.description}</p>
                <hr className="pt-5" />
                <h2 className="card-title">Specification</h2>
                <p>{post.specification}</p>
                <hr className="pt-7" />
                <h2 className="card-title justify-center">{post.title}</h2>
                <h3 className="flex font-medium justify-center">
                  {post.motto}
                </h3>
                <hr className="pt-7" />
                <h2 className="card-title">Reasons</h2>
                <h3 className="pt-2 font-medium">To buy</h3>
                <ul>
                  {post.pros.map((pro, i) => (
                    <li key={i}>✅ {pro}</li>
                  ))}
                </ul>
                <h3 className="pt-2 font-medium">To avoid</h3>
                <ul>
                  {post.cons.map((con, i) => (
                    <li key={i}>⭕️ {con}</li>
                  ))}
                </ul>
                <hr className="pt-5" />
                <h2 className="card-title">Review</h2>
                <Rating count={post.stars} />
                <p>{post.review}</p>
              </a>
              <div className="flex items-center pt-5">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={post.avatar}
                  alt={`avatar of ${post.title}`}
                />
                <div className="text-sm">
                  <p className="leading-none">{post.author}</p>
                  <p className="">{post.created_at}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                {post.tags.map((t,i) => (
                  <div key={i} className="badge badge-outline">{t}</div>
                ))}
              </div>
              <div className="card-actions justify-end">
                {post.cta && (
                  <>
                    <img
                      className="w-15 h-7 mt-4"
                      src="/assets/images/amazon.png"
                    />
                    <a href={post.cta} className="btn btn-primary">
                      <Cart />
                      Buy
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

// export const head: DocumentHead = ({ resolveValue }) => {
//   const data = resolveValue(getDataFromSlug);
//   return {
//     title: data.title,
//     meta: [
//       {
//         name: "description",
//         content: data.description,
//       },
//     ],
//   };
// };

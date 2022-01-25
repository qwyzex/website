import { useLoaderData, Link } from "remix";
import { getPost, getPosts } from "~/post";
import invariant from "tiny-invariant";
import RouteNav from "~/components/RouteNav";

import pageStyle from "~/styles/css/posts/page.css";

export let links = () => {
    return [{ rel: "stylesheet", href: pageStyle }];
};

export const loader = async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug);
};

export default function PostSlug() {
    const post = useLoaderData();
    const posts = useLoaderData();
    return (
        <section className="post-page">
            <head>
                <title>{post.title} | qwyzeX</title>
            </head>
            <RouteNav index={false} text="post" />
            <header className="post-header">
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <span>{post.date.replace(/T00\:00\:00\.000Z$/, "")}</span>
            </header>
            <div className="article-body">
                <article>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
            </div>
            <footer className="article-footer">
                {/* <ul className="share-links">
                    <li>
                        <a // twitter
                            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                            className="twitter-share-button twitter"
                            data-show-count="true"
                            target="_blank"
                        >
                            Tweet
                        </a>
                        <a // facebook
                            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                            className="twitter-share-button facebook"
                            data-show-count="true"
                            target="_blank"
                        >
                            Post
                        </a>
                        <a // wa
                            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                            className="twitter-share-button whatsapp"
                            data-show-count="true"
                            target="_blank"
                        >
                            Share
                        </a>
                    </li>
                </ul> */}
                {/* <div id="contribute">
                    <p>
                        Found A Problem? Fix It On GitHub! Fork And Create A Pull Request.
                    </p>
                    <a href="https://github.com/qwyzex/website" target="_blank">
                        GitHub Repo
                    </a>
                </div> */}
            </footer>
            {/* <CommentSection /> */}
        </section>
    );
}

export function ErrorBoundary({ error, params }) {
    // console.log(error.message);

    return (
        <>
            <head>
                <title>Post Not Found!</title>
            </head>
            <div>
                <h1>
                    Post <bg-red>Not Found</bg-red>!
                </h1>
                <div className="error root">
                    <div>
                        <p>Are you sure this is the right URL (slug) for the post?</p>
                        <p>
                            This doesn't seem to be a valid address. Please enter a valid
                            URL address, or go back to <Link to="/posts">POSTS PAGE</Link>{" "}
                            if you're unsure...
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

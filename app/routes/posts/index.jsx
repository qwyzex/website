import { useLoaderData, Link } from "remix";
import { getPosts } from "~/post";
import blogPostStyle from "~/styles/css/posts/posts.css";

export let grandparrent = "posts";

export let links = () => {
    return [{ rel: "stylesheet", href: blogPostStyle }];
};

export let meta = () => {
    return {
        title: "Blog Posts",
        description: "My Personal Blog Posts",
    };
};

export const loader = () => {
    return getPosts();
};

export default function Posts() {
    const posts = useLoaderData();

    return (
        <div className="page">
            <h1 className="title">My Posts</h1>
            <p className="cascade">All Post ({posts.length})</p>
            <ul className="posts-container">
                {posts
                    .sort(function (a, b) {
                        return a.id - b.id;
                    })
                    .reverse()
                    .map((p) => (
                        <li
                            key={p.slug}
                            className={p.tag}
                            title={`${p.title} | ${p.date.replace(
                                /T00\:00\:00\.000Z$/,
                                ""
                            )}`}
                        >
                            <Link to={p.slug} key={p.slug}>
                                <p>{p.title}</p>
                                <span key={p.slug}></span>
                            </Link>
                            <p key={p.date} className="date">
                                {p.date.replace(/T00\:00\:00\.000Z$/, "")}
                            </p>
                            <p key={p.desc} className="description">
                                {p.desc}
                            </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

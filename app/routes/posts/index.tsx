import { useLoaderData, Link } from "remix";
import { getPosts } from "~/post";
import blogPostStyle from "~/styles/css/posts/posts.css";

import type { LinksFunction, MetaFunction, LoaderFunction } from "remix";

export let links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: blogPostStyle }];
};

export let meta: MetaFunction = () => {
    return {
        title: "Blog Posts",
        description: "My Personal Blog Posts",
    };
};

export const loader: LoaderFunction = () => {
    return getPosts();
};

export default function Posts() {
    const posts = useLoaderData();

    interface PostMaps {
        slug: string;
        title: string;
        desc: string;
        tag?: string[];
        id: number;
        date: any;
    }

    return (
        <div className="page">
            <h1 className="title">My Posts</h1>
            <p className="cascade">All Post ({posts.length})</p>
            <ul className="posts-container">
                {posts
                    .sort(function (a: any, b: any) {
                        return a.id - b.id;
                    })
                    .reverse()
                    .map((p: PostMaps) => (
                        <li
                            key={p.slug}
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

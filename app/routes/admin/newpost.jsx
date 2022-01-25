import { useRef } from "react";
import { redirect, Form, useActionData, useTransition, Link, useLoaderData } from "remix";
import { createPost, getPosts } from "~/post";
import newStyle from "~/styles/css/admin/new.css";

export const loader = () => {
    return getPosts();
};

export let links = () => {
    return [
        {
            rel: "stylesheet",
            href: newStyle,
        },
    ];
};

export let meta = () => {
    return {
        title: "Create New Post",
        description: "Create New Post",
    };
};

export const action = async ({ request }) => {
    await new Promise((res) => setTimeout(res, 1000));

    const formData = await request.formData();

    const title = formData.get("title").replace(/"|'|\$|`|~|\\/g, "");
    const desc = formData.get("desc");
    const tag = formData.get("tag");
    const slug = formData
        .get("title")
        .toLowerCase()
        .replace(
            /!|@|#|\$|%|\^|&|\*|\(|\)|_|=|\+|\[|\]|{|}|\||\\|:|;|'|"|,|\.|<|>|\/|\?|`|~/g,
            ""
        )
        .replace(/\s/g, "-");
    const date = formData.get("date");
    const id = formData.get("id");
    const markdown = formData.get("markdown");

    const errors = {};
    if (!title) errors.title = true;
    if (!desc) errors.desc = true;
    if (!slug) errors.slug = true;
    if (!date) errors.date = true;
    if (!markdown) errors.markdown = true;

    if (Object.keys(errors).length) {
        return errors;
    }

    await createPost({ title, slug, tag, desc, date, id, markdown });

    return redirect("/admin/");
};

export default function NewPost() {
    const postsList = useLoaderData();
    const errors = useActionData();
    const transition = useTransition();
    const titleValue = useRef();

    return (
        <div className="new-post-form-container">
            <Link to="/admin" className="cascade">
                {"<"} ADMIN
            </Link>
            <hr />
            <h1>CREATE NEW POST</h1>
            <Form method="post" autoComplete="off" id="new-post-form">
                <div className="title">
                    <label>
                        Post Title: {errors?.title ? <em>Title is required</em> : null}
                    </label>
                    <input
                        autoFocus
                        type="text"
                        name="title"
                        id="titleInput"
                        ref={titleValue}
                        placeholder="Title"
                    />
                </div>
                <div className="id">
                    <label>Post ID: {errors?.id ? <em>ID is required</em> : null}</label>
                    <input type="text" name="id" value={postsList.length + 1} readOnly />
                </div>
                <div className="desc">
                    <label>
                        Post Description:{" "}
                        {errors?.desc ? <em>description is required</em> : null}
                    </label>
                    <input type="text" name="desc" placeholder="Describe Something" />
                </div>
                <div className="tag">
                    <label>Post Tag:</label>
                    <input type="text" name="tag" placeholder="special, other" />
                </div>
                <div className="date">
                    <label>
                        Post Date: {errors?.date ? <em>date is required</em> : null}
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="inputDate"
                        // value={new Date()}
                        // defaultValue={new Date()}
                    />
                </div>
                <div className="content">
                    <label htmlFor="markdown">
                        Markdown:{" "}
                        {errors?.markdown ? <em>Markdown is required</em> : null}
                    </label>
                    <textarea
                        id="markdown"
                        rows={20}
                        name="markdown"
                        placeholder={`# Title\n\n## Header\n\nList:\n* One\n* Two\n\n[Link](http://somewhere.idk)`}
                    />
                </div>
                <div className="submit">
                    <button type="submit">
                        {transition.submission ? "Creating..." : "Create Post"}
                    </button>
                </div>
            </Form>
        </div>
    );
}

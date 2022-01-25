import path from "path";
import fs from "fs-extra";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

const postsPath = path.join(__dirname, "..", "posts");

export async function getPosts() {
    const dir = await fs.readdir(postsPath);
    console.log(dir);
    return Promise.all(
        dir.map(async (filename) => {
            const file = await fs.readFile(path.join(postsPath, filename));
            const { attributes, body } = parseFrontMatter(file.toString());
            return {
                title: attributes.title,
                slug: filename.replace(/\.md$/, ""),
                date: attributes.date,
                desc: attributes.desc,
                tag: attributes.tag,
                id: attributes.id,
            };
        })
    );
}

export async function getPost(slug) {
    const filepath = path.join(postsPath, slug + ".md");
    const file = await fs.readFile(filepath);
    const { attributes, body } = parseFrontMatter(file.toString());
    const html = marked(body);

    return {
        slug,
        html,
        desc: attributes.desc,
        tag: attributes.tag,
        date: attributes.date,
        title: attributes.title,
        id: attributes.id,
    };
}

// ...
export async function createPost(post) {
    const md = `---\ntitle: "${post.title}"\ndate: ${post.date}\nid: ${post.id}\ndesc: ${post.desc}\ntag: ${post.tag}\n---\n\n${post.markdown}`;
    await fs.writeFile(path.join(postsPath, post.slug + ".md"), md);
    return getPost(post.slug);
}

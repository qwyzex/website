---
title: "Code Test"
date: 2022-01-08
id: 2
desc: Code Test. I will testing a short, medium, and large code. Some may become repetitive, like ME! Code Test. I will testing a short, medium, and large code. Some may become repetitive. 
tag: test
---

## Code Test
Here we are going to map an array of document to a JSX,<br>
Here is the data: 

````
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
````

And we'll render it like this: 

````
<ChildBackNav lvl="2" gp={grandparrent} />
<header className="post-header">
    <h1>{post.title}</h1>
    <p>{post.desc}</p>
    <span className="cascade">
        {post.date.replace(/T00\:00\:00\.000Z$/, "")}
    </span>
</header>
<hr />
<article>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
</article>
````

`const foo = "bar"`

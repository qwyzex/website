import path from 'path';
import parseFrontMatter from 'front-matter';
// @ts-ignore
import fs from 'fs-extra';
// @ts-ignore
import { marked } from 'marked';

const postsPath = path.join(__dirname, '..', 'posts');

export async function getPosts() {
	const dir = await fs.readdir(postsPath);
	console.log(dir);
	return Promise.all(
		dir.map(async (filename: string) => {
			const file = await fs.readFile(path.join(postsPath, filename));
			const { attributes, body }: any = parseFrontMatter(file.toString());
			return {
				title: attributes.title,
				slug: filename.replace(/\.md$/, ''),
				date: attributes.date,
				desc: attributes.desc,
				tag: attributes.tag,
				id: attributes.id,
			};
		}),
	);
}

export async function getPost(slug: string) {
	const filepath = path.join(postsPath, slug + '.md');
	const file = await fs.readFile(filepath);
	const { attributes, body }: any = parseFrontMatter(file.toString());
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
export async function createPost(post: any) {
	const md = `---\ntitle: "${post.title}"\ndate: ${post.date}\nid: ${post.id}\ndesc: "${post.desc}"\ntag: "${post.tag}"\n---\n\n${post.markdown}`;
	await fs.writeFile(path.join(postsPath, post.slug + '.md'), md);
	return getPost(post.slug);
}

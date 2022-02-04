import { useLoaderData, Link } from 'remix';
import { getPost } from '~/post';
import invariant from 'tiny-invariant';
import RouteNav from '~/components/RouteNav';

import pageStyle from '~/styles/css/posts/page.css';
import FillText from '~/components/FillText';

import type { LinksFunction } from 'remix';

export let links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: pageStyle }];
};

export const loader = async ({ params }: any) => {
	invariant(params.slug, 'expected params.slug');
	return getPost(params.slug);
};

export default function PostSlug() {
	const post = useLoaderData();

	return (
		<section className='post-page'>
			<head>
				<title>{post.title} | qwyzeX</title>
			</head>
			<RouteNav text='post' href='/posts' />
			<header className='post-header'>
				<h1>{post.title}</h1>
				<p>{post.desc}</p>
				<span>{post.date.replace(/T00\:00\:00\.000Z$/, '')}</span>
			</header>
			<div className='article-body'>
				<article>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</article>
			</div>
			<footer className='article-footer'></footer>
			{/* <CommentSection /> */}
		</section>
	);
}

export function ErrorBoundary({ error, params }: any) {
	// console.log(error.message);

	return (
		<>
			<head>
				<title>Post Not Found!</title>
			</head>
			<div>
				<h1>
					Post <FillText color='red'>Not Found</FillText>!
				</h1>
				<div className='error root'>
					<div>
						<p>
							Are you sure this is the right URL (slug) for the
							post?
						</p>
						<p>
							This doesn't seem to be a valid address. Please
							enter a valid URL address, or go back to{' '}
							<Link to='/posts'>POSTS PAGE</Link> if you're
							unsure...
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

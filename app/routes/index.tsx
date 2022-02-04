import { Link } from 'remix';
import { useEffect, useState } from 'react';
import indexStyle from '~/styles/css/index/index.css';

import type { MetaFunction } from 'remix';
import type { LinksFunction } from 'remix';
import ColorText from '~/components/ColorText';
import LoadingText from '~/components/LoadingText';

export let links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: indexStyle }];
};

export let meta: MetaFunction = () => {
	return {
		title: 'qwyzeX',
		description: 'qwyzeX Personal Portofolio Blog Site',
	};
};

export default function Index() {
	return (
		<main>
			<Landing />
			<LandingProjects />
		</main>
	);
}

const Landing = () => {
	return (
		<div className='page landing split'>
			<div className='message' id='welcome'>
				<div className='welcome-text'>
					<p className='cascade absolute random'>{'<Welcome />'}</p>
					<h1 className=''>
						My name is, <ColorText ex='accent'>qwyzeX</ColorText>
					</h1>
					<p>
						I'm a 14y/o Solo Web Developer from{' '}
						<ColorText ex='accent'>Indonesia</ColorText>. Currently
						getting into <ColorText ex='accent'>economy</ColorText>,
						love cat :3
					</p>
				</div>
				<div className='learn-more-cont'>
					<Link to='/profile' id='learn-more'>
						ABOUT ME
					</Link>
					<Link to='/profile/skills' id='skills'>
						SKILLS
					</Link>
				</div>
			</div>
			<div className='picture'>
				<img id='index-doodle' src='/images/svg/index-4.svg' />
				<p className='cascade terminal'>web dev / writer / student</p>
			</div>
		</div>
	);
};

const LandingProjects = () => {
	const [landingProjectsData, setLandingProjectsData]: any[] = useState(null);
	
	useEffect(() => {
		async function fetchProjects() {
			const res = await fetch('/api/projects');
			const data = await res.json();
			setLandingProjectsData(data);

			// debug
			/* console.log(res);
			console.log(data); */
		}
		fetchProjects();
	}, []);

	return (
		<div className='landing-projects'>
			<h1>LATEST PROJECT</h1>
			<img src='/images/svg/triangle.svg' className='triangle-1' />
			<img src='/images/svg/triangle.svg' className='triangle-2' />
			<ul>
				{landingProjectsData ? (
					landingProjectsData.slice(0, 2).map((p: any) => (
						<li key={p.codename}>
							<div key={p.codename} className='project-info'>
								<h3 key={p.name}>{p.name}</h3>
								<p key={p.desc}>{p.desc}</p>
								<span className='cascade' key={p.date}>
									{p.date}
								</span>
								<a href={`/gallery#${p.codename}`}>
									<span></span>
								</a>
							</div>
							<div key={p.repo} className='project-links'>
								{p.demo ? (
									<a
										href={p.demo}
										key={p.demo}
										target='_blank'
									>
										DEMO
									</a>
								) : null}

								<a href={p.repo} key={p.repo} target='_blank'>
									REPO
								</a>
							</div>
						</li>
					))
				) : (
					<LoadingText />
				)}
			</ul>
			<div className='gallery-redirect'>
				<Link to='/gallery' className='cool'>
					...MORE
				</Link>
			</div>
		</div>
	);
};

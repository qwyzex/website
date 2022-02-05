import { useState, useEffect } from 'react';
import galleryStyle from '~/styles/css/gallery/gallery.css';

import { MetaFunction, LinksFunction } from 'remix';
import Loading from '~/components/Loading';

const Gallery = () => {
	return (
		<div className='gallery-container'>
			<h1>GALLERY</h1>
			<div className='projects'>
				<h2 className='cascade'>// Projects</h2>
				<section>
					<GalleryProjects />
				</section>
			</div>
		</div>
	);
};

const GalleryProjects = () => {
	const [projectData, setProjectData]: any[] = useState(null);

	useEffect(() => {
		async function fetchProject() {
			const res = await fetch('/api/projects');
			console.log(res);
			const data = await res.json();
			console.log(data);
			setProjectData(data);
		}
		fetchProject();
	}, []);

	return (
		<>
			{projectData &&
				projectData.map(
					(
						project: any, // listed projects
					) => (
						<div
							key={project.codename}
							id={project.codename}
							className={`card ${
								project.type === 'big'
									? 'big'
									: project.type === 'medium'
									? 'medium'
									: 'mini'
							}`}
						>
							<header>
								<h3 key={project.name}>{project.name}</h3>
								<p
									key={project.lang}
									className='cascade language-wrapper'
								>
									{project.lang.map((l: any) => (
										<p key={l}>{l}</p>
									))}
								</p>
								<p key={project.desc}>{project.desc}</p>
								<a
									key={project.repo}
									className='source-code fill'
									target='_blank'
									href={project.repo}
								>
									<span></span>
								</a>
							</header>
							<hr />
							<div
								key={project.about}
								className='description-wrapper'
							>
								{project.about.map((l: any) => (
									<p className='description-items'>
										{l}
									</p>
								))}
							</div>
							<footer
								className={
									project.type === 'big'
										? 'big'
										: project.type === 'medium'
										? 'medium'
										: 'mini'
								}
							>
								{project.demo && (
									<a
										target='_blank'
										key={project.demo}
										href={project.demo}
									>
										&#9656;
									</a>
								)}
								<span
									className='project-type'
									key={project.type}
								>
									{project.type === 'big'
										? 'big'
										: project.type === 'medium'
										? 'med'
										: 'mini'}{' '}
									<p>Project</p>
								</span>
								<p
									className={project.demo ? 'hasDemo' : ''}
								>
									{project.date}
								</p>
							</footer>
						</div>
					),
				)}
			{!projectData && <Loading fixed text />}
		</>
	);
};

export let links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: galleryStyle }];
};

export let meta: MetaFunction = () => {
	return {
		title: 'Gallery',
		description: "qwyzeX's Gallery.",
	};
};

export default Gallery;

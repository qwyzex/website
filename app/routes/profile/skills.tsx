import skillsStyle from '~/styles/css/profile/skills/skills.css';
import { skillsQuery } from '~/data/skillsQuery';
import RouteNav from '../../components/RouteNav';
import { useEffect, useState } from 'react';
import LoadingText from '~/components/LoadingText';

export let links = () => {
	return [{ rel: 'stylesheet', href: skillsStyle }];
};

export let meta = () => {
	return {
		title: 'Skills',
		description: 'Skills I have.',
	};
};

export interface SkillsDataType {
	name?: string;
	bg?: string;
	img?: string;
	filter?: string;
	shadow?: string;
	better?: boolean;
	title?: string;
	desc?: string;
}

const Skills = () => {
	const [skillsData, setSkillsData]: any[] = useState(null);
	const [nonTechSkillsData, setNonTechSkillsData]: any[] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('/api/skills');
			const data = await res.json();
			setSkillsData(data);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('/api/nontechskills');
			const data = await res.json();
			setNonTechSkillsData(data);
		}
		fetchData();
	}, []);

	// components
	const SkillsList = () => {
		return (
			<div className='skills-list-container'>
				<ul className='skills-list' id='skills'>
					{skillsData &&
						skillsData
							.filter((sk: any) => {
								return sk.master === true;
							})
							.map((skill: SkillsDataType) => (
								<li
									className='skills-item'
									key={skill.name}
									style={{ background: skill.bg }}
								>
									<object
										data={skill.img}
										key={skill.img}
										style={{
											filter: skill.filter,
											boxShadow: skill.shadow,
										}}
									></object>
									<p key={skill.name}>{skill.name}</p>
								</li>
							))}
				</ul>
			</div>
		);
	};

	const SkillsToLearn = () => {
		return (
			<div className='skills-to-learn-container'>
				<h2>SKILLS TO LEARN</h2>
				<ul className='skills-to-learn' id='skills-to-learn'>
					{skillsData &&
						skillsData
							.filter((sk: any) => sk.master !== true)
							.map((skill: any) => (
								<li
									key={skill.name}
									className={skill.better ? 'better' : ''}
								>
									<p key={skill.name}>{skill.name}</p>
									<object
										key={skill.img}
										data={skill.img}
									></object>
									<object
										className='background'
										data={skill.img}
									></object>
								</li>
							))}
				</ul>
			</div>
		);
	};

	const SkillsGeneral = () => {
		return (
			<div className='non-tech-skills-container'>
				<h2>NON-TECH GENERAL SKILLS</h2>
				<ul className='non-tech-skills'>
					{nonTechSkillsData &&
						nonTechSkillsData.map((skill: any) => (
							<li
								key={skill.title}
								className='non-tech-skills-item'
							>
								<h4 key={skill.title}>{skill.title}</h4>
								<p key={skill.desc}>{skill.desc}</p>
							</li>
						))}
				</ul>
			</div>
		);
	};

	return (
		<div className='skills-container'>
			<RouteNav text='profile' href='/profile' />
			{skillsData && nonTechSkillsData ? (
				<>
					<article className='summary'>
						<h1 className='skills-title'>MY SKILLS</h1>
						<p>
							Most of my "SKILLS" I put here is in technology or
							web development category.
						</p>
					</article>
					<SkillsList />
					<SkillsToLearn />
					<SkillsGeneral />
				</>
			) : (
				<LoadingText text='Loading Data...' />
			)}
		</div>
	);
};

export default Skills;

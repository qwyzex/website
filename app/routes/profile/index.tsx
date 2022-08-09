import MoreOthers from '~/components/MoreOthers';
import moreOthersStyle from '~/styles/css/components/MoreOthers.css';
import profileStyle from '~/styles/css/profile/profile.css';
import ColorText from '~/components/ColorText';

import { MetaFunction, LinksFunction } from 'remix';

export let links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: profileStyle },
		{ rel: 'stylesheet', href: moreOthersStyle },
	];
};

export let meta: MetaFunction = () => {
	return {
		title: 'Profile',
		description: 'Profile about the author.',
	};
};

const Profile = () => {
	const pfp = '/images/essentials/pfp8.jpg';

	const RandomDiv = () => {
		return <div className='randomDiv'></div>;
	};

	return (
		<div className='profile-container'>
			<RandomDiv />
			<div className='pfp-container'>
				<img src={pfp} alt='profile-picture' />
				<div className='box'></div>
				<div className='box'></div>
			</div>
			<h1>About Me</h1>
			<Texts />
			<div className='custom-MoreOthers-wrapper'>
				<MoreOthers
					data={[
						{ name: 'about', url: 'about' },
						{ name: 'skills', url: 'skills' },
						{ name: 'education', url: 'education' },
						{ name: 'actual stuff', url: 'stuff' },
					]}
				/>
			</div>
		</div>
	);
};

const Texts = () => {
	return (
		<>
			<p>
				My name is{' '}
				<ColorText bold ex='accent'>
					Ihsan Fashbir Danurrahardjo
				</ColorText>
				, my friends usually call me Ihsan. I am a web-developer from{' '}
				<ColorText bold ex='accent'>
					Indonesia
				</ColorText>
				.
			</p>
			<p>
				I love{' '}
				<ColorText bold ex='accent'>
					Math
				</ColorText>
				, Geography, Economy, Video Games, Design, Writing, Drawing
				(sketch), Video Editing, Movie and Music. I'm born in Metro,
				Lampung, on September 1st 2007. My hobbies and things that I
				love is frequently changes. Ranging from Art, Sports,
				Entertainment to Programming.
			</p>
			<p>
				Didn't really watch anime lately (as of summer 2022), but that
				doesn't mean I don't like it... My favorite video games genre is
				RPG, wether it's turn-based, roguelike, or hack n' slash. But I
				don't like a certain types of MMORPG.
			</p>
			<p>
				Schools and private tutoring didn't really improve my English.
				In fact, I get almost of my{' '}
				<ColorText bold ex='accent'>
					English knowledge
				</ColorText>{' '}
				from Video Games, Movies, Music and Memes. I also have a very
				high curiosity. Always want to know more and explore something
				that I never discover before. I'm a popular kid at my school if
				I may say. Competing in several{' '}
				<ColorText bold ex='accent'>
					Math's Olympic
				</ColorText>
				, experienced on Scouts (Pramuka) Events and Contests, have a
				good leadership skill.
			</p>
			<p>
				I want to be a software engineer, economic consultant, artist,
				and a music producer.
			</p>
		</>
	);
};

export default Profile;

import { json } from 'remix';
import type { LoaderFunction } from 'remix';

export interface SkillsListType {
	name: string;
	master: boolean;
	img: string;
	better?: boolean;
	bg?: string;
	shadow?: string;
	filter?: string;
}

const data: SkillsListType[] = [
	{
		name: 'React',
		master: true,
		img: '/images/svg/tech/react.svg',
		bg: 'rgb(27, 58, 116)',
	},
	{
		name: 'NodeJS',
		master: true,
		img: '/images/svg/tech/nodejs-2.svg',
		bg: 'greenyellow',
	},
	{
		name: 'HTML',
		master: true,
		img: '/images/svg/tech/html.svg',
		bg: 'rgb(255, 102, 46)',
	},
	{
		name: 'CSS',
		master: true,
		img: '/images/svg/tech/css.svg',
		bg: 'royalblue',
	},
	{
		name: 'SASS',
		master: true,
		img: '/images/svg/tech/sass.svg',
		bg: 'pink',
	},
	{
		name: 'JavaScript',
		master: true,
		img: '/images/svg/tech/javascript.svg',
		bg: 'yellow',
		shadow: '0.3rem 0.3rem 0.6rem #16132060',
	},
	{
		name: 'Git / GitHub',
		master: true,
		img: '/images/svg/tech/git.svg',
		bg: '#f5f5f5',
	},
	{
		name: 'Remix',
		master: true,
		img: '/images/svg/tech/remix-icon.svg',
		bg: 'rgb(34, 34, 34)',
		filter: 'drop-shadow(0 0 0.4rem rgb(8, 114, 214))',
	},
	{
		name: 'NextJS',
		master: true,
		img: '/images/svg/tech/nextjs.svg',
		bg: '#f5f5f5',
		better: true,
	},
	{
		name: 'Firebase',
		master: true,
		img: '/images/svg/tech/firebase.svg',
		bg: '#f8df8b',
		better: true,
	},
	//
	{
		name: 'Python',
		master: false,
		img: '/images/svg/tech/python.svg',
		bg: 'linear-gradient(280deg, #347ab4, #ffca1d)',
	},
	// {
	// 	name: 'Tailwind CSS',
	// 	master: false,
	// 	img: '/images/svg/tech/tailwind.svg',
	// 	bg: 'lightblue',
	// },
	{
		name: 'Laravel',
		master: false,
		img: '/images/svg/tech/laravel.svg',
	},
	{
		name: 'Angular',
		master: false,
		img: '/images/svg/tech/angular.svg',
	},
	{
		name: 'Vue',
		master: false,
		img: '/images/svg/tech/vue.svg',
	},
	{
		name: 'Svelte',
		master: false,
		img: '/images/svg/tech/svelte.svg',
		better: true,
	},
	{
		name: 'MongoDB',
		master: false,
		img: '/images/svg/tech/mongodb-icon.svg',
	},
	{
		name: 'MySQL',
		master: false,
		img: '/images/svg/tech/mysql.svg',
	},
	{
		name: 'C / C++',
		master: false,
		img: '/images/svg/tech/cpp.svg',
	},
	{
		name: 'PHP',
		master: false,
		img: '/images/svg/tech/php.svg',
	},
	{
		name: 'Ruby',
		master: false,
		img: '/images/svg/tech/ruby-on-rails.svg',
	},
];

export const loader: LoaderFunction = () => {
	return json(data);
};

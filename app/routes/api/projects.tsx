import { json } from 'remix';

export interface ProjectType {
	name: string;
	codename: string;
	desc: string;
	lang: string[];
	about?: string[];
	demo?: string;
	repo?: string;
	date: string;
	type: string;
	index: number;
}

const data: ProjectType[] = [
	{
		name: 'AXC',
		codename: 'attemp-x',
		desc: 'Better Than AzCHA',
		lang: ['NextJS', 'React', 'Firebase'],
		about: [
			"This is my latest (as of early 2022) public chat app. AXC stands for 'Attemp-X Chat app'. AXC is far better than my previous chat app, AzCHA on almost everything.",
			`It has account information panel, changelog page, about section, bug report accessibility (which just literally sends you to github Issue), and multiple (two, for now) login methods : Google and Manual Email n' Password`,
		],
		demo: 'https://axch.vercel.app',
		repo: 'https://github.com/qwyzex/axc',
		date: '2022-1-10',
		type: 'big',
		index: 3,
	},
	{
		name: 'AzCHA',
		codename: 'attemp-zero',
		desc: 'Chat App',
		lang: ['React', 'NodeJS', 'Firebase'],
		about: [
			"AzCHA stands for 'Attemp-Zero CHat App'. Zero comes from index[0], a JavaScript Array Reference. As this is my first Web App (even though not really maintained), I'm so happy finally have one.",
			'This app is public chat, no private head-to-head chat feature (not yet, or never will). Initially started on 13th October 2021, but actually working on the end of the year',
		],
		demo: 'https://azcha.netlify.app',
		repo: 'https://github.com/qwyzex/AzCHA',
		date: '2021-10-13',
		type: 'medium',
		index: 2,
	},
	{
		name: 'qxBash',
		codename: 'qxbash',
		lang: ['Bash'],
		desc: 'Bash shell dotfiles',
		about: [`Custom Bash Terminal dotfiles and Prompt`],
		repo: 'https://github.com/qwyzex/qxBash',
		date: '2021-9-5',
		type: 'mini',
		index: 1,
	},
];

export const loader = () => {
	return json(data);
};

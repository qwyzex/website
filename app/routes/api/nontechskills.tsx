import { json } from 'remix';
import type { LoaderFunction } from 'remix';

const data = [
	{
		title: 'Draw (sketch)',
		desc: "I hate coloring. That's it. I don't receive opinion.",
	},
	{
		title: 'Writing',
		desc: 'I never actually publish a book, but I already had a multi-million dollar startup idea in my fking head rn',
	},
	{
		title: 'Video Editing',
		desc: "Yes, I kind of can do that in a way my self able to do it, It's just the hardware that doesn't really scale with me...",
	},
	{
		title: 'English',
		desc: "Of course... you wouldn't see a thing here if I barely understand English lmao",
	},
	{
		title: 'Math',
		desc: "Well, I don't want to say that I'm good at math. But this is more of a something that I love tbh",
	},
];

export const loader: LoaderFunction = () => {
	return json(data);
};

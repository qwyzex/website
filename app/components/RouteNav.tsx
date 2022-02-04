import { Link } from 'remix';

export interface RouteNavProps {
	lvl?: number;
	href: string | string[];
	text: string | Array<string>;
}

export default function RouteNav(props: RouteNavProps) {
	if (props.lvl === 3) {
		return <RouteNavThree href={props.href} text={props.text} />;
	} else {
		return <RouteNavTwo href={props.href} text={props.text} />;
	}
}

export const RouteNavTwo = (props: RouteNavProps) => {
	return (
		<div className='route-nav'>
			<Link to='/'>Home</Link>
			&#9656;
			{/* @ts-ignore */}
			<Link to={props.href}>{props.text}</Link>
		</div>
	);
};

export const RouteNavThree = (props: RouteNavProps) => {
	return (
		<div className='route-nav'>
			<Link to='/'>HOME</Link>
			&#9656;
			<Link to={props.href[0]}>{props.text[0]}</Link>
			&#9656;
			<Link to={props.href[1]}>{props.text[1]}</Link>
		</div>
	);
};

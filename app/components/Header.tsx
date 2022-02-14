import { Link, useLocation } from 'remix';
import { useState } from 'react';
import { MainLogo } from '../root';
import { AdminHeaderLink } from '../routes/admin';
import { Route, useRoutes } from 'react-router';

const Header = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const currentRoute = useLocation();

	interface ListItemLinkProps {
		to: string;
		title: string;
		regex: RegExp;
	}

	const ListItem = (props: ListItemLinkProps) => {
		const match = currentRoute.pathname.match(props.regex);

		return (
			<li
				className={`nav-items ${match ? 'active' : ''}`}
				style={{
					backgroundColor: currentRoute.pathname.match(props.regex)
						? '#ff003c'
						: '#00000000',
				}}
			>
				<Link to={props.to}>
					<p>{props.title}</p>
				</Link>
			</li>
		);
	};

	return (
		<header className='header' id='header'>
			<Link to='/'>
				<MainLogo />
			</Link>
			<nav className={`navigation ${openSidebar ? 'open' : ''}`}>
				<ul className='nav-list'>
					<ListItem regex={/^\/$/} to='/' title='Home' />
					<ListItem regex={/^\/posts/} to='/posts' title='Posts' />
					<ListItem
						regex={/^\/gallery/}
						to='/gallery'
						title='Gallery'
					/>
					<ListItem
						regex={/^\/profile/}
						to='/profile'
						title='Profile'
					/>
					<ListItem
						regex={/^\/contact/}
						to='/contact'
						title='Contact'
					/>
					<AdminHeaderLink>
						<Link to='/admin' className='admin'>
							<p>ADMIN</p>
						</Link>
					</AdminHeaderLink>
				</ul>
			</nav>
			<div className={`nav-button-cont ${openSidebar ? 'active' : ''}`}>
				<button
					className='nav-button'
					onClick={() => setOpenSidebar(!openSidebar)}
				></button>
				<div className='nav-button-image-cont'>
					<object
						data='/images/svg/triangle.svg'
						className={`nav-button-image ${
							openSidebar ? 'clicked' : ''
						}`}
					></object>
				</div>
			</div>
		</header>
	);
};

export default Header;

// @ts-nocheck
import { Link } from 'remix';
import { MainLogo } from '../root';
import { AdminHeaderLink } from '../routes/admin';

const Header = () => {
	function mobileNavbar() {
		let con = document.querySelector('.nav-button-cont');
		let img = document.querySelector('.nav-button-image');
		let nav = document.querySelector('.navigation');

		con.classList.toggle('active');
		img.classList.toggle('clicked');
		nav.classList.toggle('open');
	}

	return (
		<header className='header' id='header'>
			<Link to='/'>
				<MainLogo />
			</Link>
			<nav className='navigation'>
				<ul className='nav-list'>
					<li className='nav-items'>
						<Link to='/' className='essentials home'>
							<object
								data='/images/svg/home.svg'
								type='image/svg+xml'
							></object>
							<p>HOME</p>
						</Link>
					</li>
					<li className='nav-items'>
						<Link to='/posts' className='essentials posts'>
							<object
								data='/images/svg/newspaper.svg'
								type='image/svg+xml'
							></object>
							<p>POSTS</p>
						</Link>
					</li>
					<li className='nav-items'>
						<Link to='/gallery' className='essentials gallery'>
							<object
								data='/images/svg/bank.svg'
								type='image/svg+xml'
							></object>
							<p>GALLERY</p>
						</Link>
					</li>
					<li className='nav-items'>
						<Link to='/profile' className='essentials profile'>
							<object
								data='/images/svg/user.svg'
								type='image/svg+xml'
							></object>
							<p>PROFILE</p>
						</Link>
					</li>
					<li className='nav-items'>
						<Link to='/contact' className='essentials contact'>
							<object
								data='/images/svg/email.svg'
								type='image/svg+xml'
							></object>
							<p>CONTACT</p>
						</Link>
					</li>
					<AdminHeaderLink />
				</ul>
			</nav>
			<div className='nav-button-cont'>
				<button className='nav-button' onClick={mobileNavbar}></button>
				<div className='nav-button-image-cont'>
					<object
						data='/images/svg/triangle.svg'
						className='nav-button-image'
					></object>
				</div>
			</div>
		</header>
	);
};

export default Header;

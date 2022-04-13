import React from 'react';
import { NavLink } from 'react-router-dom';
import doorImg from '../images/door.jpg';


const Navbar = () => {
	
	return (
		<div id='' className='wrapper'>
			<header>
				<nav>
					<div className='menu-icon'>
						<i className='fa fa-bars fa-2x'></i>
					</div>
					<div className='logo'><img id='doorImg' src={doorImg} alt="" /></div>
					<div className='menu'>
						<ul>
							<li>
								<NavLink to={'/home'}>Home</NavLink>
							</li>
							<li>
								<NavLink to={'/adhd'}>ADHD</NavLink>
							</li>
							<li>
								<NavLink to={'/depression'}>Depression</NavLink>
							</li>
							<li>
								<NavLink to={'/anxiety'}>Anxiety</NavLink>
							</li>
							<li>
								<NavLink to={'/rage'}>Rage</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;

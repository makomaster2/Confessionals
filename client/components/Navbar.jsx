import React from 'react';
import { NavLink } from 'react-router-dom';
import doorImg from '../images/door.jpg';


const Navbar = () => {
	
	return (
		<div class='wrapper'>
			<header>
				<nav>
					<div class='menu-icon'>
						<i class='fa fa-bars fa-2x'></i>
					</div>
					<div class='logo'><img id='doorImg' src={doorImg} alt="" /></div>
					<div class='menu'>
						<ul>
							<li>
								<NavLink to={'/'}>Home</NavLink>
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

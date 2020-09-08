import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark indigo'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						IPL Dashboard
					</Link>

					<div className='collapse navbar-collapse' id='basicExampleNav'>
						<ul className='navbar-nav mr-auto'>
							{/* <li className='nav-item'>
							<a className='nav-link' href='#'>
								Features
							</a>
						</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;

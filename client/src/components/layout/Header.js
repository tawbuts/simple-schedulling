import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					Navbar
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='#'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
					</ul>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/schedule'>
								Add Schedule
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link className='nav-link' to='/login'>
								Login
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

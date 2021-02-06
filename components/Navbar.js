import React, { useState, useEffect } from 'react';

const Navbar = () => {

	const [isActive, setIsActive] = React.useState(false)

	return (
		<nav className='navbar d-flex justify-content-between align-items-center' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>
				<a href='/' className='navbar-item'>
					<img
						className="h-3"
						src="/logo.svg"
						alt='Logo'
					/>
				</a>
				<a
					onClick={() => {
						setIsActive(!isActive)
					}}
					role='button'
					className={`navbar-burger burger ${setIsActive ? 'is-active' : ''}`}
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'
				>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>
			<div id='navbarBasicExample' className={`navbar-menu ${setIsActive ? 'is-active' : ''}`}>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<a href='/' className='navbar-item'>
							Home
						</a>
						<a href='/' className='navbar-item'>
							Documentation
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
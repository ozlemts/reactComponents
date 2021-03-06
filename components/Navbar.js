import React, { useState, useEffect } from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

const Navbar = () => {

	const [isActive, setIsActive] = React.useState(false)
	const {theme,setTheme} = React.useContext(ThemeContext);

	return (
		<ThemeContext.Provider>
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
						<a href='/startupLogin' className='navbar-item'>
							Login
						</a>
						<div onClick={() => {setTheme(theme == "dark" ? "light" : "dark"); document.body.className = theme}}>
							<img src={theme == "dark" ? "/moon.svg" : "/sun.svg"} className={`h-2 p-025 bg-light rounded-circle`}/>
						</div>
					</div>
				</div>
			</div>
		</nav>
		</ThemeContext.Provider>
	)
}

export default Navbar
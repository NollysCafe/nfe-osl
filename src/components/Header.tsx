import React from 'react'

import '../styles/components/header.scss'

// Components
import Navbar from './Navbar'
import Logo from './Logo'
import { FaBars, FaX } from 'react-icons/fa6'

export default function Header(): React.ReactElement {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

	return (
		<header className='header' aria-label='Main Header'>
			<div className='content'>
				<Logo />

				{/* Desktop Navbar */}
				<nav className='desktop-navbar' aria-label='Desktop Navigation' children={<Navbar />} />

				{/* Mobile Menu Toggle */}
				<button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close Menu' : 'Open Menu'} aria-expanded={menuOpen} aria-controls='mobile-navbar'>
					{menuOpen ? <FaX /> : <FaBars />}
				</button>
			</div>

			{menuOpen && <nav id='mobile-navbar' className='mobile-navbar' aria-label='Mobile Navigation' children={<Navbar closeMenu={() => setMenuOpen(false)} />} />}
		</header>
	)
}

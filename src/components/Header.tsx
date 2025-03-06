import React from 'react'

import '../styles/components/header.scss'

// Components
import Navbar from './Navbar'
import Logo from './Logo'
import { FaBars, FaX } from 'react-icons/fa6'

export default function Header(): React.ReactElement {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

	return (
		<header className='header'>
			<div className='content'>
				<Logo />

				{/* Desktop Navbar */}
				<nav className='desktop-navbar' children={<Navbar />} />

				{/* Mobile Menu Toggle */}
				<button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle Menu'>{menuOpen ? <FaX /> : <FaBars />}</button>
			</div>

			{menuOpen && <nav className='mobile-navbar' children={<Navbar closeMenu={() => setMenuOpen(false)} />} />}
		</header>
	)
}

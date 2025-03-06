import React from 'react'

import '../styles/components/navbar.scss'

// Components
import { NavLink } from 'react-router-dom'

interface NavbarProps {
	closeMenu?: () => void
}

export default function Navbar({ closeMenu }: NavbarProps): React.ReactElement {
	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'License', path: '/license' },
		{ name: 'FAQ', path: '/faq' },
		{ name: 'Compare', path: '/compare' },
		{ name: 'Contact', path: '/contact' }
	]

	return (
		<ul className='navbar-links'>
			{navLinks.map((link) => (
				<li key={link.path}>
					<NavLink to={link.path} onClick={closeMenu}>
						{link.name}
					</NavLink>
				</li>
			))}
		</ul>
	)
}

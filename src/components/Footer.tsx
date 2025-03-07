import React from 'react'

import '../styles/components/footer.scss'

// Components
import { Link } from 'react-router-dom'
import { FaGithub, FaXTwitter, FaPatreon, FaEnvelope, FaRegCopyright } from 'react-icons/fa6'
import { SiBuymeacoffee, SiGithubsponsors } from 'react-icons/si'

export default function Footer(): React.ReactElement {
	return (
		<footer className='footer' aria-label='Site Footer'>
			<div className='content'>
				<nav className='links' aria-label='Footer Navigation'>
					<Link to='/explore'>Explore Repos</Link>
					<Link to='/compliance'>Compliance Test</Link>
				</nav>

				<div className='social'>
					<a href='https://github.com/nollyscafe' target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaGithub /></a>
					<a href='https://x.com/nollys_cafe' target='_blank' rel='noopener noreferrer' aria-label='Twitter/X'><FaXTwitter /></a>
					<a href='https://patreon.com/_nolly' target='_blank' rel='noopener noreferrer' aria-label='Patreon'><FaPatreon /></a>
					<a href='https://buymeacoffee.com/nolly.cafe' target='_blank' rel='noopener noreferrer' aria-label='Buy Me A Coffee'><SiBuymeacoffee /></a>
					<a href='https://github.com/sponsors/thenolle' target='_blank' rel='noopener noreferrer' aria-label='GitHub Sponsors'><SiGithubsponsors /></a>
					<a href='mailto:nolly.berrebi@gmail.com' aria-label='Email'><FaEnvelope /></a>
				</div>
			</div>

			<p className='copyright'><FaRegCopyright /> {new Date().getFullYear()} <b>Nolly's Cafe</b>. All Rights Reserved.</p>
		</footer>
	)
}

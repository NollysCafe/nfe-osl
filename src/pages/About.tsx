import React from 'react'

// Components
import { Link } from 'react-router-dom'

export default function About(): React.ReactElement {
	return (
		<main className='page about'>
			<h1>About Page</h1>
			<Link to='/'>Home</Link>
			<Link to='/404'>404</Link>
		</main>
	)
}

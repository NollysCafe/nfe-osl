import React from 'react'

// Components
import { Link } from 'react-router-dom'

export default function Home(): React.ReactElement {
	return (
		<main className='page home'>
			<h1>Home Page</h1>
			<Link to='/about'>About</Link>
			<Link to='/404'>404</Link>
		</main>
	)
}

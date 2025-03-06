import React from 'react'

// Components
import { Link } from 'react-router-dom'

export default function NotFound(): React.ReactElement {
	return (
		<main className='page not-found'>
			<h1>404</h1>
			<h3>Page not found</h3>
			<Link to='/'>Go back to home</Link>
		</main>
	)
}

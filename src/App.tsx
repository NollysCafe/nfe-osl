import React from 'react'

// Components
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function App(): React.ReactElement {
	return (
		<Routes>
			<Route path='/' element={<main><h1>Home Page</h1><Link to='/about'>About</Link><Link to='/404'>404</Link></main>} />
			<Route path='/about' element={<main><h1>About Page</h1><Link to='/'>Home</Link><Link to='/404'>404</Link></main>} />
			<Route path='*' element={<main><h1>404</h1><h3>Page not found</h3><Link to='/'>Go back to home</Link></main>} />
		</Routes>
	)
}

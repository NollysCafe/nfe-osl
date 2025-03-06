import React from 'react'

// Components
import { Route, Routes } from 'react-router-dom'

// Views
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App(): React.ReactElement {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

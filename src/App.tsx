import React from 'react'

// Components
import { Route, Routes } from 'react-router-dom'

// Views
import Home from './pages/Home'
import License from './pages/License'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'

export default function App(): React.ReactElement {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/license' element={<License />} />
			<Route path='/faq' element={<FAQ />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

import React from 'react'

// Components
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Views
import Home from './pages/Home'
import RepoExplorer from './pages/RepoExplorer'
import License from './pages/License'
import LicenseGenerator from './pages/LicenseGenerator'
import FAQ from './pages/FAQ'
import Comparison from './pages/Comparison'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App(): React.ReactElement {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<RepoExplorer />} />
				<Route path='/license' element={<License />} />
				<Route path='/license/:version' element={<License />} />
				<Route path='/generate' element={<LicenseGenerator />} />
				<Route path='/faq' element={<FAQ />} />
				<Route path='/compare' element={<Comparison />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	)
}

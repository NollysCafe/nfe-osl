import React from 'react'

import '../styles/pages/home.scss'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home(): React.ReactElement {
	return (
		<>
			<Header />

			<main className='page home'>
				<Hero />
			</main>
		</>
	)
}

import React from 'react'

import '../styles/pages/home.scss'

// Components
import Hero from '../components/Hero'

export default function Home(): React.ReactElement {
	return (
		<main className='page home' aria-label='Home Page'>
			<Hero aria-label='Hero Section' />
		</main>
	)
}

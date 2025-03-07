import React from 'react'
import * as homeContent from '../data/homeContent'

import '../styles/pages/home.scss'

// Components
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import UsageTracker from '../components/UsageTracker'

export default function Home(): React.ReactElement {
	return (
		<main className='page home' aria-label='Home Page'>
			<Hero aria-label='Hero Section' />
			<UsageTracker />

			<section className='features'>
				<h2>🔹 Why Choose NFE-OSL?</h2>
				<div className='features-grid'>{homeContent.strengths.map((feature, index) => <FeatureCard key={index} {...feature} />)}</div>
			</section>

			<section className='weaknesses'>
				<h2>⚠️ Potential Drawbacks</h2>
				<div className='features-grid'>{homeContent.weaknesses.map((feature, index) => <FeatureCard key={index} {...feature} />)}</div>
			</section>

			<section className='verdict'>
				<h2>🚀 Final Verdict</h2>
				<p>{homeContent.verdict}</p>
			</section>
		</main>
	)
}

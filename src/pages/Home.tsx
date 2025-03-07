import React from 'react'
import * as homeContent from '../data/homeContent'

import '../styles/pages/home.scss'

// Components
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import UsageTracker from '../components/UsageTracker'
import RepoCarousel from '../components/RepoCarousel'
import YearlyReport from '../components/YearlyReport'

export default function Home(): React.ReactElement {
	return (
		<main className='page home' aria-label='Home Page'>
			<Hero aria-label='Hero Section' />

			<section className='usage'>
				<UsageTracker />
			</section>

			<section className='repo-explorer'>
				<RepoCarousel />
			</section>

			<YearlyReport />

			<section className='check-compliance'>
				<h2>🔍 Check Compliance</h2>
				<p>
					Before you proceed, please ensure that you have read and understood the{' '}
					<Link to='/compliance'>compliance requirements</Link> of the NFE-OSL.
				</p>
			</section>

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

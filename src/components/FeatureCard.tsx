import React from 'react'

interface FeatureCardProps {
	icon: React.ReactNode
	title: string
	description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps): React.ReactElement {
	return (
		<div className='feature-card' aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}>
			<div className='icon'>{icon}</div>
			<h3 id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h3>
			<p>{description}</p>
		</div>
	)
}

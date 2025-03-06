import React from 'react'

// Components
import { Link } from 'react-router-dom'

export default function Hero(): React.ReactElement {
	return (
		<section className='hero' aria-labelledby='hero-heading' aria-describedby='hero-description'>
			<div className='content'>
				<h1 id='hero-heading'>Nolly's Fair & Ethical Open-Source License</h1>
				<p id='hero-description'>A modern, ethical, and fair open-source license designed for responsible innovation.</p>

				<div className='call-to-actions'>
					<Link to='/license' className='button primary' aria-label='Read the License'>Read the License</Link>
					<Link to='/faq' className='button secondary' aria-label='Learn More'>Learn More</Link>
				</div>
			</div>
		</section>
	)
}

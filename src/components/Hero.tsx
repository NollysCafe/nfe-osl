import React from 'react'

// Components
import { Link } from 'react-router-dom'

export default function Hero(): React.ReactElement {
	return (
		<section className='hero'>
			<div className='content'>
				<h1>Nolly's Fair & Ethical Open-Source License</h1>
				<p>A modern, ethical, and fair open-source license designed for responsible innovation.</p>

				<div className='call-to-actions'>
					<Link to='/license' className='button primary'>Read the License</Link>
					<Link to='/faq' className='button secondary'>Learn More</Link>
				</div>
			</div>
		</section>
	)
}

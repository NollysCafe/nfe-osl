import React from 'react'
import faq from '../data/faq'

import '../styles/pages/faq.scss'

// Components
import CollapsibleSection from '../components/CollapsibleSection'

export default function FAQ(): React.ReactElement {
	return (
		<main className='page faq' aria-labelledby='faq-heading'>
			<h1 id='faq-heading'>Frequently Asked Questions</h1>

			<section className='faq-content' aria-label='FAQ Section'>
				{faq.map((item, index) => <CollapsibleSection key={index} title={item.question} content={<p>{item.answer}</p>} />)}
			</section>
		</main>
	)
}

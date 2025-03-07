import React from 'react'
import comparison from '../data/comparison'

import '../styles/pages/comparison.scss'

// Components
import ComparisonTable from '../components/ComparisonTable'

export default function Comparison(): React.ReactElement {
	return (
		<main className='page comparison' aria-labelledby='comparison-heading'>
			<h1 id='comparison-heading'>License Comparison</h1>
			<p className='comparison-description'>See how NFE-OSL compares to other popular open-source licenses.</p>

			<ComparisonTable data={comparison} />
		</main>
	)
}

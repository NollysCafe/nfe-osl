import React from 'react'

import '../styles/pages/compliance.scss'

// Components
import ComplianceChecklist from '../components/ComplianceChecklist'

export default function Compliance(): React.ReactElement {
	return (
		<main className='page compliance' aria-labelledby='compliance-heading'>
			<div className='content'>
				<h1 id='compliance-heading'>🔍 License Compliance Guide</h1>
				<p className='compliance-description'>Ensure your project fully adheres to the NFE-OSL license terms.</p>

				<ComplianceChecklist />
			</div>
		</main>
	)
}

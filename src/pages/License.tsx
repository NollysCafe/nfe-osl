import React from 'react'
import license from '../data/license'
import { saveAs } from 'file-saver'
import { toast } from 'react-toastify'

import '../styles/pages/license.scss'

// Components
import Header from '../components/Header'
import CollapsibleSection from '../components/CollapsibleSection'

export default function License(): React.ReactElement {
	const downloadLicense = async (format: 'txt' | 'md') => {
		const blob = new Blob([license], { type: format === 'txt' ? 'text/plain' : 'text/markdown' })
		saveAs(blob, `NFE-OSL_v1.0.${format}`)
		toast.success(`License downloaded as ${format.toUpperCase()}`)
	}

	return (
		<>
			<Header />

			<main className='page license' aria-labelledby='license-heading'>
				<h1 id='license-heading'>Nolly's Fair & Ethical Open-Source License (NFE-OSL v1.0)</h1>

				<div className='download-buttons'>
					<button className='button primary' onClick={() => downloadLicense('txt')} aria-label='Download License as Text'>Download as TXT</button>
					<button className='button secondary' onClick={() => downloadLicense('md')} aria-label='Download License as Markdown'>Download as MD</button>
				</div>

				<section className='license-content' aria-label='License Content'>
					{license.split('\n\n').map((section, index) => (
						<CollapsibleSection
							key={index}
							title={section.split('\n')[0]}
							content={section.split('\n').slice(1).map((line, index) => <p key={index} aria-label='License Section'>{line}</p>)}
						/>
					))}
				</section>
			</main>
		</>
	)
}

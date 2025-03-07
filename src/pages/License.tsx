import React from 'react'
import { useParams } from 'react-router-dom'
import licenses, { LicenseData } from '../data/licenses'
import { saveAs } from 'file-saver'
import { toast } from 'react-toastify'

import '../styles/pages/license.scss'

// Components
import BadgeGenerator from '../components/BadgeGenerator'
import CollapsibleSection from '../components/CollapsibleSection'

export default function License(): React.ReactElement {
	const { version } = useParams<{ version: string }>()
	const latestVersion = licenses.reduce((latest, current) => (latest.releaseDate > current.releaseDate ? latest : current))
	const [selectedVersion, setSelectedVersion] = React.useState<LicenseData>(licenses.find((v) => v.version === version) || latestVersion)
	const isLatestVersion = (version: string) => version === latestVersion.version

	React.useEffect(() => {
		if (selectedVersion.version !== version) {
			window.history.replaceState(null, '', `/license/${selectedVersion.version}`)
		}
	}, [selectedVersion, version, latestVersion])

	const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newVersion = licenses.find((v) => v.version === event.target.value) || latestVersion
		setSelectedVersion(newVersion)
	}

	const downloadLicense = async (format: 'txt' | 'md') => {
		const blob = new Blob([selectedVersion.content], { type: format === 'txt' ? 'text/plain' : 'text/markdown' })
		saveAs(blob, `NFE-OSL_${selectedVersion.version}.${format}`)
		toast.success(`License downloaded as ${format.toUpperCase()}`)
	}

	return (
		<main className='page license' aria-labelledby='license-heading'>
			<div className='content'>
				<h1 id='license-heading'>Nolly's Fair & Ethical Open-Source License</h1>
				<h3 className='license-data'>
					<span className='version'>Version: {selectedVersion.version}</span>
					<span className='release-date'>Release Date: {selectedVersion.releaseDate.toLocaleDateString()}</span>
				</h3>

				<div className='version-selector'>
					<label htmlFor='version-select'>Select License Version</label>
					<select id='version-select' onChange={handleVersionChange} defaultValue={selectedVersion.version}>
						{licenses.map((version) => (
							<option key={version.version} value={version.version}>
								{version.version} {isLatestVersion(version.version) ? '(Latest)' : ''}
							</option>
						))}
					</select>
				</div>

				<div className='download-buttons'>
					<button className='button primary' onClick={() => downloadLicense('txt')} aria-label='Download License as Text'>Download as TXT</button>
					<button className='button secondary' onClick={() => downloadLicense('md')} aria-label='Download License as Markdown'>Download as MD</button>
				</div>

				<section className='license-content' aria-label='License Content'>
					{selectedVersion.content.split('\n\n').map((section, index) => (
						<CollapsibleSection
							key={index}
							title={section.split('\n')[0]}
							content={section.split('\n').slice(1).map((line, index) => <p key={index} aria-label='License Section'>{line}</p>)}
						/>
					))}
				</section>

				<BadgeGenerator />
			</div>
		</main>
	)
}

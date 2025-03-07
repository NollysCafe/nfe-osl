import React from 'react'
import { toast } from 'react-toastify'

// Components
import { FaCopy, FaChevronUp, FaChevronDown } from 'react-icons/fa6'

import '../styles/components/badge.scss'

export default function BadgeGenerator(): React.ReactElement {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [selectedStyle, setSelectedStyle] = React.useState<'flat' | 'rounded' | 'text' | 'dark' | 'svg'>('flat')

	const badgeUrls = {
		flat: 'https://img.shields.io/badge/License-NFE--OSL-purple?style=flat-square',
		rounded: 'https://img.shields.io/badge/License-NFE--OSL-purple?style=for-the-badge',
		text: 'https://img.shields.io/badge/NFE--OSL-LICENSE-informational?style=flat',
		dark: 'https://img.shields.io/badge/NFE--OSL-⚡%20Adaptive%20Dark%20Mode-lightgrey?style=flat',
		svg: 'https://img.shields.io/badge/NFE--OSL-SVG-purple?style=flat&logo=svg'
	}

	const badgeUrl = badgeUrls[selectedStyle]
	const markdownCode = `![NFE-OSL](${badgeUrl})`
	const htmlCode = `<img alt='NFE-OSL License' src='${badgeUrl}' />`

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
		toast.success('Copied to clipboard!')
	}

	return (
		<div className='badge-generator'>
			<button className='collapsible-header' onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls='badge-content'>
				📛 Embeddable License Badge {isOpen ? <FaChevronUp /> : <FaChevronDown />}
			</button>

			{isOpen && (
				<div id='badge-content' className='badge-content'>
					<p>Showcase your usage of <b>NFE-OSL</b> with a badge!</p>

					<div className='badge-selector'>
						<label htmlFor='badge-style'>Select Badge Style:</label>
						<select id='badge-style' onChange={(e) => setSelectedStyle(e.target.value as any)} value={selectedStyle}>
							<option value='flat'>📏 Flat (for repos)</option>
							<option value='rounded'>🔵 Rounded (for websites)</option>
							<option value='text'>📝 Minimal Text</option>
							<option value='dark'>🌑 Dark Mode Adaptive</option>
							<option value='svg'>🖼️ SVG Inline</option>
						</select>
					</div>

					<div className='badge-preview'>
						<img src={badgeUrl} alt='NFE-OSL Badge' />
					</div>

					<div className='badge-code'>
						<label>📜 Markdown</label>
						<div className='code-box'>
							<code>{markdownCode}</code>
							<button onClick={() => copyToClipboard(markdownCode)} aria-label='Copy Markdown Code'><FaCopy /></button>
						</div>
					</div>

					<div className='badge-code'>
						<label>🌐 HTML</label>
						<div className='code-box'>
							<code>{htmlCode}</code>
							<button onClick={() => copyToClipboard(htmlCode)} aria-label='Copy HTML Code'><FaCopy /></button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

import React from 'react'
import { FaCopy } from 'react-icons/fa6'
import { toast } from 'react-toastify'

import '../styles/components/badge.scss'

export default function BadgeGenerator(): React.ReactElement {
	const badgeUrl = 'https://img.shields.io/badge/License-NFE--OSL-purple?style=flat-square'
	const markdownCode = `![NFE-OSL](${badgeUrl})`
	const htmlCode = `<img alt='NFE-OSL License' src='${badgeUrl}' />`

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
		toast.success('Copied to clipboard!')
	}

	return (
		<div className='badge-generator'>
			<h3>📛 Embeddable License Badge</h3>
			<p>Showcase your usage of <b>NFE-OSL</b> with this badge!</p>

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
	)
}

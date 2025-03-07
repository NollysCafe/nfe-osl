import React from 'react'
import fetchGitHubUsage from '../api/fetchGitHubUsage'

import '../styles/components/usage-tracker.scss'

// Components
import { FaGithub } from 'react-icons/fa6'

export default function UsageTracker(): React.ReactElement {
	const [usageCount, setUsageCount] = React.useState<number | null>(null)

	React.useEffect(() => {
		(async () => {
			const count = await fetchGitHubUsage()
			setUsageCount(count)
		})()
	}, [])

	return (
		<section className='usage-tracker' aria-labelledby='usage-tracker-heading'>
			<h2 id='usage-tracker-heading'>📊 Live Usage Stats</h2>
			<div className='tracker-content'>
				<FaGithub className='github-icon' />
				<p>
					{usageCount !== null
						? <span>🚀 NFE-OSL is used in <strong>{usageCount.toLocaleString()}</strong> public repositories!</span>
						: <span>⚠️ Error with GitHub API</span>
					}
				</p>
			</div>
		</section>
	)
}

import React from 'react'
import { complianceChecklist } from '../data/complianceData'

import '../styles/components/compliance-checklist.scss'

export default function ComplianceChecklist(): React.ReactElement {
	const [complianceState, setComplianceState] = React.useState<Record<string, boolean>>(() => {
		const savedState = localStorage.getItem('compliance-state')
		return savedState ? JSON.parse(savedState) : complianceChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
	})

	React.useEffect(() => {
		localStorage.setItem('compliance-state', JSON.stringify(complianceState))
	}, [complianceState])

	const toggleCompliance = (id: string) => {
		setComplianceState((prev) => ({ ...prev, [id]: !prev[id] }))
	}

	const downloadReport = () => {
		const completed = Object.entries(complianceState).filter(([_, status]) => status).length
		const total = complianceChecklist.length
		const statusText = completed === total ? 'Fully Compliant' : `Incomplete (${completed}/${total})`

		const report = complianceChecklist.map((item) => {
			const status = complianceState[item.id] ? '✅ Compliant' : '❌ Not Compliant'
			return `${item.title} - ${status}\n${item.description}\nFix: ${item.fixSuggestion}\n\n`
		}).join('')

		const score = Math.round((completed / total) * 100)

		const blob = new Blob([`NFE-OSL Compliance Report\n\nStatus: ${statusText}\nScore: ${score}%\n\n${report}`], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'NFE-OSL_Compliance_Report.txt'
		a.click()
		URL.revokeObjectURL(url)
	}

	return (
		<section className='compliance-checklist'>
			<h2>📜 License Compliance Checklist</h2>
			<ul>
				{complianceChecklist.map((item) => (
					<li key={item.id}>
						<label>
							<input type='checkbox' checked={complianceState[item.id]} onChange={() => toggleCompliance(item.id)} />
							<span>{item.title}</span>
						</label>
						<p>{item.description}</p>
						<small className='fix-suggestion'>💡 {item.fixSuggestion}</small>
					</li>
				))}
			</ul>
			<button onClick={downloadReport} className='button primary'>Download Compliance Report</button>
		</section>
	)
}

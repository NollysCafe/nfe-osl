import React from 'react'
import fetchYearlyReport, { IYearlyReport } from '../api/fetchYearlyReport'

import '../styles/components/yearly-report.scss'

// Components
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

export default function YearlyReport(): React.ReactElement {
	const [report, setReport] = React.useState<IYearlyReport | null>(null)
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	React.useEffect(() => {
		async function loadReport() {
			const data = await fetchYearlyReport()
			setReport(data)
		}
		loadReport()
	}, [])

	return (
		<div className='yearly-report'>
			<button className='collapsible-header' onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls='report-content'>
				📅 Yearly License Report {isOpen ? <FaChevronUp /> : <FaChevronDown />}
			</button>

			{isOpen && (
				report ? (
					report.error ? (
						<div id='report-content' className='report-content'>
							<h3>📜 NFE-OSL Growth Report ({report.year})</h3>
							<p>🚨 Error: {report.error}</p>
						</div>
					) : (
						<div id='report-content' className='report-content'>
							<h3>📜 NFE-OSL Growth Report ({report.year})</h3>
							<p>📌 Previous Year's Repos: <b>{report.previousCount}</b></p>
							<p>📌 Current Repos: <b>{report.currentCount}</b></p>
							<p>📈 Growth: <b>{report.growth.toFixed(2)}%</b></p>
						</div >
					)
				) : (
					<div id='report-content' className='report-content'>
						<h3>📜 NFE-OSL Growth Report</h3>
						<p>❌ No data available</p>
					</div>
				)
			)}
		</div>
	)
}

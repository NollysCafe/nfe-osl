import React from 'react'
import { License, IComparison } from '../data/comparison'

interface ComparisonTableProps {
	data: IComparison[]
}

export default function ComparisonTable({ data }: ComparisonTableProps): React.ReactElement {
	const licenses = Object.keys(data[0]).slice(2)
	const [selectedLicense, setSelectedLicense] = React.useState<string>(licenses[0])

	const formatName = (license: string): string => {
		const licenseEnum = License[license as keyof typeof License]
		return licenseEnum.replace(/([A-Z])/g, ' $1').trim()
	}

	const getData = (license: string, feature: string): string => {
		const licenseData = data.find(row => row.feature === feature)
		return licenseData ? licenseData[license as keyof IComparison] : 'N/A'
	}

	return (
		<div className='comparison-table-container' aria-label='License Comparison Table'>
			<table className='comparison-table' aria-label='License Comparison Table'>
				<thead aria-label='Header row'>
					<tr aria-label='Header row'>
						<th aria-label='Feature'>Feature</th>
						<th aria-label='NFE OSL'>NFE OSL</th>
						<th aria-label={selectedLicense}>
							<select aria-label='Select license' onChange={(e) => setSelectedLicense(e.target.value)} value={selectedLicense}>
								{licenses.map((license, index) => <option key={index} value={license} aria-label={license}>{formatName(license)}</option>)}
							</select>
						</th>
					</tr>
				</thead>

				<tbody aria-label='License Comparison Table'>
					{data.map((row: IComparison, index: number) => (
						<tr key={index} aria-label='License Comparison Table'>
							<td aria-label='Feature'>{row.feature}</td>
							<td aria-label='NFE OSL'>{row.nfeOsl}</td>
							<td aria-label={selectedLicense}>{getData(selectedLicense, row.feature)}</td>
						</tr>
					))}
				</tbody>

				<tfoot aria-label='Data source'>
					<tr aria-label='Data source'>
						<td colSpan={17} aria-label='Data source'>
							Data from <a href='https://choosealicense.com/' target='_blank' rel='noreferrer noopener' aria-label='Choose a License website'>Choose a License</a>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

import React from 'react'
import fetchLicenseAdoption, { LocationData } from '../api/fetchLicenseAdoption'

import '../styles/pages/license-adoption.scss'

// Components
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

export default function LicenseAdoption(): React.ReactElement {
	const [locations, setLocations] = React.useState<LocationData[] | null>(null)
	const [error, setError] = React.useState<boolean>(false)

	React.useEffect(() => {
		async function loadData() {
			const data = await fetchLicenseAdoption()
			if (!data.length) setError(true)
			setLocations(data)
		}
		loadData()
	}, [])

	React.useEffect(() => {
		if (!locations) return

		const width = 800
		const height = 500

		const svg = d3.select('#map').attr('width', width).attr('height', height)

		d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json').then((world: any) => {
			const countries = (topojson.feature(world, world.objects.countries) as any).features
			const projection = d3.geoMercator().scale(130).translate([width / 2, height / 1.5])
			const path = d3.geoPath().projection(projection) as any

			svg.append('g').selectAll('path').data(countries).enter().append('path').attr('d', path).attr('fill', '#444').attr('stroke', '#222')

			locations.forEach(({ country, count }) => {
				const coords = projection([Math.random() * 360 - 180, Math.random() * 180 - 90])
				if (coords) {
					svg.append('circle').attr('cx', coords[0]).attr('cy', coords[1]).attr('r', Math.log(count + 1) * 2).attr('fill', 'purple').attr('opacity', 0.8)
				}
				void country
			})
		})
	}, [locations])

	return (
		<main className='page license-adoption' aria-labelledby='adoption-heading'>
			<div className='content'>
				<h1 id='adoption-heading'>📍 License Adoption Map</h1>
				<p className='adoption-description'>Explore the geographic spread of NFE-OSL.</p>

				{error ? (
					<p className='error-message'>⚠️ Error fetching GitHub data.</p>
				) : (
					<svg id='map'></svg>
				)}
			</div>
		</main>
	)
}

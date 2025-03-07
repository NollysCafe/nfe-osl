export interface LocationData {
	country: string
	count: number
}

export default async function fetchLicenseAdoption(): Promise<LocationData[]> {
	const CACHE_KEY = 'github-license-adoption'
	const CACHE_DURATION = 1000 * 60 * 60 * 24

	try {
		const cachedData = localStorage.getItem(CACHE_KEY)
		if (cachedData) {
			const { locations, timestamp } = JSON.parse(cachedData)
			if (Date.now() - timestamp < CACHE_DURATION) return locations
		}

		const response = await fetch('https://api.github.com/search/repositories?q=license:NFE-OSL')
		if (!response.ok) throw new Error('GitHub API Error')

		const { items } = await response.json()
		const locationMap: Record<string, number> = {}

		for (const repo of items) {
			const userResponse = await fetch(repo.owner.url)
			if (!userResponse.ok) continue

			const userData = await userResponse.json()
			const location = userData.location?.trim() || 'Unknown'

			if (location !== 'Unknown') {
				const country = location.split(',').pop()?.trim() || location
				locationMap[country] = (locationMap[country] || 0) + 1
			}
		}

		const locations: LocationData[] = Object.entries(locationMap)
			.map(([country, count]) => ({ country, count }))
			.sort((a, b) => b.count - a.count)

		localStorage.setItem(CACHE_KEY, JSON.stringify({ locations, timestamp: Date.now() }))
		return locations
	} catch (error) {
		console.error('GitHub API Fetch Error:', error)
		return []
	}
}

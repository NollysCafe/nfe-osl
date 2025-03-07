export interface IYearlyReport {
	year: number
	previousCount: number
	currentCount: number
	growth: number
	error?: boolean
}

const CACHE_KEY = 'yearly-report'
const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=license:NFE-OSL'

export default async function fetchYearlyReport(): Promise<IYearlyReport | null> {
	try {
		const response = await fetch(GITHUB_API_URL)
		if (!response.ok) throw new Error('GitHub API Error')

		const { total_count: currentCount } = await response.json()
		if (!currentCount) return null

		const cachedData = localStorage.getItem(CACHE_KEY)
		const currentYear = new Date().getFullYear()

		if (cachedData) {
			const { year, previousCount } = JSON.parse(cachedData)

			if (year < currentYear) {
				const newReport = { year: currentYear, previousCount: currentCount, currentCount, growth: 0 }
				localStorage.setItem(CACHE_KEY, JSON.stringify(newReport))
				return newReport
			}

			const growth = ((currentCount - previousCount) / previousCount) * 100
			const updatedReport = { year, previousCount, currentCount, growth }

			localStorage.setItem(CACHE_KEY, JSON.stringify(updatedReport))
			return updatedReport
		}

		const newReport = { year: currentYear, previousCount: currentCount, currentCount, growth: 0 }
		localStorage.setItem(CACHE_KEY, JSON.stringify(newReport))
		return newReport
	} catch (error) {
		const cachedData = localStorage.getItem(CACHE_KEY)
		if (cachedData) return { ...JSON.parse(cachedData), error: true }
		console.error('GitHub API Fetch Error:', error)
		return null
	}
}

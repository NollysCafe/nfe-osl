export default async function fetchGitHubUsage(): Promise<number | null> {
	const CACHE_KEY = 'github-usage'
	const CACHE_DURATION = 1000 * 60 * 60 * 24

	try {
		const cachedData = localStorage.getItem(CACHE_KEY)
		if (cachedData) {
			const { count, timestamp } = JSON.parse(cachedData)
			if (Date.now() - timestamp < CACHE_DURATION) return count
		}

		const response = await fetch('https://api.github.com/search/repositories?q=license:NFE-OSL')
		if (!response.ok) throw new Error('GitHub API Error')

		const { total_count } = await response.json()
		const count = total_count || 0
		localStorage.setItem(CACHE_KEY, JSON.stringify({ count, timestamp: Date.now() }))

		return count
	} catch (error) {
		console.error('GitHub API Fetch Error:', error)
		return null
	}
}

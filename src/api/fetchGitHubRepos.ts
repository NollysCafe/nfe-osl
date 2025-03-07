export interface Repo {
	id: number
	name: string
	full_name: string
	description: string | null
	html_url: string
	stargazers_count: number
	forks_count: number
	open_issues_count: number
	owner: {
		login: string
		avatar_url: string
		html_url: string
	}
}

export default async function fetchGitHubRepos(): Promise<Repo[]> {
	const CACHE_KEY = 'github-repos'
	const CACHE_DURATION = 1000 * 60 * 60 * 24

	try {
		const cachedData = localStorage.getItem(CACHE_KEY)
		if (cachedData) {
			const { repos, timestamp } = JSON.parse(cachedData)
			if (Date.now() - timestamp < CACHE_DURATION) return repos
		}

		const response = await fetch('https://api.github.com/search/repositories?q=license:NFE-OSL&sort=stars&order=desc')
		if (!response.ok) throw new Error('GitHub API Error')

		const { items } = await response.json()
		const repos: Repo[] = items.map((repo: any) => ({
			id: repo.id,
			name: repo.name,
			full_name: repo.full_name,
			description: repo.description,
			html_url: repo.html_url,
			stargazers_count: repo.stargazers_count,
			forks_count: repo.forks_count,
			open_issues_count: repo.open_issues_count,
			owner: {
				login: repo.owner.login,
				avatar_url: repo.owner.avatar_url,
				html_url: repo.owner.html_url,
			},
		}))

		localStorage.setItem(CACHE_KEY, JSON.stringify({ repos, timestamp: Date.now() }))
		return repos
	} catch (error) {
		console.error('GitHub API Fetch Error:', error)
		return []
	}
}

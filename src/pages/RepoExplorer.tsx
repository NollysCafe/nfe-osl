import React from 'react'
import fetchGitHubRepos, { Repo } from '../api/fetchGitHubRepos'

import '../styles/pages/repo-explorer.scss'

// Components
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function RepoExplorer(): React.ReactElement {
	const [repos, setRepos] = React.useState<Repo[]>([])
	const [search, setSearch] = React.useState('')

	React.useEffect(() => {
		(async () => {
			const fetchedRepos = await fetchGitHubRepos()
			setRepos(fetchedRepos)
		})()
	}, [])

	const filteredRepos = repos.filter((repo) => repo.full_name.toLowerCase().includes(search.toLowerCase()))

	return (
		<main className='page repo-explorer'>
			<h1>🔍 Explore Open-Source Projects Using NFE-OSL</h1>
			<div className='search-bar'>
				<input type='text' placeholder='Search repositories...' value={search} onChange={(e) => setSearch(e.target.value)} />
				<FaMagnifyingGlass />
			</div>
			<div className='repo-list'>
				{filteredRepos.length > 0 ? filteredRepos.map((repo) => (
					<a key={repo.id} href={repo.html_url} target='_blank' rel='noopener noreferrer' className='repo-item'>
						<h3>{repo.full_name}</h3>
						<p>{repo.description || 'No description available.'}</p>
					</a>
				)) : <p>No repositories found.</p>}
			</div>
		</main>
	)
}

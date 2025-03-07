import React from 'react'
import fetchGitHubRepos, { Repo } from '../api/fetchGitHubRepos'

import '../styles/components/repo-carousel.scss'

// Components
import { FaStar, FaCodeBranch, FaBug } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function RepoCarousel(): React.ReactElement {
	const [repos, setRepos] = React.useState<Repo[]>([])

	React.useEffect(() => {
		(async () => {
			const fetchedRepos = await fetchGitHubRepos()
			setRepos(fetchedRepos.slice(0, 5))
		})()
	}, [])

	return (
		<section className='repo-carousel' aria-labelledby='repo-carousel-heading'>
			<h2 id='repo-carousel-heading'>🚀 Featured Projects Using NFE-OSL</h2>

			<div className='carousel'>
				{repos.length ? (
					repos.map((repo) => (
						<a key={repo.id} href={repo.html_url} target='_blank' rel='noopener noreferrer' className='repo-card'>
							<img src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} className='avatar' />
							<div className='repo-info'>
								<h3>{repo.name}</h3>
								<p>{repo.description || 'No description provided.'}</p>
								<div className='repo-stats'>
									<span><FaStar /> {repo.stargazers_count}</span>
									<span><FaCodeBranch /> {repo.forks_count}</span>
									<span><FaBug /> {repo.open_issues_count}</span>
								</div>
							</div>
						</a>
					))
				) : (
					<p className='error-message'>⚠️ Error fetching GitHub repos</p>
				)}
			</div>

			<Link to='/explore' className='button primary'>View All Repositories</Link>
		</section>
	)
}

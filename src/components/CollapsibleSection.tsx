import React from 'react'

// Components
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

interface CollapsibleSectionProps {
	title: string
	content: React.ReactNode
}

export default function CollapsibleSection({ title, content }: CollapsibleSectionProps): React.ReactElement {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	return (
		<div className='collapsible-section'>
			<button className='header' onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls='collapsible-content' aria-label={`Toggle ${title} section`}>
				{title}
				{isOpen ? <FaChevronUp aria-hidden='true' /> : <FaChevronDown aria-hidden='true' />}
			</button>

			{isOpen && (
				<div id='collapsible-content' className='content' aria-describedby='collapsible-description' aria-label='Collapsible content'>
					{content}
				</div>
			)}
		</div>
	)
}

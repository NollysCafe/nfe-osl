export interface ComplianceItem {
	id: string
	title: string
	description: string
	fixSuggestion: string
}

export const complianceChecklist: ComplianceItem[] = [
	{
		id: 'base-license',
		title: 'License Adherence',
		description: 'Ensure that your project remains licensed under AGPL-3.0-or-later, with no modifications violating its terms.',
		fixSuggestion: 'Review the AGPL-3.0 terms and ensure all modifications remain open-source.'
	},
	{
		id: 'fair-attribution',
		title: 'Fair Attribution',
		description: 'Provide visible credit to the author in the UI, website, or documentation.',
		fixSuggestion: 'Ensure the attribution is placed in an accessible location (e.g., "About" section or footer).'
	},
	{
		id: 'commercial-use',
		title: 'Commercial Usage Compliance',
		description: 'If using this license commercially, you must obtain explicit permission.',
		fixSuggestion: 'Contact the author and ensure compliance before any monetization.'
	},
	{
		id: 'ethical-use',
		title: 'Ethical Use Restrictions',
		description: 'Confirm that the software is not used for military, surveillance, or unethical AI purposes.',
		fixSuggestion: 'Restrict usage in your terms and verify clients comply.'
	},
	{
		id: 'ai-training',
		title: 'AI & Data Compliance',
		description: 'Ensure AI models trained on this software remain open-source under the same license.',
		fixSuggestion: 'Verify AI usage policies and provide clear open-source release conditions.'
	},
	{
		id: 'violations',
		title: 'Violation Response',
		description: 'Have a policy to address violations and enforce license terms.',
		fixSuggestion: 'Implement internal procedures to cease license usage if violations occur.'
	}
]

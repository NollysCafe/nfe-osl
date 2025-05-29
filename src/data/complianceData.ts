export interface ComplianceItem {
	id: string
	title: string
	description: string
	fixSuggestion: string
}

export const complianceChecklist: ComplianceItem[] = [
	{
		id: 'custom-license',
		title: 'License Application',
		description: 'Ensure your project clearly uses and references the NFE-OSL v1.0 license.',
		fixSuggestion: 'Include the full license text in your repository and mention it in the README and metadata.'
	},
	{
		id: 'fair-attribution',
		title: 'Fair Attribution',
		description: 'Provide visible credit to the author (e.g., in UI, website footer, or documentation).',
		fixSuggestion: 'Ensure the attribution is consistently visible and not buried (e.g., "About" section or Open Source page).'
	},
	{
		id: 'commercial-use',
		title: 'Commercial Use Compliance',
		description: 'Commercial use requires prior permission and may involve contribution or financial support.',
		fixSuggestion: 'Contact the author before monetizing, and document permission or contribution terms.'
	},
	{
		id: 'ethical-use',
		title: 'Ethical Use Restrictions',
		description: 'Verify that the software is not used in military, surveillance, or unethical personal data contexts.',
		fixSuggestion: 'Explicitly prohibit unethical uses in your terms and contracts; vet clients and partners.'
	},
	{
		id: 'ai-usage',
		title: 'AI & Data Use Compliance',
		description: 'AI/data use must be permitted by the author and may require releasing derived models under the same terms.',
		fixSuggestion: 'Confirm permission for AI-related use and clearly license any trained models or datasets as required.'
	},
	{
		id: 'violation-response',
		title: 'License Violation Handling',
		description: 'Have internal procedures to detect, report, and stop violations of license terms.',
		fixSuggestion: 'Create a compliance policy and automate checks for unauthorized or unethical uses.'
	}
]

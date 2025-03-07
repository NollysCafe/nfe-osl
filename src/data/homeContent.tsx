import { FaShield, FaLock, FaScaleBalanced, FaUsers } from 'react-icons/fa6'

export const strengths = [
	{
		icon: <FaShield />,
		title: 'Ethical Use Restrictions',
		description: 'Unlike traditional open-source licenses, NFE-OSL prevents unethical applications such as military, surveillance, and exploitative AI.'
	},
	{
		icon: <FaScaleBalanced />,
		title: 'Strong Copyleft Protection',
		description: 'Similar to AGPL, it ensures all modified versions remain open-source, even for SaaS applications.'
	},
	{
		icon: <FaLock />,
		title: 'Fair Commercial Rules',
		description: 'Prevents corporations from monetizing software without permission or contribution, making open-source sustainable.'
	},
	{
		icon: <FaUsers />,
		title: 'AI Training Restrictions',
		description: 'Requires AI models trained on this software to be open-source, preventing closed-source exploitation.'
	}
]

export const weaknesses = [
	{
		icon: <FaShield />,
		title: 'License Compatibility',
		description: 'Incompatible with MIT, BSD, and Apache due to strong copyleft provisions, similar to AGPL.'
	},
	{
		icon: <FaScaleBalanced />,
		title: 'Commercial Adoption Hurdles',
		description: 'Requiring permission for some commercial use may slow down adoption compared to permissive licenses.'
	}
]

export const verdict = `NFE-OSL is a forward-thinking license tackling modern ethical and business concerns in open-source.
It offers a viable alternative for developers who care about the long-term impact of their work.`

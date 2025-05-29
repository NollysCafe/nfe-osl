import { FaShield, FaLock, FaScaleBalanced, FaUsers } from 'react-icons/fa6'

export const strengths = [
	{
		icon: <FaShield />,
		title: 'Enforced Ethical Use',
		description: 'NFE-OSL explicitly bans unethical use such as military, surveillance, and privacy-invasive AI — something no OSI license currently enforces.'
	},
	{
		icon: <FaScaleBalanced />,
		title: 'Custom Ethical Copyleft',
		description: 'Unlike permissive or standard copyleft licenses, it ensures fairness by requiring attribution, open-source continuity, and ethical compliance — even for SaaS or data-based applications.'
	},
	{
		icon: <FaLock />,
		title: 'Fair Commercial Conditions',
		description: 'Prevents exploitative monetization by requiring explicit permission or contribution — empowering creators and discouraging corporate freeloading.'
	},
	{
		icon: <FaUsers />,
		title: 'AI Use Accountability',
		description: 'Prohibits commercial AI training without consent, and mandates open licensing of derivative datasets or models — reducing risk of closed-source exploitation.'
	}
]

export const weaknesses = [
	{
		icon: <FaShield />,
		title: 'License Compatibility',
		description: 'Not compatible with permissive licenses like MIT, BSD, or Apache due to its ethical and permission-based clauses.'
	},
	{
		icon: <FaScaleBalanced />,
		title: 'Barrier to Commercial Adoption',
		description: 'Requiring permission for commercial use may deter businesses looking for zero-friction licenses — even if it encourages fairer practices.'
	}
]

export const verdict = `NFE-OSL is a modern ethical license crafted for developers who want to protect their work from misuse, ensure fair credit, and foster responsible AI and commercial practices.
It's not for everyone — but it's perfect for creators who believe open-source should serve people, not just profit.`

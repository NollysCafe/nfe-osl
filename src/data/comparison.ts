export enum License {
	nfeOsl = 'NFE OSL',
	mit = 'MIT',
	agpl = 'AGPL',
	gpl = 'GPL',
	apache = 'Apache',
	bsd = 'BSD',
	cc = 'CC',
	epl = 'EPL',
	isc = 'ISC',
	lgpl = 'LGPL',
	msPl = 'MS-PL',
	ncsa = 'NCSA',
	ofl = 'OFL',
	unlicense = 'Unlicense',
	wtfpl = 'WTFPL',
	zlib = 'Zlib',
}

export interface IComparison {
	feature: string
	nfeOsl: string
	mit: string
	agpl: string
	gpl: string
	apache: string
	bsd: string
	cc: string
	epl: string
	isc: string
	lgpl: string
	msPl: string
	ncsa: string
	ofl: string
	unlicense: string
	wtfpl: string
	zlib: string
}[]

export default [
	{
		feature: 'Open-Source Requirement',
		nfeOsl: 'Yes',
		mit: 'Yes',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'Yes',
		bsd: 'Yes',
		cc: 'Yes',
		epl: 'Yes',
		isc: 'Yes',
		lgpl: 'Yes',
		msPl: 'Yes',
		ncsa: 'Yes',
		ofl: 'Yes',
		unlicense: 'Yes',
		wtfpl: 'Yes',
		zlib: 'Yes',
	},
	{
		feature: 'Commercial Use',
		nfeOsl: 'Yes (with required attribution)',
		mit: 'Yes',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'Yes',
		bsd: 'Yes',
		cc: 'Varies',
		epl: 'Yes',
		isc: 'Yes',
		lgpl: 'Yes',
		msPl: 'Yes',
		ncsa: 'Yes',
		ofl: 'Yes',
		unlicense: 'Yes',
		wtfpl: 'Yes',
		zlib: 'Yes',
	},
	{
		feature: 'Network-Based Distribution (SaaS)',
		nfeOsl: 'Must release modifications',
		mit: 'No requirements',
		agpl: 'Must release modifications',
		gpl: 'No requirements',
		apache: 'No requirements',
		bsd: 'No requirements',
		cc: 'Varies',
		epl: 'No requirements',
		isc: 'No requirements',
		lgpl: 'No requirements',
		msPl: 'No requirements',
		ncsa: 'No requirements',
		ofl: 'No requirements',
		unlicense: 'No requirements',
		wtfpl: 'No requirements',
		zlib: 'N/A',
	},
	{
		feature: 'Fair Attribution Required',
		nfeOsl: 'Yes (must credit in UI/docs)',
		mit: 'No',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'No',
		bsd: 'No',
		cc: 'Yes',
		epl: 'No',
		isc: 'No',
		lgpl: 'No',
		msPl: 'No',
		ncsa: 'No',
		ofl: 'No',
		unlicense: 'No',
		wtfpl: 'No',
		zlib: 'No',
	},
	{
		feature: 'Ethical Use Restrictions',
		nfeOsl: 'No military, surveillance, unethical AI',
		mit: 'No restrictions',
		agpl: 'No restrictions',
		gpl: 'No restrictions',
		apache: 'No restrictions',
		bsd: 'No restrictions',
		cc: 'No restrictions',
		epl: 'No restrictions',
		isc: 'No restrictions',
		lgpl: 'No restrictions',
		msPl: 'No restrictions',
		ncsa: 'No restrictions',
		ofl: 'No restrictions',
		unlicense: 'No restrictions',
		wtfpl: 'No restrictions',
		zlib: 'No restrictions',
	},
	{
		feature: 'AI Training Restrictions',
		nfeOsl: 'AI models must be open-source',
		mit: 'No restrictions',
		agpl: 'No restrictions',
		gpl: 'No restrictions',
		apache: 'No restrictions',
		bsd: 'No restrictions',
		cc: 'No restrictions',
		epl: 'No restrictions',
		isc: 'No restrictions',
		lgpl: 'No restrictions',
		msPl: 'No restrictions',
		ncsa: 'No restrictions',
		ofl: 'No restrictions',
		unlicense: 'No restrictions',
		wtfpl: 'No restrictions',
		zlib: 'No restrictions',
	},
	{
		feature: 'Strong Copyleft',
		nfeOsl: 'Yes',
		mit: 'No (permissive)',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'No (permissive)',
		bsd: 'No (permissive)',
		cc: 'Varies',
		epl: 'No',
		isc: 'No (permissive)',
		lgpl: 'Partial (only for linked code)',
		msPl: 'No',
		ncsa: 'No',
		ofl: 'No',
		unlicense: 'No',
		wtfpl: 'No',
		zlib: 'No',
	},
	{
		feature: 'License Compatibility',
		nfeOsl: 'Limited (not compatible with permissive licenses)',
		mit: 'Very compatible',
		agpl: 'Less compatible',
		gpl: 'Less compatible',
		apache: 'Compatible (with a lot of permissive licenses)',
		bsd: 'Compatible (with a lot of permissive licenses)',
		cc: 'Varies',
		epl: 'Compatible (with other free licences)',
		isc: 'Very compatible',
		lgpl: 'Compatible (with other free licences)',
		msPl: 'Incompatible with GPL',
		ncsa: 'Compatible (with other free licences)',
		ofl: 'Compatible (with other free licences)',
		unlicense: 'Very compatible',
		wtfpl: 'Very compatible',
		zlib: 'N/A',
	},
	{
		feature: 'Patent Protection',
		nfeOsl: 'Yes (some protection)',
		mit: 'No',
		agpl: 'Yes (some protection)',
		gpl: 'Yes (some protection)',
		apache: 'Yes (grants patent license)',
		bsd: 'No',
		cc: 'No',
		epl: 'Yes (some protection)',
		isc: 'No',
		lgpl: 'Yes (some protection)',
		msPl: 'No',
		ncsa: 'No',
		ofl: 'No',
		unlicense: 'No',
		wtfpl: 'No',
		zlib: 'No',
	},
	{
		feature: 'Closed-Source Redistribution Allowed',
		nfeOsl: 'No (unless special permission)',
		mit: 'Yes',
		agpl: 'No',
		gpl: 'No',
		apache: 'Yes',
		bsd: 'Yes',
		cc: 'Varies',
		epl: 'Yes',
		isc: 'Yes',
		lgpl: 'Partial (if not linked directly)',
		msPl: 'Yes',
		ncsa: 'Yes',
		ofl: 'Yes',
		unlicense: 'Yes',
		wtfpl: 'Yes',
		zlib: 'N/A',
	},
	{
		feature: 'Anti-Tivoization Clause',
		nfeOsl: 'Yes',
		mit: 'No',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'No',
		bsd: 'No',
		cc: 'No',
		epl: 'No',
		isc: 'No',
		lgpl: 'No',
		msPl: 'No',
		ncsa: 'No',
		ofl: 'No',
		unlicense: 'No',
		wtfpl: 'No',
		zlib: 'N/A',
	},
	{
		feature: 'Legal Protection Against Lawsuits',
		nfeOsl: 'Yes (included in license enforcement)',
		mit: 'No',
		agpl: 'Yes',
		gpl: 'Yes',
		apache: 'Yes (revokes rights if a user sues over patents)',
		bsd: 'No',
		cc: 'No',
		epl: 'Yes',
		isc: 'No',
		lgpl: 'Yes',
		msPl: 'No',
		ncsa: 'No',
		ofl: 'No',
		unlicense: 'No',
		wtfpl: 'No',
		zlib: 'N/A',
	},
	{
		feature: 'Proprietary Code Integration Allowed',
		nfeOsl: 'No',
		mit: 'Yes',
		agpl: 'No',
		gpl: 'No',
		apache: 'Yes',
		bsd: 'Yes',
		cc: 'Varies',
		epl: 'Yes',
		isc: 'Yes',
		lgpl: 'Partial',
		msPl: 'Yes',
		ncsa: 'Yes',
		ofl: 'Yes',
		unlicense: 'Yes',
		wtfpl: 'Yes',
		zlib: 'N/A',
	}
] as IComparison[]

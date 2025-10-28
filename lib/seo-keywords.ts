/**
 * SEO Keywords Configuration - Updated for 2025 trends
 * Location-based and industry-specific trending keywords
 */

export interface SEOKeywords {
	primary: string[];
	secondary: string[];
	trending: string[];
	localModifiers: string[];
}

/**
 * Global trending keywords for collaboration/communication platforms in 2025
 */
const GLOBAL_TRENDING_KEYWORDS = [
	"AI-powered collaboration",
	"hybrid work platform",
	"async communication tools",
	"remote team collaboration",
	"digital workplace 2025",
	"team productivity software",
	"video conferencing AI",
	"distributed team management",
	"workplace automation",
	"smart meeting assistant",
	"cross-functional collaboration",
	"enterprise communication platform",
	"work from anywhere tools",
	"agile team collaboration",
	"cloud-based teamwork",
];

/**
 * Core keywords for MELP platform
 */
const CORE_KEYWORDS = [
	"video collaboration platform",
	"team communication software",
	"online meeting platform",
	"project collaboration tool",
	"business communication app",
	"virtual workspace",
	"team messaging app",
	"file sharing platform",
	"screen sharing software",
	"real-time collaboration",
];

/**
 * Location-specific keyword modifiers and trends
 */
const LOCATION_KEYWORDS: Record<string, SEOKeywords> = {
	// United States
	US: {
		primary: [
			"best collaboration tools for US teams",
			"American business communication",
			"enterprise collaboration USA",
			"remote work software America",
		],
		secondary: [
			"Silicon Valley collaboration tools",
			"Fortune 500 communication platform",
			"US enterprise video conferencing",
			"American startup collaboration",
		],
		trending: [
			"HIPAA compliant collaboration",
			"SOC 2 certified communication",
			"US data sovereignty platform",
			"American-made collaboration software",
		],
		localModifiers: ["USA", "America", "US-based", "American"],
	},

	// India
	IN: {
		primary: [
			"collaboration tools for Indian teams",
			"India remote work platform",
			"team communication India",
			"video conferencing India",
		],
		secondary: [
			"Bangalore startup collaboration",
			"Mumbai business communication",
			"Delhi NCR team tools",
			"Hyderabad tech collaboration",
		],
		trending: [
			"Make in India collaboration",
			"Indian data center hosting",
			"GST compliant platform",
			"bilingual team communication",
			"offshore team collaboration",
		],
		localModifiers: ["India", "Indian", "Bharat", "दीश"],
	},

	// United Kingdom
	GB: {
		primary: [
			"UK collaboration software",
			"British team communication",
			"London business tools",
			"UK enterprise platform",
		],
		secondary: [
			"GDPR compliant collaboration",
			"UK data protection platform",
			"London fintech communication",
			"Manchester tech collaboration",
		],
		trending: [
			"post-Brexit collaboration tools",
			"UK government approved",
			"British cloud hosting",
			"cyber essentials certified",
		],
		localModifiers: ["UK", "British", "Britain", "United Kingdom"],
	},

	// Canada
	CA: {
		primary: [
			"Canadian collaboration platform",
			"team tools Canada",
			"Toronto business communication",
			"Canadian enterprise software",
		],
		secondary: [
			"Vancouver tech collaboration",
			"Montreal bilingual platform",
			"Calgary remote work tools",
			"Ottawa government communication",
		],
		trending: [
			"PIPEDA compliant collaboration",
			"Canadian data residency",
			"bilingual English-French platform",
			"Arctic data center hosting",
		],
		localModifiers: ["Canada", "Canadian", "Canadien"],
	},

	// Australia
	AU: {
		primary: [
			"Australian collaboration tools",
			"team communication Australia",
			"Sydney business platform",
			"Aussie enterprise software",
		],
		secondary: [
			"Melbourne startup collaboration",
			"Brisbane remote work",
			"Perth business communication",
			"APAC region platform",
		],
		trending: [
			"Australian data sovereignty",
			"privacy act compliant",
			"ANZUS collaboration",
			"Australian cloud hosting",
		],
		localModifiers: ["Australia", "Australian", "Aussie", "AU"],
	},

	// Germany
	DE: {
		primary: [
			"deutsche Kollaborationsplattform",
			"German team software",
			"Berlin collaboration tools",
			"German enterprise platform",
		],
		secondary: [
			"Munich business communication",
			"Frankfurt fintech collaboration",
			"Hamburg tech platform",
			"German engineering tools",
		],
		trending: [
			"DSGVO konform",
			"German data privacy",
			"Industrie 4.0 collaboration",
			"German cloud hosting",
		],
		localModifiers: ["Germany", "German", "Deutschland", "Deutsche"],
	},

	// Singapore
	SG: {
		primary: [
			"Singapore collaboration platform",
			"Asia Pacific team tools",
			"Singapore business software",
			"APAC communication platform",
		],
		secondary: [
			"Singapore fintech collaboration",
			"Southeast Asia team tools",
			"regional hub communication",
			"ASEAN business platform",
		],
		trending: [
			"PDPA compliant Singapore",
			"smart nation collaboration",
			"Singapore data center",
			"APAC low latency platform",
		],
		localModifiers: ["Singapore", "APAC", "Asia Pacific", "Southeast Asia"],
	},

	// Japan
	JP: {
		primary: [
			"Japanese collaboration platform",
			"Japan team communication",
			"Tokyo business software",
			"Japanese enterprise tools",
		],
		secondary: [
			"Osaka collaboration platform",
			"Japanese startup tools",
			"Tokyo tech communication",
			"Japanese corporate software",
		],
		trending: [
			"Japanese language support",
			"Japan data residency",
			"keigo business communication",
			"Japan cloud platform",
		],
		localModifiers: ["Japan", "Japanese", "日本", "Nihon"],
	},
};

/**
 * Get SEO keywords for a specific location
 */
export function getKeywordsByLocation(countryCode: string): SEOKeywords {
	const locationKeywords =
		LOCATION_KEYWORDS[countryCode] || LOCATION_KEYWORDS["US"];

	return {
		primary: [...CORE_KEYWORDS, ...locationKeywords.primary],
		secondary: locationKeywords.secondary,
		trending: [...GLOBAL_TRENDING_KEYWORDS, ...locationKeywords.trending],
		localModifiers: locationKeywords.localModifiers,
	};
}

/**
 * Generate meta keywords string for a location
 */
export function generateMetaKeywords(
	countryCode: string,
	limit: number = 20
): string {
	const keywords = getKeywordsByLocation(countryCode);
	const allKeywords = [
		...keywords.primary.slice(0, 8),
		...keywords.trending.slice(0, 8),
		...keywords.secondary.slice(0, 4),
	];

	return allKeywords.slice(0, limit).join(", ");
}

/**
 * Get location-specific title suffix
 */
export function getLocationTitleSuffix(
	city?: string,
	country?: string
): string {
	if (city && country) {
		return ` | ${city}, ${country}`;
	}
	if (country) {
		return ` | ${country}`;
	}
	return "";
}

/**
 * Generate location-aware description
 */
export function generateLocationDescription(
	countryCode: string,
	city?: string
): string {
	const keywords = getKeywordsByLocation(countryCode);
	const localModifier = keywords.localModifiers[0];
	const trending = keywords.trending[0];

	const cityText = city ? ` in ${city}` : "";

	return `Join ${localModifier} teams using MELP - the leading ${trending} platform${cityText}. Trusted by professionals for video calls, AI-powered collaboration, and seamless remote work. Start your free trial today.`;
}

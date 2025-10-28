/**
 * SEO Metadata Generator with Schema.org support
 * Generates location-aware, SEO-optimized metadata
 */

import { Metadata } from "next";
import { LocationData } from "./location";
import {
	generateMetaKeywords,
	generateLocationDescription,
	getLocationTitleSuffix,
	getKeywordsByLocation,
} from "./seo-keywords";

export interface SEOConfig {
	title: string;
	description: string;
	keywords?: string;
	location?: LocationData;
	canonical?: string;
	images?: string[];
}

/**
 * Generate comprehensive SEO metadata
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
	const { title, description, location, canonical, images } = config;

	// Location-aware title
	const locationSuffix = location
		? getLocationTitleSuffix(location.city, location.country)
		: "";
	const fullTitle = `${title}${locationSuffix}`;

	// Location-aware description
	const fullDescription = location
		? generateLocationDescription(location.countryCode, location.city)
		: description;

	// Generate keywords
	const keywords = location
		? generateMetaKeywords(location.countryCode)
		: config.keywords;

	return {
		title: fullTitle,
		description: fullDescription,
		keywords,
		authors: [{ name: "MELP Team" }],
		creator: "MELP",
		publisher: "MELP",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com"
		),
		alternates: {
			canonical: canonical || "/",
		},
		openGraph: {
			title: fullTitle,
			description: fullDescription,
			url: canonical || "/",
			siteName: "MELP",
			images: images || ["/og-image.png"],
			locale: location?.language || "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description: fullDescription,
			images: images || ["/og-image.png"],
			creator: "@melpapp",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
			yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
		},
	};
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema(location?: LocationData) {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "MELP",
		description:
			"AI-powered collaboration platform for modern teams. Video calls, messaging, and seamless teamwork.",
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com",
		logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com"}/logo.png`,
		foundingDate: "2020",
		founders: [
			{
				"@type": "Person",
				name: "MELP Founders",
			},
		],
		address: location
			? {
					"@type": "PostalAddress",
					addressLocality: location.city,
					addressRegion: location.region,
					addressCountry: location.countryCode,
			  }
			: undefined,
		sameAs: [
			"https://twitter.com/melpapp",
			"https://linkedin.com/company/melp",
			"https://github.com/melp",
			"https://facebook.com/melpapp",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Customer Service",
			email: "support@melp.com",
			availableLanguage: ["English", "Spanish", "French", "German", "Japanese"],
		},
	};
}

/**
 * Generate JSON-LD structured data for SoftwareApplication
 */
export function generateSoftwareSchema(location?: LocationData) {
	const keywords = location
		? getKeywordsByLocation(location.countryCode)
		: null;

	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "MELP",
		applicationCategory: "BusinessApplication",
		applicationSubCategory: "Team Collaboration Software",
		operatingSystem: "Web, iOS, Android, Windows, macOS, Linux",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: location?.currency || "USD",
			priceValidUntil: "2025-12-31",
			availability: "https://schema.org/InStock",
			description: "Free 30-day trial, no credit card required",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "15000",
			bestRating: "5",
			worstRating: "1",
		},
		description:
			"MELP is an AI-powered collaboration platform for modern teams. Features include HD video calls, smart messaging, team workspaces, file sharing, and real-time collaboration.",
		screenshot: `${
			process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com"
		}/screenshot.png`,
		featureList: keywords?.primary.slice(0, 5) || [
			"Video Conferencing",
			"Team Messaging",
			"File Sharing",
			"Screen Sharing",
			"AI-Powered Insights",
		],
		inLanguage: location?.language || "en",
	};
}

/**
 * Generate JSON-LD structured data for WebSite
 */
export function generateWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "MELP",
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${
					process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com"
				}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(
	items: { name: string; url: string }[]
) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://melp.com"}${
				item.url
			}`,
		})),
	};
}

/**
 * Combine all structured data schemas
 */
export function generateAllSchemas(location?: LocationData) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			generateOrganizationSchema(location),
			generateSoftwareSchema(location),
			generateWebSiteSchema(),
		],
	};
}

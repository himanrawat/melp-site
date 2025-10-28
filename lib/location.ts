/**
 * Location detection and management utilities
 * Supports IP-based geolocation for content personalization
 */

export interface LocationData {
	country: string;
	countryCode: string;
	city: string;
	region: string;
	regionCode: string;
	timezone: string;
	currency: string;
	language: string;
}

/**
 * Detects user location using IP geolocation
 * Uses ipapi.co free tier (up to 1000 requests/day)
 * Falls back to US if detection fails
 */
export async function detectLocation(): Promise<LocationData> {
	try {
		const response = await fetch("https://ipapi.co/json/", {
			next: { revalidate: 3600 }, // Cache for 1 hour
		});

		if (!response.ok) {
			throw new Error("Geolocation API failed");
		}

		const data = await response.json();

		return {
			country: data.country_name || "United States",
			countryCode: data.country_code || "US",
			city: data.city || "New York",
			region: data.region || "New York",
			regionCode: data.region_code || "NY",
			timezone: data.timezone || "America/New_York",
			currency: data.currency || "USD",
			language: data.languages?.split(",")[0] || "en",
		};
	} catch (error) {
		console.error("Location detection failed:", error);
		// Fallback to default location
		return {
			country: "United States",
			countryCode: "US",
			city: "New York",
			region: "New York",
			regionCode: "NY",
			timezone: "America/New_York",
			currency: "USD",
			language: "en",
		};
	}
}

/**
 * Get location from request headers (for server-side detection)
 * Works with Vercel, Cloudflare, and other edge platforms
 */
export function getLocationFromHeaders(
	headers: Headers
): Partial<LocationData> {
	return {
		country: headers.get("x-vercel-ip-country") || undefined,
		countryCode: headers.get("x-vercel-ip-country-code") || undefined,
		city: headers.get("x-vercel-ip-city") || undefined,
		region: headers.get("x-vercel-ip-country-region") || undefined,
	};
}

/**
 * Client-side location detection with caching
 */
export async function getClientLocation(): Promise<LocationData> {
	const CACHE_KEY = "melp_user_location";
	const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

	// Check cache first
	if (globalThis.window !== undefined) {
		const cached = localStorage.getItem(CACHE_KEY);
		if (cached) {
			const { data, timestamp } = JSON.parse(cached);
			if (Date.now() - timestamp < CACHE_DURATION) {
				return data;
			}
		}
	}

	// Fetch fresh location data
	const location = await detectLocation();

	// Cache the result
	if (globalThis.window !== undefined) {
		localStorage.setItem(
			CACHE_KEY,
			JSON.stringify({
				data: location,
				timestamp: Date.now(),
			})
		);
	}

	return location;
}

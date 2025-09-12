/**
 * Environment utilities for the application
 * This provides a consistent way to check environment across client and server
 */

// Check if we're in development mode
export const isDevelopment = () => {
	// Server-side check
	if (typeof window === "undefined") {
		return process.env.NODE_ENV === "development";
	}

	// Client-side check - look for localhost or development indicators
	return (
		window.location.hostname === "localhost" ||
		window.location.hostname === "127.0.0.1" ||
		window.location.hostname.startsWith("192.168.") ||
		window.location.port === "3000"
	);
};

// Check if we're in production mode
export const isProduction = () => {
	if (typeof window === "undefined") {
		return process.env.NODE_ENV === "production";
	}

	return !isDevelopment();
};

// Get environment name
export const getEnvironment = () => {
	if (typeof window === "undefined") {
		return process.env.NODE_ENV || "development";
	}

	return isDevelopment() ? "development" : "production";
};

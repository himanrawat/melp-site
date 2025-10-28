import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { headers } from "next/headers";
import { getLocationFromHeaders } from "@/lib/location";
import { generateSEOMetadata, generateAllSchemas } from "@/lib/seo-metadata";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

/**
 * Generate dynamic metadata based on user location
 */
export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers();
	const locationData = getLocationFromHeaders(headersList);

	// If we have location data from headers, use it for SEO
	const location = locationData.countryCode
		? {
				country: locationData.country || "United States",
				countryCode: locationData.countryCode || "US",
				city: locationData.city || "New York",
				region: locationData.region || "New York",
				regionCode: "NY",
				timezone: "America/New_York",
				currency: "USD",
				language: "en",
		  }
		: undefined;

	return generateSEOMetadata({
		title:
			"MELP - Create together. Communicate clearly. Collaborate seamlessly.",
		description:
			"One platform that unites people, ideas, and workflows—anywhere, anytime. Join millions of teams using MELP for video calls, AI-powered insights, and seamless collaboration.",
		location,
	});
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = await headers();
	const locationData = getLocationFromHeaders(headersList);

	// Generate structured data for SEO
	const location = locationData.countryCode
		? {
				country: locationData.country || "United States",
				countryCode: locationData.countryCode || "US",
				city: locationData.city || "New York",
				region: locationData.region || "New York",
				regionCode: "NY",
				timezone: "America/New_York",
				currency: "USD",
				language: "en",
		  }
		: undefined;

	const structuredData = generateAllSchemas(location);

	return (
		<html lang="en">
			<head>
				{/* Schema.org structured data for SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main className="mt-18 lg:mt-[74px] overflow-hidden">{children}</main>
			</body>
		</html>
	);
}

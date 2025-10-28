"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Users, Video, MessageSquare } from "lucide-react";
import { HeroTextFlip } from "./ui/HeroTextFlip";
import { getClientLocation, LocationData } from "@/lib/location";
import { getKeywordsByLocation } from "@/lib/seo-keywords";

const Hero = () => {
	const [location, setLocation] = useState<LocationData | null>(null);
	const [keywords, setKeywords] = useState<{
		primary: string[];
		trending: string[];
	} | null>(null);

	useEffect(() => {
		// Fetch location on client side
		getClientLocation().then((loc) => {
			setLocation(loc);
			const kw = getKeywordsByLocation(loc.countryCode);
			setKeywords(kw);
		});
	}, []);

	// Location-specific messaging
	const getLocationMessage = () => {
		if (!location) return "Join millions of teams worldwide";

		const messages: Record<string, string> = {
			US: "Join over 5 million American teams",
			IN: "Join Indian teams building the future",
			GB: "Trusted by UK enterprises and startups",
			CA: "Join Canadian teams coast to coast",
			AU: "Connect Australian teams nationwide",
			DE: "Vertrauen von deutschen Unternehmen",
			SG: "Powering APAC's leading teams",
			JP: "日本のチームに信頼されています",
		};

		return (
			messages[location.countryCode] || `Join teams in ${location.country}`
		);
	};

	// Get location-specific features
	const getLocationFeatures = () => {
		if (!keywords) {
			return [
				{ icon: Video, text: "HD Video Calls" },
				{ icon: MessageSquare, text: "Smart Messaging" },
				{ icon: Users, text: "Team Workspaces" },
			];
		}

		// Map trending keywords to features
		const featureMap: Record<
			string,
			{ icon: React.ComponentType<{ className?: string }>; text: string }[]
		> = {
			US: [
				{ icon: Video, text: "Enterprise Video Conferencing" },
				{ icon: MessageSquare, text: "HIPAA Compliant Messaging" },
				{ icon: Users, text: "Secure Team Collaboration" },
			],
			IN: [
				{ icon: Video, text: "Low-Latency Video Calls" },
				{ icon: MessageSquare, text: "Multilingual Support" },
				{ icon: Users, text: "Offshore Team Tools" },
			],
			GB: [
				{ icon: Video, text: "GDPR Compliant Video" },
				{ icon: MessageSquare, text: "UK Data Protection" },
				{ icon: Users, text: "Enterprise Security" },
			],
		};

		return (
			featureMap[location?.countryCode || "US"] || [
				{ icon: Video, text: "HD Video Calls" },
				{ icon: MessageSquare, text: "Smart Messaging" },
				{ icon: Users, text: "Team Workspaces" },
			]
		);
	};

	const features = getLocationFeatures();

	return (
		<section className="relative px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto pt-12 sm:pt-16 lg:pt-20 pb-2">
				{/* Hero Content */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					{/* Main Heading */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 animate-slideUp">
						<HeroTextFlip
							words={["Collaborate", "Create", "Communicate"]}
							constantWord="Together"
							interval={2500}
							className="block"
						/>
					</h1>

					{/* Subheading with location awareness */}
					<p
						className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed animate-slideUp"
						style={{ animationDelay: "200ms" }}
					>
						One platform that unites people, ideas, and workflows anywhere,
						anytime. <br />
						{getLocationMessage()} using MELP for video calls, AI-powered
						insights, and seamless collaboration.
					</p>

					{/* Feature highlights - Dynamic based on location */}
					<div
						className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 animate-slideUp"
						style={{ animationDelay: "400ms" }}
					>
						{features.map((feature) => (
							<div
								key={feature.text}
								className="flex items-center gap-2 text-neutral-700 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-neutral-200"
							>
								<feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
								<span className="text-sm sm:text-base font-medium">
									{feature.text}
								</span>
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div
						className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slideUp"
						style={{ animationDelay: "600ms" }}
					>
						<button className="group bg-neutral-900 hover:bg-neutral-700 text-white px-4 sm:px-4 py-3 sm:py-4 rounded-lg font-semibold text-md transition-all duration-300 hover:shadow-lg hover:shadow-neutral-600/25 hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer">
							Start Free Trial
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</button>

						<button className="group bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-md border border-neutral-300 hover:border-neutral-400 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer">
							<Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
							Watch Demo
						</button>
					</div>

					{/* Trust indicators with location context */}
					<p
						className="text-sm text-neutral-500 mt-6 sm:mt-8 animate-slideUp"
						style={{ animationDelay: "800ms" }}
					>
						{location
							? `Trusted by 10M+ users in ${location.country} and worldwide`
							: "Trusted by 10M+ users worldwide"}{" "}
						• No credit card required • Free 30-day trial
					</p>
				</div>

				{/* Dashboard Preview Label */}
				<div
					className="text-center mb-4 sm:mb-6 animate-slideUp"
					style={{ animationDelay: "1000ms" }}
				>
				<div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium border border-brand-200">
					<span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-subtle"></span>
					<span>Interactive Preview • Click sidebar to explore features</span>
				</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

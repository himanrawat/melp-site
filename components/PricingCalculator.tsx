"use client";

import React, { useState, useEffect } from "react";
import { getClientLocation, LocationData } from "@/lib/location";

interface Tool {
	id: string;
	name: string;
	priceUSD: number; // Base price in USD
	checked: boolean;
	competitor?: string;
}

const PricingCalculator = () => {
	const [teamSize, setTeamSize] = useState(10);
	const [location, setLocation] = useState<LocationData | null>(null);
	const [tools, setTools] = useState<Tool[]>([
		{
			id: "cloud-storage",
			name: "MELP Drive (Cloud Storage)",
			priceUSD: 10,
			checked: false,
			competitor: "Google Drive / OneDrive",
		},
		{
			id: "calendar",
			name: "Calendar Scheduling",
			priceUSD: 12,
			checked: false,
			competitor: "Calendly",
		},
		{
			id: "video-calls",
			name: "Video Conferencing",
			priceUSD: 13,
			checked: false,
			competitor: "Zoom / Microsoft Teams / Google Meet",
		},
		{
			id: "messaging",
			name: "Team Chat & Messaging",
			priceUSD: 8,
			checked: false,
			competitor: "Slack / WhatsApp Business",
		},
		{
			id: "project-mgmt",
			name: "Project Management",
			priceUSD: 12,
			checked: false,
			competitor: "Asana",
		},
		{
			id: "crm",
			name: "CRM Integration",
			priceUSD: 18,
			checked: false,
			competitor: "Salesforce",
		},
		{
			id: "networking",
			name: "Professional Network",
			priceUSD: 30,
			checked: false,
			competitor: "LinkedIn Premium",
		},
		{
			id: "ai-writing",
			name: "AI Writing Assistant",
			priceUSD: 15,
			checked: false,
			competitor: "Jasper AI / Grammarly",
		},
		{
			id: "meeting-notes",
			name: "AI Meeting Notes",
			priceUSD: 10,
			checked: false,
			competitor: "Otter.ai",
		},
	]);

	// Currency conversion rates (updated as of Oct 2025)
	const currencyRates: Record<string, { rate: number; symbol: string }> = {
		USD: { rate: 1, symbol: "$" },
		INR: { rate: 83.12, symbol: "₹" },
		GBP: { rate: 0.79, symbol: "£" },
		EUR: { rate: 0.92, symbol: "€" },
		CAD: { rate: 1.36, symbol: "C$" },
		AUD: { rate: 1.52, symbol: "A$" },
		SGD: { rate: 1.34, symbol: "S$" },
		JPY: { rate: 149.5, symbol: "¥" },
	};

	// Get currency based on location
	const getCurrency = () => {
		if (!location) return currencyRates.USD;

		const currencyMap: Record<string, string> = {
			US: "USD",
			IN: "INR",
			GB: "GBP",
			DE: "EUR",
			FR: "EUR",
			ES: "EUR",
			IT: "EUR",
			CA: "CAD",
			AU: "AUD",
			SG: "SGD",
			JP: "JPY",
		};

		const currencyCode =
			currencyMap[location.countryCode] || location.currency || "USD";
		return currencyRates[currencyCode] || currencyRates.USD;
	};

	const currency = getCurrency();

	// Convert USD price to local currency
	const convertPrice = (priceUSD: number) => {
		return Math.round(priceUSD * currency.rate);
	};

	// Format price with currency symbol
	const formatPrice = (priceUSD: number) => {
		const localPrice = convertPrice(priceUSD);
		if (localPrice === 0) return "";

		// Format with proper decimal places
		if (currency.symbol === "₹" || currency.symbol === "¥") {
			return `${currency.symbol}${localPrice.toLocaleString()}`;
		}
		return `${currency.symbol}${localPrice}`;
	};

	useEffect(() => {
		getClientLocation().then((loc) => {
			setLocation(loc);
		});
	}, []);

	const handleToolToggle = (id: string) => {
		setTools(
			tools.map((tool) =>
				tool.id === id ? { ...tool, checked: !tool.checked } : tool
			)
		);
	};

	const handleTeamSizeChange = (increment: boolean) => {
		setTeamSize((prev) => {
			const newSize = increment ? prev + 1 : prev - 1;
			return Math.max(1, Math.min(1000, newSize));
		});
	};

	const calculateSavings = () => {
		const selectedTools = tools.filter((tool) => tool.checked);
		const totalPerUserUSD = selectedTools.reduce(
			(sum, tool) => sum + tool.priceUSD,
			0
		);
		const monthlyTotalUSD = totalPerUserUSD * teamSize;
		const annualTotalUSD = monthlyTotalUSD * 12;

		// Convert to local currency
		const monthlyLocal = convertPrice(monthlyTotalUSD);
		const annualLocal = convertPrice(annualTotalUSD);

		return {
			monthly: monthlyLocal,
			annual: annualLocal,
		};
	};

	const savings = calculateSavings();

	const formatSavings = (amount: number) => {
		if (currency.symbol === "₹" || currency.symbol === "¥") {
			return `${currency.symbol}${amount.toLocaleString()}`;
		}
		return `${currency.symbol}${amount.toLocaleString()}`;
	};

	return (
		<section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
						More productivity.
						<br />
						Fewer tools.
					</h2>
					<p className="text-lg text-neutral-600 mb-4">
						Bring all your tools and teams under one roof. Calculate savings
						below.
					</p>
					<a
						href="#pricing"
						className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center gap-1 transition-colors"
					>
						See pricing plans →
					</a>
				</div>

				{/* Calculator Card */}
				<div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 md:p-10">
					{/* Tools Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
						{tools.map((tool) => (
							<label
								key={tool.id}
								className="flex items-center gap-3 cursor-pointer group"
							>
								<input
									type="checkbox"
									checked={tool.checked}
									onChange={() => handleToolToggle(tool.id)}
									className="w-4 h-4 rounded border-brand-300 text-brand-500 focus:ring-brand-500 focus:ring-offset-0 cursor-pointer accent-brand-500"
								/>
								<span className="text-neutral-700 group-hover:text-neutral-900 transition-colors flex-1">
									{tool.name}
								</span>
								{tool.checked && tool.priceUSD > 0 && (
									<span className="text-xs text-brand-600 font-medium animate-fadeIn">
										{formatPrice(tool.priceUSD)}/user
									</span>
								)}
							</label>
						))}
					</div>

					{/* Divider */}
					<div className="border-t border-neutral-200 mb-8" />

					{/* Results */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Team Size */}
						<div>
							<div className="block text-sm font-medium text-neutral-600 mb-3">
								Team size
							</div>
							<div className="flex items-center gap-3">
								<button
									onClick={() => handleTeamSizeChange(false)}
									className="w-8 h-8 rounded-lg border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
									aria-label="Decrease team size"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 12h14"
										/>
									</svg>
								</button>
								<input
									type="number"
									value={teamSize}
									onChange={(e) =>
										setTeamSize(
											Math.max(1, Number.parseInt(e.target.value) || 1)
										)
									}
									className="w-20 text-center text-3xl font-bold text-neutral-900 border-0 focus:ring-0 p-0"
									min="1"
									max="1000"
								/>
								<button
									onClick={() => handleTeamSizeChange(true)}
									className="w-8 h-8 rounded-lg border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
									aria-label="Increase team size"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 4v16m8-8H4"
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* Monthly Savings */}
						<div>
							<div className="block text-sm font-medium text-neutral-600 mb-3">
								Monthly savings
							</div>
							<div className="text-3xl font-bold text-neutral-900">
								{formatSavings(savings.monthly)}
							</div>
						</div>

						{/* Annual Savings */}
						<div>
							<div className="block text-sm font-medium text-neutral-600 mb-3">
								Annual savings
							</div>
							<div className="text-3xl font-bold text-brand-500">
								{formatSavings(savings.annual)}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-8 text-center">
					<p className="text-neutral-600 mb-4">
						{tools.some((t) => t.checked) ? (
							<>
								Replace {tools.filter((t) => t.checked).length} tools with MELP
								and save{" "}
								<span className="font-semibold text-brand-600">
									{formatSavings(savings.annual)}
								</span>{" "}
								per year
							</>
						) : (
							"Select tools above to calculate your potential savings"
						)}
					</p>
					<button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25">
						Start Free Trial
					</button>
				</div>
			</div>
		</section>
	);
};

export default PricingCalculator;

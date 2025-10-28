"use client";

import React, { useState } from "react";
import { LocationData } from "@/lib/location";

interface LocationTesterProps {
	onLocationChange: (location: LocationData) => void;
}

const LocationTester: React.FC<LocationTesterProps> = ({
	onLocationChange,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const testLocations: Record<string, LocationData> = {
		US: {
			country: "United States",
			countryCode: "US",
			city: "New York",
			region: "New York",
			regionCode: "NY",
			timezone: "America/New_York",
			currency: "USD",
			language: "en",
		},
		IN: {
			country: "India",
			countryCode: "IN",
			city: "Mumbai",
			region: "Maharashtra",
			regionCode: "MH",
			timezone: "Asia/Kolkata",
			currency: "INR",
			language: "en",
		},
		GB: {
			country: "United Kingdom",
			countryCode: "GB",
			city: "London",
			region: "England",
			regionCode: "ENG",
			timezone: "Europe/London",
			currency: "GBP",
			language: "en",
		},
		CA: {
			country: "Canada",
			countryCode: "CA",
			city: "Toronto",
			region: "Ontario",
			regionCode: "ON",
			timezone: "America/Toronto",
			currency: "CAD",
			language: "en",
		},
		AU: {
			country: "Australia",
			countryCode: "AU",
			city: "Sydney",
			region: "New South Wales",
			regionCode: "NSW",
			timezone: "Australia/Sydney",
			currency: "AUD",
			language: "en",
		},
		DE: {
			country: "Germany",
			countryCode: "DE",
			city: "Berlin",
			region: "Berlin",
			regionCode: "BE",
			timezone: "Europe/Berlin",
			currency: "EUR",
			language: "de",
		},
		SG: {
			country: "Singapore",
			countryCode: "SG",
			city: "Singapore",
			region: "Singapore",
			regionCode: "SG",
			timezone: "Asia/Singapore",
			currency: "SGD",
			language: "en",
		},
		JP: {
			country: "Japan",
			countryCode: "JP",
			city: "Tokyo",
			region: "Tokyo",
			regionCode: "13",
			timezone: "Asia/Tokyo",
			currency: "JPY",
			language: "ja",
		},
	};

	const handleLocationSelect = (countryCode: string) => {
		const location = testLocations[countryCode];
		// Update localStorage
		localStorage.setItem(
			"melp_user_location",
			JSON.stringify({
				data: location,
				timestamp: Date.now(),
			})
		);
		// Trigger callback
		onLocationChange(location);
		// Reload to see changes
		globalThis.window.location.reload();
	};

	const clearLocation = () => {
		localStorage.removeItem("melp_user_location");
		globalThis.window.location.reload();
	};

	// Only show in development
	if (process.env.NODE_ENV === "production") {
		return null;
	}

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{isOpen ? (
				<div className="bg-white rounded-lg shadow-2xl p-4 w-64 border border-gray-200">
					<div className="flex justify-between items-center mb-3">
						<h3 className="font-bold text-gray-800">Location Tester</h3>
						<button
							onClick={() => setIsOpen(false)}
							className="text-gray-500 hover:text-gray-700 text-xl leading-none"
						>
							×
						</button>
					</div>

					<div className="space-y-2 max-h-96 overflow-y-auto">
						{Object.entries(testLocations).map(([code, location]) => (
							<button
								key={code}
								onClick={() => handleLocationSelect(code)}
								className="w-full text-left px-3 py-2 rounded hover:bg-purple-50 border border-gray-200 hover:border-purple-300 transition-colors"
							>
								<div className="flex items-center gap-2">
									<span className="text-xl">
										{code === "US" && "🇺🇸"}
										{code === "IN" && "🇮🇳"}
										{code === "GB" && "🇬🇧"}
										{code === "CA" && "🇨🇦"}
										{code === "AU" && "🇦🇺"}
										{code === "DE" && "🇩🇪"}
										{code === "SG" && "🇸🇬"}
										{code === "JP" && "🇯🇵"}
									</span>
									<div className="flex-1">
										<div className="font-medium text-sm text-gray-900">
											{location.country}
										</div>
										<div className="text-xs text-gray-500">{location.city}</div>
									</div>
								</div>
							</button>
						))}
					</div>

					<button
						onClick={clearLocation}
						className="w-full mt-3 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded border border-red-200 text-sm font-medium transition-colors"
					>
						🔄 Reset to Auto-detect
					</button>

					<div className="mt-2 text-xs text-gray-500 text-center">
						Dev only - Hidden in production
					</div>
				</div>
			) : (
				<button
					onClick={() => setIsOpen(true)}
					className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium text-sm"
				>
					🌍 Test Locations
				</button>
			)}
		</div>
	);
};

export default LocationTester;

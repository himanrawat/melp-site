"use client";

import React, { useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import { useTour } from "./TourContext";
import { dashboardTour } from "./tourConfigs";

interface TourControlsProps {
	className?: string;
}

const TourControls: React.FC<TourControlsProps> = ({ className = "" }) => {
	const { isActive, startTour } = useTour();
	const [hasTourHistory, setHasTourHistory] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		if (typeof window !== "undefined") {
			const hasCompletedTour =
				sessionStorage.getItem(`tour-${dashboardTour.id}-completed`) === "true";
			const hasSkippedTour =
				sessionStorage.getItem(`tour-${dashboardTour.id}-skipped`) === "true";
			setHasTourHistory(hasCompletedTour || hasSkippedTour);
		}
	}, []);

	const handleStartTour = () => {
		startTour(dashboardTour);
	};

	// Don't render anything until client-side hydration is complete
	if (!isClient) {
		return null;
	}

	if (isActive) {
		return null; // Hide controls during active tour
	}

	return (
		<div className={`${className}`}>
			{!isActive && hasTourHistory ? (
				<button
					onClick={handleStartTour}
					className="flex items-center px-3 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
					title="Restart Melp Tour (Ctrl+Shift+T)"
				>
					<RotateCcw className="w-4 h-4 mr-2" />
					Restart Tour
				</button>
			) : (
				<div className="relative group">
					<button
						onClick={handleStartTour}
						className="flex items-center px-4 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg animate-pulse"
						title="Start Melp Tour (Ctrl+Shift+T)"
					>
						<Play className="w-4 h-4 mr-2" />
						Start Tour
					</button>

					{/* Keyboard shortcut hint */}
					<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
						Press Ctrl+Shift+T
					</div>
				</div>
			)}
		</div>
	);
};

export default TourControls;

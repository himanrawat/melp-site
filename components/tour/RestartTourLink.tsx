"use client";

import React from "react";
import { useTour } from "./TourContext";
import { dashboardTour } from "./tourConfigs";

const RestartTourLink: React.FC = () => {
	const { isActive, startTour } = useTour();

	const handleRestartTour = (e: React.MouseEvent) => {
		e.preventDefault();
		startTour(dashboardTour);
	};

	// Don't show the link if tour is currently active
	if (isActive) {
		return null;
	}

	return (
		<div className="flex justify-end items-center space-x-1">
			<p className="text-neutral-600 text-sm">
				Need help navigating the dashboard?
			</p>
			<button
				onClick={handleRestartTour}
				className="text-brand hover:text-brand-600 text-sm font-medium underline underline-offset-2 transition-colors cursor-pointer"
				title="Restart Dashboard Tour"
			>
				Restart Tour
			</button>
		</div>
	);
};

export default RestartTourLink;

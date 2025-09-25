"use client";

import { useEffect } from "react";
import { useTour } from "./TourContext";
import { dashboardTour } from "./tourConfigs";

const AutoStartTour: React.FC = () => {
	const { startTour, isActive } = useTour();

	useEffect(() => {
		// Only auto-start if not already active and user hasn't completed/skipped tour
		if (isActive || typeof window === "undefined") return;

		const hasCompletedTour =
			localStorage.getItem(`tour-${dashboardTour.id}-completed`) === "true";
		const hasSkippedTour =
			localStorage.getItem(`tour-${dashboardTour.id}-skipped`) === "true";
		const hasStartedTour =
			localStorage.getItem(`tour-${dashboardTour.id}-started`) === "true";

		// Auto-start tour for first-time users (delay for better UX)
		if (!hasCompletedTour && !hasSkippedTour && !hasStartedTour) {
			const timer = setTimeout(() => {
				startTour(dashboardTour);
			}, 2000); // 2 second delay to let dashboard load

			return () => clearTimeout(timer);
		}
	}, [startTour, isActive]);

	return null; // This is a logic-only component
};

export default AutoStartTour;

"use client";

import { useEffect, useRef } from "react";
import { useTour } from "./TourContext";
import { dashboardTour } from "./tourConfigs";

const AutoStartTour: React.FC = () => {
	const { startTour, isActive } = useTour();
	const hasTriggeredRef = useRef(false);

	useEffect(() => {
		// Only set up observer if not already active and window is available
		if (isActive || typeof window === "undefined" || hasTriggeredRef.current)
			return;

		// Check session storage for tour completion status
		const hasCompletedTour =
			sessionStorage.getItem(`tour-${dashboardTour.id}-completed`) === "true";
		const hasSkippedTour =
			sessionStorage.getItem(`tour-${dashboardTour.id}-skipped`) === "true";
		const hasStartedTour =
			sessionStorage.getItem(`tour-${dashboardTour.id}-started`) === "true";

		// Only auto-start for first-time users in this session
		if (hasCompletedTour || hasSkippedTour || hasStartedTour) {
			return;
		}

		// Find the dashboard element
		const dashboardElement = document.querySelector(
			'[data-tour="dashboard-main"]'
		);
		if (!dashboardElement) return;

		// Create Intersection Observer with 20% threshold
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Trigger when 20% of dashboard is visible
					if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
						if (hasTriggeredRef.current) return;

						hasTriggeredRef.current = true;

						// Smooth scroll dashboard into full view
						dashboardElement.scrollIntoView({
							behavior: "smooth",
							block: "center",
							inline: "nearest",
						});

						// Start tour after smooth scroll completes
						setTimeout(() => {
							if (!isActive) {
								startTour(dashboardTour);
							}
						}, 800); // Delay to let smooth scroll finish

						// Disconnect observer after triggering
						observer.disconnect();
					}
				});
			},
			{
				threshold: 0.2, // Trigger when 20% visible
				rootMargin: "0px 0px -10% 0px", // Slight offset for better UX
			}
		);

		// Start observing
		observer.observe(dashboardElement);

		// Cleanup
		return () => {
			observer.disconnect();
		};
	}, [startTour, isActive]);

	return null; // This is a logic-only component
};

export default AutoStartTour;

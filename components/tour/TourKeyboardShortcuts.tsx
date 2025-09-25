"use client";

import { useEffect } from "react";
import { useTour } from "./TourContext";
import { dashboardTour } from "./tourConfigs";

const TourKeyboardShortcuts: React.FC = () => {
	const { startTour, skipTour, nextStep, prevStep, isActive } = useTour();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Only handle shortcuts when tour is not in an input field
			const isInInputField =
				event.target instanceof HTMLElement &&
				["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName);

			if (isInInputField) return;

			// Ctrl/Cmd + Shift + T to start tour
			if (
				(event.ctrlKey || event.metaKey) &&
				event.shiftKey &&
				event.key === "T"
			) {
				event.preventDefault();
				if (!isActive) {
					startTour(dashboardTour);
				}
				return;
			}

			// Only handle navigation shortcuts during active tour
			if (!isActive) return;

			switch (event.key) {
				case "ArrowRight":
				case " ": // Spacebar
				case "Enter":
					event.preventDefault();
					nextStep();
					break;
				case "ArrowLeft":
					event.preventDefault();
					prevStep();
					break;
				case "Escape":
					event.preventDefault();
					skipTour();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [startTour, skipTour, nextStep, prevStep, isActive]);

	return null;
};

export default TourKeyboardShortcuts;

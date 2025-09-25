"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useTour } from "./TourContext";
import Tooltip from "./Tooltip";

const TourOverlay: React.FC = () => {
	const {
		isActive,
		currentTour,
		currentStepIndex,
		nextStep,
		prevStep,
		skipTour,
	} = useTour();
	const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
	const [highlightStyle, setHighlightStyle] = useState({});

	const updateHighlight = useCallback(() => {
		if (!isActive || !currentTour) return;

		const currentStep = currentTour.steps[currentStepIndex];
		if (!currentStep) return;

		// Wait a bit for DOM updates
		setTimeout(() => {
			const element = document.querySelector(currentStep.target) as HTMLElement;
			const dashboardContainer = document.querySelector(
				'[data-tour="dashboard-main"]'
			) as HTMLElement;

			if (element && dashboardContainer) {
				setTargetElement(element);

				// Get element position relative to dashboard container
				const elementRect = element.getBoundingClientRect();
				const containerRect = dashboardContainer.getBoundingClientRect();

				const relativeTop = elementRect.top - containerRect.top;
				const relativeLeft = elementRect.left - containerRect.left;

				setHighlightStyle({
					position: "absolute",
					top: relativeTop - 8,
					left: relativeLeft - 8,
					width: elementRect.width + 16,
					height: elementRect.height + 16,
					borderRadius: "8px",
					boxShadow:
						"0 0 0 4px rgba(238, 65, 54, 0.5), 0 0 0 2000px rgba(0, 0, 0, 0.3)",
					pointerEvents: "none",
					zIndex: 9998,
				});

				// Scroll element into view within dashboard if needed
				if (element.scrollIntoView) {
					element.scrollIntoView({
						behavior: "smooth",
						block: "center",
						inline: "center",
					});
				}
			} else {
				console.warn(`Tour target element not found: ${currentStep.target}`);
			}
		}, 100);
	}, [isActive, currentTour, currentStepIndex]);

	useEffect(() => {
		updateHighlight();

		// Update highlight on window resize or scroll
		window.addEventListener("resize", updateHighlight);
		window.addEventListener("scroll", updateHighlight);

		return () => {
			window.removeEventListener("resize", updateHighlight);
			window.removeEventListener("scroll", updateHighlight);
		};
	}, [updateHighlight]);

	// Handle step actions
	useEffect(() => {
		if (!isActive || !currentTour || !targetElement) return;

		const currentStep = currentTour.steps[currentStepIndex];
		if (currentStep?.action) {
			const handleAction = () => {
				switch (currentStep.action?.type) {
					case "click":
						if (targetElement) {
							targetElement.click();
						}
						break;
					case "navigate":
						// Handle navigation if needed
						break;
				}
			};

			// Small delay to ensure tooltip is visible first
			const timeout = setTimeout(handleAction, 500);
			return () => clearTimeout(timeout);
		}
	}, [isActive, currentTour, currentStepIndex, targetElement]);

	if (!isActive || !currentTour || !targetElement) {
		return null;
	}

	const currentStep = currentTour.steps[currentStepIndex];
	const isFirstStep = currentStepIndex === 0;
	const isLastStep = currentStepIndex === currentTour.steps.length - 1;

	return (
		<>
			{/* Background layer for first and last steps */}
			{(isFirstStep || isLastStep) && (
				<div
					className="absolute inset-0 bg-black/50 rounded-2xl transition-all duration-500 ease-in-out"
					style={{ zIndex: 9996 }}
				/>
			)}

			{/* Overlay with highlight - contained within dashboard */}
			<div
				className="absolute inset-0 transition-all duration-300 rounded-2xl overflow-hidden"
				style={{ zIndex: 9997 }}
			>
				{!isFirstStep && !isLastStep && (
					<div
						className="absolute transition-all duration-300"
						style={highlightStyle}
					/>
				)}
			</div>

			{/* Tooltip */}
			<Tooltip
				step={currentStep}
				targetElement={targetElement}
				onNext={nextStep}
				onPrev={prevStep}
				onSkip={skipTour}
				currentIndex={currentStepIndex}
				totalSteps={currentTour.steps.length}
				isFirstStep={isFirstStep}
				isLastStep={isLastStep}
			/>
		</>
	);
};

export default TourOverlay;

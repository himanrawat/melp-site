"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { TourConfig, TourContextType } from "@/types/tour";

const TourContext = createContext<TourContextType | undefined>(undefined);

export const useTour = () => {
	const context = useContext(TourContext);
	if (!context) {
		throw new Error("useTour must be used within a TourProvider");
	}
	return context;
};

interface TourProviderProps {
	children: React.ReactNode;
}

export const TourProvider: React.FC<TourProviderProps> = ({ children }) => {
	const [isActive, setIsActive] = useState(false);
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [currentTour, setCurrentTour] = useState<TourConfig | null>(null);

	const startTour = useCallback((tourConfig: TourConfig) => {
		setCurrentTour(tourConfig);
		setCurrentStepIndex(0);
		setIsActive(true);
		// Store in sessionStorage to remember tour completion for current session
		if (typeof window !== "undefined") {
			sessionStorage.setItem(`tour-${tourConfig.id}-started`, "true");
		}
	}, []);

	const completeTour = useCallback(() => {
		if (currentTour) {
			if (typeof window !== "undefined") {
				sessionStorage.setItem(`tour-${currentTour.id}-completed`, "true");
			}
			currentTour.onComplete?.();
		}
		setIsActive(false);
		setCurrentTour(null);
		setCurrentStepIndex(0);
	}, [currentTour]);

	const nextStep = useCallback(() => {
		if (!currentTour) return;

		if (currentStepIndex < currentTour.steps.length - 1) {
			setCurrentStepIndex((prev) => prev + 1);
		} else {
			completeTour();
		}
	}, [currentStepIndex, currentTour, completeTour]);

	const prevStep = useCallback(() => {
		if (currentStepIndex > 0) {
			setCurrentStepIndex((prev) => prev - 1);
		}
	}, [currentStepIndex]);

	const skipTour = useCallback(() => {
		if (currentTour) {
			if (typeof window !== "undefined") {
				sessionStorage.setItem(`tour-${currentTour.id}-skipped`, "true");
			}
			currentTour.onSkip?.();
		}
		setIsActive(false);
		setCurrentTour(null);
		setCurrentStepIndex(0);
	}, [currentTour]);

	const setStepIndex = useCallback(
		(index: number) => {
			if (currentTour && index >= 0 && index < currentTour.steps.length) {
				setCurrentStepIndex(index);
			}
		},
		[currentTour]
	);

	const value: TourContextType = {
		isActive,
		currentStepIndex,
		currentTour,
		startTour,
		nextStep,
		prevStep,
		skipTour,
		completeTour,
		setStepIndex,
	};

	return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
};

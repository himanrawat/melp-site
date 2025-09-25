export interface TourStep {
	id: string;
	title: string;
	content: string;
	target: string; // CSS selector for the element to highlight
	placement: "top" | "bottom" | "left" | "right";
	action?: {
		type: "click" | "navigate";
		payload?: Record<string, unknown>;
	};
	isSkippable?: boolean;
}

export interface TourConfig {
	id: string;
	name: string;
	description: string;
	steps: TourStep[];
	onComplete?: () => void;
	onSkip?: () => void;
}

export interface TourContextType {
	isActive: boolean;
	currentStepIndex: number;
	currentTour: TourConfig | null;
	startTour: (tourConfig: TourConfig) => void;
	nextStep: () => void;
	prevStep: () => void;
	skipTour: () => void;
	completeTour: () => void;
	setStepIndex: (index: number) => void;
}

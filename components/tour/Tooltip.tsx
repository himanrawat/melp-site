"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTour } from "./TourContext";
import { TourStep } from "@/types/tour";

interface TooltipProps {
	step: TourStep;
	targetElement: HTMLElement;
	onNext: () => void;
	onPrev: () => void;
	onSkip: () => void;
	currentIndex: number;
	totalSteps: number;
	isFirstStep: boolean;
	isLastStep: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
	step,
	targetElement,
	onNext,
	onPrev,
	onSkip,
	currentIndex,
	totalSteps,
	isFirstStep,
	isLastStep,
}) => {
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const tooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!targetElement || !tooltipRef.current) return;

		const updatePosition = () => {
			const targetRect = targetElement.getBoundingClientRect();
			const tooltipRect = tooltipRef.current!.getBoundingClientRect();
			const dashboardContainer = document.querySelector(
				'[data-tour="dashboard-main"]'
			);

			if (!dashboardContainer) return;

			const containerRect = dashboardContainer.getBoundingClientRect();

			let top = 0;
			let left = 0;

			switch (step.placement) {
				case "top":
					top = targetRect.top - tooltipRect.height - 16;
					left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
					break;
				case "bottom":
					top = targetRect.bottom + 16;
					left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
					break;
				case "left":
					top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
					left = targetRect.left - tooltipRect.width - 16;
					break;
				case "right":
					top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
					left = targetRect.right + 16;
					break;
			}

			// Adjust for dashboard container boundaries
			const minLeft = containerRect.left + 16;
			const maxLeft = containerRect.right - tooltipRect.width - 16;
			const minTop = containerRect.top + 16;
			const maxTop = containerRect.bottom - tooltipRect.height - 16;

			if (left < minLeft) left = minLeft;
			if (left > maxLeft) left = maxLeft;
			if (top < minTop) top = minTop;
			if (top > maxTop) top = maxTop;

			setPosition({ top, left });
		};

		updatePosition();
		window.addEventListener("resize", updatePosition);
		window.addEventListener("scroll", updatePosition);

		return () => {
			window.removeEventListener("resize", updatePosition);
			window.removeEventListener("scroll", updatePosition);
		};
	}, [targetElement, step.placement]);

	return (
		<div
			ref={tooltipRef}
			className="fixed z-[9999] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm animate-in fade-in-0 zoom-in-95 duration-300"
			style={{ top: position.top, left: position.left }}
		>
			{/* Header */}
			<div className="flex items-start justify-between mb-3">
				<div className="flex-1">
					<h3 className="font-semibold text-lg text-gray-900 leading-tight">
						{step.title}
					</h3>
					<div className="flex items-center mt-1">
						<div className="flex space-x-1">
							{Array.from({ length: totalSteps }).map((_, index) => (
								<div
									key={index}
									className={`w-2 h-2 rounded-full ${
										index === currentIndex
											? "bg-brand-500"
											: index < currentIndex
											? "bg-brand-300"
											: "bg-neutral-200"
									}`}
								/>
							))}
						</div>
						<span className="text-xs text-gray-500 ml-2">
							{currentIndex + 1} of {totalSteps}
						</span>
					</div>
				</div>
				<button
					onClick={onSkip}
					className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-2 -mt-2"
				>
					<X className="w-5 h-5" />
				</button>
			</div>

			{/* Content */}
			<div className="mb-4">
				<p className="text-gray-700 leading-relaxed">{step.content}</p>
			</div>

			{/* Actions */}
			<div className="flex items-center justify-between">
				<button
					onClick={onPrev}
					disabled={isFirstStep}
					className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
						isFirstStep
							? "text-neutral-400 cursor-not-allowed"
							: "text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100"
					}`}
				>
					<ChevronLeft className="w-4 h-4 mr-1" />
					Back
				</button>

				<div className="flex items-center space-x-2">
					{step.isSkippable && !isLastStep && (
						<button
							onClick={onSkip}
							className="px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors"
						>
							Skip Tour
						</button>
					)}
					<button
						onClick={onNext}
						className="flex items-center px-4 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg text-sm font-medium transition-colors"
					>
						{isLastStep ? (
							<>
								<Play className="w-4 h-4 mr-2" />
								Finish
							</>
						) : (
							<>
								Next
								<ChevronRight className="w-4 h-4 ml-1" />
							</>
						)}
					</button>
				</div>
			</div>

			{/* Arrow */}
			<div className="absolute">
				{step.placement === "top" && (
					<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
				)}
				{step.placement === "bottom" && (
					<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
				)}
				{step.placement === "left" && (
					<div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white" />
				)}
				{step.placement === "right" && (
					<div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
				)}
			</div>
		</div>
	);
};

export default Tooltip;

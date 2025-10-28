"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface HeroTextFlipProps {
	/** Array of words to cycle through in the animation */
	words?: string[];
	/** Time in milliseconds between word transitions */
	interval?: number;
	/** Additional CSS classes to apply to the container */
	className?: string;
	/** Additional CSS classes to apply to the text */
	textClassName?: string;
	/** Duration of the transition animation in milliseconds */
	animationDuration?: number;
	/** The constant word that appears after the rotating word */
	constantWord?: string;
}

export function HeroTextFlip({
	words = ["Collaborate", "Create", "Communicate"],
	interval = 3000,
	className,
	textClassName,
	animationDuration = 700,
	constantWord = "Together",
}: Readonly<HeroTextFlipProps>) {
	const id = useId();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [wordWidths, setWordWidths] = useState<number[]>([]);
	const measureRef = useRef<HTMLSpanElement>(null);

	// Measure actual text widths
	useEffect(() => {
		const measureWidths = () => {
			if (measureRef.current) {
				const widths = words.map((word) => {
					measureRef.current!.textContent = word;
					const width = measureRef.current!.getBoundingClientRect().width;
					return width;
				});
				setWordWidths(widths);
				console.log(
					"📏 Measured widths:",
					widths.map((w, i) => `${words[i]}: ${w}px`)
				);
			}
		};

		// Measure immediately
		measureWidths();

		// Also measure after a short delay to ensure fonts are loaded
		setTimeout(measureWidths, 100);
	}, [words]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, interval);

		return () => clearInterval(intervalId);
	}, [words, interval]);

	return (
		<span className={cn("inline-block", className)}>
			{/* Hidden span for measuring text width */}
			<span
				ref={measureRef}
				className="absolute invisible text-brand-500 font-bold"
				style={{ fontSize: "inherit" }}
				aria-hidden="true"
			/>

			<motion.span
				className="inline-block"
				animate={{
					width:
						wordWidths.length > 0
							? wordWidths[currentWordIndex]
							: `${words[currentWordIndex].length * 1.2}ch`,
				}}
				transition={{
					duration: animationDuration / 1000,
					ease: "easeInOut",
				}}
				onAnimationStart={() => {
					console.log(
						`🎬 Width animating to: ${
							wordWidths[currentWordIndex] || "fallback"
						}px for "${words[currentWordIndex]}"`
					);
				}}
			>
				<motion.span
					key={words[currentWordIndex]}
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					exit={{
						opacity: 0,
						y: -20,
					}}
					transition={{
						duration: animationDuration / 1000,
						ease: "easeInOut",
					}}
					className={cn("inline-block whitespace-nowrap", textClassName)}
				>
					<span className="text-brand-500">
						{words[currentWordIndex].split("").map((letter, index) => (
							<motion.span
								key={`${words[currentWordIndex]}-${index}`}
								initial={{
									opacity: 0,
									filter: "blur(8px)",
								}}
								animate={{
									opacity: 1,
									filter: "blur(0px)",
								}}
								transition={{
									delay: index * 0.03,
									duration: 0.3,
								}}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
					</span>
				</motion.span>
			</motion.span>
			<span className="ml-2">{constantWord}.</span>
		</span>
	);
}

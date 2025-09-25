"use client";

import React, { useState, useEffect, useId } from "react";
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
}: HeroTextFlipProps) {
	const id = useId();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, interval);

		return () => clearInterval(intervalId);
	}, [words, interval]);

	return (
		<span className={cn("inline-block", className)}>
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
				className={cn("inline-block", textClassName)}
				layoutId={`hero-word-${words[currentWordIndex]}-${id}`}
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
			<span className="ml-2">{constantWord}.</span>
		</span>
	);
}

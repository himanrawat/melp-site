"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const FeatureCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`p-6 sm:p-8 relative overflow-hidden group hover:bg-primary-50/50 transition-all duration-300 flex flex-col h-full`,
				className
			)}
		>
			{children}
		</div>
	);
};

export const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="max-w-5xl mx-auto text-left tracking-tight text-neutral-900 text-xl md:text-2xl md:leading-snug font-bold mb-3">
			{children}
		</p>
	);
};

export const FeatureDescription = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"text-sm md:text-base max-w-4xl text-left mx-auto",
				"text-neutral-600 font-normal",
				"text-left max-w-sm mx-0 md:text-sm my-4 leading-relaxed"
			)}
		>
			{children}
		</p>
	);
};

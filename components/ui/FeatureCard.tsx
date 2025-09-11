"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	gradient?: boolean;
	featured?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon: Icon,
	title,
	description,
	gradient = false,
	featured = false,
	className,
	style,
}) => {
	return (
		<div
			className={cn(
				"group relative overflow-hidden card-elevated p-8 transition-all duration-500 hover:shadow-2xl",
				"hover:-translate-y-2 hover:scale-[1.02]",
				featured && "md:col-span-2 lg:col-span-1",
				gradient &&
					"bg-gradient-to-br from-primary-50 via-white to-primary-100/50",
				className
			)}
			style={style}
		>
			{/* Background Decoration */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700" />

			{/* Icon Container */}
			<div className="relative mb-6">
				<div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
					<Icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
				</div>

				{/* Pulse Effect */}
				<div className="absolute top-0 left-0 w-16 h-16 rounded-2xl bg-primary-200/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			{/* Content */}
			<div className="relative z-10">
				<h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-800 transition-colors duration-300">
					{title}
				</h3>
				<p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
					{description}
				</p>
			</div>

			{/* Hover Border Effect */}
			<div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200/50 rounded-lg transition-all duration-300" />

			{/* Bottom Gradient Line */}
			<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-500 ease-out" />
		</div>
	);
};

export default FeatureCard;

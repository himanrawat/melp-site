"use client";
import React from "react";

interface Section {
	id: string;
	title: string;
	description: string;
}

interface FeatureCardsProps {
	badge?: string;
	heading: string;
	subheading?: string;
	sections?: Section[];
	image: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({
	badge,
	heading,
	subheading,
	sections,
	image,
}) => {
	return (
		<div className="flex flex-col lg:flex-row">
			{/* Left Card - Features */}
			<div className="bg-white rounded-3xl p-6 shadow-sm">
				{/* Header */}
				{badge && (
					<div className="flex items-center gap-2">
						<span className="bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-md">
							{badge}
						</span>
					</div>
				)}

				<div className="flex justify-between items-center">
					<div>
						{/* Subheading */}
						{subheading && (
							<p className="text-sm font-semibold text-neutral-900">
								{subheading}
							</p>
						)}
						{/* Main Heading */}
						<h3 className="text-3xl md:text-2xl font-bold text-neutral-900 leading-tight mb-4">
							{heading}
						</h3>
					</div>

					{/* Icon Button */}
					<button className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
						<span className="text-white text-xl flex h-fit">→</span>
					</button>
				</div>

				{/* Image Display */}
				<div className="w-full max-h-[400px] flex items-center justify-center overflow-hidden rounded-2xl">
					<img
						src={image}
						alt={heading}
						className="w-full h-full max-h-[400px] rounded-2xl object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default FeatureCards;

"use client";
import React, { useState } from "react";

const Carousel = () => {
	const [activeSection, setActiveSection] = useState<number | null>(0);

	const sections = [
		{
			id: "calls",
			title: "Call without switching apps",
			description:
				"Start audio/video calls instantly. No external links, just seamless communication.",
			video: "/GIF1.mp4",
		},
		{
			id: "collaborate",
			title: "Collaborate with Melp Drive",
			description:
				"Upload and share documents securely. Keep your team's files organized and accessible.",
			video: "/Gif2.mp4",
		},
		{
			id: "schedule",
			title: "Plan smarter with calendar",
			description:
				"Manage meetings and sync effortlessly. Never miss what matters with integrated workflows.",
			video: "/GIF3.mp4",
		},
		{
			id: "translate",
			title: "Chat in any language",
			description: "Break language barriers with real-time translation.",
			video: "/Gif4.mp4",
		},
	];

	const toggleSection = (index: number) => {
		// Prevent closing if it's the last open section
		if (activeSection === index) {
			return;
		}
		setActiveSection(index);
	};

	const handlePrevious = () => {
		if (activeSection === null) return;
		const newIndex =
			activeSection === 0 ? sections.length - 1 : activeSection - 1;
		setActiveSection(newIndex);
	};

	const handleNext = () => {
		if (activeSection === null) return;
		const newIndex =
			activeSection === sections.length - 1 ? 0 : activeSection + 1;
		setActiveSection(newIndex);
	};

	return (
		<div className="flex flex-col lg:flex-row">
			{/* Left Card - Personal Agent Features */}
			<div className="bg-white rounded-s-3xl p-6 shadow-sm w-sm">
				{/* Header */}
				<div className="flex items-center gap-2">
					<span className="text-sm font-semibold text-neutral-900">
						Work Smarter. Stay Connected.
					</span>
					<span className="bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-md">
						New
					</span>
				</div>

				{/* Main Heading */}
				<h3 className="text-3xl md:text-2xl font-bold text-neutral-900 leading-tight mb-2">
					Everything your team needs in one unified workspace.
				</h3>

				{/* Icon Button */}
				<button className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center mb-16 hover:bg-neutral-800 transition-colors">
					<span className="text-white text-xl flex h-fit">→</span>
				</button>

				{/* Features List */}
				<div className="space-y-6">
					{sections.map((section, index) => (
						<div
							key={section.id}
							className={`${
								index < sections.length - 1 ? "border-b border-neutral-200" : ""
							} pb-2`}
						>
							<button
								className="font-semibold text-neutral-900 mb-1 text-lg cursor-pointer hover:text-blue-600 transition-colors w-full text-left"
								onClick={() => toggleSection(index)}
								type="button"
							>
								{section.title}
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									activeSection === index
										? "max-h-40 opacity-100 mt-1"
										: "max-h-0 opacity-0"
								}`}
							>
								<p className="text-neutral-600 leading-relaxed text-base">
									{section.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Right Card - Video Display */}
			<div className="rounded-e-3xl shadow-sm relative overflow-hidden flex-1 bg-gradient-to-br from-neutral-50 to-neutral-100">
				{activeSection !== null && (
					<>
						{/* Video - Non-interactive */}
						<div className="w-full h-full absolute inset-0 pointer-events-none">
							<video
								key={sections[activeSection].video}
								className="w-full h-full object-cover"
								autoPlay
								loop
								muted
								playsInline
							>
								<source src={sections[activeSection].video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>

						{/* Left Half - Previous Button */}
						<button
							onClick={handlePrevious}
							className="absolute left-0 top-0 bottom-0 w-1/2 group cursor-pointer flex items-center justify-start pl-4 z-10"
							aria-label="Previous section"
							type="button"
						>
							<div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
								<span className="text-neutral-900 text-xl">←</span>
							</div>
						</button>

						{/* Right Half - Next Button */}
						<button
							onClick={handleNext}
							className="absolute right-0 top-0 bottom-0 w-1/2 group cursor-pointer flex items-center justify-end pr-4 z-10"
							aria-label="Next section"
							type="button"
						>
							<div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
								<span className="text-neutral-900 text-xl">→</span>
							</div>
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Carousel;

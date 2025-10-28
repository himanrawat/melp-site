"use client";

import React from "react";
import Carousel from "./ui/Carousel";
import FeatureCards from "./ui/FeatureCards";

const IntroducingMELPAPP = () => {
	return (
		<section
			style={{ backgroundColor: "#F6F5F4" }}
			className="py-20 px-6 md:px-12 lg:px-24"
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
						Introducing MELPAPP
					</h2>
				</div>
				<Carousel />
				<section className="mt-16 flex justify-center items-center gap-8">
					<FeatureCards
						heading="Search for everything"
						subheading="Enterprise search"
						image="/test1.avif"
					/>
					<FeatureCards
						heading="Search for everything"
						subheading="Enterprise search"
						image="/test1.avif"
					/>
				</section>
			</div>
		</section>
	);
};

export default IntroducingMELPAPP;

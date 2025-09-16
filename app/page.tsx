"use client";
import React from "react";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/ui/features-section";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import Footer2 from "@/components/sections/Footer2";

export default function Home() {
	return (
		<>
			<div className="px-6 sm:px-8 lg:px-12">
				<HeroSection />
				<FeaturesSection />
				<TestimonialsSection />
				<StatsSection />
				<PricingSection />
			</div>
			<CTASection />
			{/* <Footer /> */}
			<div className="px-6 sm:px-8 lg:px-12">
				<Footer2 />
			</div>
		</>
	);
}

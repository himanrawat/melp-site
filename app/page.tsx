"use client";
import React from "react";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/ui/features-section";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/container";

export default function Home() {
	return (
		<>
			<Container>
				<HeroSection />
				<FeaturesSection />
				<ComparisonSection />
				<TestimonialsSection />
				<StatsSection />
				<PricingSection />
			</Container>
			<CTASection />
		</>
	);
}

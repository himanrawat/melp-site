"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import FeaturesHeroSection from "@/components/sections/FeaturesHeroSection";
import InteractiveDemoSection from "@/components/sections/InteractiveDemoSection";
import FeatureCategoriesSection from "@/components/sections/FeatureCategoriesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ApplicationPreviewSection from "@/components/sections/ApplicationPreviewSection";
import FeaturesCTASection from "@/components/sections/FeaturesCTASection";

export default function FeaturesPage() {
	return (
		<>
			<Container>
				<FeaturesHeroSection />
				<InteractiveDemoSection />
				<FeatureCategoriesSection />
				<ComparisonSection />
				<ApplicationPreviewSection />
			</Container>
			<FeaturesCTASection />
		</>
	);
}

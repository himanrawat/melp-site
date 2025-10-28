"use client";
import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import IntroducingMELPAPP from "@/components/IntroducingMELPAPP";
import Notification from "@/components/Notification";
import Sticky from "@/components/ui/Sticky";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TryForFree from "@/components/TryForFree";
import React from "react";

export default function Home() {
	return (
		<>
			<Notification />
			<section style={{ backgroundColor: "#fff" }}>
				<Hero />
				<Dashboard />
				<Sticky />
			</section>
			<IntroducingMELPAPP />
			<PricingCalculator />
			<Testimonials />
			<FAQ />
			<TryForFree />
			<Footer />
		</>
	);
}

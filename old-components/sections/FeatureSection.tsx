"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/FeatureCard";
import StatusBadge from "@/components/ui/StatusBadge";
import {
	ArrowRight,
	Brain,
	Users,
	Video,
	Zap,
	Languages,
	MessageSquare,
	Calendar,
	Sparkles,
} from "lucide-react";

const FeatureSection: React.FC = () => {
	const features = [
		{
			icon: Brain,
			title: "AI Summarization",
			description:
				"Automatically summarize meetings with AI-powered insights, key takeaways, and actionable items delivered instantly.",
			gradient: true,
		},
		{
			icon: Users,
			title: "Teams",
			description:
				"Build and manage high-performing teams with role-based access, collaborative workspaces, and seamless integration.",
		},
		{
			icon: Video,
			title: "Meet",
			description:
				"Crystal-clear video conferencing with advanced screen sharing, recording capabilities, and real-time collaboration tools.",
		},
		{
			icon: Zap,
			title: "Networking",
			description:
				"Connect with industry professionals and expand your network through intelligent matching algorithms and community building.",
		},
		{
			icon: Languages,
			title: "Translation",
			description:
				"Break down language barriers with real-time translation supporting 100+ languages for global collaboration.",
		},
		{
			icon: MessageSquare,
			title: "Groups",
			description:
				"Create focused discussion communities and project groups with threaded conversations and rich media sharing.",
		},
		{
			icon: Calendar,
			title: "Calendar",
			description:
				"Intelligent scheduling system with availability management, automated reminders, and cross-platform synchronization.",
			featured: true,
		},
	];

	return (
		<section className="py-24 px-4 max-w-7xl mx-auto relative">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 rounded-3xl" />
			<div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl" />

			<div className="relative z-10">
				{/* Header Section */}
				<div className="text-center mb-20">
					<StatusBadge variant="primary" className="mb-8">
						<Sparkles className="w-4 h-4" />
						Powerful Features
					</StatusBadge>

					<h2 className="text-5xl md:text-6xl font-bold mb-6">
						<span className="bg-gradient-to-r from-neutral-900 via-primary-800 to-neutral-900 bg-clip-text text-transparent">
							Everything you need to
						</span>
						<br />
						<span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
							collaborate
						</span>
					</h2>

					<p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
						Transform how your team works together with our comprehensive suite
						of tools designed for the modern workplace
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							gradient={feature.gradient}
							featured={feature.featured}
						/>
					))}
				</div>

				{/* Call-to-Action */}
				<div className="text-center">
					<Button
						size="lg"
						className="group !bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:!from-primary-600 hover:!to-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold border-0"
					>
						<span>Explore All Features</span>
						<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;

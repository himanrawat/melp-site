"use client";

import React from "react";
import { AISummaryFeature } from "./features/ai-summary-feature";
import { GlobalTeamFeature } from "./features/global-team-feature";
import { DemoVideoFeature } from "./features/demo-video-feature";
import { DriveFeature } from "./features/drive-feature";
import { FeatureCard, FeatureTitle, FeatureDescription } from "./feature-card";

export default function FeaturesSection() {
	const features = [
		{
			title: "AI-Powered Meeting Insights",
			description:
				"Get intelligent summaries, action items, and key insights from every meeting using advanced AI technology.",
			skeleton: <AISummaryFeature />,
			className:
				"col-span-1 lg:col-span-4 border-b lg:border-r border-primary-200/50",
		},
		{
			title: "Global Team Collaboration",
			description:
				"Connect with team members across the globe with real-time translation and cultural context.",
			skeleton: <GlobalTeamFeature />,
			className: "border-b col-span-1 lg:col-span-2 border-primary-200/50",
		},
		{
			title: "Interactive Demo Experience",
			description:
				"See how our platform transforms team collaboration and productivity in this comprehensive demo.",
			skeleton: <DemoVideoFeature />,
			className: "col-span-1 lg:col-span-3 lg:border-r border-primary-200/50",
		},
		{
			title: "Seamless File Sharing & Drive",
			description:
				"Share files, collaborate on documents, and access your team's shared drive from anywhere with intelligent organization.",
			skeleton: <DriveFeature />,
			className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		},
	];

	return (
		<div className="relative z-20 py-16 lg:py-32 max-w-[1920px] mx-auto">
			<div className="px-8">
				<div className="bg-primary-100 w-fit p-3 rounded-xl mb-8 flex items-center gap-3 mx-auto border border-primary-200">
					<div className="w-5 h-5 rounded-full border-2 border-primary-500 bg-transparent flex items-center justify-center">
						<div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-pulse" />
					</div>
					<span className="text-primary-700 font-medium text-sm">
						Advanced Features
					</span>
				</div>

				<h4 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-neutral-900 mb-6">
					<span className="text-neutral-900">Packed with powerful</span>
					<br />
					<span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
						collaboration tools
					</span>
				</h4>

				<p className="text-lg lg:text-xl max-w-3xl my-8 mx-auto text-neutral-600 text-center font-normal leading-relaxed">
					From AI-powered insights to seamless global communication, MELP
					provides everything your team needs to collaborate effectively and
					efficiently.
				</p>
			</div>

			<div className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-16 xl:border rounded-2xl border-primary-200/50 bg-gradient-to-br from-primary-50/30 via-white to-primary-100/20 backdrop-blur-sm shadow-xl min-h-[700px]">
					{features.map((feature) => (
						<FeatureCard key={feature.title} className={feature.className}>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>{feature.description}</FeatureDescription>
							<div className="h-full w-full">{feature.skeleton}</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

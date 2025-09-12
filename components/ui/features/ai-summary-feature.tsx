"use client";

import React from "react";
import { Brain, Users, Video, Calendar } from "lucide-react";

export const AISummaryFeature = () => {
	const features = [
		{ icon: Brain, label: "AI Insights" },
		{ icon: Users, label: "Team Analytics" },
		{ icon: Video, label: "Meeting Metrics" },
		{ icon: Calendar, label: "Schedule Optimization" },
	];

	return (
		<div className="relative flex py-8 px-2 gap-6 h-full">
			<div className="w-full p-6 mx-auto bg-white/80 backdrop-blur-sm shadow-xl group h-full rounded-xl border border-primary-200/50">
				<div className="flex flex-1 w-full h-full flex-col space-y-4">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
							<Brain className="w-5 h-5 text-white" />
						</div>
						<div>
							<h3 className="font-semibold text-neutral-900">
								Meeting Dashboard
							</h3>
							<p className="text-sm text-neutral-600">Live insights</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{features.map((feature, idx) => (
							<div
								key={idx}
								className="p-4 rounded-lg bg-primary-50 border border-primary-200/50 hover:bg-primary-100 transition-colors"
							>
								<feature.icon className="w-6 h-6 text-primary-600 mb-2" />
								<p className="text-sm font-medium text-neutral-800">
									{feature.label}
								</p>
							</div>
						))}
					</div>

					<div className="mt-4 space-y-2">
						<div className="h-2 bg-primary-200 rounded-full overflow-hidden">
							<div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
						</div>
						<p className="text-xs text-neutral-600">
							Meeting efficiency: 87% improvement
						</p>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent w-full pointer-events-none" />
			<div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
		</div>
	);
};

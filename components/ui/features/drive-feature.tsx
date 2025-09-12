"use client";

import React from "react";
import { FileText, Folder, Share2 } from "lucide-react";

export const DriveFeature = () => {
	const driveFeatures = [
		{ icon: FileText, label: "Documents", count: "1.2k" },
		{ icon: Folder, label: "Projects", count: "47" },
		{ icon: Share2, label: "Shared", count: "238" },
	];

	return (
		<div className="h-full min-h-[300px] flex flex-col items-start relative bg-transparent p-6">
			<div className="w-full z-10 relative flex-1 flex flex-col">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
						<Folder className="w-5 h-5 text-white" />
					</div>
					<div>
						<h3 className="font-semibold text-neutral-900">Team Drive</h3>
						<p className="text-sm text-neutral-600">Shared workspace</p>
					</div>
				</div>

				<div className="space-y-3 mb-6 flex-1">
					{driveFeatures.map((feature, idx) => (
						<div
							key={idx}
							className="flex items-center justify-between p-3 rounded-lg bg-white border border-primary-200/50 hover:bg-primary-50 transition-colors"
						>
							<div className="flex items-center gap-3">
								<feature.icon className="w-5 h-5 text-primary-600" />
								<span className="text-sm font-medium text-neutral-800">
									{feature.label}
								</span>
							</div>
							<span className="text-sm text-neutral-600 bg-primary-100 px-2 py-1 rounded-full">
								{feature.count}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

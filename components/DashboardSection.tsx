"use client";

import TopBar from "./ui/TopBar";
import Image from "next/image";
import { useDashboard } from "./DashboardContext";
import { dashboardViews } from "./dashboardConfig";

const DashboardSection = () => {
	const { currentView } = useDashboard();

	const currentDashboard = dashboardViews[currentView];

	const renderContent = () => {
		// Show dashboard content only for the main Dashboard tab
		if (currentView === "Dashboard") {
			return (
				<div className="w-full h-full relative flex items-center justify-center bg-transparent">
					{currentDashboard.video ? (
						<video
							src={currentDashboard.video}
							className="max-w-full max-h-full w-auto h-auto rounded-br-2xl"
							controls
							autoPlay
							muted
							loop
						>
							Your browser does not support the video tag.
						</video>
					) : (
						<Image
							src={currentDashboard.image}
							alt={`${currentDashboard.title} Dashboard`}
							className="max-w-full max-h-full w-auto h-auto object-contain rounded-br-2xl"
						/>
					)}
				</div>
			);
		}

		return (
			<div className="h-full relative">
				<p>{`${currentDashboard.title}`}</p>
				<p>{`${currentDashboard.description}`}</p>
			</div>
		);
	};

	return (
		<section
			className="bg-[#F8F8F8] w-full flex-1 flex flex-col h-full"
			data-tour="dashboard-section"
		>
			<TopBar />
			<div className="flex-1 min-h-0">{renderContent()}</div>
		</section>
	);
};

export default DashboardSection;

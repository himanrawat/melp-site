"use client";

import TopBar from "./ui/TopBar";
import Image from "next/image";
import { useDashboard } from "./DashboardContext";
import { dashboardViews } from "./dashboardConfig";
import TourControls from "./tour/TourControls";

const DashboardSection = () => {
	const { currentView } = useDashboard();

	const currentDashboard = dashboardViews[currentView];

	const renderContent = () => {
		// Show dashboard image only for the main Dashboard tab
		if (currentView === "Dashboard") {
			return (
				<div className="h-full relative">
					<Image
						src={currentDashboard.image}
						alt={`${currentDashboard.title} Dashboard`}
						className="w-full h-auto rounded-br-2xl"
					/>
					{/* Tour Controls - positioned absolutely over the dashboard image */}
					<div className="absolute top-4 right-4">
						<TourControls />
					</div>
				</div>
			);
		}

		return (
			<div className="h-full relative">
				<p>{`${currentDashboard.title}`}</p>
				<p>{`${currentDashboard.description}`}</p>
				{/* Tour Controls for other views */}
				<div className="absolute top-4 right-4">
					<TourControls />
				</div>
			</div>
		);
	};

	return (
		<section
			className="bg-[#F8F8F8] w-full flex-1 flex flex-col"
			data-tour="dashboard-section"
		>
			<TopBar />
			<div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6">{renderContent()}</div>
		</section>
	);
};

export default DashboardSection;

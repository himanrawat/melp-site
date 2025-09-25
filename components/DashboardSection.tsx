"use client";

import TopBar from "./ui/TopBar";
import Image from "next/image";
import { useDashboard } from "./DashboardContext";
import { dashboardViews } from "./dashboardConfig";

const DashboardSection = () => {
	const { currentView } = useDashboard();

	const currentDashboard = dashboardViews[currentView];

	const renderContent = () => {
		// Show dashboard image only for the main Dashboard tab
		if (currentView === "Dashboard") {
			return (
				<div className="h-full">
					<Image
						src={currentDashboard.image}
						alt={`${currentDashboard.title} Dashboard`}
						className="w-full h-auto rounded-br-2xl"
					/>
				</div>
			);
		}

		return (
			<div className="h-full">
				<p>{`${currentDashboard.title}`}</p>
				<p>{`${currentDashboard.description}`}</p>
			</div>
		);
	};

	return (
		<section className="bg-[#F8F8F8] w-full flex-1 flex flex-col">
			<TopBar />
			<div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6">{renderContent()}</div>
		</section>
	);
};

export default DashboardSection;

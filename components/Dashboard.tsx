import DashboardSection from "@/components/DashboardSection";
import Sidebar from "@/components/Sidebar";
import { DashboardProvider } from "@/components/DashboardContext";
import { TourProvider } from "@/components/tour/TourContext";
import TourOverlay from "@/components/tour/TourOverlay";
import AutoStartTour from "@/components/tour/AutoStartTour";
import TourKeyboardShortcuts from "@/components/tour/TourKeyboardShortcuts";
import RestartTourLink from "@/components/tour/RestartTourLink";

const Dashboard = () => {
	return (
		<section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
			<div className="max-w-7xl mx-auto flex justify-center items-center min-h-[80vh] flex-col">
				<DashboardProvider>
					<TourProvider>
						<div
							className="relative flex bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-slideUp hero-glow delay-1200 
							w-[350px] h-[400px] 
							sm:w-[600px] sm:h-[450px] 
							lg:w-[1198px] lg:h-[680px]"
							data-tour="dashboard-main"
						>
							<Sidebar />
							<DashboardSection />
							<TourOverlay />
							<AutoStartTour />
							<TourKeyboardShortcuts />
						</div>

						{/* Restart Tour Link - Right aligned with supporting text */}
						<div className="mt-4 flex justify-end">
							<RestartTourLink />
						</div>
					</TourProvider>
				</DashboardProvider>
			</div>
		</section>
	);
};

export default Dashboard;

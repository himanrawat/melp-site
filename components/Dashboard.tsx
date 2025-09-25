import DashboardSection from "./DashboardSection";
import Sidebar from "./Sidebar";
import { DashboardProvider } from "./DashboardContext";
import { TourProvider } from "./tour/TourContext";
import TourOverlay from "./tour/TourOverlay";
import AutoStartTour from "./tour/AutoStartTour";
import TourKeyboardShortcuts from "./tour/TourKeyboardShortcuts";

const Dashboard = () => {
	return (
		<section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
			<div className="max-w-7xl mx-auto">
				<DashboardProvider>
					<TourProvider>
						<div
							className="relative flex h-[80vh] w-full bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-slideUp hero-glow delay-1200"
							data-tour="dashboard-main"
						>
							<Sidebar />
							<DashboardSection />
							<TourOverlay />
							<AutoStartTour />
							<TourKeyboardShortcuts />
						</div>
					</TourProvider>
				</DashboardProvider>
			</div>
		</section>
	);
};

export default Dashboard;

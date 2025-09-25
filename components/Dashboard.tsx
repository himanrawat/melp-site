import DashboardSection from "./DashboardSection";
import Sidebar from "./Sidebar";
import { DashboardProvider } from "./DashboardContext";

const Dashboard = () => {
	return (
		<section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
			<div className="max-w-7xl mx-auto">
				<DashboardProvider>
					<div className="relative flex h-[80vh] w-full bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-slideUp hero-glow delay-1200">
						<Sidebar />
						<DashboardSection />
					</div>
				</DashboardProvider>
			</div>
		</section>
	);
};

export default Dashboard;

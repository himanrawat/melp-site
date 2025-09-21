import DashboardSection from "./DashboardSection";
import Sidebar from "./Sidebar";

const Dashboard = () => {
	return (
		<>
			<section className="flex h-screen max-w-full xl:max-w-1/2 mx-auto">
				<Sidebar />
				<DashboardSection />
			</section>
		</>
	);
};

export default Dashboard;

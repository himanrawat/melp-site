import Dashboard from "@/public/dashboard.png";
import { StaticImageData } from "next/image";

export type DashboardView =
	| "Dashboard"
	| "Recents"
	| "Contacts"
	| "Teams"
	| "Groups"
	| "Calendar"
	| "Network"
	| "MelpDrive"
	| "Apps"
	| "Assistant"
	| "Calls"
	| "Messages"
	| "Topics"
	| "Meetings"
	| "My Bookings"
	| "Invite Contact"
	| "My Network"
	| "My Invitations";

export interface DashboardViewConfig {
	name: DashboardView;
	title: string;
	description: string;
	image: StaticImageData;
	video?: string; // Optional video source
}

export const dashboardViews: Record<DashboardView, DashboardViewConfig> = {
	Dashboard: {
		name: "Dashboard",
		title: "Main Dashboard",
		description:
			"Overview of your workspace with key metrics and recent activity",
		image: Dashboard,
		video: "/video-test.mp4", // Add your video file path here
	},
	Recents: {
		name: "Recents",
		title: "Recent Activity",
		description: "Your recent calls, messages, topics, groups, and meetings",
		image: Dashboard, // Replace with actual recents dashboard image
	},
	Contacts: {
		name: "Contacts",
		title: "Contact Management",
		description: "Manage your personal and professional contacts",
		image: Dashboard, // Replace with actual contacts dashboard image
	},
	Teams: {
		name: "Teams",
		title: "Team Collaboration",
		description: "Collaborate with your teams and manage projects",
		image: Dashboard, // Replace with actual teams dashboard image
	},
	Groups: {
		name: "Groups",
		title: "Group Management",
		description: "Create and manage groups for better organization",
		image: Dashboard, // Replace with actual groups dashboard image
	},
	Calendar: {
		name: "Calendar",
		title: "Calendar & Scheduling",
		description: "Schedule meetings and manage your calendar",
		image: Dashboard, // Replace with actual calendar dashboard image
	},
	Network: {
		name: "Network",
		title: "Professional Network",
		description: "Expand your network and manage invitations",
		image: Dashboard, // Replace with actual network dashboard image
	},
	MelpDrive: {
		name: "MelpDrive",
		title: "File Storage",
		description: "Store and manage your files in the cloud",
		image: Dashboard, // Replace with actual Melp Drive dashboard image
	},
	Apps: {
		name: "Apps",
		title: "App Integration",
		description: "Connect with third-party applications",
		image: Dashboard, // Replace with actual apps dashboard image
	},
	Assistant: {
		name: "Assistant",
		title: "AI Assistant",
		description: "Get help from your intelligent AI assistant",
		image: Dashboard, // Replace with actual assistant dashboard image
	},
	// Recents submenu items
	Calls: {
		name: "Calls",
		title: "Recent Calls",
		description: "View and manage your recent calls history",
		image: Dashboard, // Replace with actual calls dashboard image
	},
	Messages: {
		name: "Messages",
		title: "Recent Messages",
		description: "View and manage your recent messages",
		image: Dashboard, // Replace with actual messages dashboard image
	},
	Topics: {
		name: "Topics",
		title: "Recent Topics",
		description: "Browse recent discussion topics",
		image: Dashboard, // Replace with actual topics dashboard image
	},
	Meetings: {
		name: "Meetings",
		title: "Recent Meetings",
		description: "View and manage your recent meetings",
		image: Dashboard, // Replace with actual meetings dashboard image
	},
	// Calendar submenu items
	"My Bookings": {
		name: "My Bookings",
		title: "My Bookings",
		description: "Manage your scheduled appointments and bookings",
		image: Dashboard, // Replace with actual bookings dashboard image
	},
	// Network submenu items
	"Invite Contact": {
		name: "Invite Contact",
		title: "Invite to Contact",
		description: "Invite new connections to your professional contacts",
		image: Dashboard, // Replace with actual invite contact dashboard image
	},
	"My Network": {
		name: "My Network",
		title: "My Professional Network",
		description: "View and manage your professional connections",
		image: Dashboard, // Replace with actual network dashboard image
	},
	"My Invitations": {
		name: "My Invitations",
		title: "Network Invitations",
		description: "Manage pending network invitations",
		image: Dashboard, // Replace with actual invitations dashboard image
	},
};

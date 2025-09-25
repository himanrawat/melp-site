import { TourConfig } from "@/types/tour";

export const dashboardTour: TourConfig = {
	id: "dashboard-welcome",
	name: "Welcome to Melp Dashboard",
	description: "Learn how to navigate and use the Melp dashboard effectively",
	steps: [
		{
			id: "welcome",
			title: "Welcome to Melp Dashboard!",
			content:
				"Let's take a quick tour of your dashboard. This focused tour will show you the key features and help you get productive quickly.",
			target: '[data-tour="dashboard-main"]',
			placement: "bottom",
			isSkippable: true,
		},
		{
			id: "sidebar-navigation",
			title: "Navigation Sidebar",
			content:
				"This is your main navigation hub within the dashboard. Access different sections like Dashboard, Recents, Contacts, Teams, and more.",
			target: '[data-tour="sidebar"]',
			placement: "right",
		},
		{
			id: "search-functionality",
			title: "Quick Search",
			content:
				"Use this search bar to quickly find contacts, files, messages, or any content within your workspace. It's your shortcut to everything.",
			target: '[data-tour="search-bar"]',
			placement: "bottom",
		},
		{
			id: "live-calls",
			title: "Live Calls",
			content:
				"Start or join live calls instantly with this button. Perfect for quick meetings and instant communication with your team.",
			target: '[data-tour="live-calls"]',
			placement: "bottom",
		},
		{
			id: "notifications",
			title: "Notifications & Actions",
			content:
				"Stay updated with notifications, pin important items, and access your messages quickly from these action buttons.",
			target: '[data-tour="topbar-actions"]',
			placement: "bottom",
		},
		{
			id: "recents-feature",
			title: "Recents Section",
			content:
				"Access your recent calls, messages, topics, groups, and meetings. This helps you quickly continue where you left off.",
			target: '[data-tour="recents-menu"]',
			placement: "right",
		},
		{
			id: "contacts-management",
			title: "Contacts Management",
			content:
				"Manage all your contacts in one place. Add new contacts, organize them, and stay connected with your professional network.",
			target: '[data-tour="contacts-menu"]',
			placement: "right",
		},
		{
			id: "teams-collaboration",
			title: "Teams & Collaboration",
			content:
				"Create and manage teams for different projects. Collaborate effectively with team members and organize your workflow.",
			target: '[data-tour="teams-menu"]',
			placement: "right",
		},
		{
			id: "groups-management",
			title: "Groups & Communities",
			content:
				"Join and create groups for discussions, shared interests, or project-based communication. Build communities within Melp.",
			target: '[data-tour="groups-menu"]',
			placement: "right",
		},
		{
			id: "calendar-scheduling",
			title: "Calendar & Scheduling",
			content:
				"Schedule meetings, manage your bookings, and stay organized with the integrated calendar system.",
			target: '[data-tour="calendar-menu"]',
			placement: "right",
		},
		{
			id: "melp-drive",
			title: "Melp Drive",
			content:
				"Store, share, and manage your files securely. Access your documents from anywhere within the dashboard.",
			target: '[data-tour="drive-menu"]',
			placement: "right",
		},
		{
			id: "apps-integration",
			title: "Apps & Integrations",
			content:
				"Integrate with your favorite apps and tools to create a seamless workflow within your dashboard.",
			target: '[data-tour="apps-menu"]',
			placement: "right",
		},
		{
			id: "ai-assistant",
			title: "AI Assistant",
			content:
				"Get help from Melp's AI assistant for scheduling, finding information, or automating tasks right from your dashboard.",
			target: '[data-tour="assistant-menu"]',
			placement: "right",
		},
		{
			id: "dashboard-content",
			title: "Main Content Area",
			content:
				"This is your main workspace area where content from different sections will be displayed. Switch between different views using the sidebar.",
			target: '[data-tour="dashboard-section"]',
			placement: "left",
		},
		{
			id: "tour-complete",
			title: "Dashboard Tour Complete!",
			content:
				"Great! You've learned the basics of navigating your Melp dashboard. Start exploring and make the most of your workspace.",
			target: '[data-tour="dashboard-main"]',
			placement: "bottom",
		},
	],
	onComplete: () => {
		console.log("Dashboard tour completed!");
	},
	onSkip: () => {
		console.log("Dashboard tour skipped!");
	},
};

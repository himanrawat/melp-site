"use client";

import React, { useState } from "react";
import { Calendar, SearchIcon } from "lucide-react";
import dayNight from "@/public/day-night.svg";
import Image from "next/image";
import Notification from "@/public/icons/notification.svg";
import NotificationFilled from "@/public/icons/notification-filled.svg";
import pin from "@/public/icons/pin.svg";
import pinFilled from "@/public/icons/pin-filled.svg";
import message from "@/public/icons/message.svg";
import messageFilled from "@/public/icons/message-filled.svg";
import { useDashboard } from "../DashboardContext";
import MobileMenuButton from "../MobileMenuButton";

const TopBar = () => {
	const [hoveredIcon, setHoveredIcon] = React.useState<string | null>(null);
	const { currentView, isMobileMenuOpen, setIsMobileMenuOpen } = useDashboard();

	const topbarItem = [
		{ name: "pin", icon: pin, filledIcon: pinFilled },
		{ name: "message", icon: message, filledIcon: messageFilled },
		{
			name: "notification",
			icon: Notification,
			filledIcon: NotificationFilled,
		},
	];

	// Navigation structure to determine parent menus
	const navigationStructure = {
		// Recents submenu items
		Calls: "Recents",
		Messages: "Recents",
		Topics: "Recents",
		Meetings: "Recents",
		// Calendar submenu items
		"My Bookings": "Calendar",
		// Network submenu items
		"Invite Network": "Network",
		"My Network": "Connections",
		"My Invitations": "Received",
	};

	// Custom menu names for items without submenus (you can customize these)
	const customMenuNames = {
		Contacts: "All Contacts",
		Teams: "My Teams",
		Groups: "My Group",
		MelpDrive: "Files",
		Apps: "App Integration",
		Assistant: "Message",
		Calendar: "Schedule Meeting",
	};

	const getBreadcrumb = () => {
		// For Dashboard, show "Your workspace"
		if (currentView === "Dashboard") {
			return "Your workspace";
		}

		// Check if current view is a submenu item
		const parentMenu =
			navigationStructure[currentView as keyof typeof navigationStructure];
		if (parentMenu) {
			return `${parentMenu} / ${currentView}`;
		}

		// For menu items without submenus, show "Menu name / Custom name"
		const customName =
			customMenuNames[currentView as keyof typeof customMenuNames];
		if (customName) {
			return `${currentView} / ${customName}`;
		}

		// For menu items that have submenus but are selected directly (Calendar, Network)
		// or any other cases, just show the menu name
		return currentView;
	};

	return (
		<>
			<div className="h-[77px] w-full flex justify-between items-center bg-white px-2 sm:px-3 md:px-4 lg:px-5 border-b border-[#D6DBE1] rounded-tr-2xl tracking-widest">
				<div className="flex items-center gap-3">
					<MobileMenuButton
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					/>
					<p className="text-sm font-normal hidden sm:block">
						{getBreadcrumb()}
					</p>
					<p className="text-sm font-medium sm:hidden">{getBreadcrumb()}</p>
				</div>
				<div className="bg-[#f2f2f2] rounded-[5px] flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%]">
					<div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
						<SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
					</div>
					<div className="flex-1">
						<input
							type="text"
							placeholder="Search..."
							className="bg-transparent outline-none w-full text-sm sm:text-base"
						/>
					</div>
					<div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
						<Image
							src={dayNight}
							alt="Day Night Toggle"
							className="w-4 h-4 sm:w-5 sm:h-5"
						/>
					</div>
				</div>
				<div className="flex items-center h-full gap-1 sm:gap-2 md:gap-3 lg:gap-5">
					<button className="bg-[#9c9696] hover:bg-[#EE4136] px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 rounded-[2px] text-white cursor-pointer transition-colors duration-200 text-xs sm:text-sm font-medium">
						LIVE CALLS
					</button>
					<div className="h-full flex justify-center items-center">
						{topbarItem.map((item) => (
							<div
								key={item.name}
								className="h-full flex justify-center items-center cursor-pointer w-10 sm:w-12 md:w-14 lg:w-[57px] hover:bg-[#F2F2F2]"
								onMouseEnter={() => setHoveredIcon(item.name)}
								onMouseLeave={() => setHoveredIcon(null)}
							>
								<Image
									src={hoveredIcon === item.name ? item.filledIcon : item.icon}
									alt={item.name}
									className="w-4 h-4 sm:w-5 sm:h-5"
								/>
							</div>
						))}
					</div>
					<div>
						<Image
							src="https://avatar.iran.liara.run/public"
							alt="User Avatar"
							width={40}
							height={40}
							className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;

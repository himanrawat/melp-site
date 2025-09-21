"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import dashboardIcon from "@/public/icons/dashboard.svg";
import dashboardIconFilled from "@/public/icons/dashboard-filled.svg";
import recentIcon from "@/public/icons/recents.svg";
import recentIconFilled from "@/public/icons/recents-filled.svg";
import contactsIcon from "@/public/icons/contacts.svg";
import contactsIconFilled from "@/public/icons/contacts-filled.svg";
import assistant from "@/public/icons/assistant.svg";
import assistantFilled from "@/public/icons/assistant-filled.svg";
import drive from "@/public/icons/drive.svg";
import driveFilled from "@/public/icons/drive-filled.svg";
import calendar from "@/public/icons/calendar.svg";
import calendarFilled from "@/public/icons/calendar-filled.svg";
import groups from "@/public/icons/groups.svg";
import groupsFilled from "@/public/icons/groups-filled.svg";
import teams from "@/public/icons/teams.svg";
import teamsFilled from "@/public/icons/teams-filled.svg";
import network from "@/public/icons/network.svg";
import networkFilled from "@/public/icons/network-filled.svg";
import apps from "@/public/icons/apps.svg";
import appsFilled from "@/public/icons/apps-filled.svg";

const Sidebar = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [activeItem, setActiveItem] = useState<string | null>("Dashboard"); // Set initial active item
	const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
	const navItems = [
		{
			name: "Dashboard",
			iconStroke: dashboardIcon,
			iconFilled: dashboardIconFilled,
			submenu: [],
		},
		{
			name: "Recents",
			iconStroke: recentIcon,
			iconFilled: recentIconFilled,
			submenu: ["Calls", "Messages", "Topics", "Groups", "Meetings"],
		},
		{
			name: "Contacts",
			iconStroke: contactsIcon,
			iconFilled: contactsIconFilled,
			submenu: [],
		},
		{
			name: "Teams",
			iconStroke: teams,
			iconFilled: teamsFilled,
			submenu: [],
		},
		{
			name: "Groups",
			iconStroke: groups,
			iconFilled: groupsFilled,
			submenu: [],
		},
		{
			name: "Calendar",
			iconStroke: calendar,
			iconFilled: calendarFilled,
			submenu: ["My Bookings"],
		},
		{
			name: "Network",
			iconStroke: network,
			iconFilled: networkFilled,
			submenu: ["Invite Network", "My Network", "My Invitations"],
		},
		{
			name: "Drive",
			iconStroke: drive,
			iconFilled: driveFilled,
			submenu: [],
		},
		{
			name: "Apps",
			iconStroke: apps,
			iconFilled: appsFilled,
			submenu: [],
		},
		{
			name: "Assistant",
			iconStroke: assistant,
			iconFilled: assistantFilled,
			submenu: [],
		},
	];
	return (
		<>
			<aside className="w-60 h-screen p-4 border-r border-[#D6DBE1] bg-white">
				<div className="min-h-[77px]">
					<Image src={Logo} alt="Logo" className="w-[158px]" />
				</div>
				<div className="mt-1.5">
					{navItems.map((item) => (
						<div key={item.name}>
							<div
								className={`flex items-center p-2 cursor-pointer rounded-[4px] mb-[6px] ${
									activeItem === item.name
										? "bg-[#F2F2F2] text-[#222020]"
										: "hover:bg-[#F2F2F2]"
								}`}
								onMouseEnter={() => setHoveredItem(item.name)}
								onMouseLeave={() => setHoveredItem(null)}
								onClick={() => setActiveItem(item.name)}
							>
								<Image
									src={
										hoveredItem === item.name || activeItem === item.name
											? item.iconFilled
											: item.iconStroke
									}
									alt={item.name}
									className="w-5 h-5"
								/>
								<p
									className={`ml-2 ${
										hoveredItem === item.name || activeItem === item.name
											? "font-semibold"
											: "font-normal"
									}`}
								>
									{item.name}
								</p>
							</div>

							{/* Submenu */}
							{activeItem === item.name && item.submenu.length > 0 && (
								<div className="space-y-2 mt-1 mb-2">
									{item.submenu.map((subItem) => (
										<div
											key={subItem}
											className={`flex items-center cursor-pointer hover:bg-[#F2F2F2] hover:font-semibold rounded-[4px] py-[8px] pl-[49px] pr-2.5 ${
												activeSubItem === subItem
													? "bg-[#F2F2F2] font-semibold"
													: ""
											}`}
											onClick={(e) => {
												e.stopPropagation();
												setActiveSubItem(subItem);
											}}
										>
											<p className="">{subItem}</p>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</aside>
		</>
	);
};

export default Sidebar;

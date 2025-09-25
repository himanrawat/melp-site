"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDashboard } from "./DashboardContext";
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
	const {
		currentView,
		setCurrentView,
		expandedMenu,
		setExpandedMenu,
		isMobileMenuOpen,
		setIsMobileMenuOpen,
	} = useDashboard();

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const sidebar = document.getElementById("mobile-sidebar");
			if (
				sidebar &&
				!sidebar.contains(event.target as Node) &&
				isMobileMenuOpen
			) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobileMenuOpen, setIsMobileMenuOpen]);

	const navItems = [
		{
			name: "Dashboard",
			displayName: "Dashboard",
			iconStroke: dashboardIcon,
			iconFilled: dashboardIconFilled,
			submenu: [],
		},
		{
			name: "Recents",
			displayName: "Recents",
			iconStroke: recentIcon,
			iconFilled: recentIconFilled,
			submenu: ["Calls", "Messages", "Topics", "Groups", "Meetings"],
		},
		{
			name: "Contacts",
			displayName: "Contacts",
			iconStroke: contactsIcon,
			iconFilled: contactsIconFilled,
			submenu: [],
		},
		{
			name: "Teams",
			displayName: "Teams",
			iconStroke: teams,
			iconFilled: teamsFilled,
			submenu: [],
		},
		{
			name: "Groups",
			displayName: "Groups",
			iconStroke: groups,
			iconFilled: groupsFilled,
			submenu: [],
		},
		{
			name: "Calendar",
			displayName: "Calendar",
			iconStroke: calendar,
			iconFilled: calendarFilled,
			submenu: ["My Bookings"],
		},
		{
			name: "Network",
			displayName: "Network",
			iconStroke: network,
			iconFilled: networkFilled,
			submenu: ["Invite Contact", "My Network", "My Invitations"],
		},
		{
			name: "MelpDrive",
			displayName: "Melp Drive",
			iconStroke: drive,
			iconFilled: driveFilled,
			submenu: [],
		},
		{
			name: "Apps",
			displayName: "Apps",
			iconStroke: apps,
			iconFilled: appsFilled,
			submenu: [],
		},
		{
			name: "Assistant",
			displayName: "Assistant",
			iconStroke: assistant,
			iconFilled: assistantFilled,
			submenu: [],
		},
	];

	const handleMenuClick = (itemName: string) => {
		const item = navItems.find((nav) => nav.name === itemName);

		if (item && item.submenu && item.submenu.length > 0) {
			// Items with submenus: Recents, Calendar, Network
			if (itemName === "Calendar") {
				// Calendar: Both toggle submenu AND change content
				if (expandedMenu === itemName) {
					setExpandedMenu(null);
					setCurrentView("Dashboard");
				} else {
					setExpandedMenu(itemName);
					setCurrentView(itemName as any);
				}
			} else {
				// Recents, Network: Only toggle submenu, no content change
				setExpandedMenu(expandedMenu === itemName ? null : itemName);
			}
		} else {
			// Items without submenus: Change content and close any expanded menu
			setCurrentView(itemName as any);
			setExpandedMenu(null);
		}
	};

	const handleSubmenuClick = (subItem: string) => {
		setCurrentView(subItem as any);
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};

	const isActiveItem = (itemName: string) => {
		// Check if current view matches the item or if it's a submenu item of this parent
		if (currentView === itemName) return true;

		const item = navItems.find((nav) => nav.name === itemName);
		return item?.submenu.includes(currentView as any) || false;
	};

	const renderMenuItem = (item: any, isMobile = false) => (
		<div key={item.name}>
			<div
				className={`flex items-center p-2 cursor-pointer rounded-[4px] mb-[6px] transition-all duration-200 ease-in-out ${
					isActiveItem(item.name)
						? "bg-[#F2F2F2] text-[#222020]"
						: "hover:bg-[#F2F2F2]"
				}`}
				onMouseEnter={() => !isMobile && setHoveredItem(item.name)}
				onMouseLeave={() => !isMobile && setHoveredItem(null)}
				onClick={() => {
					handleMenuClick(item.name);
					if (isMobile && item.submenu.length === 0) {
						setIsMobileMenuOpen(false);
					}
				}}
			>
				<Image
					src={
						hoveredItem === item.name || isActiveItem(item.name)
							? item.iconFilled
							: item.iconStroke
					}
					alt={item.name}
					className="w-5 h-5 flex-shrink-0"
				/>
				<p
					className={`${isMobile ? "ml-3" : "ml-2"} text-base ${
						hoveredItem === item.name || isActiveItem(item.name)
							? "font-semibold"
							: "font-normal"
					}`}
				>
					{item.displayName}
				</p>
			</div>

			{/* Submenu */}
			{expandedMenu === item.name && item.submenu.length > 0 && (
				<div className="space-y-1 mt-1 mb-2 animate-slideDown">
					{item.submenu.map((subItem: string, index: number) => (
						<div
							key={subItem}
							className={`flex items-center cursor-pointer hover:bg-[#F2F2F2] hover:font-semibold rounded-[4px] py-2 ${
								isMobile ? "pl-8" : "pl-12"
							} pr-3 transition-all duration-200 ease-in-out ${
								currentView === subItem ? "bg-[#F2F2F2] font-semibold" : ""
							}`}
							style={{ animationDelay: `${index * 50}ms` }}
							onClick={(e) => {
								e.stopPropagation();
								handleSubmenuClick(subItem);
							}}
						>
							<p className="text-base">{subItem}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);

	return (
		<>
			{/* Desktop Sidebar */}
			<aside className="hidden lg:flex w-60 lg:w-64 xl:w-72 h-full p-4 border-r border-[#D6DBE1] bg-white flex-shrink-0 rounded-bl-2xl flex-col">
				<div className="min-h-[77px] flex items-center">
					<Image src={Logo} alt="Logo" className="w-44 xl:w-[158px] h-auto" />
				</div>
				<div className="mt-1.5 flex-1 overflow-y-auto scrollbar-hide">
					{navItems.map((item) => renderMenuItem(item, false))}
				</div>
			</aside>

			{/* Mobile Sidebar */}
			{isMobileMenuOpen && (
				<aside
					id="mobile-sidebar"
					className="lg:hidden absolute top-[77px] left-0 w-80 h-[calc(100%-77px)] z-40 animate-slideRight flex flex-col bg-white/90 backdrop-blur-md border-r border-white/20 shadow-2xl p-4"
				>
					<div className="min-h-[77px] flex items-center justify-between">
						<Image src={Logo} alt="Logo" className="w-36 h-auto" />
					</div>
					<div className="mt-4 flex-1 overflow-y-auto scrollbar-hide">
						{navItems.map((item) => renderMenuItem(item, true))}
					</div>
				</aside>
			)}
		</>
	);
};

export default Sidebar;

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { DashboardView } from "./dashboardConfig";

interface DashboardContextType {
	currentView: DashboardView;
	setCurrentView: (view: DashboardView) => void;
	expandedMenu: string | null;
	setExpandedMenu: (menu: string | null) => void;
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
	undefined
);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [currentView, setCurrentView] = useState<DashboardView>("Dashboard");
	const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	return (
		<DashboardContext.Provider
			value={{
				currentView,
				setCurrentView,
				expandedMenu,
				setExpandedMenu,
				isMobileMenuOpen,
				setIsMobileMenuOpen,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (context === undefined) {
		throw new Error("useDashboard must be used within a DashboardProvider");
	}
	return context;
};

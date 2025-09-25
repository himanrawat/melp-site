"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
	isOpen,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className="lg:hidden top-4 left-4 z-50 p-2 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-all duration-200"
			aria-label={isOpen ? "Close menu" : "Open menu"}
		>
			{isOpen ? (
				<X className="w-6 h-6 text-neutral-700" />
			) : (
				<Menu className="w-6 h-6 text-neutral-700" />
			)}
		</button>
	);
};

export default MobileMenuButton;

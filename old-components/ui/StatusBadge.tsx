"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
	children: React.ReactNode;
	variant?: "primary" | "success" | "warning" | "info";
	className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
	children,
	variant = "primary",
	className,
}) => {
	const variants = {
		primary: "bg-primary-100 border-primary-200 text-primary-700",
		success: "bg-success-100 border-success-200 text-success-700",
		warning: "bg-warning-100 border-warning-200 text-warning-700",
		info: "bg-neutral-100 border-neutral-200 text-neutral-700",
	};

	return (
		<div
			className={cn(
				"w-fit p-3 rounded-xl flex items-center gap-3 mx-auto border backdrop-blur-sm",
				"shadow-sm hover:shadow-md transition-all duration-300",
				variants[variant],
				className
			)}
		>
			<div className="w-5 h-5 rounded-full border-2 border-current bg-transparent flex items-center justify-center">
				<div className="w-2.5 h-2.5 bg-current rounded-full animate-pulse" />
			</div>
			<div className="font-medium text-sm">{children}</div>
		</div>
	);
};

export default StatusBadge;

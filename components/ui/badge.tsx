import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error"
		| "neutral";
	size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ className, variant = "primary", size = "md", ...props }, ref) => {
		const variants = {
			primary: "bg-primary-500 text-white",
			secondary: "bg-secondary text-secondary-foreground",
			success: "bg-success-500 text-white",
			warning: "bg-warning-500 text-white",
			error: "bg-error-500 text-white",
			neutral: "bg-neutral-500 text-white",
		};

		const sizes = {
			sm: "px-2 py-1 text-xs",
			md: "px-3 py-1 text-sm",
			lg: "px-4 py-2 text-base",
		};

		return (
			<div
				ref={ref}
				className={cn(
					"inline-flex items-center rounded-full font-medium",
					variants[variant],
					sizes[size],
					className
				)}
				{...props}
			/>
		);
	}
);

Badge.displayName = "Badge";

export { Badge };

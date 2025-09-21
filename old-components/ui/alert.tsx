import React from "react";
import { cn } from "@/lib/utils";
import { Check, AlertTriangle, X, Info } from "lucide-react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "success" | "warning" | "error" | "info";
	title?: string;
	children: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant = "info", title, children, ...props }, ref) => {
		const variants = {
			success: "bg-success-50 border-success-500 text-success-700",
			warning: "bg-warning-50 border-warning-500 text-warning-700",
			error: "bg-error-50 border-error-500 text-error-700",
			info: "bg-primary-50 border-primary-500 text-primary-700",
		};

		const icons = {
			success: Check,
			warning: AlertTriangle,
			error: X,
			info: Info,
		};

		const Icon = icons[variant];

		return (
			<div
				ref={ref}
				className={cn(
					"p-4 rounded-lg border flex items-start space-x-3",
					variants[variant],
					className
				)}
				{...props}
			>
				<Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
				<div className="flex-1">
					{title && <h4 className="font-medium mb-1">{title}</h4>}
					<div className="text-sm">{children}</div>
				</div>
			</div>
		);
	}
);

Alert.displayName = "Alert";

export { Alert };

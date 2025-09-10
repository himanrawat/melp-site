"use client";

import { useState } from "react";
import { Check, AlertTriangle, X, Info } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";

export default function DesignSystemShowcase() {
	const [activeTab, setActiveTab] = useState("colors");

	const tabs = [
		{ id: "colors", label: "Colors" },
		{ id: "components", label: "Components" },
		{ id: "typography", label: "Typography" },
		{ id: "spacing", label: "Spacing" },
		{ id: "effects", label: "Effects" },
	];

	const ColorSwatch = ({
		colors,
		name,
	}: {
		colors: string[];
		name: string;
	}) => (
		<div className="space-y-2">
			<h4 className="font-medium text-sm text-foreground">{name}</h4>
			<div className="grid grid-cols-11 gap-1">
				{colors.map((shade, index) => (
					<div key={shade} className="space-y-1">
						<div
							className={`w-full h-12 rounded-md border border-neutral-200 ${shade}`}
							title={`${name}-${
								index === 0 ? "50" : index === 10 ? "950" : index * 100
							}`}
						/>
						<span className="text-xs text-muted-foreground block text-center">
							{index === 0 ? "50" : index === 10 ? "950" : index * 100}
						</span>
					</div>
				))}
			</div>
		</div>
	);

	const AlertComponent = ({
		type,
		children,
	}: {
		type: "success" | "warning" | "error" | "info";
		children: React.ReactNode;
	}) => {
		const styles = {
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

		const Icon = icons[type];

		return (
			<div
				className={`p-4 rounded-lg border flex items-start space-x-3 ${styles[type]}`}
			>
				<Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
				<div>{children}</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="navbar-glass sticky top-0 z-50 px-6 py-4">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<h1 className="text-2xl font-bold text-foreground">
						MELP Design System
					</h1>
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<div className="w-4 h-4 bg-primary-500 rounded-full"></div>
							<span className="text-sm text-muted-foreground">#EE4136</span>
							<span className="text-xs text-muted-foreground opacity-75">
								oklch(63.07% 0.211 28.41)
							</span>
						</div>
						<ModeToggle />
					</div>
				</div>
			</header>

			<div className="max-w-7xl mx-auto px-6 py-8">
				{/* Navigation Tabs */}
				<div className="flex space-x-1 bg-muted p-1 rounded-lg mb-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
								activeTab === tab.id
									? "bg-background text-foreground shadow-sm"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Colors Section */}
				{activeTab === "colors" && (
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Color Palette
							</h2>
							<div className="card-elevated p-6 mb-8">
								<h3 className="text-lg font-semibold text-foreground mb-4">
									Primary Color Information
								</h3>
								<div className="flex items-center space-x-6">
									<div className="w-20 h-20 bg-primary-500 rounded-lg border-2 border-white shadow-lg"></div>
									<div className="space-y-2">
										<div>
											<span className="text-sm text-muted-foreground">
												HEX:
											</span>
											<span className="ml-2 font-mono text-foreground">
												#EE4136
											</span>
										</div>
										<div>
											<span className="text-sm text-muted-foreground">
												OKLCH:
											</span>
											<span className="ml-2 font-mono text-foreground">
												oklch(63.07% 0.211 28.41)
											</span>
										</div>
										<div>
											<span className="text-sm text-muted-foreground">
												RGB:
											</span>
											<span className="ml-2 font-mono text-foreground">
												rgb(238, 65, 54)
											</span>
										</div>
										<div>
											<span className="text-sm text-muted-foreground">
												HSL:
											</span>
											<span className="ml-2 font-mono text-foreground">
												hsl(4, 84%, 57%)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="grid gap-8">
								<ColorSwatch
									colors={[
										"bg-primary-50",
										"bg-primary-100",
										"bg-primary-200",
										"bg-primary-300",
										"bg-primary-400",
										"bg-primary-500",
										"bg-primary-600",
										"bg-primary-700",
										"bg-primary-800",
										"bg-primary-900",
										"bg-primary-950",
									]}
									name="Primary (#EE4136)"
								/>
								<ColorSwatch
									colors={[
										"bg-success-50",
										"bg-success-100",
										"bg-success-200",
										"bg-success-300",
										"bg-success-400",
										"bg-success-500",
										"bg-success-600",
										"bg-success-700",
										"bg-success-800",
										"bg-success-900",
										"bg-success-950",
									]}
									name="Success"
								/>
								<ColorSwatch
									colors={[
										"bg-warning-50",
										"bg-warning-100",
										"bg-warning-200",
										"bg-warning-300",
										"bg-warning-400",
										"bg-warning-500",
										"bg-warning-600",
										"bg-warning-700",
										"bg-warning-800",
										"bg-warning-900",
										"bg-warning-950",
									]}
									name="Warning"
								/>
								<ColorSwatch
									colors={[
										"bg-error-50",
										"bg-error-100",
										"bg-error-200",
										"bg-error-300",
										"bg-error-400",
										"bg-error-500",
										"bg-error-600",
										"bg-error-700",
										"bg-error-800",
										"bg-error-900",
										"bg-error-950",
									]}
									name="Error"
								/>
								<ColorSwatch
									colors={[
										"bg-neutral-50",
										"bg-neutral-100",
										"bg-neutral-200",
										"bg-neutral-300",
										"bg-neutral-400",
										"bg-neutral-500",
										"bg-neutral-600",
										"bg-neutral-700",
										"bg-neutral-800",
										"bg-neutral-900",
										"bg-neutral-950",
									]}
									name="Neutral"
								/>
							</div>
						</div>
					</div>
				)}

				{/* Components Section */}
				{activeTab === "components" && (
					<div className="space-y-12">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Components
							</h2>
						</div>

						{/* Buttons */}
						<section>
							<h3 className="text-xl font-semibold text-foreground mb-4">
								Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button className="btn-primary px-6 py-3 rounded-lg font-medium">
									Primary Button
								</button>
								<button className="btn-secondary px-6 py-3 rounded-lg font-medium">
									Secondary Button
								</button>
								<button className="btn-ghost px-6 py-3 rounded-lg font-medium">
									Ghost Button
								</button>
								<button className="btn-primary px-4 py-2 rounded-md text-sm font-medium">
									Small Primary
								</button>
								<button className="btn-primary px-8 py-4 rounded-xl text-lg font-medium">
									Large Primary
								</button>
							</div>
						</section>

						{/* Cards */}
						<section>
							<h3 className="text-xl font-semibold text-foreground mb-4">
								Cards
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="card-elevated p-6 space-y-4">
									<h4 className="text-lg font-semibold text-foreground">
										Elevated Card
									</h4>
									<p className="text-muted-foreground">
										This card has a subtle shadow and elevated appearance.
									</p>
									<button className="btn-primary px-4 py-2 rounded-md text-sm">
										Action
									</button>
								</div>
								<div className="card-flat p-6 space-y-4">
									<h4 className="text-lg font-semibold text-foreground">
										Flat Card
									</h4>
									<p className="text-muted-foreground">
										This card has a flat design with just a border.
									</p>
									<button className="btn-secondary px-4 py-2 rounded-md text-sm">
										Action
									</button>
								</div>
								<div className="card-primary p-6 space-y-4">
									<h4 className="text-lg font-semibold">Primary Card</h4>
									<p className="text-white/90">
										This card uses the primary gradient background.
									</p>
									<button className="bg-white text-primary-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-100">
										Action
									</button>
								</div>
							</div>
						</section>

						{/* Alerts */}
						<section>
							<h3 className="text-xl font-semibold text-foreground mb-4">
								Alerts
							</h3>
							<div className="space-y-4">
								<AlertComponent type="success">
									<div>
										<h4 className="font-medium">Success!</h4>
										<p className="text-sm">
											Your changes have been saved successfully.
										</p>
									</div>
								</AlertComponent>
								<AlertComponent type="warning">
									<div>
										<h4 className="font-medium">Warning</h4>
										<p className="text-sm">
											This action cannot be undone. Please proceed with caution.
										</p>
									</div>
								</AlertComponent>
								<AlertComponent type="error">
									<div>
										<h4 className="font-medium">Error</h4>
										<p className="text-sm">
											There was an error processing your request. Please try
											again.
										</p>
									</div>
								</AlertComponent>
								<AlertComponent type="info">
									<div>
										<h4 className="font-medium">Information</h4>
										<p className="text-sm">
											This is some helpful information about the current
											process.
										</p>
									</div>
								</AlertComponent>
							</div>
						</section>
					</div>
				)}

				{/* Typography Section */}
				{activeTab === "typography" && (
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Typography
							</h2>
						</div>
						<div className="space-y-6">
							<div>
								<h1 className="text-4xl font-bold text-foreground">
									Heading 1
								</h1>
								<p className="text-sm text-muted-foreground">4xl / Bold</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold text-foreground">
									Heading 2
								</h2>
								<p className="text-sm text-muted-foreground">3xl / Bold</p>
							</div>
							<div>
								<h3 className="text-2xl font-semibold text-foreground">
									Heading 3
								</h3>
								<p className="text-sm text-muted-foreground">2xl / Semibold</p>
							</div>
							<div>
								<h4 className="text-xl font-semibold text-foreground">
									Heading 4
								</h4>
								<p className="text-sm text-muted-foreground">xl / Semibold</p>
							</div>
							<div>
								<h5 className="text-lg font-medium text-foreground">
									Heading 5
								</h5>
								<p className="text-sm text-muted-foreground">lg / Medium</p>
							</div>
							<div>
								<h6 className="text-base font-medium text-foreground">
									Heading 6
								</h6>
								<p className="text-sm text-muted-foreground">base / Medium</p>
							</div>
							<div>
								<p className="text-base text-foreground">Body Text</p>
								<p className="text-sm text-muted-foreground">base / Regular</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Small Text</p>
								<p className="text-xs text-muted-foreground">sm / Regular</p>
							</div>
						</div>
					</div>
				)}

				{/* Spacing Section */}
				{activeTab === "spacing" && (
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Spacing & Layout
							</h2>
						</div>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									Border Radius
								</h3>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"].map(
										(size) => (
											<div key={size} className="text-center">
												<div
													className={`w-16 h-16 bg-primary-500 mx-auto mb-2 rounded-${size}`}
												></div>
												<span className="text-sm text-muted-foreground">
													{size}
												</span>
											</div>
										)
									)}
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									Shadows
								</h3>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
									{["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => (
										<div key={size} className="text-center">
											<div
												className={`w-24 h-24 bg-card rounded-lg mx-auto mb-2 shadow-${size}`}
											></div>
											<span className="text-sm text-muted-foreground">
												shadow-{size}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Effects Section */}
				{activeTab === "effects" && (
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Visual Effects
							</h2>
						</div>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									Glassmorphism
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl">
									<div className="glass-effect p-6 rounded-lg">
										<h4 className="font-semibold text-white mb-2">
											Glass Effect
										</h4>
										<p className="text-white/80 text-sm">
											Standard glassmorphism with subtle blur.
										</p>
									</div>
									<div className="glass-strong p-6 rounded-lg">
										<h4 className="font-semibold text-white mb-2">
											Strong Glass
										</h4>
										<p className="text-white/80 text-sm">
											Stronger glassmorphism with more blur.
										</p>
									</div>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									Gradients
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									<div className="gradient-primary p-6 rounded-lg text-white">
										<h4 className="font-semibold mb-2">Primary Gradient</h4>
										<p className="text-white/80 text-sm">
											Linear gradient using primary colors.
										</p>
									</div>
									<div className="gradient-primary-soft p-6 rounded-lg">
										<h4 className="font-semibold text-primary-800 mb-2">
											Soft Gradient
										</h4>
										<p className="text-primary-700 text-sm">
											Subtle gradient for backgrounds.
										</p>
									</div>
									<div className="gradient-radial-primary p-6 rounded-lg text-white">
										<h4 className="font-semibold mb-2">Radial Gradient</h4>
										<p className="text-white/80 text-sm">
											Radial gradient for special effects.
										</p>
									</div>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-4">
									Interactive Elements
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="card-elevated interactive p-6 cursor-pointer">
										<h4 className="font-semibold text-foreground mb-2">
											Interactive Card
										</h4>
										<p className="text-muted-foreground text-sm">
											Hover to see the lift effect.
										</p>
									</div>
									<button className="focus-ring btn-primary p-6 rounded-lg text-left">
										<h4 className="font-semibold mb-2">Focus Ring</h4>
										<p className="text-white/80 text-sm">
											Tab to see the focus ring.
										</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

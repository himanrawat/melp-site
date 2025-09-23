"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "motion/react";
import { Button } from "@/components/ui/button";
import {
	Play,
	ArrowRight,
	Video,
	MessageSquare,
	Brain,
	Users,
	Calendar,
	FileText,
	ExternalLink,
	Sparkles,
} from "lucide-react";

// Interactive floating feature icons
const FeatureIcon = ({
	icon: Icon,
	label,
	delay = 0,
	className = "",
	onClick,
}: {
	icon: React.ElementType;
	label: string;
	delay?: number;
	className?: string;
	onClick?: () => void;
}) => {
	const controls = useAnimation();

	const handleHover = () => {
		controls.start({
			scale: 1.1,
			rotate: [0, -5, 5, 0],
			transition: { duration: 0.5 },
		});
	};

	return (
		<motion.div
			className={`absolute cursor-pointer group ${className}`}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{
				opacity: 1,
				scale: 1,
				y: [0, -10, 0],
			}}
			transition={{
				opacity: { duration: 0.6, delay },
				scale: { duration: 0.6, delay },
				y: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: delay + 1,
				},
			}}
			onHoverStart={handleHover}
			onClick={onClick}
		>
			<div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-200/50 hover:shadow-xl transition-all duration-300">
				<Icon className="w-6 h-6 text-primary-500 mb-2" />
				<p className="text-xs font-medium text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity">
					{label}
				</p>
			</div>
		</motion.div>
	);
};

// Live preview mockup component
const LivePreview = () => {
	const [activeTab, setActiveTab] = useState("dashboard");

	const tabs = [
		{ id: "dashboard", label: "Dashboard", icon: Users },
		{ id: "video", label: "Video Call", icon: Video },
		{ id: "chat", label: "Messaging", icon: MessageSquare },
		{ id: "ai", label: "AI Summary", icon: Brain },
	];

	return (
		<motion.div
			className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border-2 lg:border-4 border-primary-100 max-w-full "
			initial={{ opacity: 0, y: 50, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 1, delay: 0.8 }}
		>
			{/* Browser Header */}
			<div className="bg-neutral-100 px-3 lg:px-4 py-2 lg:py-3 flex items-center gap-2 border-b">
				<div className="flex gap-1.5 lg:gap-2">
					<div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-error-500 rounded-full"></div>
					<div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-warning-500 rounded-full"></div>
					<div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-success-500 rounded-full"></div>
				</div>
				<div className="flex-1 bg-white rounded-lg px-2 lg:px-3 py-1 mx-2 lg:mx-4">
					<p className="text-xs text-neutral-600 truncate">
						app.melp.us/dashboard
					</p>
				</div>
			</div>

			{/* Tab Navigation */}
			<div className="bg-primary-50 px-3 lg:px-4 py-2 border-b border-primary-200">
				<div className="flex gap-1 lg:gap-2 overflow-x-auto scrollbar-hide">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all flex items-center gap-1.5 lg:gap-2 whitespace-nowrap ${
								activeTab === tab.id
									? "bg-primary-500 text-white shadow-md"
									: "bg-white text-neutral-600 hover:bg-primary-100"
							}`}
						>
							<tab.icon className="w-3 h-3 lg:w-4 lg:h-4" />
							<span className="hidden sm:inline">{tab.label}</span>
						</button>
					))}
				</div>
			</div>

			{/* Preview Content */}
			<div className="h-64 sm:h-72 lg:h-80 relative overflow-hidden">
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="absolute inset-0 p-3 sm:p-4 lg:p-6"
				>
					{activeTab === "dashboard" && (
						<div className="space-y-3 lg:space-y-4">
							<div className="flex items-center justify-between">
								<h3 className="text-sm sm:text-base lg:text-lg font-semibold">
									Welcome to MELP
								</h3>
								<div className="flex items-center gap-2 bg-success-100 px-2 lg:px-3 py-1 rounded-full">
									<div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-success-500 rounded-full animate-pulse"></div>
									<span className="text-xs text-success-700">Online</span>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 lg:gap-4">
								<div className="bg-primary-50 p-2 lg:p-4 rounded-lg lg:rounded-xl">
									<Users className="w-4 h-4 lg:w-6 lg:h-6 text-primary-500 mb-1 lg:mb-2" />
									<p className="text-xs lg:text-sm font-medium">Active Teams</p>
									<p className="text-lg lg:text-2xl font-bold text-primary-500">
										12
									</p>
								</div>
								<div className="bg-warning-50 p-2 lg:p-4 rounded-lg lg:rounded-xl">
									<Video className="w-4 h-4 lg:w-6 lg:h-6 text-warning-600 mb-1 lg:mb-2" />
									<p className="text-xs lg:text-sm font-medium">
										Meetings Today
									</p>
									<p className="text-lg lg:text-2xl font-bold text-warning-600">
										8
									</p>
								</div>
							</div>
							<div className="bg-neutral-50 p-2 lg:p-4 rounded-lg lg:rounded-xl">
								<div className="flex items-center gap-2 lg:gap-3">
									<div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary-500 rounded-full flex items-center justify-center">
										<Brain className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
									</div>
									<div>
										<p className="text-xs lg:text-sm font-medium">
											AI Summary Ready
										</p>
										<p className="text-xs lg:text-sm text-neutral-600">
											3 new insights available
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "video" && (
						<div className="space-y-3 lg:space-y-4">
							<div className="bg-neutral-900 rounded-lg lg:rounded-xl h-32 sm:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
								<div className="text-center text-white z-10">
									<Video className="w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-1 lg:mb-2" />
									<p className="text-sm lg:text-base font-medium">
										HD Video Call Active
									</p>
									<p className="text-xs lg:text-sm opacity-75">
										Crystal clear quality
									</p>
								</div>
								<div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 right-2 lg:right-4 flex justify-between">
									<div className="bg-white/20 backdrop-blur-sm px-2 lg:px-3 py-1 rounded-full text-white text-xs">
										3 participants
									</div>
									<div className="bg-white/20 backdrop-blur-sm px-2 lg:px-3 py-1 rounded-full text-white text-xs">
										25:30
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "chat" && (
						<div className="space-y-2 lg:space-y-3">
							<div className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-primary-50 rounded-lg">
								<div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs lg:text-sm font-bold">
									A
								</div>
								<div className="flex-1 min-w-0">
									<p className="font-medium text-xs lg:text-sm truncate">
										Alice Johnson
									</p>
									<p className="text-xs text-neutral-600 truncate">
										Meeting starts in 5 minutes!
									</p>
								</div>
								<span className="text-xs text-neutral-500">2m</span>
							</div>
							<div className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 hover:bg-neutral-50 rounded-lg">
								<div className="w-6 h-6 lg:w-8 lg:h-8 bg-warning-500 rounded-full flex items-center justify-center text-white text-xs lg:text-sm font-bold">
									S
								</div>
								<div className="flex-1 min-w-0">
									<p className="font-medium text-xs lg:text-sm truncate">
										Sam Miller
									</p>
									<p className="text-xs text-neutral-600 truncate">
										Thanks for the AI summary 👍
									</p>
								</div>
								<span className="text-xs text-neutral-500">5m</span>
							</div>
							<div className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 hover:bg-neutral-50 rounded-lg">
								<div className="w-6 h-6 lg:w-8 lg:h-8 bg-success-500 rounded-full flex items-center justify-center text-white text-xs lg:text-sm font-bold">
									T
								</div>
								<div className="flex-1 min-w-0">
									<p className="font-medium text-xs lg:text-sm truncate">
										Team Updates
									</p>
									<p className="text-xs text-neutral-600 truncate">
										Project milestone completed!
									</p>
								</div>
								<span className="text-xs text-neutral-500">1h</span>
							</div>
						</div>
					)}

					{activeTab === "ai" && (
						<div className="space-y-3 lg:space-y-4">
							<div className="bg-gradient-to-r from-primary-50 to-primary-100 p-3 lg:p-4 rounded-lg lg:rounded-xl border border-primary-200">
								<div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
									<div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary-500 rounded-lg flex items-center justify-center">
										<Brain className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
									</div>
									<h3 className="text-sm lg:text-base font-semibold">
										AI Meeting Summary
									</h3>
								</div>
								<div className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
									<p>
										<strong>Key Decisions:</strong> Approved Q2 roadmap,
										allocated budget for new features
									</p>
									<p>
										<strong>Action Items:</strong> 3 tasks assigned to team
										members
									</p>
									<p>
										<strong>Next Steps:</strong> Follow-up meeting scheduled for
										Friday
									</p>
								</div>
								<div className="mt-2 lg:mt-3 flex gap-1.5 lg:gap-2 flex-wrap">
									<span className="bg-primary-200 text-primary-700 px-2 py-1 rounded-full text-xs">
										Project Planning
									</span>
									<span className="bg-primary-200 text-primary-700 px-2 py-1 rounded-full text-xs">
										Budget
									</span>
								</div>
							</div>
						</div>
					)}
				</motion.div>
			</div>
		</motion.div>
	);
};

const FeaturesHeroSection = () => {
	const [_isPlaying, setIsPlaying] = useState(false);

	const handleWatchDemo = () => {
		setIsPlaying(true);
		// Add demo logic here
	};

	const handleTryApp = () => {
		window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank");
	};

	return (
		<section className="relative min-h-screen p-4 w-full rounded-4xl border-2 border-gray-200 bg-[radial-gradient(circle,rgb(230,230,230)_1px,transparent_1px)] bg-[length:10px_10px] overflow-hidden pt-20 bg-white transition-colors duration-300 max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				></div>
			</div>

			{/* Floating Feature Icons - Repositioned to avoid content overlap */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<FeatureIcon
					icon={Video}
					label="HD Video Calls"
					delay={0.2}
					className="top-[10%] left-[2%] hidden xl:block pointer-events-auto"
				/>
				<FeatureIcon
					icon={MessageSquare}
					label="Real-time Chat"
					delay={0.4}
					className="top-[15%] right-[2%] hidden xl:block pointer-events-auto"
				/>
				<FeatureIcon
					icon={Brain}
					label="AI Insights"
					delay={0.6}
					className="bottom-[25%] left-[1%] hidden xl:block pointer-events-auto"
				/>
				<FeatureIcon
					icon={Users}
					label="Team Collaboration"
					delay={0.8}
					className="bottom-[15%] right-[1%] hidden xl:block pointer-events-auto"
				/>
				<FeatureIcon
					icon={Calendar}
					label="Smart Scheduling"
					delay={1.0}
					className="top-[50%] left-[3%] hidden 2xl:block pointer-events-auto"
				/>
				<FeatureIcon
					icon={FileText}
					label="Document Sharing"
					delay={1.2}
					className="top-[35%] right-[3%] hidden 2xl:block pointer-events-auto"
				/>
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 min-h-screen flex items-center justify-center">
				<div className="container mx-auto py-12 lg:py-0">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
						{/* Left Content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6 lg:space-y-8 order-2 lg:order-1"
						>
							{/* Badge */}
							<motion.div
								className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<Sparkles className="w-4 h-4 text-primary-500" />
								<span className="text-primary-700 font-medium text-sm">
									All Features
								</span>
							</motion.div>

							{/* Main Heading */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
							>
								<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
									<span className="text-neutral-900">Experience</span>
									<br />
									<span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
										MELP Live
									</span>
								</h1>
							</motion.div>

							{/* Subtitle */}
							<motion.p
								className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
							>
								See every feature in action. From AI-powered insights to
								seamless video calls, explore what makes MELP the ultimate
								collaboration platform.
							</motion.p>

							{/* Action Buttons */}
							<motion.div
								className="flex flex-col sm:flex-row gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								<Button
									size="lg"
									className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
									onClick={handleTryApp}
								>
									<div className="flex items-center gap-2">
										<ExternalLink className="w-5 h-5" />
										<span>Try MELP Live</span>
										<motion.div className="transform group-hover:translate-x-1 transition-transform">
											<ArrowRight className="w-4 h-4" />
										</motion.div>
									</div>
								</Button>

								<Button
									size="lg"
									variant="outline"
									className="border-primary-500 text-primary-500 hover:bg-primary-50 transition-all duration-300 group"
									onClick={handleWatchDemo}
								>
									<div className="flex items-center gap-2">
										<motion.div
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<Play className="w-5 h-5" />
										</motion.div>
										<span>Watch Demo</span>
									</div>
								</Button>
							</motion.div>

							{/* Stats */}
							<motion.div
								className="flex gap-6 sm:gap-8 pt-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								<div>
									<p className="text-xl sm:text-2xl font-bold text-primary-500">
										50+
									</p>
									<p className="text-sm text-neutral-600">Features</p>
								</div>
								<div>
									<p className="text-xl sm:text-2xl font-bold text-primary-500">
										10M+
									</p>
									<p className="text-sm text-neutral-600">Users</p>
								</div>
								<div>
									<p className="text-xl sm:text-2xl font-bold text-primary-500">
										99.9%
									</p>
									<p className="text-sm text-neutral-600">Uptime</p>
								</div>
							</motion.div>
						</motion.div>

						{/* Right Content - Live Preview */}
						<div className="relative order-1 lg:order-2">
							<LivePreview />

							{/* Floating Elements - Positioned relative to preview */}
							<motion.div
								className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg z-20"
								animate={{
									rotate: [0, 10, -10, 0],
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<Sparkles className="w-6 h-6" />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesHeroSection;

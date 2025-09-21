"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
	X,
	ExternalLink,
	Video,
	MessageSquare,
	Brain,
	Users,
	Calendar,
	FileText,
	Settings,
	Bell,
	Search,
	Plus,
	MoreHorizontal,
	Phone,
	Mic,
	MicOff,
	VideoOff,
	Share,
	Info,
	Maximize2,
} from "lucide-react";

const ApplicationPreviewSection = () => {
	const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
	const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const hotspots = [
		{
			id: "dashboard",
			x: "15%",
			y: "25%",
			title: "Smart Dashboard",
			description:
				"Get an overview of all team activities, meetings, and AI-generated insights in one centralized location.",
			features: [
				"Real-time notifications",
				"Activity timeline",
				"Quick actions",
				"Team status overview",
			],
		},
		{
			id: "video-call",
			x: "45%",
			y: "35%",
			title: "HD Video Calls",
			description:
				"Experience crystal clear video calls with advanced features like screen sharing, recording, and AI noise cancellation.",
			features: [
				"4K video quality",
				"Screen sharing",
				"Call recording",
				"Background blur",
			],
		},
		{
			id: "ai-summary",
			x: "75%",
			y: "20%",
			title: "AI Meeting Summary",
			description:
				"Automatically generated meeting summaries with key points, action items, and participant insights.",
			features: [
				"Auto transcription",
				"Action item extraction",
				"Key moment highlights",
				"Searchable transcripts",
			],
		},
		{
			id: "team-chat",
			x: "25%",
			y: "60%",
			title: "Team Messaging",
			description:
				"Real-time messaging with file sharing, reactions, and threaded conversations for better organization.",
			features: [
				"File sharing",
				"Message reactions",
				"Thread conversations",
				"Custom emojis",
			],
		},
		{
			id: "calendar",
			x: "65%",
			y: "65%",
			title: "Smart Calendar",
			description:
				"AI-powered scheduling that finds optimal meeting times and integrates with your existing calendar systems.",
			features: [
				"Smart scheduling",
				"Calendar integration",
				"Timezone handling",
				"Meeting reminders",
			],
		},
	];

	const HotspotModal = ({ hotspot }: { hotspot: any }) => (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
			onClick={() => setSelectedHotspot(null)}
		>
			<motion.div
				initial={{ y: 50 }}
				animate={{ y: 0 }}
				exit={{ y: 50 }}
				className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-start justify-between mb-6">
					<div>
						<h3 className="text-2xl font-bold text-neutral-900 mb-2">
							{hotspot.title}
						</h3>
						<p className="text-neutral-600">{hotspot.description}</p>
					</div>
					<button
						onClick={() => setSelectedHotspot(null)}
						className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<div className="space-y-3 mb-8">
					<h4 className="font-semibold text-neutral-900">Key Features:</h4>
					{hotspot.features.map((feature: string, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className="flex items-center gap-3"
						>
							<div className="w-2 h-2 bg-primary-500 rounded-full"></div>
							<span className="text-neutral-700">{feature}</span>
						</motion.div>
					))}
				</div>

				<button
					onClick={() =>
						window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank")
					}
					className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2"
				>
					<ExternalLink className="w-5 h-5" />
					Try This Feature Live
				</button>
			</motion.div>
		</motion.div>
	);

	const AppPreview = () => (
		<div
			className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-neutral-200 ${
				viewMode === "mobile" ? "max-w-sm mx-auto" : "w-full"
			}`}
		>
			{/* Browser/App Header */}
			<div className="bg-neutral-100 px-4 py-3 flex items-center gap-3 border-b">
				<div className="flex gap-2">
					<div className="w-3 h-3 bg-error-500 rounded-full"></div>
					<div className="w-3 h-3 bg-warning-500 rounded-full"></div>
					<div className="w-3 h-3 bg-success-500 rounded-full"></div>
				</div>
				{viewMode === "desktop" && (
					<div className="flex-1 bg-white rounded-lg px-4 py-2 max-w-md">
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 text-neutral-400">🔒</div>
							<span className="text-sm text-neutral-600">
								app.melp.us/dashboard
							</span>
						</div>
					</div>
				)}
				<button
					onClick={() =>
						window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank")
					}
					className="ml-auto p-2 hover:bg-neutral-200 rounded-lg transition-colors"
				>
					<ExternalLink className="w-4 h-4 text-neutral-600" />
				</button>
			</div>

			{/* App Interface */}
			<div
				className={`relative ${
					viewMode === "mobile" ? "h-96" : "h-[500px]"
				} bg-gradient-to-br from-primary-50/30 to-white overflow-hidden`}
			>
				{/* Top Navigation */}
				<div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-neutral-200 px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">M</span>
							</div>
							<h1 className="font-semibold text-neutral-900">MELP Workspace</h1>
						</div>
						<div className="flex items-center gap-3">
							<Bell className="w-5 h-5 text-neutral-600" />
							<Search className="w-5 h-5 text-neutral-600" />
							<Settings className="w-5 h-5 text-neutral-600" />
						</div>
					</div>
				</div>

				{/* Main Content Area */}
				<div className="absolute top-16 left-0 right-0 bottom-0 p-6">
					{/* Dashboard Cards */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
						{/* Active Meetings Card */}
						<div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
							<div className="flex items-center gap-3 mb-3">
								<Video className="w-5 h-5 text-primary-500" />
								<h3 className="font-semibold">Active Meetings</h3>
							</div>
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span>Daily Standup</span>
									<span className="text-success-500 font-medium">Live</span>
								</div>
								<div className="flex items-center justify-between text-sm">
									<span>Project Review</span>
									<span className="text-neutral-500">15:30</span>
								</div>
							</div>
						</div>

						{/* Team Status Card */}
						<div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
							<div className="flex items-center gap-3 mb-3">
								<Users className="w-5 h-5 text-success-500" />
								<h3 className="font-semibold">Team Status</h3>
							</div>
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span>Online</span>
									<span className="text-success-500 font-medium">12</span>
								</div>
								<div className="flex items-center justify-between text-sm">
									<span>In Meeting</span>
									<span className="text-warning-500 font-medium">5</span>
								</div>
							</div>
						</div>

						{/* AI Insights Card */}
						<div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
							<div className="flex items-center gap-3 mb-3">
								<Brain className="w-5 h-5 text-primary-500" />
								<h3 className="font-semibold">AI Insights</h3>
							</div>
							<div className="text-sm text-neutral-600">
								<p>3 new summaries</p>
								<p>5 action items pending</p>
							</div>
						</div>
					</div>

					{/* Recent Activity */}
					<div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
						<h3 className="font-semibold mb-4">Recent Activity</h3>
						<div className="space-y-3">
							<div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
								<Brain className="w-5 h-5 text-primary-500" />
								<div className="flex-1">
									<p className="font-medium text-sm">AI Summary Generated</p>
									<p className="text-xs text-neutral-600">
										Team standup meeting - 5 minutes ago
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg">
								<MessageSquare className="w-5 h-5 text-success-500" />
								<div className="flex-1">
									<p className="font-medium text-sm">New Message</p>
									<p className="text-xs text-neutral-600">
										Alice: Project update is ready for review
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Interactive Hotspots */}
				{hotspots.map((hotspot) => (
					<motion.button
						key={hotspot.id}
						className="absolute w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg cursor-pointer z-10"
						style={{ left: hotspot.x, top: hotspot.y }}
						initial={{ scale: 0 }}
						animate={isInView ? { scale: 1 } : { scale: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						onClick={() => setSelectedHotspot(hotspot.id)}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<motion.div
							className="absolute inset-0 bg-primary-500 rounded-full"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [1, 0, 1],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div className="relative w-full h-full bg-primary-500 rounded-full flex items-center justify-center">
							<Plus className="w-3 h-3 text-white" />
						</motion.div>
					</motion.button>
				))}

				{/* Overlay Instructions */}
				<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200">
					<div className="flex items-center gap-3">
						<Info className="w-5 h-5 text-primary-500" />
						<p className="text-sm text-neutral-700">
							Click the{" "}
							<span className="inline-flex w-4 h-4 bg-primary-500 rounded-full mx-1"></span>{" "}
							hotspots to explore features
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30"></div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 mb-6">
						<Maximize2 className="w-4 h-4 text-primary-500" />
						<span className="text-primary-700 font-medium text-sm">
							Live Preview
						</span>
					</div>

					<h2 className="text-4xl lg:text-6xl font-bold mb-6">
						<span className="text-neutral-900">Explore the</span>
						<br />
						<span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
							Complete Interface
						</span>
					</h2>

					<p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
						Take a detailed look at MELP's interface. Click on the hotspots to
						discover how each feature enhances your team's productivity.
					</p>
				</motion.div>

				{/* View Mode Toggle */}
				<motion.div
					className="flex justify-center mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="bg-white rounded-2xl p-1 shadow-lg border border-neutral-200">
						<button
							onClick={() => setViewMode("desktop")}
							className={`px-6 py-3 rounded-xl font-medium transition-all ${
								viewMode === "desktop"
									? "bg-primary-500 text-white shadow-md"
									: "text-neutral-600 hover:bg-neutral-50"
							}`}
						>
							Desktop View
						</button>
						<button
							onClick={() => setViewMode("mobile")}
							className={`px-6 py-3 rounded-xl font-medium transition-all ${
								viewMode === "mobile"
									? "bg-primary-500 text-white shadow-md"
									: "text-neutral-600 hover:bg-neutral-50"
							}`}
						>
							Mobile View
						</button>
					</div>
				</motion.div>

				{/* Application Preview */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.4 }}
				>
					<AppPreview />
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<button
						onClick={() =>
							window.open(
								"https://www.app.melp.us/spa/melp#/dashboard",
								"_blank"
							)
						}
						className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						<ExternalLink className="w-5 h-5" />
						<span>Open Full Application</span>
					</button>
				</motion.div>
			</div>

			{/* Hotspot Modal */}
			<AnimatePresence>
				{selectedHotspot && (
					<HotspotModal
						hotspot={hotspots.find((h) => h.id === selectedHotspot)}
					/>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ApplicationPreviewSection;

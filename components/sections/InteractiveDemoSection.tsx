"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import {
	Play,
	ExternalLink,
	Maximize,
	X,
	Users,
	Video,
	MessageSquare,
	Brain,
	FileText,
	Calendar,
	Settings,
	Phone,
} from "lucide-react";

const InteractiveDemoSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeDemo, setActiveDemo] = useState("dashboard");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const demoFeatures = [
		{
			id: "dashboard",
			title: "Smart Dashboard",
			description: "Get an overview of all your team activities and insights",
			icon: Users,
			color: "primary",
		},
		{
			id: "video",
			title: "HD Video Calls",
			description: "Crystal clear video meetings with advanced features",
			icon: Video,
			color: "success",
		},
		{
			id: "messaging",
			title: "Team Messaging",
			description: "Real-time chat with file sharing and integrations",
			icon: MessageSquare,
			color: "warning",
		},
		{
			id: "ai",
			title: "AI Assistant",
			description: "Intelligent meeting summaries and action items",
			icon: Brain,
			color: "primary",
		},
	];

	const handleOpenApp = () => {
		window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank");
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-primary-50/30"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 mb-6">
						<Play className="w-4 h-4 text-primary-500" />
						<span className="text-primary-700 font-medium text-sm">
							Interactive Demo
						</span>
					</div>

					<h2 className="text-4xl lg:text-6xl font-bold mb-6">
						<span className="text-neutral-900">See MELP in</span>
						<br />
						<span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
							Real Action
						</span>
					</h2>

					<p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
						Experience every feature hands-on. No signup required – just click
						and explore the full MELP platform in your browser.
					</p>
				</motion.div>

				{/* Demo Interface Preview */}
				<motion.div
					className="max-w-6xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					{/* Browser Frame */}
					<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200">
						{/* Browser Header */}
						<div className="bg-neutral-100 px-6 py-4 flex items-center justify-between border-b">
							<div className="flex items-center gap-3">
								<div className="flex gap-2">
									<div className="w-3 h-3 bg-error-500 rounded-full"></div>
									<div className="w-3 h-3 bg-warning-500 rounded-full"></div>
									<div className="w-3 h-3 bg-success-500 rounded-full"></div>
								</div>
								<div className="bg-white rounded-lg px-4 py-2 flex-1 max-w-md">
									<div className="flex items-center gap-2">
										<div className="w-4 h-4 text-neutral-400">🔒</div>
										<span className="text-sm text-neutral-600">
											app.melp.us/dashboard
										</span>
									</div>
								</div>
							</div>
							<button
								onClick={handleOpenModal}
								className="p-2 hover:bg-neutral-200 rounded-lg transition-colors"
							>
								<Maximize className="w-4 h-4 text-neutral-600" />
							</button>
						</div>

						{/* Demo Content */}
						<div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary-50/30 to-white overflow-hidden">
							{/* Feature Tabs */}
							<div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 z-10">
								{demoFeatures.map((feature, index) => (
									<motion.button
										key={feature.id}
										onClick={() => setActiveDemo(feature.id)}
										className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
											activeDemo === feature.id
												? "bg-primary-500 text-white shadow-lg"
												: "bg-white/90 text-neutral-600 hover:bg-primary-50"
										}`}
										initial={{ opacity: 0, y: -20 }}
										animate={
											isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
										}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<feature.icon className="w-4 h-4" />
										{feature.title}
									</motion.button>
								))}
							</div>

							{/* Demo Content Area */}
							<div className="absolute inset-0 pt-20 px-6 pb-6">
								<motion.div
									key={activeDemo}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									className="h-full"
								>
									{activeDemo === "dashboard" && (
										<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
											<div className="space-y-4">
												<div className="bg-white rounded-xl p-4 shadow-sm">
													<div className="flex items-center gap-3 mb-3">
														<Users className="w-5 h-5 text-primary-500" />
														<h3 className="font-semibold">Team Status</h3>
													</div>
													<div className="space-y-2">
														<div className="flex items-center justify-between">
															<span className="text-sm">Online</span>
															<span className="text-primary-500 font-medium">
																12
															</span>
														</div>
														<div className="flex items-center justify-between">
															<span className="text-sm">In Meeting</span>
															<span className="text-warning-500 font-medium">
																5
															</span>
														</div>
													</div>
												</div>
												<div className="bg-white rounded-xl p-4 shadow-sm">
													<div className="flex items-center gap-3 mb-3">
														<Calendar className="w-5 h-5 text-success-500" />
														<h3 className="font-semibold">Today's Schedule</h3>
													</div>
													<div className="text-sm text-neutral-600">
														<p>3 meetings • 2 deadlines</p>
													</div>
												</div>
											</div>
											<div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
												<h3 className="font-semibold mb-4">Recent Activity</h3>
												<div className="space-y-3">
													<div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
														<Brain className="w-5 h-5 text-primary-500" />
														<div>
															<p className="font-medium text-sm">
																AI Summary Generated
															</p>
															<p className="text-xs text-neutral-600">
																Team standup meeting
															</p>
														</div>
													</div>
													<div className="flex items-center gap-3 p-3 bg-success-50 rounded-lg">
														<Video className="w-5 h-5 text-success-500" />
														<div>
															<p className="font-medium text-sm">
																Video Call Completed
															</p>
															<p className="text-xs text-neutral-600">
																Project review with stakeholders
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}

									{activeDemo === "video" && (
										<div className="h-full flex items-center justify-center">
											<div className="bg-neutral-900 rounded-2xl w-full max-w-2xl aspect-video relative overflow-hidden">
												<div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/30"></div>
												<div className="absolute inset-0 flex items-center justify-center text-white">
													<div className="text-center">
														<Video className="w-16 h-16 mx-auto mb-4" />
														<h3 className="text-xl font-semibold mb-2">
															HD Video Call
														</h3>
														<p className="text-sm opacity-75">
															Crystal clear quality • AI noise cancellation
														</p>
													</div>
												</div>
												<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
													<div className="flex gap-2">
														<button className="bg-white/20 p-2 rounded-full">
															<Phone className="w-4 h-4" />
														</button>
														<button className="bg-white/20 p-2 rounded-full">
															<Video className="w-4 h-4" />
														</button>
														<button className="bg-error-500 p-2 rounded-full">
															<X className="w-4 h-4" />
														</button>
													</div>
													<div className="bg-white/20 px-3 py-1 rounded-full text-sm">
														4 participants
													</div>
												</div>
											</div>
										</div>
									)}

									{/* Add other demo views here */}
								</motion.div>
							</div>

							{/* Overlay CTA */}
							<div
								className="absolute inset-0 bg-primary-500/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
								onClick={handleOpenApp}
							>
								<div className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-sm">
									<ExternalLink className="w-12 h-12 text-primary-500 mx-auto mb-4" />
									<h3 className="text-xl font-semibold mb-2">Try It Live</h3>
									<p className="text-neutral-600 mb-4">
										Open the full MELP application
									</p>
									<Button className="w-full bg-primary-500 hover:bg-primary-600">
										Launch App
									</Button>
								</div>
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<motion.div
						className="text-center mt-8 space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
								onClick={handleOpenApp}
							>
								<div className="flex items-center gap-2">
									<ExternalLink className="w-5 h-5" />
									<span>Open Live App</span>
								</div>
							</Button>

							<Button
								size="lg"
								variant="outline"
								className="border-primary-500 text-primary-500 hover:bg-primary-50"
								onClick={handleOpenModal}
							>
								<div className="flex items-center gap-2">
									<Maximize className="w-5 h-5" />
									<span>Full Screen Demo</span>
								</div>
							</Button>
						</div>

						<p className="text-sm text-neutral-500">
							No credit card required • Access all features instantly
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Fullscreen Modal */}
			{isModalOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={handleCloseModal}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between p-4 border-b">
							<h3 className="text-lg font-semibold">MELP Live Demo</h3>
							<button
								onClick={handleCloseModal}
								className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
						</div>
						<div className="h-96 lg:h-[600px]">
							<iframe
								src="https://www.app.melp.us/spa/melp#/dashboard"
								className="w-full h-full"
								title="MELP Live Demo"
								sandbox="allow-same-origin allow-scripts allow-forms"
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
};

export default InteractiveDemoSection;

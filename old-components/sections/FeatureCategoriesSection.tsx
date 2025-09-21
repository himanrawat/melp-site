"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
	Video,
	MessageSquare,
	Brain,
	Users,
	Calendar,
	FileText,
	Globe,
	Zap,
	Phone,
	Share2,
	Lock,
	BarChart3,
	Mic,
	Monitor,
	Smartphone,
	CheckCircle,
	ArrowRight,
	Sparkles,
} from "lucide-react";

const FeatureCategoriesSection = () => {
	const [activeCategory, setActiveCategory] = useState("communication");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const categories = [
		{
			id: "communication",
			title: "Communication",
			description: "Connect with your team through multiple channels",
			icon: MessageSquare,
			color: "primary",
			features: [
				{
					icon: Video,
					title: "HD Video Calls",
					description:
						"Crystal clear video meetings with up to 1000 participants",
					highlights: ["4K Resolution", "Screen Sharing", "Recording"],
				},
				{
					icon: Phone,
					title: "Voice Calls",
					description: "High-quality audio calls with noise cancellation",
					highlights: [
						"AI Noise Reduction",
						"Echo Cancellation",
						"Call Recording",
					],
				},
				{
					icon: MessageSquare,
					title: "Team Messaging",
					description: "Real-time chat with rich formatting and reactions",
					highlights: ["File Sharing", "Message Threads", "Custom Emojis"],
				},
				{
					icon: Share2,
					title: "Screen Sharing",
					description: "Share your screen or specific applications seamlessly",
					highlights: [
						"Multi-Screen Support",
						"Remote Control",
						"Annotation Tools",
					],
				},
			],
		},
		{
			id: "ai",
			title: "AI-Powered",
			description: "Intelligent features that enhance productivity",
			icon: Brain,
			color: "primary",
			features: [
				{
					icon: Brain,
					title: "Meeting Summaries",
					description:
						"AI-generated summaries with key points and action items",
					highlights: [
						"Auto Transcription",
						"Action Items",
						"Decision Tracking",
					],
				},
				{
					icon: Globe,
					title: "Real-time Translation",
					description: "Break language barriers with instant translation",
					highlights: ["50+ Languages", "Live Subtitles", "Cultural Context"],
				},
				{
					icon: Mic,
					title: "Voice Commands",
					description: "Control meetings and features with voice commands",
					highlights: [
						"Natural Language",
						"Custom Commands",
						"Hands-free Control",
					],
				},
				{
					icon: BarChart3,
					title: "Analytics & Insights",
					description: "Get detailed analytics about team collaboration",
					highlights: [
						"Engagement Metrics",
						"Performance Insights",
						"Usage Reports",
					],
				},
			],
		},
		{
			id: "collaboration",
			title: "Collaboration",
			description: "Work together seamlessly across teams and projects",
			icon: Users,
			color: "success",
			features: [
				{
					icon: FileText,
					title: "Document Sharing",
					description: "Share and collaborate on documents in real-time",
					highlights: ["Live Editing", "Version Control", "Comment System"],
				},
				{
					icon: Users,
					title: "Team Workspaces",
					description: "Organized spaces for different teams and projects",
					highlights: ["Custom Channels", "Role Management", "Access Control"],
				},
				{
					icon: Calendar,
					title: "Smart Scheduling",
					description:
						"AI-powered scheduling that finds the best meeting times",
					highlights: [
						"Timezone Intelligence",
						"Calendar Integration",
						"Auto Booking",
					],
				},
				{
					icon: Lock,
					title: "Security & Privacy",
					description: "Enterprise-grade security for all your communications",
					highlights: [
						"End-to-End Encryption",
						"SSO Integration",
						"Compliance",
					],
				},
			],
		},
		{
			id: "productivity",
			title: "Productivity",
			description: "Tools and integrations that boost team efficiency",
			icon: Zap,
			color: "warning",
			features: [
				{
					icon: Monitor,
					title: "Multi-Platform",
					description: "Works seamlessly across all your devices",
					highlights: ["Desktop Apps", "Mobile Apps", "Web Browser"],
				},
				{
					icon: Smartphone,
					title: "Mobile First",
					description: "Full-featured mobile apps for on-the-go collaboration",
					highlights: [
						"Offline Mode",
						"Push Notifications",
						"Mobile Optimized",
					],
				},
				{
					icon: Zap,
					title: "Integrations",
					description: "Connect with your favorite tools and workflows",
					highlights: ["1000+ Integrations", "API Access", "Custom Webhooks"],
				},
				{
					icon: BarChart3,
					title: "Performance",
					description: "Lightning-fast performance with 99.9% uptime",
					highlights: ["Global CDN", "Real-time Sync", "Auto Scaling"],
				},
			],
		},
	];

	const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-200 hover:border-primary-200"
		>
			<div className="flex items-start gap-4">
				<div className="flex-shrink-0">
					<div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
						<feature.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
					</div>
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
						{feature.title}
					</h3>
					<p className="text-neutral-600 mb-4 leading-relaxed">
						{feature.description}
					</p>
					<div className="space-y-2">
						{feature.highlights.map((highlight: string, idx: number) => (
							<div key={idx} className="flex items-center gap-2">
								<CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
								<span className="text-sm text-neutral-600">{highlight}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Hover effect */}
			<motion.div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
		</motion.div>
	);

	const CategoryTab = ({
		category,
		isActive,
	}: {
		category: any;
		isActive: boolean;
	}) => (
		<motion.button
			onClick={() => setActiveCategory(category.id)}
			className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-left transition-all duration-300 ${
				isActive
					? "bg-primary-500 text-white shadow-lg"
					: "bg-white text-neutral-600 hover:bg-primary-50 border border-neutral-200"
			}`}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			<category.icon
				className={`w-6 h-6 ${isActive ? "text-white" : "text-primary-500"}`}
			/>
			<div>
				<h3
					className={`font-semibold ${
						isActive ? "text-white" : "text-neutral-900"
					}`}
				>
					{category.title}
				</h3>
				<p
					className={`text-sm ${
						isActive ? "text-primary-100" : "text-neutral-500"
					}`}
				>
					{category.description}
				</p>
			</div>
		</motion.button>
	);

	const activeCategData = categories.find((cat) => cat.id === activeCategory);

	return (
		<section
			ref={ref}
			className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-50/20"
		>
			{/* Background Elements */}
			<div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 mb-6">
						<Sparkles className="w-4 h-4 text-primary-500" />
						<span className="text-primary-700 font-medium text-sm">
							Feature Categories
						</span>
					</div>

					<h2 className="text-4xl lg:text-6xl font-bold mb-6">
						<span className="text-neutral-900">Everything you need</span>
						<br />
						<span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
							in one platform
						</span>
					</h2>

					<p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
						From basic communication to advanced AI features, MELP provides
						comprehensive tools for modern teams to collaborate effectively.
					</p>
				</motion.div>

				{/* Category Navigation */}
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{categories.map((category, index) => (
						<motion.div
							key={category.id}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<CategoryTab
								category={category}
								isActive={activeCategory === category.id}
							/>
						</motion.div>
					))}
				</motion.div>

				{/* Features Grid */}
				<motion.div
					key={activeCategory}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8"
				>
					{activeCategData?.features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} index={index} />
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold mb-4">
							Ready to explore all features?
						</h3>
						<p className="text-neutral-600 mb-6">
							Get hands-on experience with every feature in our live
							application.
						</p>
						<motion.button
							className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() =>
								window.open(
									"https://www.app.melp.us/spa/melp#/dashboard",
									"_blank"
								)
							}
						>
							<span>Try All Features</span>
							<ArrowRight className="w-5 h-5" />
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeatureCategoriesSection;

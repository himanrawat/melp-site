"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import {
	ExternalLink,
	ArrowRight,
	Play,
	Sparkles,
	CheckCircle,
	Clock,
	Users,
	Zap,
	Star,
	Globe,
} from "lucide-react";

const FeaturesCTASection = () => {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const benefits = [
		{ icon: Clock, text: "Set up in under 5 minutes" },
		{ icon: Users, text: "No limit on team size" },
		{ icon: Zap, text: "All features included" },
		{ icon: Star, text: "99.9% uptime guarantee" },
	];

	const handleTryApp = () => {
		// Open the MELP application in a new tab
		window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank");
	};

	const handleWatchDemo = () => {
		// You can implement a demo video modal or redirect to a demo page
		console.log("Watch demo clicked");
	};

	return (
		<section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
				{/* Animated background elements */}
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				></div>

				{/* Floating particles */}
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-white/20 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.2, 0.8, 0.2],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8 }}
					>
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
							<Sparkles className="w-4 h-4 text-white" />
							<span className="text-white font-medium text-sm">
								Ready to get started?
							</span>
						</div>

						{/* Main Heading */}
						<h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
							Experience the Future of
							<br />
							<span className="bg-gradient-to-r from-white to-neutral-100 bg-clip-text text-transparent">
								Team Collaboration
							</span>
						</h2>

						{/* Subtitle */}
						<p className="text-xl text-neutral-100 mb-12 leading-relaxed max-w-2xl mx-auto">
							Join thousands of teams already using MELP to revolutionize how
							they communicate, collaborate, and achieve their goals together.
						</p>
					</motion.div>

					{/* Benefits Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
							>
								<benefit.icon className="w-8 h-8 text-white mb-3 mx-auto" />
								<p className="text-white font-medium text-sm">{benefit.text}</p>
							</motion.div>
						))}
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-6 justify-center items-center"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{/* Primary CTA */}
						<motion.div
							onHoverStart={() => setIsHovered(true)}
							onHoverEnd={() => setIsHovered(false)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size="lg"
								className="bg-white text-neutral-900 hover:bg-neutral-50 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
								onClick={handleTryApp}
							>
								<div className="flex items-center gap-3 relative z-10">
									<ExternalLink className="w-6 h-6" />
									<span className="text-lg">Try MELP Live</span>
									<motion.div
										animate={isHovered ? { x: 4 } : { x: 0 }}
										transition={{ duration: 0.2 }}
									>
										<ArrowRight className="w-5 h-5" />
									</motion.div>
								</div>

								{/* Shimmer effect */}
								<motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
							</Button>
						</motion.div>

						{/* Secondary CTA */}
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
								onClick={handleWatchDemo}
							>
								<div className="flex items-center gap-3">
									<Play className="w-5 h-5" />
									<span className="text-lg">Watch Demo</span>
								</div>
							</Button>
						</motion.div>
					</motion.div>

					{/* Trust Indicators */}
					<motion.div
						className="mt-16 pt-8 border-t border-white/20"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-white/80">
							<div className="flex items-center gap-2">
								<Users className="w-5 h-5" />
								<span className="font-medium">10M+ Active Users</span>
							</div>
							<div className="flex items-center gap-2">
								<Globe className="w-5 h-5" />
								<span className="font-medium">Available in 50+ Countries</span>
							</div>
							<div className="flex items-center gap-2">
								<Star className="w-5 h-5" />
								<span className="font-medium">4.9/5 User Rating</span>
							</div>
						</div>
					</motion.div>

					{/* Bottom Note */}
					<motion.div
						className="mt-8"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						<p className="text-neutral-100 text-sm">
							🔒 Enterprise-grade security • ⚡ Instant setup • 🎯 No credit
							card required
						</p>
					</motion.div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
		</section>
	);
};

export default FeaturesCTASection;

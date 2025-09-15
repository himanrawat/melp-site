"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
	return (
		<div className="relative py-20 lg:py-32">
			{/* Background Gradient - More solid */}
			<div className="absolute inset-0 bg-primary-500" />
			<div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-500/95 to-primary-700/90" />

			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="w-full h-full bg-white bg-repeat"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			{/* Floating Elements */}
			<div className="absolute top-20 left-10 opacity-20">
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Users className="w-16 h-16 text-white" />
				</motion.div>
			</div>

			<div className="absolute top-32 right-16 opacity-20">
				<motion.div
					animate={{
						y: [0, 15, 0],
						rotate: [0, -5, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
				>
					<Zap className="w-12 h-12 text-white" />
				</motion.div>
			</div>

			<div className="absolute bottom-20 left-20 opacity-20">
				<motion.div
					animate={{
						y: [0, -25, 0],
						x: [0, 10, 0],
					}}
					transition={{
						duration: 7,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
				>
					<Sparkles className="w-14 h-14 text-white" />
				</motion.div>
			</div>

			<div className="max-w-[1920px] mx-auto relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Sparkles Icon */}
						<div className="flex justify-center mb-8">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
							>
								<Sparkles className="w-10 h-10 text-white" />
							</motion.div>
						</div>

						{/* Headline */}
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							viewport={{ once: true }}
							className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
						>
							Ready to transform your
							<br />
							team collaboration?
						</motion.h2>

						{/* Subtitle */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
						>
							Join millions of teams already using MELP to collaborate better,
							communicate clearer, and achieve more together.
						</motion.p>

						{/* Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
							className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 px-8 py-4 text-lg font-semibold shadow-xl"
								>
									<div className="flex items-center gap-3">
										<span>Start Free Trial</span>
										<motion.div
											whileHover={{ x: 4 }}
											transition={{ duration: 0.3 }}
										>
											<ArrowRight className="w-5 h-5" />
										</motion.div>
									</div>
								</Button>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
								>
									Watch Demo
								</Button>
							</motion.div>
						</motion.div>

						{/* Trust Indicators */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white"
						>
							<div className="flex items-center gap-2">
								<div className="flex -space-x-2">
									{["/user1.jpg", "/user2.jpg", "/user3.jpg"].map(
										(src, index) => (
											<motion.div
												key={index}
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
												viewport={{ once: true }}
											>
												<Image
													src={src}
													alt="User"
													width={32}
													height={32}
													className="w-8 h-8 rounded-full border-2 border-white object-cover"
												/>
											</motion.div>
										)
									)}
								</div>
								<span className="text-sm font-medium text-white drop-shadow-sm">
									10M+ happy users
								</span>
							</div>

							<div className="hidden sm:block w-px h-6 bg-white/40" />

							<div className="flex items-center gap-2">
								<div className="flex gap-1">
									{[...Array(5)].map((_, i) => (
										<motion.div
											key={i}
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
											viewport={{ once: true }}
										>
											<Sparkles className="w-4 h-4 text-yellow-300 fill-current drop-shadow-sm" />
										</motion.div>
									))}
								</div>
								<span className="text-sm font-medium text-white drop-shadow-sm">
									4.9/5 rating
								</span>
							</div>

							<div className="hidden sm:block w-px h-6 bg-white/40" />

							<div className="text-sm font-medium text-white drop-shadow-sm">
								Free 14-day trial • No credit card required
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Bottom Wave */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="w-full h-12 lg:h-20"
				>
					<path
						d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
						fill="white"
						opacity="0.1"
					/>
				</svg>
			</div>
		</div>
	);
};

export default CTASection;

"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
	return (
		<div
			className="relative py-20 lg:py-32 overflow-hidden bg-neutral-50"
			style={{
				background: `
					radial-gradient(ellipse 250% 300% at 50% 50%, 
						rgb(23, 23, 23) 0%,         /* neutral-900 center - darkest */
						rgb(38, 38, 38) 8%,         /* neutral-800 */
						rgb(64, 64, 64) 15%,        /* neutral-700 */
						rgb(82, 82, 82) 22%,        /* neutral-600 */
						rgb(115, 115, 115) 28%,     /* neutral-500 */
						rgb(163, 163, 163) 35%,     /* neutral-400 */
						rgb(212, 212, 212) 42%,     /* neutral-300 */
						rgb(229, 229, 229) 50%,     /* neutral-200 */
						rgb(245, 245, 245) 58%,     /* neutral-100 */
						rgb(250, 250, 250) 70%,     /* neutral-50 */
						rgb(250, 250, 250) 85%,     /* neutral-50 */
						rgb(250, 250, 250) 100%     /* neutral-50 at edges */
					)
				`,
			}}
		>
			{/* Floating Elements - Smoother animations */}
			<div className="absolute top-20 left-10 opacity-15">
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 3, 0],
						scale: [1, 1.05, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Users className="w-16 h-16 text-white" />
				</motion.div>
			</div>

			<div className="absolute top-32 right-16 opacity-15">
				<motion.div
					animate={{
						y: [0, 15, 0],
						rotate: [0, -3, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.5,
					}}
				>
					<Zap className="w-12 h-12 text-white" />
				</motion.div>
			</div>

			<div className="absolute bottom-20 left-20 opacity-15">
				<motion.div
					animate={{
						y: [0, -25, 0],
						x: [0, 8, 0],
						rotate: [0, 5, 0],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 3,
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
						{/* Sparkles Icon - Enhanced animation */}
						<div className="flex justify-center mb-8">
							<motion.div
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								transition={{
									duration: 0.8,
									delay: 0.2,
									type: "spring",
									stiffness: 100,
									damping: 10,
								}}
								viewport={{ once: true }}
								className="w-20 h-20 bg-primary-500/20 border border-primary-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
							>
								<motion.div
									animate={{ rotate: [0, 360] }}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									<Sparkles className="w-10 h-10 text-primary-500" />
								</motion.div>
							</motion.div>
						</div>

						{/* Headline - Staggered animation */}
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.3,
								type: "spring",
								stiffness: 80,
								damping: 20,
							}}
							viewport={{ once: true }}
							className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
						>
							<motion.span
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								Ready to transform your
							</motion.span>
							<br />
							<motion.span
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
							>
								team collaboration?
							</motion.span>
						</motion.h2>

						{/* Subtitle - Spring animation */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.8,
								type: "spring",
								stiffness: 60,
							}}
							viewport={{ once: true }}
							className="text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
						>
							Join millions of teams already using MELP to collaborate better,
							communicate clearer, and achieve more together.
						</motion.p>

						{/* Buttons - Enhanced interactions */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 1,
								type: "spring",
								stiffness: 80,
							}}
							viewport={{ once: true }}
							className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
						>
							<motion.div
								whileHover={{
									scale: 1.05,
									y: -2,
									boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<Button
									size="lg"
									className="bg-primary-500 text-white hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300"
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
								whileHover={{
									scale: 1.05,
									y: -2,
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
								>
									Watch Demo
								</Button>
							</motion.div>
						</motion.div>

						{/* Trust Indicators - Staggered entrance */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 1.2,
								type: "spring",
								stiffness: 80,
							}}
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
												transition={{
													duration: 0.4,
													delay: 1.3 + index * 0.1,
													type: "spring",
													stiffness: 200,
												}}
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
											initial={{ scale: 0, rotate: -180 }}
											whileInView={{ scale: 1, rotate: 0 }}
											transition={{
												duration: 0.3,
												delay: 1.4 + i * 0.05,
												type: "spring",
												stiffness: 300,
											}}
											viewport={{ once: true }}
										>
											<Sparkles className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" />
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
		</div>
	);
};

export default CTASection;

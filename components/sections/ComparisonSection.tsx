"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
	CheckCircle,
	X,
	Zap,
	DollarSign,
	Wrench,
	Download,
	Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComparisonFeature {
	icon: React.ElementType;
	feature: string;
	melp: boolean;
	others: boolean;
}

const ComparisonSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const features: ComparisonFeature[] = [
		{
			icon: Zap,
			feature: "1-Click Setup",
			melp: true,
			others: false,
		},
		{
			icon: Zap,
			feature: "Fast Launch",
			melp: true,
			others: false,
		},
		{
			icon: DollarSign,
			feature: "No Extra Fees",
			melp: true,
			others: false,
		},
		{
			icon: Wrench,
			feature: "Full Customization",
			melp: true,
			others: false,
		},
		{
			icon: Download,
			feature: "Updates Included",
			melp: true,
			others: false,
		},
	];

	const handleSwitchToMelp = () => {
		window.open("https://www.app.melp.us/spa/melp#/dashboard", "_blank");
	};

	return (
		<section
			ref={ref}
			className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50 overflow-hidden"
		>
			<div className="container mx-auto px-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 mb-6">
							<Sparkles className="w-4 h-4 text-primary-500" />
							<span className="text-primary-700 font-medium text-sm">
								Why MELP stands out
							</span>
						</div>

						<h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
							The better way to
							<br />
							<span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
								launch and grow.
							</span>
						</h2>

						<p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
							All-in-one setup, no hidden fees, and smooth customization —
							everything you need to launch faster.
						</p>
					</motion.div>

					{/* Comparison Table */}
					<motion.div
						className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{/* Left Content - CTA */}
						<div className="space-y-8 order-2 lg:order-1 flex flex-col justify-center">
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								animate={
									isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
								}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								<Button
									size="lg"
									onClick={handleSwitchToMelp}
									className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-4 rounded-2xl font-bold"
								>
									<div className="flex items-center gap-3">
										<span className="text-lg">Switch to MELP</span>
										<motion.div
											className="transform group-hover:translate-x-1 transition-transform"
											whileHover={{ x: 4 }}
										>
											→
										</motion.div>
									</div>
								</Button>
							</motion.div>

							{/* Trust Indicators */}
							<motion.div
								className="space-y-4"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<div className="flex items-center gap-3 text-neutral-600">
									<CheckCircle className="w-5 h-5 text-success-500" />
									<span>Used by 10M+ teams worldwide</span>
								</div>
								<div className="flex items-center gap-3 text-neutral-600">
									<CheckCircle className="w-5 h-5 text-success-500" />
									<span>99.9% uptime guarantee</span>
								</div>
								<div className="flex items-center gap-3 text-neutral-600">
									<CheckCircle className="w-5 h-5 text-success-500" />
									<span>24/7 customer support</span>
								</div>
							</motion.div>
						</div>

						{/* Right Content - Comparison Cards */}
						<div className="order-1 lg:order-2">
							<div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border-2 border-neutral-100 overflow-hidden relative">
								{/* Header Row */}
								<div className="grid grid-cols-3 gap-4 mb-6">
									<div className="flex items-center justify-center">
										<span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
											Features
										</span>
									</div>
									<div className="flex items-center justify-center bg-primary-500 rounded-2xl py-3 relative">
										<div className="flex items-center justify-center gap-2 text-white font-bold">
											<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
												<span className="text-primary-500 text-sm font-bold">
													M
												</span>
											</div>
											<span>MELP</span>
										</div>
										{/* Decorative element */}
										<div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full opacity-50"></div>
									</div>
									<div className="flex items-center justify-center bg-neutral-100 rounded-2xl py-3">
										<span className="text-neutral-700 font-semibold">
											Others
										</span>
									</div>
								</div>

								{/* Feature Rows */}
								<div className="space-y-3">
									{features.map((feature, index) => (
										<motion.div
											key={feature.feature}
											className="grid grid-cols-3 gap-4 items-center py-3 px-3 rounded-xl hover:bg-neutral-50 transition-colors"
											initial={{ opacity: 0, x: 20 }}
											animate={
												isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
											}
											transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
										>
											{/* Feature Name */}
											<div className="flex items-center gap-2 justify-start">
												<feature.icon className="w-4 h-4 text-neutral-600 flex-shrink-0" />
												<span className="font-medium text-neutral-800 text-sm leading-tight">
													{feature.feature}
												</span>
											</div>

											{/* MELP Column */}
											<div className="flex items-center justify-center">
												{feature.melp ? (
													<motion.div
														whileHover={{ scale: 1.1 }}
														className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full"
													>
														<CheckCircle className="w-5 h-5 text-primary-500" />
													</motion.div>
												) : (
													<div className="inline-flex items-center justify-center w-8 h-8 bg-neutral-100 rounded-full">
														<X className="w-4 h-4 text-neutral-400" />
													</div>
												)}
											</div>

											{/* Others Column */}
											<div className="flex items-center justify-center">
												{feature.others ? (
													<div className="inline-flex items-center justify-center w-8 h-8 bg-success-100 rounded-full">
														<CheckCircle className="w-5 h-5 text-success-500" />
													</div>
												) : (
													<motion.div
														whileHover={{ scale: 1.1 }}
														className="inline-flex items-center justify-center w-8 h-8 bg-neutral-100 rounded-full"
													>
														<X className="w-4 h-4 text-neutral-400" />
													</motion.div>
												)}
											</div>
										</motion.div>
									))}
								</div>

								{/* Background Pattern */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-3xl"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-400/5 to-transparent rounded-full blur-2xl"></div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ComparisonSection;

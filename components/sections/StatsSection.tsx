"use client";

import React from "react";
import { motion } from "motion/react";
import { Users, Video, FileText, Globe, Zap, Shield } from "lucide-react";

interface Stat {
	id: number;
	icon: React.ElementType;
	value: string;
	label: string;
	description: string;
}

const stats: Stat[] = [
	{
		id: 1,
		icon: Users,
		value: "10M+",
		label: "Active Users",
		description: "Teams collaborating daily",
	},
	{
		id: 2,
		icon: Video,
		value: "500M+",
		label: "Meetings Hosted",
		description: "Seamless video conferences",
	},
	{
		id: 3,
		icon: FileText,
		value: "2.5B+",
		label: "Files Shared",
		description: "Documents and assets",
	},
	{
		id: 4,
		icon: Globe,
		value: "150+",
		label: "Countries",
		description: "Global reach and support",
	},
	{
		id: 5,
		icon: Zap,
		value: "99.9%",
		label: "Uptime",
		description: "Reliable service",
	},
	{
		id: 6,
		icon: Shield,
		value: "100%",
		label: "Secure",
		description: "Enterprise-grade security",
	},
];

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.3 },
			}}
			className="relative group"
		>
			<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
				{/* Background Gradient on Hover */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Content */}
				<div className="relative z-10">
					{/* Icon */}
					<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-500 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
						<stat.icon className="w-8 h-8 text-white" />
					</div>

					{/* Value */}
					<motion.div
						initial={{ scale: 0.8 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
						viewport={{ once: true }}
						className="mb-2"
					>
						<h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-1">
							{stat.value}
						</h3>
					</motion.div>

					{/* Label */}
					<h4 className="text-lg font-semibold text-neutral-800 mb-2">
						{stat.label}
					</h4>

					{/* Description */}
					<p className="text-sm text-neutral-600">{stat.description}</p>
				</div>
			</div>
		</motion.div>
	);
};

const StatsSection = () => {
	return (
		<div className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-white">
			{/* Background Decoration */}
			<div className="absolute inset-0">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-20" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20" />
			</div>

			<div className="max-w-[1920px] mx-auto relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="bg-primary-200 w-fit p-3 rounded-xl mb-8 flex items-center gap-3 mx-auto border border-primary-300">
							<div className="w-5 h-5 rounded-full border-2 border-primary-500 bg-transparent flex items-center justify-center">
								<div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-pulse" />
							</div>
							<span className="text-primary-700 font-medium text-sm">
								By the Numbers
							</span>
						</div>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6"
					>
						Powering collaboration
						<br />
						<span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
							at global scale
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
					>
						Join millions of users who trust MELP for their daily collaboration
						needs
					</motion.p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<StatCard key={stat.id} stat={stat} index={index} />
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-8 rounded-3xl shadow-2xl shadow-neutral-900/25 border-2 border-neutral-700">
						<h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
							Ready to join the revolution?
						</h3>
						<p className="text-white mb-6 text-lg">
							Start collaborating with your team today
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg"
						>
							Get Started Free
						</motion.button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default StatsSection;

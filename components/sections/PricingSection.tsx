"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Star, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
	text: string;
	included: boolean;
}

interface PricingPlan {
	id: string;
	name: string;
	description: string;
	price: {
		monthly: number;
		yearly: number;
	};
	features: PricingFeature[];
	popular?: boolean;
	buttonText: string;
	buttonVariant: "default" | "outline";
}

const pricingPlans: PricingPlan[] = [
	{
		id: "free",
		name: "Free",
		description: "Perfect for small teams getting started",
		price: {
			monthly: 0,
			yearly: 0,
		},
		features: [
			{ text: "Up to 5 team members", included: true },
			{ text: "100 minutes of video calls per month", included: true },
			{ text: "5GB file storage", included: true },
			{ text: "Basic AI meeting summaries", included: true },
			{ text: "Email support", included: true },
			{ text: "Advanced analytics", included: false },
			{ text: "Custom integrations", included: false },
			{ text: "Priority support", included: false },
		],
		buttonText: "Get Started Free",
		buttonVariant: "outline",
	},
	{
		id: "pro",
		name: "Pro",
		description: "Best for growing teams and businesses",
		price: {
			monthly: 12,
			yearly: 120,
		},
		features: [
			{ text: "Up to 25 team members", included: true },
			{ text: "Unlimited video calls", included: true },
			{ text: "100GB file storage", included: true },
			{ text: "Advanced AI insights", included: true },
			{ text: "Real-time collaboration", included: true },
			{ text: "Basic analytics", included: true },
			{ text: "Email & chat support", included: true },
			{ text: "Custom branding", included: false },
		],
		popular: true,
		buttonText: "Start Pro Trial",
		buttonVariant: "default",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "For large organizations with advanced needs",
		price: {
			monthly: 25,
			yearly: 250,
		},
		features: [
			{ text: "Unlimited team members", included: true },
			{ text: "Unlimited everything", included: true },
			{ text: "Unlimited file storage", included: true },
			{ text: "Advanced AI & automation", included: true },
			{ text: "Enterprise security", included: true },
			{ text: "Advanced analytics", included: true },
			{ text: "Custom integrations", included: true },
			{ text: "24/7 priority support", included: true },
		],
		buttonText: "Contact Sales",
		buttonVariant: "outline",
	},
];

const PricingCard = ({
	plan,
	index,
	isYearly,
}: {
	plan: PricingPlan;
	index: number;
	isYearly: boolean;
}) => {
	const monthlyPrice = isYearly ? plan.price.yearly / 12 : plan.price.monthly;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
		>
			{/* Popular Badge */}
			{plan.popular && (
				<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
					<Badge
						variant="primary"
						className="bg-primary-500 text-white px-4 py-1 flex items-center gap-2"
					>
						<Star className="w-4 h-4 fill-current" />
						Most Popular
					</Badge>
				</div>
			)}

			<div
				className={`bg-white p-8 rounded-3xl border-2 transition-all duration-300 h-full flex flex-col ${
					plan.popular
						? "border-primary-500 shadow-2xl shadow-primary-500/25"
						: "border-primary-200/50 shadow-lg hover:shadow-xl hover:border-primary-300"
				}`}
			>
				{/* Header */}
				<div className="text-center mb-8">
					<h3 className="text-2xl font-bold text-neutral-900 mb-2">
						{plan.name}
					</h3>
					<p className="text-neutral-600">{plan.description}</p>
				</div>

				{/* Price */}
				<div className="text-center mb-8">
					<div className="flex items-baseline justify-center gap-2 mb-2">
						<span className="text-5xl font-bold text-neutral-900">
							${Math.round(monthlyPrice)}
						</span>
						<span className="text-neutral-600">/month</span>
					</div>
					{isYearly && plan.price.yearly > 0 && (
						<p className="text-sm text-green-600 font-medium">
							Save ${plan.price.monthly * 12 - plan.price.yearly} per year
						</p>
					)}
					{plan.price.monthly === 0 && (
						<p className="text-sm text-neutral-600">No credit card required</p>
					)}
				</div>

				{/* Features */}
				<div className="flex-grow mb-8">
					<ul className="space-y-4">
						{plan.features.map((feature, featureIndex) => (
							<motion.li
								key={featureIndex}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.4,
									delay: index * 0.1 + featureIndex * 0.05,
								}}
								viewport={{ once: true }}
								className="flex items-center gap-3"
							>
								<div
									className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
										feature.included
											? "bg-green-100 text-green-600"
											: "bg-neutral-100 text-neutral-400"
									}`}
								>
									<Check className="w-3 h-3" />
								</div>
								<span
									className={
										feature.included ? "text-neutral-700" : "text-neutral-400"
									}
								>
									{feature.text}
								</span>
							</motion.li>
						))}
					</ul>
				</div>

				{/* Button */}
				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
					<Button
						variant={plan.buttonVariant}
						className={`w-full py-4 text-lg font-semibold ${
							plan.popular
								? "bg-primary-500 hover:bg-primary-600 text-white"
								: plan.buttonVariant === "outline"
								? "border-primary-500 text-primary-500 hover:bg-primary-50"
								: ""
						}`}
					>
						<div className="flex items-center justify-center gap-2">
							{plan.buttonText}
							{plan.popular && <Zap className="w-4 h-4" />}
							{plan.id === "enterprise" && <ArrowRight className="w-4 h-4" />}
						</div>
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
};

const PricingSection = () => {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<div className="relative py-20 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="w-full h-full bg-primary-500/5 bg-repeat"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE4136' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
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
						<Badge
							variant="primary"
							className="mb-6 border-primary-300 text-primary-700 bg-primary-100"
						>
							Pricing Plans
						</Badge>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6"
					>
						Choose the perfect plan
						<br />
						<span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
							for your team
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8"
					>
						Start free and scale as you grow. All plans include our core
						collaboration features.
					</motion.p>

					{/* Billing Toggle */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="flex items-center justify-center gap-4 mb-12"
					>
						<span
							className={`font-medium ${
								!isYearly ? "text-neutral-900" : "text-neutral-600"
							}`}
						>
							Monthly
						</span>
						<button
							onClick={() => setIsYearly(!isYearly)}
							className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
								isYearly ? "bg-primary-500" : "bg-neutral-300"
							}`}
						>
							<motion.div
								className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm"
								animate={{ x: isYearly ? 28 : 0 }}
								transition={{ duration: 0.3 }}
							/>
						</button>
						<span
							className={`font-medium ${
								isYearly ? "text-neutral-900" : "text-neutral-600"
							}`}
						>
							Yearly
						</span>
						{isYearly && (
							<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
								Save 20%
							</span>
						)}
					</motion.div>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{pricingPlans.map((plan, index) => (
						<PricingCard
							key={plan.id}
							plan={plan}
							index={index}
							isYearly={isYearly}
						/>
					))}
				</div>

				{/* FAQ or Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<p className="text-neutral-600 mb-4">
						All plans include 14-day free trial • No setup fees • Cancel anytime
					</p>
					<p className="text-sm text-neutral-500">
						Need a custom solution?{" "}
						<a
							href="/contact"
							className="text-primary-500 hover:text-primary-600 font-medium"
						>
							Contact our sales team
						</a>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default PricingSection;

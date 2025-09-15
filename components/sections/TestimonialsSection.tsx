"use client";

import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	company: string;
	avatar: string;
	content: string;
	rating: number;
	companyLogo?: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Product Manager",
		company: "TechFlow Inc",
		avatar: "/user1.jpg",
		content:
			"MELP has revolutionized how our distributed team collaborates. The AI-powered insights save us hours of meeting prep time, and the seamless file sharing keeps everyone on the same page.",
		rating: 5,
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Engineering Lead",
		company: "InnovateNow",
		avatar: "/user2.jpg",
		content:
			"The video quality and real-time collaboration features are outstanding. We've increased our team productivity by 40% since switching to MELP. It's everything we needed in one platform.",
		rating: 5,
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Design Director",
		company: "CreativeSpace",
		avatar: "/user3.jpg",
		content:
			"As a design team working across time zones, MELP's global collaboration tools are game-changing. The AI summaries help us stay aligned without endless status meetings.",
		rating: 5,
	},
];

const companyLogos = [
	{
		name: "TechFlow",
		fontFamily: "font-mono",
		color: "text-slate-700",
		weight: "font-bold",
	},
	{
		name: "InnovateNow",
		fontFamily: "font-serif",
		color: "text-blue-600",
		weight: "font-semibold",
	},
	{
		name: "CreativeSpace",
		fontFamily: "font-sans",
		color: "text-red-500",
		weight: "font-extrabold",
	},
	{
		name: "GlobalTech",
		fontFamily: "font-mono",
		color: "text-emerald-600",
		weight: "font-bold",
	},
	{
		name: "CloudSync",
		fontFamily: "font-serif",
		color: "text-purple-600",
		weight: "font-semibold",
	},
	{
		name: "DataFlow",
		fontFamily: "font-sans",
		color: "text-orange-500",
		weight: "font-bold",
	},
];

const TestimonialCard = ({
	testimonial,
	index,
}: {
	testimonial: Testimonial;
	index: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="relative"
		>
			<div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-200/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
				{/* Quote Icon */}
				<div className="flex items-center justify-between mb-6">
					<Quote className="w-8 h-8 text-primary-500 opacity-50" />
					<div className="flex gap-1">
						{[...Array(testimonial.rating)].map((_, i) => (
							<Star
								key={i}
								className="w-4 h-4 fill-primary-500 text-primary-500"
							/>
						))}
					</div>
				</div>

				{/* Content */}
				<p className="text-neutral-700 text-lg leading-relaxed mb-6 flex-grow">
					&ldquo;{testimonial.content}&rdquo;
				</p>

				{/* Author */}
				<div className="flex items-center gap-4">
					<Image
						src={testimonial.avatar}
						alt={testimonial.name}
						width={56}
						height={56}
						className="rounded-full object-cover"
					/>
					<div>
						<h4 className="font-semibold text-neutral-900">
							{testimonial.name}
						</h4>
						<p className="text-sm text-neutral-600">{testimonial.role}</p>
						<p className="text-sm text-primary-600 font-medium">
							{testimonial.company}
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const TestimonialsSection = () => {
	return (
		<div className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50/50 via-white to-primary-100/30">
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
							Customer Stories
						</Badge>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6"
					>
						Loved by teams
						<br />
						<span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
							around the world
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
					>
						See how teams are transforming their collaboration experience with
						MELP
					</motion.p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.id}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</div>

				{/* Company Logos */}
				<div className="text-center">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-neutral-600 mb-8 font-medium"
					>
						Trusted by innovative companies worldwide
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70"
					>
						{companyLogos.map((company, index) => (
							<motion.div
								key={company.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="transition-all duration-300 hover:opacity-100"
							>
								<span
									className={`text-lg lg:text-xl ${company.fontFamily} ${company.color} ${company.weight} tracking-wide hover:scale-105 transition-transform duration-200`}
								>
									{company.name}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;

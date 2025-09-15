"use client";
import React from "react";
import {
	VideoCallIcon,
	AudioCallIcon,
	MessagingIcon,
	DriveIcon,
	AISummaryIcon,
	GroupIcon,
	TeamsIcon,
	AppointmentIcon,
} from "@/components/ui/AnimatedIcons";
import Image from "next/image";
import folder from "@/public/folder.svg";
import paperclip from "@/public/paper_clip.webp";
import FolderCard from "@/components/ui/FolderCard";

import FeaturesSection from "@/components/ui/features-section";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "motion/react";
import Footer2 from "@/components/sections/Footer2";

// Floating animation component
const FloatingElement = ({
	children,
	delay = 0,
	amplitude = 8,
	duration = 4,
	className = "",
}: {
	children: React.ReactNode;
	delay?: number;
	amplitude?: number;
	duration?: number;
	className?: string;
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				y: [0, -amplitude, 0, amplitude, 0],
			}}
			transition={{
				opacity: { duration: 0.6, delay },
				y: {
					duration,
					repeat: Infinity,
					ease: "easeInOut",
					delay,
				},
			}}
		>
			{children}
		</motion.div>
	);
};

// Animated icon component
const AnimatedIcon = ({
	children,
	delay = 0,
	direction = "left",
	className = "",
}: {
	children: React.ReactNode;
	delay?: number;
	direction?: "left" | "right";
	className?: string;
}) => {
	const xOffset = direction === "left" ? -30 : 30;

	return (
		<motion.div
			className={`${className} opacity-0`}
			initial={{
				opacity: 0,
				scale: 0.8,
				x: xOffset,
				y: -20,
			}}
			animate={{
				opacity: 1,
				scale: 1,
				x: 0,
				y: 0,
			}}
			transition={{
				duration: 0.8,
				delay: 0.6 + delay,
				ease: "easeOut",
			}}
		>
			<FloatingElement delay={delay + 1} amplitude={7} duration={4.5}>
				{children}
			</FloatingElement>
		</motion.div>
	);
};

// Interactive button component
const InteractiveButton = ({
	children,
	variant = "default",
	size = "lg",
	className = "",
	onClick,
	shimmer = false,
}: {
	children: React.ReactNode;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size?: "default" | "sm" | "lg" | "icon";
	className?: string;
	onClick?: () => void;
	shimmer?: boolean;
}) => {
	const controls = useAnimation();

	const handleHover = () => {
		controls.start({
			scale: 1.05,
			transition: { duration: 0.2 },
		});
	};

	const handleHoverEnd = () => {
		controls.start({
			scale: 1,
			transition: { duration: 0.2 },
		});
	};

	const handleTapStart = () => {
		controls.start({
			scale: 0.98,
			transition: { duration: 0.1 },
		});
	};

	const handleTap = () => {
		controls.start({
			scale: 1.05,
			transition: { duration: 0.1 },
		});
	};

	return (
		<motion.div
			animate={controls}
			onHoverStart={handleHover}
			onHoverEnd={handleHoverEnd}
			onTapStart={handleTapStart}
			onTap={handleTap}
			className="transform-gpu"
		>
			<Button
				variant={variant}
				size={size}
				className={`group relative overflow-hidden ${className}`}
				onClick={onClick}
			>
				{children}
				{shimmer && (
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
						initial={{ x: "-100%" }}
						whileHover={{
							x: "200%",
							transition: { duration: 0.6 },
						}}
					/>
				)}
			</Button>
		</motion.div>
	);
};

export default function Home() {
	return (
		<>
			<div className="p-4 w-full rounded-4xl border-2 border-gray-200 bg-[radial-gradient(circle,rgb(230,230,230)_1px,transparent_1px)] bg-[length:10px_10px] overflow-hidden pt-20 bg-white transition-colors duration-300 relative max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
				{/* Animated Feature Icons - Scattered around hero section */}

				{/* Video Call Icon - Top Left */}
				<AnimatedIcon
					delay={0}
					direction="left"
					className="absolute top-[5%] left-[5%] rotate-12 hidden md:block"
				>
					<VideoCallIcon />
				</AnimatedIcon>

				{/* Audio Call Icon - Left Side */}
				<AnimatedIcon
					delay={0.15}
					direction="right"
					className="absolute top-[60%] left-[40%] -rotate-6 hidden md:block"
				>
					<AudioCallIcon />
				</AnimatedIcon>

				{/* Messaging Icon - Top Right */}
				<AnimatedIcon
					delay={0.3}
					direction="right"
					className="absolute top-[8%] right-[8%] rotate-3 hidden md:block"
				>
					<MessagingIcon />
				</AnimatedIcon>

				{/* Drive Icon - Right Side */}
				<AnimatedIcon
					delay={0.45}
					direction="left"
					className="absolute top-[55%] right-[5%] -rotate-12 hidden md:block"
				>
					<DriveIcon />
				</AnimatedIcon>

				{/* AI Summary Icon - Bottom Right */}
				<AnimatedIcon
					delay={0.6}
					direction="right"
					className="absolute bottom-[25%] right-[12%] rotate-8 hidden md:block"
				>
					<AISummaryIcon />
				</AnimatedIcon>

				{/* Group Icon - Far Right Mid */}
				<AnimatedIcon
					delay={0.75}
					direction="left"
					className="absolute top-[35%] right-[2%] -rotate-3 hidden md:block"
				>
					<GroupIcon />
				</AnimatedIcon>

				{/* Teams Icon - Top Left Mid */}
				<AnimatedIcon
					delay={0.9}
					direction="right"
					className="absolute top-[25%] left-[2%] rotate-6 hidden md:block"
				>
					<TeamsIcon />
				</AnimatedIcon>

				{/* Appointment Icon - Bottom Left */}
				<AnimatedIcon
					delay={1.05}
					direction="left"
					className="absolute bottom-[40%] left-[10%] -rotate-9 hidden md:block"
				>
					<AppointmentIcon />
				</AnimatedIcon>

				<div className="flex flex-col h-full justify-center relative z-10">
					{/* Badge */}
					<motion.div
						className="bg-primary-200 w-fit p-2 rounded-lg mb-4 flex items-center gap-2 mx-auto border border-primary-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className=" w-4 h-4 rounded-full border-primary-500 border-2 bg-transparent flex items-center justify-center">
							<motion.div
								className="w-2 h-2 bg-primary-500 rounded-full"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3, delay: 0.5 }}
							/>
						</div>
						<p className="text-neutral-800">
							New! AI that writes, polishes, and perfects for you
						</p>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						className="md:text-6xl text-2xl font-bold text-center md:w-4/6 w-full mx-auto text-neutral-900 transition-colors duration-300"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						Create together. Communicate clearly. Collaborate seamlessly.
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						className="md:text-lg text-sm font-medium leading-[23px] text-center tracking-tight max-w-2xl mx-auto w-[95%] mt-9 text-neutral-600 transition-colors duration-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						One platform that unites people, ideas, and workflows—anywhere,
						anytime.
					</motion.p>

					{/* Buttons Container */}
					<motion.div
						className="flex gap-6 justify-center items-center py-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<InteractiveButton
							variant="outline"
							className="border-primary-500 text-primary-500 bg-white hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
							onClick={() => {}}
						>
							<div className="flex items-center gap-2">
								<motion.div
									whileHover={{
										scale: [1, 1.1, 1],
										transition: { duration: 0.5, repeat: Infinity },
									}}
								>
									<Video className="w-4 h-4" />
								</motion.div>
								<span>Join A Meeting</span>
							</div>
						</InteractiveButton>

						<InteractiveButton
							variant="default"
							className="bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
							shimmer={true}
							onClick={() => {}}
						>
							<div className="flex items-center gap-2">
								<span>Get Started</span>
								<motion.div
									whileHover={{
										x: 4,
										transition: { duration: 0.3 },
									}}
								>
									<ArrowRight className="w-4 h-4" />
								</motion.div>
							</div>
						</InteractiveButton>
					</motion.div>
				</div>

				<div className="flex justify-between">
					<div className="mt-16 relative h-72 w-[554px] ml-auto">
						{/* Folder Container */}
						<motion.div
							className="absolute -bottom-[45%] -right-[4%] -rotate-12 z-10"
							initial={{
								opacity: 0,
								scale: 0.9,
								x: 50,
								y: 30,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								x: 0,
								y: 0,
							}}
							transition={{ duration: 1, delay: 1.2 }}
						>
							<FloatingElement delay={1.2} amplitude={8} duration={4}>
								<div className="relative w-fit">
									<Image src={folder} alt="folder" />
									<Image
										src={paperclip}
										alt="paperclip"
										className="absolute -top-8 left-8 w-20"
									/>
									<div className="flex flex-col gap-4 justify-start items-center absolute top-20 left-12 rounded-lg w-[19rem] h-1/2 overflow-hidden">
										<FolderCard
											shortName="SM"
											userName="Sam Miller"
											userMsg="Document shared"
										/>
										<FolderCard
											shortName="AJ"
											userName="Alice Johnson"
											userMsg="AI summary shared"
										/>
									</div>
								</div>
							</FloatingElement>
						</motion.div>

						{/* Meeting Card */}
						<motion.div
							className="absolute bottom-[0%] right-[62%] rotate-6"
							initial={{
								opacity: 0,
								scale: 0.9,
								x: -40,
								y: 25,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								x: 0,
								y: 0,
							}}
							transition={{ duration: 1, delay: 1.4 }}
						>
							<FloatingElement delay={1.4} amplitude={6} duration={3.5}>
								<div className="rounded-2xl w-fit overflow-hidden bg-white shadow-lg border border-gray-100 transition-colors duration-300">
									<h5 className="py-2 px-4 bg-primary-50 font-semibold text-neutral-700 border-b border-gray-100">
										Meeting
									</h5>
									<div className="p-4 border-b border-gray-50">
										<p className="text-gray-800">
											Meeting with <span className="font-bold">Sam Miller</span>
										</p>
										<p className="text-xs text-gray-500">
											08:30 | Discuss project updates
										</p>
									</div>
									<div className="p-4">
										<p className="text-gray-800">
											<span className="font-bold">Daily Work Report</span>
										</p>
										<p className="text-xs text-gray-500">14:00 | Group Call</p>
									</div>
								</div>
							</FloatingElement>
						</motion.div>
					</div>
				</div>
			</div>

			<FeaturesSection />
			<TestimonialsSection />
			<StatsSection />
			<PricingSection />
			<CTASection />
			{/* <Footer /> */}
			<Footer2 />
		</>
	);
}

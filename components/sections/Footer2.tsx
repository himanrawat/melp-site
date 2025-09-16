"use client";

import React from "react";
import { motion } from "motion/react";
// import FloatingElement from "@/ui/FloatingElement";
import Image from "next/image";
import folder from "@/public/folder.svg";
import paperclip from "@/public/paper_clip.webp";
import logo from "@/public/logo.svg";
import Link from "next/link";
import SocialMedia from "@/components/ui/SocialMedia";

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
const Footer2 = () => {
	return (
		<footer className="mt-12 p-4 w-full rounded-4xl border-2 border-gray-200 bg-[radial-gradient(circle,rgb(230,230,230)_1px,transparent_1px)] bg-[length:10px_10px] pt-20 bg-neutral-50 transition-colors duration-300 relative max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
			{/* Main Footer Content */}
			<div className="flex flex-col lg:flex-row justify-between items-start mb-12">
				{/* Logo Section */}
				<motion.div
					className="mb-8 lg:mb-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Link href="/" className="inline-block mb-6">
						<Image
							src={logo}
							alt="MELP Logo"
							width={160}
							height={0}
							className="h-auto w-40"
						/>
					</Link>
					<p className="text-gray-600 mt-4 max-w-md">
						Empowering teams worldwide to collaborate better, communicate
						clearer, and achieve more together with AI-powered tools.
					</p>
				</motion.div>

				{/* Navigation Links */}
				<div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
					{/* Pages Column */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Download
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Blog
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Legal Column */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Cookie Policy
								</a>
							</li>
						</ul>
					</motion.div>
				</div>
			</div>

			{/* Bottom Section */}
			<motion.div
				className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 h-[10vh]"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				{/* Copyright */}
				<p className="text-gray-500 text-sm mb-4 sm:mb-0 ml-auto">
					© MELP 2025. All rights reserved.
				</p>

				{/* Social Media Icons */}
				{/* <div className="flex space-x-4">
					<motion.a
						href="#"
						className="text-gray-400 hover:text-gray-600 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Twitter className="w-5 h-5" />
					</motion.a>
					<motion.a
						href="#"
						className="text-gray-400 hover:text-gray-600 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Linkedin className="w-5 h-5" />
					</motion.a>
					<motion.a
						href="#"
						className="text-gray-400 hover:text-gray-600 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Github className="w-5 h-5" />
					</motion.a>
					<motion.a
						href="#"
						className="text-gray-400 hover:text-gray-600 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Instagram className="w-5 h-5" />
					</motion.a>
				</div> */}
			</motion.div>
			<div className="relative w-full h-20 flex justify-between">
				<motion.div
					className="absolute -bottom-20 -left-[0%] rotate-12 z-10"
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
						<div className="relative w-[16rem]">
							<Image src={folder} alt="folder" />
							<Image
								src={paperclip}
								alt="paperclip"
								className="absolute -top-8 left-8 w-20"
							/>
							<div className="flex flex-col gap-2 justify-start items-center absolute top-8 left-8 rounded-lg w-[12rem] h-fit p-4">
								<SocialMedia />
							</div>
						</div>
					</FloatingElement>
				</motion.div>
				{/* <motion.div
					className="absolute -bottom-16 -right-[0%] -rotate-12 z-10"
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
				</motion.div> */}
			</div>
		</footer>
	);
};

export default Footer2;

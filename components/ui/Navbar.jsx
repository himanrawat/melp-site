"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const navItems = [
		{
			name: "Features",
			link: "/features",
		},
		{
			name: "Download",
			link: "/download",
		},
		{
			name: "Pricing",
			link: "/pricing",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	// Handle scroll effect with more granular control
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollY(currentScrollY);
			setScrolled(currentScrollY > 50);
		};
		
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = () => {
			setIsOpen(false);
		};
		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		}
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isOpen]);

	// Prevent scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// Calculate dynamic sizing based on scroll
	const getNavbarHeight = () => {
		if (scrolled) {
			return "h-14 lg:h-16"; // Smaller when scrolled
		}
		return "h-18 lg:h-24"; // Larger when at top
	};

	const getLogoSize = () => {
		if (scrolled) {
			return "text-lg"; // Smaller logo when scrolled
		}
		return "text-xl lg:text-2xl"; // Larger logo when at top
	};

	const getPadding = () => {
		if (scrolled) {
			return "px-4 sm:px-6 lg:px-8"; // Less padding when scrolled
		}
		return "px-6 sm:px-8 lg:px-10"; // More padding when at top
	};

	const navVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.4, 0.25, 1],
				type: "spring",
				stiffness: 300,
				damping: 30,
			},
		},
	};

	const mobileMenuVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		visible: {
			opacity: 1,
			height: "auto",
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const linkVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1 + 0.2,
				duration: 0.6,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
		hover: {
			y: -2,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.4, 0.25, 1],
			},
		},
	};

	return (
		<div className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
			scrolled ? "px-4 sm:px-6 lg:px-8 pt-2" : "px-6 sm:px-8 lg:px-12 pt-4"
		}`}>
			<motion.nav
				initial="hidden"
				animate="visible"
				variants={navVariants}
				className={`w-full transition-all duration-700 ease-in-out rounded-2xl ${
					scrolled
						? "bg-background/80 backdrop-blur-xl border border-border/40 shadow-xl shadow-black/10"
						: "bg-background/30 backdrop-blur-lg border border-border/20"
				}`}
				style={{
					backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(120%)",
					background: scrolled 
						? "rgba(255, 255, 255, 0.85)" 
						: "rgba(255, 255, 255, 0.15)",
				}}
			>
				{/* Glassmorphism overlay */}
				<div 
					className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
						scrolled 
							? "bg-gradient-to-r from-background/70 via-background/50 to-background/70" 
							: "bg-gradient-to-r from-background/30 via-background/20 to-background/30"
					}`}
				/>
				
				<div className={`max-w-[1920px] mx-auto ${getPadding()} relative z-10`}>
				<motion.div 
					className={`flex items-center justify-between ${getNavbarHeight()} transition-all duration-500 ease-in-out`}
					animate={{
						scale: scrolled ? 0.98 : 1,
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ 
							duration: 0.8, 
							ease: [0.25, 0.4, 0.25, 1],
							type: "spring",
							stiffness: 300,
							damping: 30
						}}
						whileHover={{ 
							scale: 1.02,
							transition: { 
								duration: 0.3,
								type: "spring",
								stiffness: 400,
								damping: 25
							}
						}}
						whileTap={{ scale: 0.98 }}
						className="flex-shrink-0"
					>
						<Link href="/" className="flex items-center space-x-3">
							<motion.div 
								className={`flex items-center justify-center transition-all duration-500 ${
									scrolled ? "w-28 h-auto" : "w-40 h-auto lg:w-44 lg:h-auto"
								}`}
								animate={{
									scale: scrolled ? 0.85 : 1,
								}}
								transition={{ 
									duration: 0.6, 
									ease: [0.25, 0.4, 0.25, 1],
									type: "spring",
									stiffness: 300,
									damping: 30
								}}
							>
								<Image 
									src={logo} 
									alt="MELP Logo" 
									width={scrolled ? 112 : 160}
									height={0}
									className={`transition-all duration-500 h-auto w-full`}
								/>
							</motion.div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<motion.div 
							className="ml-10 flex items-baseline space-x-1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1, duration: 0.8 }}
						>
							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									custom={index}
									variants={linkVariants}
									initial="hidden"
									animate="visible"
									whileHover={{
										scale: 1.05,
										y: -3,
										transition: { 
											duration: 0.4, 
											ease: [0.25, 0.4, 0.25, 1],
											type: "spring",
											stiffness: 400,
											damping: 25
										}
									}}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href={item.link}
										className={`relative px-4 py-2 font-medium text-foreground/60 hover:text-primary transition-all duration-500 group block ${
											scrolled 
												? "text-sm" 
												: "text-base"
										}`}
									>
										<motion.span
											className="relative z-10"
											whileHover={{
												color: "rgb(238, 65, 54)",
												transition: { duration: 0.3 }
											}}
										>
											{item.name}
										</motion.span>
										
										{/* Animated underline */}
										<motion.div
											className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary via-primary to-primary"
											initial={{ 
												width: 0,
												x: "-50%",
												opacity: 0 
											}}
											whileHover={{ 
												width: "80%",
												x: "-50%",
												opacity: 1,
												transition: { 
													duration: 0.4, 
													ease: [0.25, 0.4, 0.25, 1],
													type: "spring",
													stiffness: 300,
													damping: 30
												}
											}}
										/>
										
										{/* Subtle text glow on hover */}
										<motion.div
											className="absolute inset-0 rounded-lg pointer-events-none"
											initial={{ 
												filter: "drop-shadow(0 0 0px rgba(238, 65, 54, 0))"
											}}
											whileHover={{ 
												filter: "drop-shadow(0 2px 8px rgba(238, 65, 54, 0.3))",
												transition: { 
													duration: 0.4,
													ease: [0.25, 0.4, 0.25, 1]
												}
											}}
										/>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Desktop Right Section */}
					<motion.div 
						className="hidden md:flex items-center space-x-3"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ 
							delay: 0.6, 
							duration: 0.8,
							ease: [0.25, 0.4, 0.25, 1]
						}}
					>
						<motion.div 
							whileHover={{ 
								scale: 1.05,
								transition: { 
									duration: 0.3,
									type: "spring",
									stiffness: 400,
									damping: 25
								}
							}} 
							whileTap={{ scale: 0.95 }}
						>
							<Button 
								variant="ghost" 
								asChild
								className={`backdrop-blur-sm bg-background/20 hover:bg-primary/10 border border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 ${
									scrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
								}`}
							>
								<Link href="/login">Login</Link>
							</Button>
						</motion.div>
						<motion.div 
							whileHover={{ 
								scale: 1.05,
								transition: { 
									duration: 0.3,
									type: "spring",
									stiffness: 400,
									damping: 25
								}
							}} 
							whileTap={{ scale: 0.95 }}
						>
							<Button 
								asChild
								className={`relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 group ${
									scrolled ? "h-8 px-3 text-sm shadow-md" : "h-10 px-4 shadow-primary/20"
								}`}
							>
								<Link href="/signup" className="relative z-10">
									Get Started
									{/* Shimmer effect */}
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
										initial={{ x: "-100%" }}
										whileHover={{ 
											x: "100%",
											transition: { 
												duration: 0.8, 
												ease: "easeInOut",
												repeat: Infinity,
												repeatDelay: 1
											}
										}}
									/>
								</Link>
							</Button>
						</motion.div>
					</motion.div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center space-x-2">
						<motion.button
							whileTap={{ scale: 0.95 }}
							onClick={(e) => {
								e.stopPropagation();
								setIsOpen(!isOpen);
							}}
							className={`inline-flex items-center justify-center rounded-xl text-foreground hover:bg-background/30 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 backdrop-blur-sm ${
								scrolled ? "p-1.5 h-8 w-8" : "p-2 h-10 w-10"
							}`}
							aria-expanded="false"
							aria-label="Toggle navigation menu"
							animate={{
								scale: scrolled ? 0.9 : 1,
							}}
							transition={{ duration: 0.5 }}
						>
							<motion.div
								animate={{ rotate: isOpen ? 180 : 0 }}
								transition={{ duration: 0.3 }}
							>
								{isOpen ? (
									<X className={scrolled ? "h-4 w-4" : "h-5 w-5"} />
								) : (
									<Menu className={scrolled ? "h-4 w-4" : "h-5 w-5"} />
								)}
							</motion.div>
						</motion.button>
					</div>
				</motion.div>

				{/* Mobile Navigation Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							variants={mobileMenuVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							className="md:hidden overflow-hidden relative z-20 mt-3"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="px-2 pt-2 pb-6 space-y-1 bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/15">
								{/* Glassmorphism overlay for mobile menu */}
								<div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 rounded-2xl" />
								
								<div className="relative z-10">
									{navItems.map((item, index) => (
										<motion.div
											key={item.name}
											custom={index}
											variants={linkVariants}
											initial="hidden"
											animate="visible"
											whileHover={{
												x: 8,
												transition: { duration: 0.2, ease: "easeOut" }
											}}
											whileTap={{ scale: 0.98 }}
										>
											<Link
												href={item.link}
												className="relative block px-4 py-3 text-base font-medium text-foreground/70 hover:text-foreground transition-all duration-300 group"
												onClick={() => setIsOpen(false)}
											>
												{item.name}
												
												{/* Simple left border accent */}
												<motion.div
													className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
													initial={{ scaleY: 0 }}
													whileHover={{ 
														scaleY: 1,
														transition: { duration: 0.25, ease: "easeOut" }
													}}
													style={{ transformOrigin: "center" }}
												/>
												
												{/* Subtle background on hover */}
												<motion.div
													className="absolute inset-0 bg-primary/5"
													initial={{ opacity: 0 }}
													whileHover={{ 
														opacity: 1,
														transition: { duration: 0.2 }
													}}
												/>
											</Link>
										</motion.div>
									))}
									<div className="border-t border-border/30 pt-4 mt-4 space-y-2">
										<motion.div
											custom={navItems.length}
											variants={linkVariants}
											initial="hidden"
											animate="visible"
										>
											<Link
												href="/login"
												className="block px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-background/30 transition-all duration-200 backdrop-blur-sm border border-border/30"
												onClick={() => setIsOpen(false)}
											>
												Login
											</Link>
										</motion.div>
										<motion.div
											custom={navItems.length + 1}
											variants={linkVariants}
											initial="hidden"
											animate="visible"
										>
											<Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg" asChild>
												<Link href="/signup" onClick={() => setIsOpen(false)}>
													Get Started
												</Link>
											</Button>
										</motion.div>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				</div>
			</motion.nav>
		</div>
	);
};

export default Navbar;

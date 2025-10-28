"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import logo from "@/public/logo.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const companyLinks = [
		{ name: "About", href: "/about" },
		{ name: "Features", href: "/features" },
		{ name: "Works", href: "/works" },
		{ name: "Career", href: "/career" },
	];

	const helpLinks = [
		{ name: "Customer Support", href: "/support" },
		{ name: "Delivery Details", href: "/delivery" },
		{ name: "Terms & Conditions", href: "/terms" },
		{ name: "Privacy Policy", href: "/privacy" },
	];

	const popularPosts = [
		{
			title:
				"Google Workspace Alternative That Solves the Real Problem — Tool Sprawl",
			date: "October 24, 2025",
		},
		{
			title:
				"Slack Alternatives That Simplify Collaboration and Eliminate Tool Overload",
			date: "October 23, 2025",
		},
	];

	const socialLinks = [
		{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
		{ icon: Facebook, href: "https://facebook.com", label: "Facebook" },
		{ icon: Instagram, href: "https://instagram.com", label: "Instagram" },
		{ icon: Github, href: "https://github.com", label: "GitHub" },
	];

	return (
		<footer className="bg-white border-t border-neutral-200">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{/* Logo and Description */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-1"
					>
						<Link href="/" className="inline-block mb-4">
							<Image
								src={logo}
								alt="MELP Logo"
								width={140}
								height={0}
								className="h-auto w-36"
							/>
						</Link>
						<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
						</p>

						{/* Social Media Icons */}
						<div className="flex items-center space-x-3 mt-6">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-primary hover:text-primary transition-all duration-300"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<social.icon className="w-4 h-4" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Company Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="text-neutral-900 font-semibold text-base mb-4">
							COMPANY
						</h3>
						<ul className="space-y-3">
							{companyLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-neutral-600 text-sm hover:text-primary transition-colors duration-300 inline-block"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Help Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="text-neutral-900 font-semibold text-base mb-4">
							HELP
						</h3>
						<ul className="space-y-3">
							{helpLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-neutral-600 text-sm hover:text-primary transition-colors duration-300 inline-block"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Popular Posts */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="text-neutral-900 font-semibold text-base mb-4">
							POPULAR POSTS
						</h3>
						<div className="space-y-4">
							{popularPosts.map((post, index) => (
								<div key={index}>
									<Link
										href="#"
										className="text-neutral-900 text-sm font-medium hover:text-primary transition-colors duration-300 line-clamp-2 block mb-1"
									>
										{post.title}
									</Link>
									<p className="text-neutral-500 text-xs">{post.date}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Copyright */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 pt-8 border-t border-neutral-200"
				>
					<p className="text-center text-neutral-600 text-sm">
						© Copyright {currentYear}, All Rights Reserved by MELP
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;

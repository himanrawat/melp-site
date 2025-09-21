"use client";

import React from "react";
import { motion } from "motion/react";
import {
	Mail,
	Phone,
	MapPin,
	Twitter,
	Linkedin,
	Github,
	Youtube,
	ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

interface FooterLink {
	label: string;
	href: string;
}

interface FooterSection {
	title: string;
	links: FooterLink[];
}

const footerSections: FooterSection[] = [
	{
		title: "Product",
		links: [
			{ label: "Features", href: "/features" },
			{ label: "Pricing", href: "/pricing" },
			{ label: "Security", href: "/security" },
			{ label: "Integrations", href: "/integrations" },
			{ label: "API", href: "/api" },
			{ label: "Enterprise", href: "/enterprise" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About Us", href: "/about" },
			{ label: "Careers", href: "/careers" },
			{ label: "Press", href: "/press" },
			{ label: "Blog", href: "/blog" },
			{ label: "Contact", href: "/contact" },
			{ label: "Partners", href: "/partners" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Help Center", href: "/help" },
			{ label: "Documentation", href: "/docs" },
			{ label: "Tutorials", href: "/tutorials" },
			{ label: "Community", href: "/community" },
			{ label: "Webinars", href: "/webinars" },
			{ label: "Status", href: "/status" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy Policy", href: "/privacy" },
			{ label: "Terms of Service", href: "/terms" },
			{ label: "Cookie Policy", href: "/cookies" },
			{ label: "GDPR", href: "/gdpr" },
			{ label: "Compliance", href: "/compliance" },
			{ label: "Licenses", href: "/licenses" },
		],
	},
];

const socialLinks = [
	{ icon: Twitter, href: "https://twitter.com/melp", label: "Twitter" },
	{
		icon: Linkedin,
		href: "https://linkedin.com/company/melp",
		label: "LinkedIn",
	},
	{ icon: Github, href: "https://github.com/melp", label: "GitHub" },
	{ icon: Youtube, href: "https://youtube.com/melp", label: "YouTube" },
];

const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-white relative">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="w-full h-full bg-white bg-repeat"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			<div className="max-w-[1920px] mx-auto relative z-10">
				{/* Main Footer Content */}
				<div className="py-16 lg:py-20">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
						{/* Company Info */}
						<div className="lg:col-span-4">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
							>
								{/* Logo */}
								<Link href="/" className="inline-block mb-6">
									<Image
										src={logo}
										alt="MELP Logo"
										width={160}
										height={0}
										className="h-auto w-40"
									/>
								</Link>

								{/* Description */}
								<p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-md">
									Empowering teams worldwide to collaborate better, communicate
									clearer, and achieve more together with AI-powered tools.
								</p>

								{/* Contact Info */}
								<div className="space-y-4 mb-8">
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5 text-primary-400" />
										<a
											href="mailto:hello@melp.com"
											className="text-neutral-300 hover:text-white transition-colors"
										>
											hello@melp.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<Phone className="w-5 h-5 text-primary-400" />
										<a
											href="tel:+1-609-897-9670"
											className="text-neutral-300 hover:text-white transition-colors"
										>
											+1 (609) 897-9670
										</a>
									</div>
									<div className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-primary-400" />
										<span className="text-neutral-300">
											MelpApp Inc.
											<br /> 1600 Broadway, <br /> New York, NY 10019
										</span>
									</div>
								</div>

								{/* Social Links */}
								<div className="flex gap-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.label}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.4, delay: index * 0.1 }}
											viewport={{ once: true }}
											whileHover={{ scale: 1.1, y: -2 }}
											className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300"
											aria-label={social.label}
										>
											<social.icon className="w-5 h-5" />
										</motion.a>
									))}
								</div>
							</motion.div>
						</div>

						{/* Footer Links */}
						<div className="lg:col-span-8">
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{footerSections.map((section, sectionIndex) => (
									<motion.div
										key={section.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
										viewport={{ once: true }}
									>
										<h3 className="font-semibold text-white mb-6 text-lg">
											{section.title}
										</h3>
										<ul className="space-y-4">
											{section.links.map((link, linkIndex) => (
												<motion.li
													key={link.label}
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.4,
														delay: sectionIndex * 0.1 + linkIndex * 0.05,
													}}
													viewport={{ once: true }}
												>
													<Link
														href={link.href}
														className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
													>
														<span>{link.label}</span>
														<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
													</Link>
												</motion.li>
											))}
										</ul>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Newsletter Signup */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="border-t border-neutral-800 py-12"
				>
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="text-2xl font-bold text-white mb-4">
							Stay in the loop
						</h3>
						<p className="text-neutral-300 mb-8">
							Get the latest updates, tips, and insights delivered to your
							inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
							/>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
							>
								Subscribe
								<ArrowRight className="w-4 h-4" />
							</motion.button>
						</div>
					</div>
				</motion.div>

				{/* Bottom Footer */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="border-t border-neutral-800 py-8"
				>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-neutral-400 text-sm">
							© {new Date().getFullYear()} MELP. All rights reserved.
						</div>
						<div className="flex items-center gap-6 text-sm">
							<Link
								href="/privacy"
								className="text-neutral-400 hover:text-white transition-colors"
							>
								Privacy
							</Link>
							<Link
								href="/terms"
								className="text-neutral-400 hover:text-white transition-colors"
							>
								Terms
							</Link>
							<Link
								href="/cookies"
								className="text-neutral-400 hover:text-white transition-colors"
							>
								Cookies
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;

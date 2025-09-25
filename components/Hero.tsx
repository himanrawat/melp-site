"use client";

import React from "react";
import { ArrowRight, Play, Users, Video, MessageSquare } from "lucide-react";
import { HeroTextFlip } from "./ui/HeroTextFlip";

const Hero = () => {
	return (
		<section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
				{/* Hero Content */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					{/* Main Heading */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 animate-slideUp">
						<HeroTextFlip
							words={["Collaborate", "Create", "Communicate"]}
							constantWord="Together"
							interval={2500}
							className="block"
						/>
					</h1>

					{/* Subheading */}
					<p
						className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed animate-slideUp"
						style={{ animationDelay: "200ms" }}
					>
						One platform that unites people, ideas, and workflows anywhere,
						anytime. <br />
						Join millions of teams using MELP for video calls, AI-powered
						insights, and seamless collaboration.
					</p>

					{/* Feature highlights */}
					<div
						className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 animate-slideUp"
						style={{ animationDelay: "400ms" }}
					>
						<div className="flex items-center gap-2 text-neutral-700 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-neutral-200">
							<Video className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
							<span className="text-sm sm:text-base font-medium">
								HD Video Calls
							</span>
						</div>
						<div className="flex items-center gap-2 text-neutral-700 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-neutral-200">
							<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
							<span className="text-sm sm:text-base font-medium">
								Smart Messaging
							</span>
						</div>
						<div className="flex items-center gap-2 text-neutral-700 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-neutral-200">
							<Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
							<span className="text-sm sm:text-base font-medium">
								Team Workspaces
							</span>
						</div>
					</div>

					{/* CTA Buttons */}
					<div
						className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slideUp"
						style={{ animationDelay: "600ms" }}
					>
						<button className="group bg-brand-500 hover:bg-brand-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
							Start Free Trial
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</button>

						<button className="group bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border border-neutral-300 hover:border-neutral-400 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
							<Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
							Watch Demo
						</button>
					</div>

					{/* Trust indicators */}
					<p
						className="text-sm text-neutral-500 mt-6 sm:mt-8 animate-slideUp"
						style={{ animationDelay: "800ms" }}
					>
						Trusted by 10M+ users worldwide • No credit card required • Free
						30-day trial
					</p>
				</div>

				{/* Dashboard Preview Label */}
				<div
					className="text-center mb-4 sm:mb-6 animate-slideUp"
					style={{ animationDelay: "1000ms" }}
				>
					<div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium border border-brand-200">
						<span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-subtle"></span>
						Interactive Preview • Click sidebar to explore features
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

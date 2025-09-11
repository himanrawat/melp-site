"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import {
	Brain,
	Users,
	Video,
	Calendar,
	Languages,
	MessageSquare,
	FileText,
	Folder,
	Share2,
	Download,
	Upload,
	Search,
} from "lucide-react";

export default function FeaturesSectionDemo() {
	const features = [
		{
			title: "AI-Powered Meeting Insights",
			description:
				"Get intelligent summaries, action items, and key insights from every meeting using advanced AI technology.",
			skeleton: <SkeletonOne />,
			className:
				"col-span-1 lg:col-span-4 border-b lg:border-r border-primary-200/50",
		},
		{
			title: "Global Team Collaboration",
			description:
				"Connect with team members across the globe with real-time translation and cultural context.",
			skeleton: <SkeletonTwo />,
			className: "border-b col-span-1 lg:col-span-2 border-primary-200/50",
		},
		{
			title: "Interactive Demo Experience",
			description:
				"See how our platform transforms team collaboration and productivity in this comprehensive demo.",
			skeleton: <SkeletonThree />,
			className: "col-span-1 lg:col-span-3 lg:border-r border-primary-200/50",
		},
		{
			title: "Seamless File Sharing & Drive",
			description:
				"Share files, collaborate on documents, and access your team's shared drive from anywhere with intelligent organization.",
			skeleton: <SkeletonFour />,
			className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		},
	];

	return (
		<div className="relative z-20 py-16 lg:py-32 max-w-7xl mx-auto">
			<div className="px-8">
				<div className="bg-primary-100 w-fit p-3 rounded-xl mb-8 flex items-center gap-3 mx-auto border border-primary-200">
					<div className="w-5 h-5 rounded-full border-2 border-primary-500 bg-transparent flex items-center justify-center">
						<div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-pulse" />
					</div>
					<span className="text-primary-700 font-medium text-sm">
						Advanced Features
					</span>
				</div>

				<h4 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-neutral-900 mb-6">
					<span className="bg-gradient-to-r from-neutral-900 via-primary-800 to-neutral-900 bg-clip-text text-transparent">
						Packed with powerful
					</span>
					<br />
					<span className="bg-gradient-to-r from-primary-600 to-primary-500">
						collaboration tools
					</span>
				</h4>

				<p className="text-lg lg:text-xl max-w-3xl my-8 mx-auto text-neutral-600 text-center font-normal leading-relaxed">
					From AI-powered insights to seamless global communication, MELP
					provides everything your team needs to collaborate effectively and
					efficiently.
				</p>
			</div>

			<div className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-16 xl:border rounded-2xl border-primary-200/50 bg-gradient-to-br from-primary-50/30 via-white to-primary-100/20 backdrop-blur-sm shadow-xl min-h-[500px]">
					{features.map((feature) => (
						<FeatureCard key={feature.title} className={feature.className}>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>{feature.description}</FeatureDescription>
							<div className="h-full w-full">{feature.skeleton}</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

const FeatureCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`p-6 sm:p-8 relative overflow-hidden group hover:bg-primary-50/50 transition-all duration-300 flex flex-col h-full`,
				className
			)}
		>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="max-w-5xl mx-auto text-left tracking-tight text-neutral-900 text-xl md:text-2xl md:leading-snug font-bold mb-3">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p
			className={cn(
				"text-sm md:text-base max-w-4xl text-left mx-auto",
				"text-neutral-600 font-normal",
				"text-left max-w-sm mx-0 md:text-sm my-4 leading-relaxed"
			)}
		>
			{children}
		</p>
	);
};

export const SkeletonOne = () => {
	const features = [
		{ icon: Brain, label: "AI Insights" },
		{ icon: Users, label: "Team Analytics" },
		{ icon: Video, label: "Meeting Metrics" },
		{ icon: Calendar, label: "Schedule Optimization" },
	];

	return (
		<div className="relative flex py-8 px-2 gap-6 h-full">
			<div className="w-full p-6 mx-auto bg-white/80 backdrop-blur-sm shadow-xl group h-full rounded-xl border border-primary-200/50">
				<div className="flex flex-1 w-full h-full flex-col space-y-4">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
							<Brain className="w-5 h-5 text-white" />
						</div>
						<div>
							<h3 className="font-semibold text-neutral-900">
								Meeting Dashboard
							</h3>
							<p className="text-sm text-neutral-600">Live insights</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{features.map((feature, idx) => (
							<div
								key={idx}
								className="p-4 rounded-lg bg-primary-50 border border-primary-200/50 hover:bg-primary-100 transition-colors"
							>
								<feature.icon className="w-6 h-6 text-primary-600 mb-2" />
								<p className="text-sm font-medium text-neutral-800">
									{feature.label}
								</p>
							</div>
						))}
					</div>

					<div className="mt-4 space-y-2">
						<div className="h-2 bg-primary-200 rounded-full overflow-hidden">
							<div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
						</div>
						<p className="text-xs text-neutral-600">
							Meeting efficiency: 87% improvement
						</p>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent w-full pointer-events-none" />
			<div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
		</div>
	);
};

export const SkeletonThree = () => {
	return (
		<a
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			target="_blank"
			rel="noopener noreferrer"
			className="relative flex gap-10 h-full group/image min-h-[300px]"
		>
			<div className="w-full mx-auto bg-transparent group h-full">
				<div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
					<div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
					<IconBrandYoutubeFilled className="h-20 w-20 absolute z-20 inset-0 text-primary-500 m-auto group-hover/image:scale-110 transition-transform duration-300" />
					<div className="h-full w-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center relative overflow-hidden">
						<div className="absolute inset-0 opacity-20">
							<div
								className="w-full h-full bg-primary-500/10 bg-repeat"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE4136' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}
							></div>
						</div>
						<div className="text-center z-10">
							<Video className="w-12 h-12 text-primary-600 mx-auto mb-4" />
							<p className="text-primary-700 font-semibold">Watch Demo</p>
							<p className="text-primary-600 text-sm">See MELP in action</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export const SkeletonTwo = () => {
	const teamMembers = [
		{
			name: "Michael Chen",
			image: "/user.jpg",
			location: "New York",
			status: "speaking",
			role: "Product Manager",
			isMuted: false,
			isVideoOn: true,
		},
		{
			name: "David Smith",
			image: "/user1.jpg",
			location: "London",
			status: "listening",
			role: "Developer",
			isMuted: true,
			isVideoOn: true,
		},
		{
			name: "Marcus Lee",
			image: "/user2.jpg",
			location: "Tokyo",
			status: "listening",
			role: "Designer",
			isMuted: true,
			isVideoOn: true,
		},
		{
			name: "Jerome Wilson",
			image: "/user3.jpg",
			location: "Berlin",
			status: "away",
			role: "Engineer",
			isMuted: true,
			isVideoOn: false,
		},
	];

	const imageVariants = {
		whileHover: {
			scale: 1.02,
			transition: { duration: 0.2 },
		},
	};

	return (
		<div className="relative flex flex-col h-full overflow-hidden bg-gray-900 rounded-lg">
			{/* Meeting Header */}
			<div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
				<div className="flex items-center gap-3">
					<div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
					<span className="text-white text-sm font-medium">Team Standup</span>
					<span className="text-gray-400 text-xs">4 participants</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-green-500 rounded-full"></div>
					<span className="text-green-400 text-xs">Recording</span>
				</div>
			</div>

			{/* Video Grid */}
			<div className="flex-1 p-3 grid grid-cols-2 gap-2">
				{teamMembers.map((member, idx) => (
					<motion.div
						key={idx}
						variants={imageVariants}
						whileHover="whileHover"
						className={`relative rounded-lg overflow-hidden ${
							member.status === "speaking"
								? "ring-2 ring-green-400 shadow-lg shadow-green-400/20"
								: "ring-1 ring-gray-600"
						} ${!member.isVideoOn ? "bg-gray-700" : "bg-black"}`}
					>
						{member.isVideoOn ? (
							<>
								<Image
									src={member.image}
									alt={member.name}
									width={120}
									height={90}
									className="w-full h-full object-cover"
								/>
								{/* Video overlay effects */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
							</>
						) : (
							// Video off state
							<div className="w-full h-full flex items-center justify-center bg-gray-700">
								<div className="text-center">
									<div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mb-2 mx-auto">
										<span className="text-white text-sm font-semibold">
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</span>
									</div>
									<span className="text-gray-300 text-xs">Camera off</span>
								</div>
							</div>
						)}

						{/* Participant info overlay */}
						<div className="absolute bottom-2 left-2 flex items-center gap-2">
							<span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
								{member.name.split(" ")[0]}
							</span>
						</div>

						{/* Audio/Video status indicators */}
						<div className="absolute top-2 right-2 flex gap-1">
							{/* Microphone status */}
							<div
								className={`w-5 h-5 rounded flex items-center justify-center ${
									member.isMuted ? "bg-red-500/80" : "bg-green-500/80"
								}`}
							>
								{member.isMuted ? (
									<svg
										className="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M9.383 3.076A1 1 0 0110 4v6a1 1 0 01-1.707.707L6.586 9H4a1 1 0 01-1-1V6a1 1 0 011-1h2.586l1.707-1.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										className="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</div>
						</div>

						{/* Speaking indicator */}
						{member.status === "speaking" && (
							<div className="absolute inset-0 pointer-events-none">
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400">
									<div className="h-full bg-white/30 animate-pulse"></div>
								</div>
							</div>
						)}
					</motion.div>
				))}
			</div>

			{/* Meeting Controls Bar */}
			<div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Languages className="w-4 h-4 text-blue-400" />
						<span className="text-gray-300 text-xs">Live Translation</span>
					</div>
					<div className="flex gap-2">
						{["EN", "ES", "DE", "FR"].map((lang) => (
							<span
								key={lang}
								className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30"
							>
								{lang}
							</span>
						))}
					</div>
				</div>

				{/* AI Insights Preview */}
				<div className="mt-2 bg-gray-700/50 rounded p-2 border border-gray-600">
					<div className="flex items-center gap-2 mb-1">
						<Brain className="w-3 h-3 text-purple-400" />
						<span className="text-purple-400 text-xs font-medium">
							AI Insights
						</span>
					</div>
					<p className="text-gray-300 text-xs">
						"3 action items identified • Next: Sprint planning discussion"
					</p>
				</div>
			</div>
		</div>
	);
};

export const SkeletonFour = () => {
	const driveFeatures = [
		{ icon: FileText, label: "Documents", count: "1.2k" },
		{ icon: Folder, label: "Projects", count: "47" },
		{ icon: Share2, label: "Shared", count: "238" },
	];

	return (
		<div className="h-full min-h-[300px] flex flex-col items-start relative bg-transparent p-6">
			<div className="w-full z-10 relative flex-1 flex flex-col">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
						<Folder className="w-5 h-5 text-white" />
					</div>
					<div>
						<h3 className="font-semibold text-neutral-900">Team Drive</h3>
						<p className="text-sm text-neutral-600">Shared workspace</p>
					</div>
				</div>

				<div className="space-y-3 mb-6 flex-1">
					{driveFeatures.map((feature, idx) => (
						<div
							key={idx}
							className="flex items-center justify-between p-3 rounded-lg bg-white border border-primary-200/50 hover:bg-primary-50 transition-colors"
						>
							<div className="flex items-center gap-3">
								<feature.icon className="w-5 h-5 text-primary-600" />
								<span className="text-sm font-medium text-neutral-800">
									{feature.label}
								</span>
							</div>
							<span className="text-sm text-neutral-600 bg-primary-100 px-2 py-1 rounded-full">
								{feature.count}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

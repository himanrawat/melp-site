"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { isDevelopment } from "@/lib/env";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import {
	Brain,
	Users,
	Video,
	VideoOff,
	Calendar,
	Languages,
	FileText,
	Folder,
	Share2,
	Mic,
	MicOff,
	Phone,
	PhoneOff,
	Hand,
	MoreHorizontal,
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
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-16 xl:border rounded-2xl border-primary-200/50 bg-gradient-to-br from-primary-50/30 via-white to-primary-100/20 backdrop-blur-sm shadow-xl min-h-[700px]">
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
	const [userVideoOn, setUserVideoOn] = useState(false);
	const [userMuted, setUserMuted] = useState(false);
	const [stream, setStream] = useState<MediaStream | null>(null);
	const [isLoadingCamera, setIsLoadingCamera] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const teamMembers = [
		{
			name: "Michael Chen",
			image: "/user2.jpg",
			location: "New York",
			status: "listening",
			role: "Product Manager",
			isMuted: true,
			isVideoOn: true,
			isUser: false,
		},
		{
			name: "David Smith",
			image: "/user1.jpg",
			location: "London",
			status: "listening",
			role: "Developer",
			isMuted: true,
			isVideoOn: false,
			isUser: false,
		},
		{
			name: "You",
			image: "/user3.jpg",
			location: "Tokyo",
			status: "speaking",
			role: "Designer",
			isMuted: userMuted,
			isVideoOn: userVideoOn,
			isUser: true,
		},
	];

	const startCamera = async () => {
		setIsLoadingCamera(true);
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: { ideal: 1280 },
					height: { ideal: 720 },
					facingMode: "user", // Ensure front-facing camera
				},
				audio: true,
			});

			console.log("MediaStream created:", mediaStream);
			setStream(mediaStream);

			// Directly assign to video element
			if (videoRef.current) {
				console.log("Assigning stream to video element");
				videoRef.current.srcObject = mediaStream;

				// Force a small delay to ensure the assignment takes effect
				await new Promise((resolve) => setTimeout(resolve, 100));

				// Wait for video metadata to load
				await new Promise((resolve, reject) => {
					if (videoRef.current) {
						videoRef.current.onloadedmetadata = () => {
							console.log("Video metadata loaded successfully");
							console.log("Video element after metadata:", {
								srcObject: videoRef.current?.srcObject,
								readyState: videoRef.current?.readyState,
								paused: videoRef.current?.paused,
							});
							resolve(void 0);
						};
						videoRef.current.onerror = (error) => {
							console.error("Video element error:", error);
							reject(error);
						};
					}
				});

				// Explicitly play the video
				try {
					await videoRef.current.play();
					console.log("Video started playing successfully");
				} catch (playError) {
					console.error("Error playing video:", playError);
					// Try to play again after a short delay
					setTimeout(async () => {
						try {
							if (videoRef.current) {
								await videoRef.current.play();
								console.log("Video started playing on retry");
							}
						} catch (retryError) {
							console.error("Retry play failed:", retryError);
						}
					}, 100);
				}
			}
		} catch (error) {
			console.error("Error accessing camera:", error);
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error";
			alert(`Camera access failed: ${errorMessage}`);
		} finally {
			setIsLoadingCamera(false);
		}
	};

	const stopCamera = () => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			setStream(null);
			console.log("Camera stopped successfully");
		}
		if (videoRef.current) {
			videoRef.current.srcObject = null;
		}
	};

	const debugCameraState = () => {
		console.log("=== Camera Debug Info ===");
		console.log("userVideoOn:", userVideoOn);
		console.log("isLoadingCamera:", isLoadingCamera);
		console.log("stream:", stream);
		console.log("videoRef.current:", videoRef.current);
		if (videoRef.current) {
			console.log("video.srcObject:", videoRef.current.srcObject);
			console.log("video.paused:", videoRef.current.paused);
			console.log("video.readyState:", videoRef.current.readyState);
		}
		if (stream) {
			console.log("stream active:", stream.active);
			console.log("video tracks:", stream.getVideoTracks());
		}
		console.log("========================");
	};

	const toggleUserVideo = async () => {
		console.log("Toggle video clicked, current state:", userVideoOn);
		if (!userVideoOn) {
			await startCamera();
			setUserVideoOn(true);
			// Debug after setting video on
			setTimeout(() => debugCameraState(), 1000);
		} else {
			stopCamera();
			setUserVideoOn(false);
		}
	};

	const toggleUserMute = () => {
		setUserMuted(!userMuted);
		if (stream) {
			stream.getAudioTracks().forEach((track) => {
				track.enabled = userMuted; // Toggle audio track
			});
		}
	};

	// Effect to ensure video element gets the stream when stream state changes
	useEffect(() => {
		if (stream && videoRef.current && userVideoOn) {
			console.log("useEffect: Assigning stream to video element");
			videoRef.current.srcObject = stream;

			// Try to play the video
			const playVideo = async () => {
				try {
					if (videoRef.current) {
						await videoRef.current.play();
						console.log("useEffect: Video playing successfully");
					}
				} catch (error) {
					console.error("useEffect: Error playing video:", error);
				}
			};

			playVideo();
		} else if (!userVideoOn && videoRef.current) {
			// Clear the video when camera is off
			videoRef.current.srcObject = null;
		}
	}, [stream, userVideoOn]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (stream) {
				stream.getTracks().forEach((track) => track.stop());
			}
		};
	}, [stream]);

	return (
		<div className="relative flex flex-col h-full overflow-hidden bg-black rounded-lg min-h-[600px]">
			{/* Header */}
			<div className="bg-neutral-900/80 px-4 py-3 flex items-center justify-between border-b border-neutral-700/50">
				<div className="flex items-center gap-3">
					<div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
					<span className="text-white text-sm font-medium">01:36</span>
					<span className="text-neutral-400 text-sm">Project Discussion</span>
				</div>
				<button className="text-neutral-400 hover:text-white transition-colors flex items-center">
					<Users className="w-5 h-5" />
					<span className="ml-1 text-sm">3</span>
				</button>
			</div>

			{/* Video Participants */}
			<div className="flex-1 flex flex-col justify-center gap-1 p-1">
				{/* First row - 2 participants */}
				<div className="grid grid-cols-2 gap-1">
					{teamMembers.slice(0, 2).map((member, idx) => (
						<motion.div
							key={idx}
							className="relative rounded-xs overflow-hidden bg-neutral-800"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.2 }}
							style={{ height: "200px" }}
						>
							{member.isVideoOn ? (
								<div className="flex items-center justify-center h-full w-full">
									<Image
										src={member.image}
										alt={member.name}
										width={400}
										height={300}
										className=" inset-0 w-20 h-20 object-cover rounded-full"
									/>
									{/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div> */}
								</div>
							) : (
								// Dummy participants - show avatars when video is off
								<div className="absolute inset-0 flex items-center justify-center bg-neutral-700">
									<div className="text-center">
										<div
											className={`w-20 h-20 ${
												idx === 0 ? "bg-purple-600" : "bg-blue-600"
											} rounded-full flex items-center justify-center mx-auto`}
										>
											<span className="text-white text-xl font-semibold">
												{member.name.substring(0, 2).toUpperCase()}
											</span>
										</div>
									</div>
								</div>
							)}

							{/* Participant name overlay */}
							<div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
								<div
									className={`w-5 h-5 rounded-full flex items-center justify-center ${
										member.isMuted ? "bg-primary-500" : "bg-green-500"
									}`}
								>
									{member.isMuted ? (
										<MicOff className="w-3 h-3 text-white" />
									) : (
										<Mic className="w-3 h-3 text-white" />
									)}
								</div>
								<span className="bg-black/70 text-white text-xs px-3 py-1 rounded">
									{member.name}
								</span>
							</div>
						</motion.div>
					))}
				</div>

				{/* Second row - 1 participant (bottom center) - This is the actual user */}
				<div className="flex justify-center">
					<motion.div
						className="relative rounded-lg overflow-hidden bg-neutral-800 w-full h-52"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						{/* User video - can be toggled with real camera */}
						{isLoadingCamera ? (
							<div className="absolute inset-0 flex items-center justify-center bg-neutral-700">
								<div className="text-center">
									<div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3 mx-auto"></div>
									<span className="text-neutral-300 text-base">
										Starting camera...
									</span>
								</div>
							</div>
						) : userVideoOn && stream ? (
							<>
								<video
									ref={videoRef}
									autoPlay
									playsInline
									muted
									controls={false}
									webkit-playsinline="true"
									className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
									onLoadedMetadata={() =>
										console.log("Video element metadata loaded")
									}
									onPlay={() => console.log("Video element started playing")}
									onError={(e) => console.error("Video element error:", e)}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
							</>
						) : (
							<div className="absolute inset-0 flex items-center justify-center bg-neutral-700">
								<div className="text-center">
									<div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
										<span className="text-white text-xl font-semibold">
											{teamMembers[2].name.substring(0, 2).toUpperCase()}
										</span>
									</div>
									<span className="text-neutral-300 text-base">Camera off</span>
								</div>
							</div>
						)}

						{/* Participant name overlay */}
						<div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
							<div
								className={`w-5 h-5 rounded-full flex items-center justify-center ${
									userMuted ? "bg-primary-500" : "bg-green-500"
								}`}
							>
								{userMuted ? (
									<MicOff className="w-3 h-3 text-white" />
								) : (
									<Mic className="w-3 h-3 text-white" />
								)}
							</div>
							<span className="bg-black/70 text-white text-xs px-3 py-1 rounded">
								{teamMembers[2].name}
							</span>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Control Bar */}
			<div className="bg-neutral-900/90 p-4 border-t border-neutral-700/50">
				<div className="flex items-center justify-center gap-2">
					{/* Camera button */}
					<motion.button
						onClick={toggleUserVideo}
						disabled={isLoadingCamera}
						className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
							isLoadingCamera
								? "bg-neutral-500 cursor-not-allowed"
								: userVideoOn
								? "bg-primary-500 hover:bg-primary-700"
								: "bg-neutral-600 hover:bg-neutral-500"
						}`}
						whileHover={!isLoadingCamera ? { scale: 1.05 } : {}}
						whileTap={!isLoadingCamera ? { scale: 0.95 } : {}}
					>
						{isLoadingCamera ? (
							<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
						) : userVideoOn ? (
							<Video className="w-6 h-6 text-white" />
						) : (
							<VideoOff className="w-6 h-6 text-white" />
						)}
					</motion.button>

					{/* Microphone button */}
					<motion.button
						onClick={toggleUserMute}
						className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
							userMuted
								? "bg-primary-500 hover:bg-primary-600"
								: "bg-neutral-600 hover:bg-neutral-500"
						}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{userMuted ? (
							<MicOff className="w-6 h-6 text-white" />
						) : (
							<Mic className="w-6 h-6 text-white" />
						)}
					</motion.button>

					{/* End call button */}
					<motion.button
						className="w-10 h-10 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => {
							stopCamera();
							setUserVideoOn(false);
						}}
					>
						<PhoneOff className="w-6 h-6 text-white" />
					</motion.button>

					{/* Raise hand button */}
					<motion.button
						className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-neutral-500 flex items-center justify-center transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Hand className="w-6 h-6 text-white" />
					</motion.button>

					{/* More options button */}
					<motion.button
						className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-neutral-500 flex items-center justify-center transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<MoreHorizontal className="w-6 h-6 text-white" />
					</motion.button>

					{/* Debug button (development only) */}
					{isDevelopment() && (
						<motion.button
							onClick={debugCameraState}
							className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							title="Debug Camera State"
						>
							<span className="text-white text-xs">🐛</span>
						</motion.button>
					)}
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

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
	Users,
	Video,
	VideoOff,
	Mic,
	MicOff,
	PhoneOff,
	Hand,
	MoreHorizontal,
} from "lucide-react";
import { isDevelopment } from "@/lib/env";

export const GlobalTeamFeature = () => {
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
					facingMode: "user",
				},
				audio: true,
			});

			console.log("MediaStream created:", mediaStream);
			setStream(mediaStream);

			if (videoRef.current) {
				console.log("Assigning stream to video element");
				videoRef.current.srcObject = mediaStream;

				await new Promise((resolve) => setTimeout(resolve, 100));

				await new Promise((resolve, reject) => {
					if (videoRef.current) {
						videoRef.current.onloadedmetadata = () => {
							console.log("Video metadata loaded successfully");
							resolve(void 0);
						};
						videoRef.current.onerror = (error) => {
							console.error("Video element error:", error);
							reject(error);
						};
					}
				});

				try {
					await videoRef.current.play();
					console.log("Video started playing successfully");
				} catch (playError) {
					console.error("Error playing video:", playError);
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
				track.enabled = userMuted;
			});
		}
	};

	useEffect(() => {
		if (stream && videoRef.current && userVideoOn) {
			console.log("useEffect: Assigning stream to video element");
			videoRef.current.srcObject = stream;

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
			videoRef.current.srcObject = null;
		}
	}, [stream, userVideoOn]);

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
										className="inset-0 w-20 h-20 object-cover rounded-full"
									/>
								</div>
							) : (
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
				<div className="flex items-center justify-between gap-2">
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

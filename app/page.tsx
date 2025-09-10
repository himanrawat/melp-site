"use client";

import Image from "next/image";
import folder from "@/public/folder.svg";
import paperclip from "@/public/paper_clip.webp";
import FolderCard from "@/components/ui/FolderCard";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";
import { animate } from "motion";
import { useEffect, useRef } from "react";

export default function Home() {
	const buttonContainerRef = useRef<HTMLDivElement>(null);
	const joinButtonRef = useRef<HTMLDivElement>(null);
	const startButtonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Animate button container on mount
		if (buttonContainerRef.current) {
			animate(
				buttonContainerRef.current,
				{ opacity: [0, 1], y: [20, 0] },
				{ duration: 0.6, delay: 0.4 }
			);
		}

		// Start floating animations for the containers
		const floatingFolder = document.querySelector(
			".floating-folder"
		) as HTMLElement;
		const floatingMeeting = document.querySelector(
			".floating-meeting"
		) as HTMLElement;

		const folderStart = Date.now();
		const meetingStart = Date.now() + 500; // 0.5s delay

		const animateFloating = () => {
			const now = Date.now();

			if (floatingFolder) {
				const folderElapsed = (now - folderStart) / 1000;
				const folderY = Math.sin((folderElapsed * Math.PI * 2) / 4) * 8;
				floatingFolder.style.transform = `translateY(${folderY}px)`;
			}

			if (floatingMeeting) {
				const meetingElapsed = (now - meetingStart) / 1000;
				const meetingY = Math.sin((meetingElapsed * Math.PI * 2) / 3.5) * 6;
				floatingMeeting.style.transform = `translateY(${meetingY}px)`;
			}

			requestAnimationFrame(animateFloating);
		};

		animateFloating();

		// Add hover animations
		const joinButton = joinButtonRef.current;
		const startButton = startButtonRef.current;

		if (joinButton) {
			joinButton.addEventListener("mouseenter", () => {
				animate(joinButton, { scale: 1.05 }, { duration: 0.2 });
				const icon = joinButton.querySelector(".icon-video");
				if (icon) {
					animate(
						icon,
						{ scale: [1, 1.1, 1] },
						{ duration: 0.5, repeat: Infinity }
					);
				}
			});

			joinButton.addEventListener("mouseleave", () => {
				animate(joinButton, { scale: 1 }, { duration: 0.2 });
				const icon = joinButton.querySelector(".icon-video");
				if (icon) {
					animate(icon, { scale: 1 }, { duration: 0.2 });
				}
			});

			joinButton.addEventListener("mousedown", () => {
				animate(joinButton, { scale: 0.98 }, { duration: 0.1 });
			});

			joinButton.addEventListener("mouseup", () => {
				animate(joinButton, { scale: 1.05 }, { duration: 0.1 });
			});
		}

		if (startButton) {
			startButton.addEventListener("mouseenter", () => {
				animate(startButton, { scale: 1.05 }, { duration: 0.2 });
				const icon = startButton.querySelector(".icon-arrow");
				if (icon) {
					animate(icon, { x: 4 }, { duration: 0.3 });
				}
				const shimmer = startButton.querySelector(".shimmer");
				if (shimmer) {
					animate(shimmer, { x: ["0%", "200%"] }, { duration: 0.6 });
				}
			});

			startButton.addEventListener("mouseleave", () => {
				animate(startButton, { scale: 1 }, { duration: 0.2 });
				const icon = startButton.querySelector(".icon-arrow");
				if (icon) {
					animate(icon, { x: 0 }, { duration: 0.3 });
				}
			});

			startButton.addEventListener("mousedown", () => {
				animate(startButton, { scale: 0.98 }, { duration: 0.1 });
			});

			startButton.addEventListener("mouseup", () => {
				animate(startButton, { scale: 1.05 }, { duration: 0.1 });
			});
		}
	}, []);

	return (
		<div className="p-4 w-full rounded-4xl border-2 border-gray-200 dark:border-neutral-700 bg-[radial-gradient(circle,rgb(230,230,230)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgb(82,82,82)_1px,transparent_1px)] bg-[length:10px_10px] overflow-hidden pt-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
			<div className="flex flex-col h-full justify-center">
				<div className="bg-primary-200 dark:bg-primary-800 w-fit p-2 rounded-lg mb-4 flex items-center gap-2 mx-auto border border-primary-300 dark:border-primary-700">
					<div className=" w-4 h-4 rounded-full border-primary-500 dark:border-primary-400 border-2 bg-transparent flex items-center justify-center">
						<div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full "></div>
					</div>
					<p className="text-gray-800 dark:text-gray-200">
						New! AI that writes, polishes, and perfects for you
					</p>
				</div>
				<h1 className="md:text-6xl text-2xl font-bold text-center md:w-4/6 w-full mx-auto text-neutral-900 dark:text-white transition-colors duration-300">
					Create together. Communicate clearly. Collaborate seamlessly.
				</h1>
				<p className="md:text-lg text-sm font-medium leading-[23px] text-center tracking-tight max-w-2xl mx-auto w-[95%] mt-9 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
					One platform that unites people, ideas, and workflows—anywhere,
					anytime.
				</p>
				<div
					ref={buttonContainerRef}
					className="flex gap-6 justify-center items-center py-4 opacity-0"
				>
					<div ref={joinButtonRef} className="transform-gpu">
						<Button
							variant="outline"
							size="lg"
							className="group border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 bg-white dark:bg-neutral-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-neutral-900/20"
						>
							<div className="flex items-center gap-2">
								<Video className="w-4 h-4 icon-video" />
								<span>Join A Meeting</span>
							</div>
						</Button>
					</div>
					<div ref={startButtonRef} className="transform-gpu">
						<Button
							variant="default"
							size="lg"
							className="group bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-neutral-900/20 relative overflow-hidden"
						>
							<div className="flex items-center gap-2">
								<span>Get Started</span>
								<ArrowRight className="w-4 h-4 icon-arrow transition-transform duration-300" />
							</div>
							<div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full" />
						</Button>
					</div>
				</div>
			</div>
			<div className="mt-16 relative h-72 w-[554px] ml-auto">
				<div className="absolute -bottom-[45%] -right-[4%] -rotate-12 z-10 floating-folder">
					<div className="relative w-fit">
						<Image src={folder} alt="folder" />
						<Image
							src={paperclip}
							alt="paperclip"
							className="absolute -top-8 left-8 w-20"
						/>
						<div className="flex flex-col gap-4 justify-start items-center absolute top-20 left-12 rounded-lg  w-[19rem] h-1/2 overflow-hidden">
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
				</div>
				<div className="absolute bottom-[0%] right-[62%] rotate-6 floating-meeting">
					<div className="rounded-2xl w-fit overflow-hidden bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/40 border border-gray-100 dark:border-neutral-700 transition-colors duration-300">
						<h5 className="py-2 px-4 bg-primary-50 dark:bg-primary-900/30 font-semibold text-neutral-700 border-b border-gray-100 dark:border-gray-700">
							Meeting
						</h5>
						<div className="p-4 border-b border-gray-50 dark:border-gray-700">
							<p className="text-gray-800 dark:text-gray-200">
								Meeting with <span className="font-bold">Sam Miller</span>
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								08:30 | Discuss project updates
							</p>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-200">
								<span className="font-bold">Daily Work Report</span>
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								14:00 | Group Call
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

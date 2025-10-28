"use client";
import React, { useEffect, useState } from "react";
import { CalendarRange } from "lucide-react";
import Image from "next/image";

interface ProductCard {
	icon: React.ReactNode;
	title: string;
	description: string;
	buttonText: string | (() => string);
	buttonVariant?: "primary" | "secondary";
	image?: React.ReactNode;
}

export default function TryForFree() {
	const [os, setOs] = useState<string>("Windows");

	useEffect(() => {
		const userAgent = globalThis.navigator.userAgent;
		const platform = globalThis.navigator.userAgent;
		const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
		const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
		const iosPlatforms = ["iPhone", "iPad", "iPod"];

		if (macosPlatforms.some((p) => platform.includes(p))) {
			setOs("macOS");
		} else if (iosPlatforms.some((p) => platform.includes(p))) {
			setOs("iOS");
		} else if (windowsPlatforms.some((p) => platform.includes(p))) {
			setOs("Windows");
		} else if (/Android/.test(userAgent)) {
			setOs("Android");
		} else if (/Linux/.test(platform)) {
			setOs("Linux");
		}
	}, []);

	const getDownloadText = () => {
		switch (os) {
			case "macOS":
				return "Download for macOS";
			case "iOS":
				return "Download for iOS";
			case "Android":
				return "Download for Android";
			case "Linux":
				return "Download for Linux";
			case "Windows":
			default:
				return "Download for Windows";
		}
	};

	const products: ProductCard[] = [
		{
			icon: "https://www.melp.us/images/new-logo.svg",
			title: "Get started on MELP",
			description: "Your AI workspace with built-in agents.",
			buttonText: getDownloadText,
			buttonVariant: "primary",
			image: (
				<div className="relative h-48 overflow-hidden flex items-center justify-center p-4">
					<Image
						src="https://www.melp.us/images/melpQrCode.png"
						alt="MELP QR Code"
						width={192}
						height={192}
						className="h-full w-auto object-contain"
					/>
				</div>
			),
		},
		{
			icon: (
				<svg
					className="w-12 h-12"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			title: "MELP Conference",
			description: "Video and audio calls built right in.",
			buttonText: "",
			buttonVariant: "secondary",
			image: (
				<div className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-contain"
					>
						<source
							src="https://www.melp.us/video/conference-4.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			),
		},
		{
			icon: <CalendarRange className="w-12 h-12" />,
			title: "MELP Calendar",
			description: "Time, scheduling, tasks—all together.",
			buttonText: "",
			buttonVariant: "secondary",
			image: (
				<div className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-contain"
					>
						<source
							src="https://www.melp.us/video/calendarNew1.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			),
		},
		{
			icon: (
				<svg
					className="w-12 h-12"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.7499 20.2496C21.7499 21.4923 22.7572 22.4996 23.9999 22.4996C25.2426 22.4996 26.25 21.4923 26.25 20.2496C26.25 19.0069 25.2426 17.9995 23.9999 17.9995C22.7572 17.9995 21.7499 19.0069 21.7499 20.2496Z"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M29.25 27.0001C29.25 26.7768 29.1441 26.5257 28.8354 26.2408C28.5216 25.9512 28.0511 25.6801 27.472 25.4481C26.3126 24.9837 24.9074 24.75 23.9999 24.75C23.0923 24.75 21.6871 24.9837 20.5277 25.4481C19.9487 25.6801 19.4781 25.9512 19.1643 26.2408C18.8556 26.5257 18.7497 26.7768 18.7497 27.0001V28.5001H29.25V27.0001Z"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<circle cx="12" cy="24" r="3" fill="currentColor" />
					<circle cx="36" cy="24" r="3" fill="currentColor" />
					<circle cx="24" cy="12" r="3" fill="currentColor" />
					<circle cx="24" cy="36" r="3" fill="currentColor" />
					<circle cx="15" cy="33" r="3" fill="currentColor" />
					<circle cx="15" cy="15" r="3" fill="currentColor" />
					<circle cx="33" cy="33" r="3" fill="currentColor" />
					<circle cx="33" cy="15" r="3" fill="currentColor" />
				</svg>
			),
			title: "Groups",
			description:
				"Organize teams and collaborate seamlessly with dedicated group workspaces.",
			buttonText: "",
			buttonVariant: "secondary",
			image: (
				<div className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-contain"
					>
						<source
							src="https://www.melp.us/video/groups6.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			),
		},
	];

	return (
		<section
			className="w-full py-16 md:py-24"
			style={{ backgroundColor: "rgb(246, 245, 244)" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12">
					Try for free.
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{products.map((product) => (
						<div
							key={product.title}
							className={`bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden ${
								product.title === "Groups" ? "md:col-span-2 lg:col-span-1" : ""
							}`}
						>
							<div
								className={`flex ${
									product.title === "Get started on MELP"
										? "justify-between"
										: "flex-col md:flex-row md:justify-between gap-6"
								}`}
							>
								<div
									className={
										product.title === "Get started on MELP" ? "" : "flex-1"
									}
								>
									{/* Icon */}
									<div className="text-neutral-900 mb-4">
										{typeof product.icon === "string" ? (
											<Image
												src={product.icon}
												alt={product.title}
												width={128}
												height={40}
												className="w-32"
											/>
										) : (
											product.icon
										)}
									</div>

									{/* Title */}
									<h3 className="text-2xl font-bold text-neutral-900 mb-2">
										{product.title}
									</h3>

									{/* Description */}
									<p className="text-neutral-700 mb-6 text-base">
										{product.description}
									</p>

									{/* Button */}
									{product.buttonText && (
										<button
											className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
												product.buttonVariant === "primary"
													? "bg-neutral-900 text-white hover:bg-neutral-800"
													: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300"
											}`}
										>
											{typeof product.buttonText === "function"
												? product.buttonText()
												: product.buttonText}
										</button>
									)}
								</div>

								{/* Background Image/Preview */}
								{product.image && (
									<div
										className={`${
											product.title === "Get started on MELP"
												? "relative"
												: "w-full md:w-[60%] min-h-[16rem] md:min-h-[18rem] flex-shrink-0"
										}`}
									>
										{product.image}
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Footer Text */}
				<div className="mt-8 text-center text-sm text-neutral-600">
					MELP is always at home right{" "}
					<button
						type="button"
						className="underline hover:text-brand-600 transition-colors"
					>
						in your browser
					</button>
					{"."}
				</div>
			</div>
		</section>
	);
}

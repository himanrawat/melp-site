"use client";
import React, { useEffect, useState, useRef } from "react";

const Sticky = () => {
	const [isFixed, setIsFixed] = useState(true);
	const stickyRef = useRef(null);
	const placeholderRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!placeholderRef.current) return;

			const placeholderRect = placeholderRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// If the placeholder's top position reaches the bottom of the viewport,
			// switch from fixed to static (let it settle into its natural position)
			if (placeholderRect.top <= windowHeight) {
				setIsFixed(false);
			} else {
				setIsFixed(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial state

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={placeholderRef} className="w-full">
			<div
				ref={stickyRef}
				className={`${
					isFixed ? "fixed" : "relative"
				} bottom-0 left-0 right-0 bg-white ${
					isFixed ? "border-t border-neutral-200" : ""
				} z-50 transition-all duration-300`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="text-center flex justify-between items-center flex-wrap">
						<h3 className="text-sm font-medium text-[#0000008a]">
							Trusted by top teams
						</h3>
						<div className="flex justify-end items-center space-x-4 flex-wrap gap-y-4">
							{/* OpenAI */}
							<div className="flex items-center justify-center h-8 transition-opacity duration-200">
								<span className="text-2xl font-bold text-black">OpenAI</span>
							</div>

							{/* Figma */}
							<div className="flex items-center justify-center h-8 transition-opacity duration-200">
								<div className="flex items-center space-x-2">
									<span className="text-lg font-semibold text-black">
										Figma
									</span>
								</div>
							</div>

							{/* Ramp */}
							<div className="flex items-center justify-center h-8 transition-opacity duration-200">
								<span className="text-xl font-bold text-black">ramp</span>
								<div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
							</div>

							{/* Cursor */}
							<div className="flex items-center justify-center h-8 transition-opacity duration-200">
								<div className="flex items-center space-x-2">
									<div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
										<span className="text-white text-xs">⚡</span>
									</div>
									<span className="text-lg font-semibold text-black">
										CURSOR
									</span>
								</div>
							</div>

							{/* Vercel */}
							<div className="flex items-center justify-center h-8 transition-opacity duration-200">
								<div className="flex items-center space-x-2">
									<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black"></div>
									<span className="text-xl font-bold text-black">Vercel</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sticky;

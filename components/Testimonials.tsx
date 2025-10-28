"use client";
import React from "react";

interface TestimonialStat {
	icon: React.ReactNode;
	text: string;
}

interface CompanyTestimonial {
	company: string;
	logo?: React.ReactNode;
	quote: string;
	link?: string;
}

const companyTestimonials: CompanyTestimonial[] = [
	{
		company: "TOYOTA",
		quote: "Streamlined workflows to reduce timelines by 3x. →",
	},
	{
		company: "ramp ↗",
		quote: "With Notion, every person at Ramp has an AI agent. →",
	},
	{
		company: "▲Vercel",
		quote:
			"Notion understands that you can solve a lot of problems with one tool. →",
	},
	{
		company: "MatchGroup",
		quote:
			"Notion has been the most powerful and impactful way to streamline our workflow. →",
	},
	{
		company: "CURSOR",
		quote:
			"Using the most AI-native tools like Notion is an important competitive advantage for us. →",
	},
	{
		company: "Figma",
		quote:
			"One hub for work and AI keeps everyone informed and work flowing. →",
	},
];

const testimonialStats: TestimonialStat[] = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m32,8c-13.25,0-24,10.75-24,24s10.75,24,24,24,24-10.75,24-24-10.75-24-24-24Zm14.96,14h-4.98c-.47-2.21-1.11-4.27-1.91-6.07,2.78,1.4,5.16,3.49,6.88,6.07Zm-10.86,0h-8.21c1.9-8.86,6.31-8.86,8.21,0Zm-21.64,14c-.29-1.29-.46-2.62-.46-4s.17-2.71.46-4h6.7c-.1,1.32-.16,2.66-.16,4s.05,2.68.16,4h-6.7Zm2.57,6h4.98c.47,2.21,1.11,4.27,1.91,6.07-2.78-1.4-5.16-3.49-6.88-6.07Zm4.98-20h-4.98c1.72-2.57,4.1-4.66,6.88-6.07-.8,1.8-1.43,3.86-1.91,6.07Zm5.88,20h8.21c-1.9,8.86-6.31,8.86-8.21,0Zm8.99-6h-9.76c-.08-1.24-.12-2.57-.12-4s.04-2.76.12-4h9.76c.08,1.24.12,2.57.12,4s-.04,2.76-.12,4Zm3.2,12.07c.8-1.8,1.43-3.86,1.91-6.07h4.98c-1.72,2.57-4.1,4.66-6.88,6.07Zm2.76-12.07c.1-1.32.16-2.66.16-4s-.05-2.68-.16-4h6.7c.29,1.29.46,2.62.46,4s-.17,2.71-.46,4h-6.7Z" />
			</svg>
		),
		text: "Over 100M users worldwide",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m50,16h-2v-8H16v8h-2c-6.17,0-10,3.83-10,10s3.83,10,10,10h3.69c2.08,4.29,6.02,7.04,11.31,7.78v2.22c0,2.47-1.53,4-4,4h-2v6h18v-6h-2c-2.47,0-4-1.53-4-4v-2.22c5.3-.74,9.23-3.49,11.31-7.78h3.69c6.17,0,10-3.83,10-10s-3.83-10-10-10ZM14,30c-2.84,0-4-1.16-4-4s1.16-4,4-4h2v6c0,.69.04,1.35.1,2h-2.1Zm36,0h-2.1c.06-.65.1-1.31.1-2v-6h2c2.84,0,4,1.16,4,4s-1.16,4-4,4Z" />
			</svg>
		),
		text: "#1 knowledge base 3 years running (G2)",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m48,20h-4v-4c0-4.94-3.06-8-8-8h-8c-4.94,0-8,3.06-8,8v4h-4c-4.92,0-8,3.08-8,8v18c0,4.94,3.06,8,8,8h32c4.94,0,8-3.06,8-8v-18c0-4.92-3.08-8-8-8Zm-22-4c0-1.63.37-2,2-2h8c1.63,0,2,.37,2,2v4h-12v-4Zm24,20H14v-4h36v4Z" />
			</svg>
		),
		text: "#1 AI enterprise search (G2)",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m43.76,35.82l5.44,16.73-2.96,2.15-14.23-10.34-14.32,10.4-2.91-2.11,5.47-16.83-14.5-10.53,1.07-3.29h17.92l5.52-17h3.48l5.52,17h17.79l1.09,3.37-14.39,10.46Z" />
			</svg>
		),
		text: "#1 rated AI writing (G2)",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m48,36v12h-4l-6-6v6h-12v-6l-6,6h-4v-12l10-10v-12c0-6.78,2.3-10,6-10s6,3.22,6,10v12l10,10Zm-16,15c-2.21,0-4,1.79-4,4s1.06,3.38,4,7c2.94-3.62,4-4.79,4-7s-1.79-4-4-4Z" />
			</svg>
		),
		text: "62% of Fortune 100",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m56,24c0,13.95-14.65,25.51-24,32-9.35-6.49-24-18.05-24-32,0-8.54,5.82-14,13-14,4.92,0,9.15,2.97,11,7.21,1.85-4.24,6.08-7.21,11-7.21,7.18,0,13,5.46,13,14Z" />
			</svg>
		),
		text: "Over 50% of YC companies",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width="1em"
				fill="currentColor"
			>
				<path d="m32,8c-13.25,0-24,10.75-24,24s10.75,24,24,24,24-10.75,24-24-10.75-24-24-24Zm14.96,14h-4.98c-.47-2.21-1.11-4.27-1.91-6.07,2.78,1.4,5.16,3.49,6.88,6.07Zm-10.86,0h-8.21c1.9-8.86,6.31-8.86,8.21,0Zm-21.64,14c-.29-1.29-.46-2.62-.46-4s.17-2.71.46-4h6.7c-.1,1.32-.16,2.66-.16,4s.05,2.68.16,4h-6.7Zm2.57,6h4.98c.47,2.21,1.11,4.27,1.91,6.07-2.78-1.4-5.16-3.49-6.88-6.07Zm4.98-20h-4.98c1.72-2.57,4.1-4.66,6.88-6.07-.8,1.8-1.43,3.86-1.91,6.07Zm5.88,20h8.21c-1.9,8.86-6.31,8.86-8.21,0Zm8.99-6h-9.76c-.08-1.24-.12-2.57-.12-4s.04-2.76.12-4h9.76c.08,1.24.12,2.57.12,4s-.04,2.76-.12,4Zm3.2,12.07c.8-1.8,1.43-3.86,1.91-6.07h4.98c-1.72,2.57-4.1,4.66-6.88,6.07Zm2.76-12.07c.1-1.32.16-2.66.16-4s-.05-2.68-.16-4h6.7c.29,1.29.46,2.62.46,4s-.17,2.71-.46,4h-6.7Z" />
			</svg>
		),
		text: "1.4M+ community members",
	},
];

export default function Testimonials() {
	// Duplicate the array to create seamless loop
	const duplicatedStats = [...testimonialStats, ...testimonialStats];

	return (
		<section
			className="w-full bg-[rgb(246, 245, 244)] py-16 overflow-hidden"
			style={{ backgroundColor: "rgb(246, 245, 244)" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-neutral-900 mb-12">
					Trusted by teams that ship.
				</h2>

				{/* Featured Testimonial - OpenAI */}
				<div className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
					<div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
						<div className="flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-neutral-900 mb-4">
								OpenAI
							</h3>
							<blockquote className="text-lg md:text-xl text-neutral-700 mb-4">
								&quot;There&apos;s power in a single platform where you can do
								all your work. Notion is that single place.&quot;
							</blockquote>
							<button
								type="button"
								className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center gap-1 text-left"
							>
								Read the full story →
							</button>
						</div>
						<div className="relative bg-neutral-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer">
							<div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
							<div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
								<svg
									className="w-6 h-6 text-brand-500 ml-1"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Company Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{companyTestimonials.map((testimonial, index) => (
						<div
							key={`company-${index}-${testimonial.company}`}
							className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow cursor-pointer"
						>
							<h4 className="text-lg font-bold text-neutral-900 mb-3">
								{testimonial.company}
							</h4>
							<p className="text-neutral-700 text-sm leading-relaxed">
								{testimonial.quote
									.replaceAll('"', "&quot;")
									.replaceAll("'", "&apos;")}
							</p>
						</div>
					))}
				</div>

				{/* Stats Marquee */}
				<div className="relative w-full overflow-hidden mx-auto">
					{/* Left fade overlay */}
					<div
						className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
						style={{
							background:
								"linear-gradient(to right, rgb(246, 245, 244) 0%, transparent 100%)",
						}}
					/>

					{/* Right fade overlay */}
					<div
						className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
						style={{
							background:
								"linear-gradient(to left, rgb(246, 245, 244) 0%, transparent 100%)",
						}}
					/>

					<div className="flex testimonials-marquee whitespace-nowrap">
						{duplicatedStats.map((stat, index) => (
							<div
								key={`stat-${index}-${stat.text}`}
								className="inline-flex items-center gap-2 mx-2"
								style={{ minWidth: "fit-content" }}
							>
								<span className="text-neutral-700 text-xl flex-shrink-0">
									{stat.icon}
								</span>
								<p className="text-neutral-900 font-medium text-sm sm:text-base">
									{stat.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<style
				dangerouslySetInnerHTML={{
					__html: `
					@keyframes testimonials-marquee-animation {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}

					.testimonials-marquee {
						animation: testimonials-marquee-animation 30s linear infinite;
					}

					.testimonials-marquee:hover {
						animation-play-state: paused;
					}
				`,
				}}
			/>
		</section>
	);
}

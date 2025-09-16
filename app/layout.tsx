import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MELP - Create together. Communicate clearly. Collaborate seamlessly.",
	description:
		"One platform that unites people, ideas, and workflows—anywhere, anytime. Join millions of teams using MELP for video calls, AI-powered insights, and seamless collaboration.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main className="mt-18 lg:mt-32 overflow-hidden">{children}</main>
			</body>
		</html>
	);
}

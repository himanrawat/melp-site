"use client";
import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import Notification from "@/components/Notification";
import React from "react";

export default function Home() {
	return (
		<>
			<Notification />
			<Hero />
			<Dashboard />
		</>
	);
}

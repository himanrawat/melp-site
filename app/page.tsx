"use client";
import Dashboard from "@/components/Dashboard";
import Notification from "@/components/Notification";
import React from "react";

export default function Home() {
	return (
		<>
			<Notification />
			<h1>Hello world</h1>
			<Dashboard />
		</>
	);
}

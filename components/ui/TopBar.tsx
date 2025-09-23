"use client";

import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import dayNight from "@/public/day-night.svg";
import Image from "next/image";
import Notification from "@/public/icons/notification.svg";
import NotificationFilled from "@/public/icons/notification-filled.svg";
import pin from "@/public/icons/pin.svg";
import pinFilled from "@/public/icons/pin-filled.svg";
import message from "@/public/icons/message.svg";
import messageFilled from "@/public/icons/message-filled.svg";

const TopBar = () => {
	const [hoveredIcon, setHoveredIcon] = React.useState<string | null>(null);
	const topbarItem = [
		{ name: "pin", icon: pin, filledIcon: pinFilled },
		{ name: "message", icon: message, filledIcon: messageFilled },
		{
			name: "notification",
			icon: Notification,
			filledIcon: NotificationFilled,
		},
	];
	return (
		<>
			<div className="h-[77px] w-full flex justify-between items-center bg-white px-5 border-b border-[#D6DBE1]">
				<p>your workspace</p>
				<div className="bg-[#f2f2f2] rounded-[5px] flex items-center gap-3 px-3 w-[25%]">
					<div className="w-10 h-10 flex items-center justify-center ">
						<SearchIcon className=" text-brand-500" />
					</div>
					<div className="flex-1">
						<input
							type="text"
							placeholder="Search..."
							className="bg-transparent outline-none w-full"
						/>
					</div>
					<div className="flex items-center justify-center w-10 h-10">
						<Image src={dayNight} alt="Day Night Toggle" />
					</div>
				</div>
				<div className="flex items-center h-full gap-5">
					<button className="bg-[#9c9696] hover:bg-[#EE4136] px-3.5 py-1.5 rounded-[2px] text-white cursor-pointer transition-colors duration-200">
						LIVE CALLS
					</button>
					<div className="h-full flex justify-center items-center">
						{topbarItem.map((item) => (
							<div
								key={item.name}
								className="h-full flex justify-center items-center cursor-pointer w-[57px] hover:bg-[#F2F2F2]"
								onMouseEnter={() => setHoveredIcon(item.name)}
								onMouseLeave={() => setHoveredIcon(null)}
							>
								<Image
									src={hoveredIcon === item.name ? item.filledIcon : item.icon}
									alt={item.name}
								/>
							</div>
						))}
					</div>
					<div>
						<Image
							src="https://avatar.iran.liara.run/public"
							alt="User Avatar"
							width={40}
							height={40}
							className="w-10 h-10"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;

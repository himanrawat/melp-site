"use client";

import React from "react";
import { Video } from "lucide-react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export const DemoVideoFeature = () => {
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

const VideoCallCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-green-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M23 7L16 12L23 17V7Z"
						fill="currentColor"
					/>
					<rect
						x="1"
						y="5"
						width="15"
						height="14"
						rx="2"
						ry="2"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Video Call</p>
				<p className="font-normal text-sm text-gray-600">HD quality meeting</p>
			</div>
			<div className="ml-auto">
				<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
			</div>
		</div>
	);
};

export default VideoCallCard;

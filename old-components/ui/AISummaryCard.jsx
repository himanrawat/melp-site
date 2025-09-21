const AISummaryCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-gradient-to-r from-pink-400 to-violet-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
						fill="currentColor"
					/>
					<path
						d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"
						fill="currentColor"
					/>
					<path
						d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">AI Summary</p>
				<p className="font-normal text-sm text-gray-600">Smart insights</p>
			</div>
			<div className="ml-auto">
				<div className="relative">
					<div className="w-8 h-6 bg-gradient-to-r from-pink-100 to-violet-100 rounded-full flex items-center justify-center">
						<div className="w-6 h-4 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full animate-pulse"></div>
					</div>
					<div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full opacity-30 animate-ping"></div>
				</div>
			</div>
		</div>
	);
};

export default AISummaryCard;

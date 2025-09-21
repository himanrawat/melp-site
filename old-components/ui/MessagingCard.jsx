const MessagingCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-purple-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Messaging</p>
				<p className="font-normal text-sm text-gray-600">Instant communication</p>
			</div>
			<div className="ml-auto">
				<div className="relative">
					<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
						<span className="text-white text-xs font-bold">3</span>
					</div>
					<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
				</div>
			</div>
		</div>
	);
};

export default MessagingCard;

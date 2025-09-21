const TeamsCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-indigo-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
						fill="currentColor"
					/>
					<path
						d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z"
						fill="currentColor"
					/>
					<path
						d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2V4C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6V8Z"
						fill="currentColor"
					/>
					<path
						d="M18 10C20.2091 10 22 11.7909 22 14V16H20V14C20 12.8954 19.1046 12 18 12V10Z"
						fill="currentColor"
					/>
					<path
						d="M6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2V4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6V8Z"
						fill="currentColor"
					/>
					<path
						d="M6 10C3.79086 10 2 11.7909 2 14V16H4V14C4 12.8954 4.89543 12 6 12V10Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Teams</p>
				<p className="font-normal text-sm text-gray-600">Workspace management</p>
			</div>
			<div className="ml-auto">
				<div className="grid grid-cols-2 gap-1">
					<div className="w-2 h-2 bg-indigo-500 rounded-sm animate-pulse" style={{animationDelay: '0s'}}></div>
					<div className="w-2 h-2 bg-indigo-500 rounded-sm animate-pulse" style={{animationDelay: '0.1s'}}></div>
					<div className="w-2 h-2 bg-indigo-500 rounded-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
					<div className="w-2 h-2 bg-indigo-500 rounded-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
				</div>
			</div>
		</div>
	);
};

export default TeamsCard;

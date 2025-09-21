const GroupCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-teal-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4Z"
						fill="currentColor"
					/>
					<path
						d="M8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6Z"
						fill="currentColor"
					/>
					<path
						d="M8 13C11.3137 13 14 15.6863 14 19V20H2V19C2 15.6863 4.68629 13 8 13Z"
						fill="currentColor"
					/>
					<path
						d="M16 13C17.3256 13 18.5964 13.5268 19.5355 14.4645C20.4732 15.4036 21 16.6744 21 18V20H15V19C15 16.4889 14.1173 14.1612 12.6177 12.3438C13.6421 12.7578 14.7804 13 16 13Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Group</p>
				<p className="font-normal text-sm text-gray-600">Team collaboration</p>
			</div>
			<div className="ml-auto flex -space-x-2">
				<div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '0s'}}></div>
				<div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '0.2s'}}></div>
				<div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '0.4s'}}></div>
			</div>
		</div>
	);
};

export default GroupCard;

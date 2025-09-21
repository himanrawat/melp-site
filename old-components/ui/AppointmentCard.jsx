const AppointmentCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-rose-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Book Appointment</p>
				<p className="font-normal text-sm text-gray-600">Schedule meetings</p>
			</div>
			<div className="ml-auto">
				<div className="relative">
					<div className="w-8 h-8 border-2 border-rose-400 rounded-full animate-spin border-t-transparent"></div>
					<div className="absolute inset-2 w-4 h-4 bg-rose-400 rounded-full animate-ping"></div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentCard;

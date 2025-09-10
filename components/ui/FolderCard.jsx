const FolderCard = ({ shortName, userName, userMsg }) => {
	return (
		<div className="flex items-center gap-4 bg-white  w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-primary-300 h-14 w-14 flex justify-center items-center">
				<p className="text-white font-bold text-center text-2xl ">
					{shortName}
				</p>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800 ">{userName}</p>
				<p className="font-normal text-sm text-gray-600 ">{userMsg}</p>
			</div>
			<div>
				<svg
					width="25"
					height="25"
					viewBox="0 0 25 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="transition-colors duration-300"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5461 7.54623C13.6507 7.54623 14.5461 6.6508 14.5461 5.54623C14.5461 4.44166 13.6507 3.54623 12.5461 3.54623C11.4416 3.54623 10.5461 4.44166 10.5461 5.54623C10.5461 6.6508 11.4416 7.54623 12.5461 7.54623Z"
						fill="currentColor"
						className="text-gray-500 dark:text-gray-400"
					></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5461 14.5462C13.6507 14.5462 14.5461 13.6508 14.5461 12.5462C14.5461 11.4417 13.6507 10.5462 12.5461 10.5462C11.4416 10.5462 10.5461 11.4417 10.5461 12.5462C10.5461 13.6508 11.4416 14.5462 12.5461 14.5462Z"
						fill="currentColor"
						className="text-gray-500 dark:text-gray-400"
					></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5461 21.5462C13.6507 21.5462 14.5461 20.6508 14.5461 19.5462C14.5461 18.4417 13.6507 17.5462 12.5461 17.5462C11.4416 17.5462 10.5461 18.4417 10.5461 19.5462C10.5461 20.6508 11.4416 21.5462 12.5461 21.5462Z"
						fill="currentColor"
						className="text-gray-500 dark:text-gray-400"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default FolderCard;

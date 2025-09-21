const AudioCallCard = () => {
	return (
		<div className="flex items-center gap-4 bg-white w-full p-4 rounded-lg shadow-lg border border-gray-100 transition-colors duration-300">
			<div className="rounded-full bg-blue-400 h-14 w-14 flex justify-center items-center">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white"
				>
					<path
						d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63468 2.65162C2.82187 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.11 2H7.11C7.59531 1.99522 8.06711 2.16708 8.43849 2.48353C8.80988 2.79999 9.05818 3.23945 9.14 3.72C9.29364 4.68007 9.55615 5.62273 9.92 6.53C10.0295 6.88792 10.0295 7.27695 9.92 7.63487C9.81049 7.99279 9.58748 8.30464 9.28 8.53L7.85 9.95C9.26454 12.4135 11.5865 14.7354 14.05 16.15L15.47 14.72C15.6954 14.4125 16.0072 14.1895 16.3651 14.08C16.723 13.9705 17.1121 13.9705 17.47 14.08C18.3773 14.4439 19.3199 14.7064 20.28 14.86C20.7658 14.9408 21.2094 15.1925 21.5265 15.5675C21.8437 15.9425 22.0122 16.4171 22 16.92Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<p className="font-medium text-xl text-gray-800">Audio Call</p>
				<p className="font-normal text-sm text-gray-600">Crystal clear sound</p>
			</div>
			<div className="ml-auto flex gap-1">
				<div className="w-1 h-6 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
				<div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
				<div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
				<div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
			</div>
		</div>
	);
};

export default AudioCallCard;

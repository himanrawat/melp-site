import { useState } from "react";

const Notification = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
		<>
			<div className="bg-brand-700 text-white text-center py-2 px-4 relative">
				<p>This section is temporary and will be used for announcements.</p>
				<button
					onClick={() => setIsVisible(false)}
					className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"
					aria-label="Close notification"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 6L6 18M6 6L18 18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</>
	);
};

export default Notification;

"use client";

const SocialMedia = () => {
	const socialLinks = [
		{
			name: "YouTube",
			href: "#",
			iconBgColor: "linear-gradient(135deg, #FF0033 0%, #CC0000 100%)",
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
				</svg>
			),
			rotation: "rotate-6",
			zIndex: "z-10",
		},
		{
			name: "Facebook",
			href: "#",
			iconBgColor: "linear-gradient(135deg, #1877F2 0%, #4267B2 100%)",
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			),
			rotation: "rotate-0",
			zIndex: "z-20",
		},
		{
			name: "LinkedIn",
			href: "#",
			iconBgColor: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
			rotation: "-rotate-6",
			zIndex: "z-30",
		},
		{
			name: "X",
			href: "#",
			iconBgColor: "linear-gradient(135deg, #000000 0%, #000000 100%)",
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
				</svg>
			),
			rotation: "rotate-12",
			zIndex: "z-40",
		},
	];

	return (
		<div className="flex flex-col items-center space-y-3">
			{/* Compact Heading */}
			<div className="text-center">
				<h4 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-1">
					Stay Connected
				</h4>
				<p className="text-gray-600 dark:text-neutral-400 text-xs">
					Join our community
				</p>
			</div>
			
			{/* Compact Social Media Cards */}
			<div className="relative flex items-center justify-center w-64 h-20 mx-auto">
			{socialLinks.map((link, index) => {
				// Calculate position to center the group and prevent overflow
				const totalCards = socialLinks.length;
				const cardSpacing = 35; // Reduced spacing for compact layout
				const totalWidth = (totalCards - 1) * cardSpacing;
				const startOffset = -totalWidth / 2;
				const cardPosition = startOffset + (index * cardSpacing);
				
				return (
					<a
						key={link.name}
						href={link.href}
						className={`
							absolute text-white transition-all duration-300 
							w-14 h-14 flex justify-center items-center 
							rounded-xl shadow-lg hover:scale-110 hover:shadow-xl
							${link.rotation} ${link.zIndex}
							hover:z-50 cursor-pointer
							backdrop-blur-sm border border-white/20
						`}
						style={{
							background: link.iconBgColor,
							left: '50%',
							transform: `translateX(calc(-50% + ${cardPosition}px)) ${
								link.rotation === 'rotate-6' ? 'rotate(6deg)' : 
								link.rotation === 'rotate-0' ? 'rotate(0deg)' : 
								link.rotation === '-rotate-6' ? 'rotate(-6deg)' : 
								'rotate(12deg)'
							}`,
							boxShadow:
								"0 15px 30px -8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
						}}
						aria-label={`Follow us on ${link.name}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-6 h-6">
							{link.icon}
						</div>
					</a>
				);
			})}
			</div>
		</div>
	);
};

export default SocialMedia;

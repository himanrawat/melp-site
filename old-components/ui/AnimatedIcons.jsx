// Video Call Icon Component
export const VideoCallIcon = () => {
  return (
    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-pulse"
      >
        <path
          d="M21 7L13 12L21 17V7Z"
          fill="currentColor"
        />
        <rect
          x="2"
          y="6"
          width="11"
          height="12"
          rx="2"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

// Audio Call Icon Component
export const AudioCallIcon = () => {
  return (
    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-bounce"
      >
        <path
          d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.36 21 2 12.64 2 2.08C2 1.48 2.48 1 3.08 1H6.08C6.68 1 7.16 1.48 7.16 2.08C7.16 3.68 7.52 5.2 8.16 6.56C8.32 6.88 8.24 7.28 7.96 7.52L6.08 9.08C7.64 12.28 10.72 15.36 13.92 16.92L15.48 15.04C15.72 14.76 16.12 14.68 16.44 14.84C17.8 15.48 19.32 15.84 20.92 15.84C21.52 15.84 22 16.32 22 16.92Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

// Messaging Icon Component
export const MessagingIcon = () => {
  return (
    <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-pulse"
      >
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

// Drive Icon Component
export const DriveIcon = () => {
  return (
    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-spin"
        style={{ animationDuration: '3s' }}
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
          fill="currentColor"
        />
        <path
          d="M12 6V12L16 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// AI Summary Icon Component
export const AISummaryIcon = () => {
  return (
    <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-pulse"
      >
        <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-ping" />
        <path
          d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Group Icon Component
export const GroupIcon = () => {
  return (
    <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-bounce"
        style={{ animationDelay: '0.2s' }}
      >
        <path
          d="M16 4C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12C13.79 12 12 10.21 12 8C12 5.79 13.79 4 16 4ZM8 6C9.66 6 11 7.34 11 9C11 10.66 9.66 12 8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6ZM8 13C10.67 13 16 14.34 16 17V20H0V17C0 14.34 5.33 13 8 13ZM16 13C16.67 13 17.33 13.08 18 13.2C19.2 14.05 20 15.34 20 17V20H18V17.5C18 15.03 14.75 13.9 16 13Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

// Teams Icon Component
export const TeamsIcon = () => {
  return (
    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-pulse"
      >
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="currentColor"
        />
        <path
          d="M18 8C18 8.55 17.78 9.05 17.41 9.41L19 11L20.41 9.59C20.78 9.22 21 8.72 21 8.17C21 7.07 20.17 6.17 19.17 6.17C18.72 6.17 18.22 6.39 17.59 6.76"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

// Appointment Icon Component
export const AppointmentIcon = () => {
  return (
    <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white animate-bounce"
        style={{ animationDelay: '0.4s' }}
      >
        <path
          d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

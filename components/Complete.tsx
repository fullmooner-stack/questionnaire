import Link from "next/link";

// components/Complete.tsx
export default function Complete() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 text-center space-y-6 animate-fadeIn">
      {/* Celebration animation */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl animate-bounce">
          🎉
        </div>
        {/* Confetti dots */}
        <div className="absolute -top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping [animation-delay:0.5s]" />
        <div className="absolute -bottom-4 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping [animation-delay:1s]" />
        <div className="absolute -bottom-2 -right-4 w-3 h-3 bg-purple-300 rounded-full animate-ping [animation-delay:1.5s]" />
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-white">Survey Complete!</h2>
        <p className="text-lg text-gray-400 max-w-md">
          Thank you for sharing your thoughts with us. Your responses will help
          us create a better experience for you.
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500" />
          <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}

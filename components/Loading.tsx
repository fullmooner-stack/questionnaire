// components/Loading.tsx
export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Animated survey icon */}
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/25">
          <svg
            className="w-10 h-10 text-white animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin [animation-duration:3s]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full" />
        </div>
        <div className="absolute inset-0 animate-spin [animation-duration:3s] [animation-delay:1s]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full" />
        </div>
        <div className="absolute inset-0 animate-spin [animation-duration:3s] [animation-delay:2s]">
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full" />
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-white animate-pulse">
          Preparing your survey
        </p>
        <p className="text-sm text-gray-400">Just a moment...</p>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-loading-bar" />
      </div>
    </div>
  );
}

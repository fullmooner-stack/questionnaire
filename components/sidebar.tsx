export default function Sidebar({
  stage,
  stages,
}: {
  stage: string;
  stages: string[];
}) {
  // Icons for each stage
  const stageIcons: Record<string, React.ReactNode> = {
    intro: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    region: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    questions: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  };

  // Stage descriptions
  const stageDescriptions: Record<string, string> = {
    intro: "Welcome & overview",
    region: "Your location",
    questions: "Share your thoughts",
  };

  const currentStageIndex = stages.indexOf(stage);

  return (
    <aside className="relative w-64 min-h-screen">
      {/* Sidebar background with glass effect */}
      <div className="fixed w-64 h-full backdrop-blur-xl bg-linear-to-b from-white/8 via-white/5 to-transparent border-r border-white/10">
        {/* Sidebar header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Survey</h2>
              <p className="text-xs text-gray-400">Step by step</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Sidebar Navigation" className="p-4">
          <ul className="space-y-2">
            {stages.map((s, i) => {
              const isCompleted = i < currentStageIndex;
              const isCurrent = s === stage;
              const isLocked = i > currentStageIndex;

              return (
                <li key={i}>
                  <div className="relative">
                    <a
                      href="#"
                      className={`
                        relative flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group
                        ${
                          isCurrent
                            ? "bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 shadow-lg shadow-purple-500/10"
                            : isLocked
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-white/5 border border-transparent hover:border-white/10"
                        }
                      `}
                      onClick={(e) => isLocked && e.preventDefault()}
                    >
                      {/* Stage number/icon */}
                      <div
                        className={`
                          relative shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                          transition-all duration-500
                          ${
                            isCompleted
                              ? "bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25"
                              : isCurrent
                                ? "bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 animate-pulse"
                                : "bg-white/10 border border-white/20"
                          }
                        `}
                      >
                        {isCompleted ? (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span
                            className={`text-sm font-bold ${isCurrent ? "text-white" : "text-gray-400"}`}
                          >
                            {stageIcons[s] || i + 1}
                          </span>
                        )}

                        {/* Completion glow */}
                        {isCompleted && (
                          <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-sm" />
                        )}
                      </div>

                      {/* Stage info */}
                      <div className="flex-1 min-w-0 pt-1">
                        <p
                          className={`
                            text-sm font-medium capitalize transition-colors duration-300
                            ${isCurrent ? "text-white" : isCompleted ? "text-purple-300" : "text-gray-400"}
                          `}
                        >
                          {s}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 capitalize">
                          {stageDescriptions[s] || `Step ${i + 1}`}
                        </p>

                        {/* Current stage indicator */}
                        {isCurrent && (
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-xs text-purple-400">
                              In progress
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Locked icon */}
                      {isLocked && (
                        <div className="shrink-0 pt-1">
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      )}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="text-xs font-medium text-gray-300">Quick Tip</p>
            </div>
            <p className="text-xs text-gray-500">
              Take your time with each question. Your honest answers help us
              understand you better.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

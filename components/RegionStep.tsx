import { SubmitButton } from "./ui/SubmitButton";

const regionOptions = {
  Americas: {
    icon: "🌎",
    options: ["North America", "Central or South America"],
    linear: "from-purple-500 to-pink-500",
  },
  Europe: {
    icon: "🏰",
    options: ["Europe"],
    linear: "from-blue-500 to-cyan-500",
  },
  Africa: {
    icon: "🦁",
    options: ["North Africa", "Central Africa", "South Africa"],
    linear: "from-orange-500 to-yellow-500",
  },
  Asia: {
    icon: "🏯",
    options: ["North Asia", "Middle East", "Central or South Asia"],
    linear: "from-green-500 to-emerald-500",
  },
  "Australia and Oceania": {
    icon: "🏄",
    options: ["Australia or Oceania"],
    linear: "from-pink-500 to-rose-500",
  },
};

export default function RegionStep({
  formAction,
}: {
  formAction: (payload: FormData) => void;
}) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <form action={formAction} className="relative space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          {/* Globe icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/20 mb-2">
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-purple-400" />
            <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
              Your Location
            </span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-purple-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where in the world{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              do you live?
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Select your region to help us personalize your experience
          </p>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(regionOptions).map(
            ([group, { icon, options, linear }]) => (
              <label
                key={group}
                className={`
                  relative group cursor-pointer
                  p-6 rounded-2xl border-2 transition-all duration-300
                  border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8
                  has-checked:border-purple-400 has-checked:bg-white/8
                  has-checked:shadow-lg has-checked:shadow-purple-500/20
                `}
              >
                <input
                  type="radio"
                  name="region"
                  value={group}
                  className="peer sr-only"
                  required
                />

                {/* Gradient overlay on selection */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                    bg-linear-to-br ${linear}
                    has-checked:opacity-100
                  `}
                  style={{ opacity: 0.05 }}
                />

                {/* Selection indicator */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white/20 transition-all duration-300 flex items-center justify-center has-checked:border-purple-400 has-checked:bg-purple-400">
                  <svg
                    className="w-3 h-3 text-white opacity-0 transition-opacity duration-300 has-checked:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="relative space-y-3">
                  {/* Region icon */}
                  <div
                    className={`
                      w-14 h-14 rounded-xl bg-linear-to-br ${linear} bg-opacity-20
                      flex items-center justify-center text-2xl
                      transition-transform duration-300
                      group-has-checked:scale-110
                    `}
                  >
                    {icon}
                  </div>

                  {/* Region name */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {group}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {options.length}{" "}
                      {options.length === 1 ? "country" : "countries"}
                    </p>
                  </div>

                  {/* Countries list */}
                  <ul className="space-y-1">
                    {options.map((option) => (
                      <li
                        key={option}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                        {option}
                      </li>
                    ))}
                  </ul>

                  {/* Hover glow effect */}
                  <div
                    className={`
                      absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300
                      bg-linear-to-br ${linear} blur-xl -z-10
                      group-hover:opacity-100
                    `}
                    style={{ opacity: 0.1 }}
                  />
                </div>
              </label>
            ),
          )}
        </div>

        {/* Selected region preview */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
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
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span className="text-sm text-gray-400">
              Click on a region to select it
            </span>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center pt-4">
          <SubmitButton className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            {/* Button background */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 animate-linear bg-size-[200%_200%]" />
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span className="relative flex items-center gap-2">
              Continue
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

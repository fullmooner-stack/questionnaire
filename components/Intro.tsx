"use client";
import { SubmitButton } from "./ui/SubmitButton";

export default function Intro({
  formAction,
}: {
  formAction: (payload: FormData) => void;
}) {
  return (
    <form action={formAction} className="relative w-full max-w-3xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl p-8 md:p-12">
        {/* Header section */}
        <div className="space-y-6 mb-12">
          {/* Welcome badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20">
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
            <span className="text-sm font-medium text-purple-300">Welcome</span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-pink-400 rounded-full" />
              <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                {`Let's Get Started`}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Discover
              <br />
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-linear bg-size-[200%_200%]">
                More About Yourself?
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
            Help us understand you better! This quick 20-question survey
            explores your lifestyle, preferences, travel dreams, hobbies, and
            more. Your responses will only take a couple of minutes and will
            give you valuable insights into what makes you tick.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {[
              {
                icon: (
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Quick & Easy",
                description: "Just 2 minutes",
              },
              {
                icon: (
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Private & Secure",
                description: "Your data is safe",
              },
              {
                icon: (
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Valuable Insights",
                description: "Learn about yourself",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consent section */}
        <div className="space-y-4 mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Before We Begin
          </h3>

          <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 cursor-pointer group">
            <div className="relative shrink-0 mt-0.5">
              <input
                required
                type="checkbox"
                name="terms_of_service"
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-md border-2 border-white/20 peer-checked:border-purple-400 peer-checked:bg-purple-400 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
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
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                I agree to the{" "}
                <a
                  href="/tos"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  Terms of Service
                </a>
              </span>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 cursor-pointer group">
            <div className="relative shrink-0 mt-0.5">
              <input
                required
                type="checkbox"
                name="privacy_policy"
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-md border-2 border-white/20 peer-checked:border-purple-400 peer-checked:bg-purple-400 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
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
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                I agree to the{" "}
                <a
                  href="/privacy_policy"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </span>
            </div>
          </label>
        </div>

        {/* Action button */}
        <div className="flex justify-center md:justify-start">
          <SubmitButton className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            {/* Button background */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 animate-linear bg-size-[200%_200%]" />
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Button content */}
            <span className="relative flex items-center gap-2">
              Begin Survey
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

        {/* Bottom hint */}
        <div className="mt-6 text-center md:text-left">
          <p className="text-xs text-gray-500 flex items-center gap-2 justify-center md:justify-start">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Press Enter to continue after selecting options
          </p>
        </div>
      </div>
    </form>
  );
}

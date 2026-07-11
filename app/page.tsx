import Link from "next/link";
import prisma from "./lib/prisma";
import { cookies } from "next/headers";
import {
  FloatingCard,
  FloatingCardItem,
} from "@/components/ui/floating_card/FloatingCardItem";

export default async function Home() {
  const total = await prisma.surveyQuestion.count({
    where: { surveyId: "1" },
  });
  let completed = 0;
  const userSurveyId = (
    await prisma.userSurvey.findUnique({
      where: {
        sessionId_surveyId: {
          sessionId: (await cookies()).get("sessionId")!.value!,
          surveyId: "1",
        },
      },
      select: { id: true },
    })
  )?.id;
  if (userSurveyId)
    completed = await prisma.answer.count({
      where: { userSurveyId },
    });

  return (
    <div className="relative flex flex-1 w-full min-h-screen items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        {/* Floating orbs with CSS animations */}
        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" /> */}
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse [animation-delay:1s]" /> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:0.5s]" />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 space-y-8 animate-slideInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeIn [animation-delay:0.4s]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="text-sm text-purple-300 font-medium">
                20 Questions • 2 Minutes
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 animate-fadeIn [animation-delay:0.6s]">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-pink-400 rounded-full" />
                <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                  Self Discovery
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Discover More
                <br />
                <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_200%]">
                  About Yourself
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-gray-300 animate-fadeIn [animation-delay:0.8s]">
              Help us understand you better! This quick 20-question survey
              explores your lifestyle, preferences, travel dreams, hobbies, and
              more. Your responses will only take a couple of minutes and will
              give you valuable insights into what makes you tick.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn [animation-delay:1s]">
              <Link
                href={`/survey?id=${1}`}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {/* Button background effects */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl" />
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Button content */}
                <span className="relative flex items-center gap-2">
                  Start the Survey
                  <svg
                    className="w-5 h-5 animate-bounce-right"
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
              </Link>

              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-300 rounded-2xl border-2 border-white/10 hover:border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 animate-fadeIn [animation-delay:1.2s]">
              {[
                { value: "20", label: "Questions" },
                { value: "2min", label: "To Complete" },
                { value: "100%", label: "Insightful" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fadeIn hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="hidden lg:block flex-1 animate-slideInRight">
            <div className="relative">
              {/* Floating card with CSS animation */}
              <FloatingCard>
                <FloatingCard.Item
                  header="What's your ideal weekend?"
                  details="Exploring new places ✈️"
                  boxTag="1"
                  boxColor="from-purple-500"
                />
                <FloatingCard.Item
                  header="What's your ideal weekend?"
                  details="Exploring new places ✈️"
                  boxTag="1"
                  boxColor="from-purple-500"
                />
                <FloatingCard.Item
                  header="What's your ideal weekend?"
                  details="Exploring new places ✈️"
                  boxTag="1"
                  boxColor="from-purple-500"
                />
              </FloatingCard>
              <div className="animate-float-slow relative z-10">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div
                      className="flex items-center gap-3 animate-fadeIn"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">
                          {`What's your ideal weekend?`}
                        </p>
                        <p className="text-purple-300 text-xs mt-1">
                          Exploring new places ✈️
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 animate-fadeIn"
                      style={{ animationDelay: "1.2s" }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">
                          Pick your dream destination
                        </p>
                        <p className="text-purple-300 text-xs mt-1">
                          Tropical paradise 🏝️
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-3 animate-fadeIn"
                      style={{ animationDelay: "1.4s" }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">
                          How do you unwind?
                        </p>
                        <p className="text-purple-300 text-xs mt-1">
                          Reading & relaxation 📚
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>
                          {completed}/{total}
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                          style={{ width: `${(completed / total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decorative shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import RegionStep from "./RegionStep";
import Intro from "./Intro";
import { useActionState } from "react";
import { BrowserSurveyState, surveyActions } from "@/app/actions";
import { Loading } from "./Loading";
import Sidebar from "./sidebar";

export default function SurveyRunner({
  userSurvey,
  children,
}: Readonly<{
  userSurvey: BrowserSurveyState;
  children: React.ReactNode;
}>) {
  const [state, formAction, loading] = useActionState(
    surveyActions,
    userSurvey,
  );

  console.log(state.currPage);

  return (
    <div className="flex w-full min-h-screen">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:2s]" />
      </div>

      {/* Sidebar */}
      <div className="relative z-20">
        {/* Sidebar glow effect */}
        <div className="absolute -right-10 top-0 bottom-0 w-20 bg-linear-to-r from-purple-500/10 to-transparent blur-2xl" />

        <Sidebar
          stage={state.currPage}
          stages={["intro", "region", "questions"]}
        />
      </div>

      {/* Main content area */}
      <div className="relative flex-1 flex flex-col z-10">
        {/* Content header with stage indicator */}
        <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-8 py-4">
          <div className="flex items-center gap-4">
            {/* Current stage badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-300 capitalize">
                {state.currPage}
              </span>
            </div>

            {/* Stage progress dots */}
            <div className="flex items-center gap-2">
              {["intro", "region", "questions"].map((stage, index) => {
                const stageIndex = ["intro", "region", "questions"].indexOf(
                  state.currPage,
                );
                const isCompleted = index < stageIndex;
                const isCurrent = index === stageIndex;

                return (
                  <div key={stage} className="flex items-center gap-2">
                    <div
                      className={`
                        w-3 h-3 rounded-full transition-all duration-500
                        ${
                          isCompleted
                            ? "bg-linear-to-r from-purple-400 to-pink-400 scale-100"
                            : isCurrent
                              ? "bg-purple-400 scale-125 animate-pulse"
                              : "bg-white/20 scale-75"
                        }
                      `}
                    />
                    {index < 2 && (
                      <div
                        className={`
                          w-8 h-0.5 transition-all duration-500
                          ${
                            index < stageIndex
                              ? "bg-linear-to-r from-purple-400 to-pink-400"
                              : "bg-white/10"
                          }
                        `}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-3xl">
            {/* Page transition wrapper */}
            <div className="relative">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400/30 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/30 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/30 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400/30 rounded-br-lg" />

              {/* Content with animation */}
              <div className="relative animate-fadeIn">
                {loading ? (
                  <div className="flex items-center justify-center min-h-100">
                    <Loading />
                  </div>
                ) : state.currPage === "intro" ? (
                  <div className="animate-slideInLeft">
                    <Intro formAction={formAction} />
                  </div>
                ) : state.currPage === "region" ? (
                  <div className="animate-slideInRight">
                    <RegionStep formAction={formAction} />
                  </div>
                ) : (
                  <div className="animate-fadeIn">{children}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

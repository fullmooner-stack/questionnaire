"use client";
import { type QuestionRunnerState, questionsAction } from "@/app/actions";
import QuestionStep from "./QuestionStep";
import { useActionState } from "react";
import Complete from "./Complete";
import { Loading } from "./Loading";

export default function QuestionForm(userSurvey: QuestionRunnerState) {
  const [state, formAction, loading] = useActionState(
    questionsAction,
    userSurvey,
  );

  if (loading) return <Loading />;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative space-y-6">
        {/* Progress indicator */}
        {state.currentQuestion && (
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white">
                  {state.currentQuestionIndex + 1}
                </div>
                <span className="text-sm text-gray-400">
                  of {state.questionsCount} questions
                </span>
              </div>
              <span className="text-sm font-medium text-purple-300">
                {Math.round(
                  ((state.currentQuestionIndex + 1) / state.questionsCount) *
                    100,
                )}
                % complete
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-500 ease-out animate-linear bg-size-[200%_200%]"
                style={{
                  width: `${((state.currentQuestionIndex + 1) / state.questionsCount) * 100}%`,
                }}
              />
              {/* Shimmer effect */}
              <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>

            {/* Step indicators */}
            <div className="hidden md:flex items-center gap-1.5 mt-3">
              {[...Array(state.questionsCount)].map((_, i) => {
                const isCompleted = i < state.currentQuestionIndex;
                const isCurrent = i === state.currentQuestionIndex;

                return (
                  <div
                    key={i}
                    className={`
                      h-1 flex-1 rounded-full transition-all duration-300
                      ${
                        isCompleted
                          ? "bg-linear-to-r from-purple-400 to-pink-400"
                          : isCurrent
                            ? "bg-purple-400 animate-pulse"
                            : "bg-white/10"
                      }
                    `}
                  />
                );
              })}
            </div>
          </div>
        )}
        {/* Top row with title and progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Animated icon */}
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">
                {/* {userSurvey.surveyTitle || "Discover Yourself"} */}
                {"Discover Yourself"}
              </h1>
              <p className="text-sm text-gray-400">
                {"Share your preferences with us"}
              </p>
            </div>
          </div>

          {/* Question counter */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm font-medium text-purple-300">
              Question{" "}
              {userSurvey.currentQuestionIndex !== undefined &&
              userSurvey.currentQuestionIndex !== null
                ? userSurvey.currentQuestionIndex
                : 1}
            </span>
            <span className="text-sm text-gray-500">of</span>
            <span className="text-sm text-gray-400">
              {state.questionsCount}
            </span>
          </div>
        </div>

        {/* Main content */}
        {!state.currentQuestion ? (
          <div className="animate-fadeIn">
            <Complete />
          </div>
        ) : (
          <div className="space-y-6 animate-slideInRight">
            <input type="hidden" name="actionType" value="submit" />

            {/* Question card */}
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Card header with question type badge */}
              <div className="px-8 pt-6 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-400/20">
                      {state.currentQuestion.type === "select_single" &&
                        "Single Choice"}
                      {state.currentQuestion.type === "select_multiple" &&
                        "Multiple Choice"}
                      {state.currentQuestion.type === "select_single_card" &&
                        "Single Choice"}
                      {state.currentQuestion.type === "select_multiple_card" &&
                        "Multiple Choice"}
                    </span>
                    {state.currentQuestion.type.includes("multiple") && (
                      <span className="text-xs text-gray-500">
                        Select all that apply
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Question content */}
              <div className="px-8 pb-8">
                <QuestionStep state={state} formAction={formAction} />

                {/* <QuestionStep question={state.currentQuestion} /> */}
              </div>

              {/* Card bottom linear line */}
              <div className="h-px bg-linear-to-r from-transparent via-purple-400/20 to-transparent" />
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              {/* Back button */}
              <form action={formAction}>
                <input type="hidden" name="actionType" value="back" />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-400 hover:text-white rounded-xl border-2 border-white/10 hover:border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back
                </button>
              </form>

              {/* Question counter for mobile */}
              <div className="md:hidden text-sm text-gray-500">
                {state.currentQuestionIndex + 1} / {state.questionsCount}
              </div>

              {/* Keyboard hint */}
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
                <kbd className="px-2 py-1 text-xs bg-white/10 rounded border border-white/20 text-gray-400">
                  Enter
                </kbd>
                <span>to continue</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

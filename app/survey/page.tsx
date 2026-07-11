"use server";

import { cookies } from "next/headers";
import prisma from "../lib/prisma";
import SurveyRunner from "@/components/SurveyRunner";
import {
  BrowserSurveyState,
  getCurrQuestion,
  getUserSurvey,
  QuestionRunnerState,
} from "../actions";

import QuestionForm from "@/components/QuestionForm";
import { notFound } from "next/navigation";

export default async function Survey({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id: surveyId } = await searchParams;

  if (!surveyId || typeof surveyId != "string") notFound();

  const sessionId = (await cookies()).get("sessionId")!.value!;

  const userSurvey = await getUserSurvey(surveyId, sessionId);

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:2s]" />
      </div>

      {/* Survey wrapper */}
      <div className="relative flex-1 flex flex-col">
        <SurveyRunner userSurvey={userSurvey}>
          {/* Survey header */}
          <SurveyHeader userSurvey={userSurvey} />

          {/* Questions runner */}
          <div className="flex-1 flex items-center justify-center p-4">
            <QuestionsRunner {...userSurvey} />
          </div>
        </SurveyRunner>
      </div>
    </div>
  );
}

async function SurveyHeader({
  userSurvey,
}: {
  userSurvey: BrowserSurveyState;
}) {
  const questionsCount = await prisma.surveyQuestion.count({
    where: { surveyId: userSurvey.surveyId },
  });

  const progressPercentage =
    userSurvey.currentQuestionIndex !== undefined &&
    userSurvey.currentQuestionIndex !== null
      ? Math.round((userSurvey.currentQuestionIndex / questionsCount) * 100)
      : 0;

  return (
    <div className="relative w-full">
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-4">
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
                    {/* {userSurvey.surveyDescription ||
                      "Share your preferences with us"} */}
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
                    ? userSurvey.currentQuestionIndex + 1
                    : 1}
                </span>
                <span className="text-sm text-gray-500">of</span>
                <span className="text-sm text-gray-400">{questionsCount}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Progress</span>
                <span className="text-purple-300 font-medium">
                  {progressPercentage}%
                </span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                {/* Animated linear progress */}
                <div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-500 ease-out animate-linear bg-size-[200%_200%]"
                  style={{ width: `${progressPercentage}%` }}
                />
                {/* Shimmer effect */}
                <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Question steps indicators */}
            <div className="hidden md:flex items-center gap-1.5">
              {[...Array(questionsCount)].map((_, i) => {
                const isCompleted = i < (userSurvey.currentQuestionIndex ?? 0);
                const isCurrent = i === (userSurvey.currentQuestionIndex ?? 0);

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
        </div>
      </div>
    </div>
  );
}

async function QuestionsRunner(userSurvey: BrowserSurveyState) {
  const questionsCount = await prisma.surveyQuestion.count({
    where: { surveyId: userSurvey.surveyId },
  });

  const state: QuestionRunnerState = {
    ...userSurvey,
    questionsCount,
    currentQuestion: null,
  };

  state.currentQuestion = await getCurrQuestion(state);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Question card with animation container */}
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />

        {/* Question form */}
        <div className="relative transform transition-all duration-500 hover:scale-[1.01]">
          <QuestionForm {...state} />
        </div>
      </div>

      {/* Bottom helper text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Press{" "}
          <kbd className="px-2 py-1 text-xs bg-white/10 rounded border border-white/20 text-gray-300">
            Enter
          </kbd>{" "}
          to continue
        </p>
      </div>
    </div>
  );
}

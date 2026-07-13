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

  console.log(userSurvey.currPage);

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative flex-1 flex flex-col">
        <SurveyRunner userSurvey={userSurvey}>
          <div className="flex-1 flex items-center justify-center p-4">
            <QuestionsRunner {...userSurvey} />
          </div>
        </SurveyRunner>
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

"use server";
import { cookies } from "next/headers";
import { Question, UserSurvey } from "./generated/prisma/client";
import prisma from "./lib/prisma";

export type QuestionId = {
  id: string;
};

export type AnswerQuestionId = {
  questionId: string;
};

export type BrowserSurveyState = UserSurvey & {};

export type BrowserQuestion = Question & {
  answer?: string | string[];
};

export type QuestionRunnerState = BrowserSurveyState & {
  questionsCount: number;
  currentQuestion: BrowserQuestion | null;
};

export async function surveyActions(
  userSurvey: UserSurvey,
  formData: FormData,
) {
  let nextState: BrowserSurveyState;

  if (userSurvey.currPage === "intro") {
    nextState = await consent(userSurvey, formData);
  } else {
    nextState = await setRegion(userSurvey, formData);
  }

  return { ...nextState };
}

function validateSurveyAnswers(
  answers: string[],
  questionId: string,
  userSurveyId: string,
) {
  for (const answer of answers)
    if (null === answer)
      throw new Error(
        `Invalid answer: 'null' was found, question id: ${questionId}, user survey id: ${userSurveyId}`,
      );
}

async function submitAnswer(
  userSurvey: QuestionRunnerState,
  questionId: string,
  value: string | string[],
) {
  const existing = await prisma.answer.findUnique({
    where: {
      userSurveyId_questionId: { userSurveyId: userSurvey.id, questionId },
    },
    select: { id: true },
  });

  if (existing)
    await prisma.answer.update({
      where: {
        userSurveyId_questionId: { userSurveyId: userSurvey.id, questionId },
      },
      data: { value },
    });
  else {
    await prisma.answer.create({
      data: {
        surveyId: userSurvey.surveyId,
        userSurveyId: userSurvey.id,
        questionId,
        value,
      },
    });
  }
}

export async function getCurrQuestion(
  state: QuestionRunnerState,
): Promise<Question | null> {
  if (state.currentQuestionIndex === state.questionsCount) return null;
  else {
    const res = await prisma.$transaction(async () => {
      const questionRes = await prisma.surveyQuestion.findFirst({
        where: { surveyId: state.surveyId },
        orderBy: { order: "asc" },
        select: { question: true },
        skip: state.currentQuestionIndex,
      });
      if (!questionRes) return null;
      const question = questionRes.question;

      const userSurveyId = state.id;
      const questionId = question.id;

      const prevAnswerRes = await prisma.answer.findUnique({
        where: {
          userSurveyId_questionId: {
            userSurveyId,
            questionId,
          },
        },
        select: { value: true },
      });

      if (!prevAnswerRes) return question;
      const prevAnswer = prevAnswerRes.value;

      return { ...question, answer: prevAnswer };
    });
    if (!res) return null;
    return res as unknown as BrowserQuestion;
  }
}

export async function questionsAction(
  state: QuestionRunnerState,
  formData: FormData,
) {
  const actionType = formData.get("actionType") as string;
  if (actionType === "submit")
    return await submitAnswerAndGetNext(state, formData);
  else return await getPrevQuestion(state);
}

async function getPrevQuestion(state: QuestionRunnerState) {
  if (state.currentQuestionIndex === 0) return state;
  const res = await prisma.surveyQuestion.findFirst({
    where: { surveyId: state.surveyId },
    orderBy: { order: "asc" },
    select: { question: true },
    skip: state.currentQuestionIndex - 1,
  });
  if (res) {
    --state.currentQuestionIndex;
    state.currentQuestion = res.question;
    const prevAnswerRes = await prisma.answer.findUnique({
      where: {
        userSurveyId_questionId: {
          userSurveyId: state.id,
          questionId: res.question.id,
        },
      },
      select: { value: true },
    });

    if (!prevAnswerRes) return { ...state };
    const prevAnswer = prevAnswerRes.value;
    state.currentQuestion = {
      ...res.question,
      answer: prevAnswer as string | string[],
    };

    return { ...state };
  } else return state;
}

async function submitAnswerAndGetNext(
  prevState: QuestionRunnerState,
  formData: FormData,
): Promise<QuestionRunnerState> {
  const sessionId = (await cookies()).get("sessionId")!.value;
  const questionId = formData.get("questionId") as string;
  const questionType = formData.get("questionType") as string;
  const raw = formData.getAll("answer") as string[];

  validateSurveyAnswers(raw, questionId, prevState.id);

  const value = questionType === "select_single" ? raw[0] : raw;

  if (0 === value.length)
    if (questionType === "select_single") throw new Error("Answer is required");
    else throw new Error("At least one option is required");

  const nextQuestion = await prisma.$transaction(async () => {
    await submitAnswer(prevState, questionId, value);
    prevState.currentQuestion = null;

    await prisma.userSurvey.update({
      where: { sessionId_surveyId: { sessionId, surveyId: "1" } },
      data: {
        currentQuestionIndex: ++prevState.currentQuestionIndex,
      },
    });
    return await getCurrQuestion(prevState);
  });

  return { ...prevState, currentQuestion: nextQuestion };
}

export async function setRegion(
  userSurvey: UserSurvey,
  formData: FormData,
): Promise<UserSurvey> {
  const region = formData.get("region");
  const surveyId = userSurvey.surveyId;
  const sessionId = (await cookies()).get("sessionId")!.value;

  if (typeof region !== "string" || !region)
    throw new Error("Region is required");

  await prisma.userSurvey.update({
    where: {
      sessionId_surveyId: { sessionId, surveyId },
    },
    data: {
      region,
      currPage: "questions",
    },
  });
  userSurvey.currPage = "questions";
  userSurvey.region = region;
  return userSurvey;
}

async function consent(userSurvey: UserSurvey, formData: FormData) {
  formData.get("surveyId") as string;
  const surveyId = userSurvey.surveyId;
  const sessionId = (await cookies()).get("sessionId")!.value;

  await prisma.userSurvey.update({
    where: {
      sessionId_surveyId: { sessionId, surveyId },
    },
    data: {
      currPage: "region",
      termsOfService: true,
      privacyPolicy: true,
    },
  });
  userSurvey.currPage = "region";
  userSurvey.region = "region";
  userSurvey.termsOfService = true;
  userSurvey.privacyPolicy = true;
  return userSurvey;
}

export async function getUserSurvey(surveyId: string, sessionId: string) {
  return await prisma.$transaction(async () => {
    const existing = await prisma.userSurvey.findUnique({
      where: {
        sessionId_surveyId: { sessionId, surveyId },
      },
    });
    if (existing) return existing;
    else
      return await prisma.userSurvey.create({
        data: {
          sessionId,
          surveyId,
        },
      });
  });
}

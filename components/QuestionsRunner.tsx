import { Answer, Question, UserSurvey } from "@/app/generated/prisma/browser";
import QuestionStep from "./QuestionStep";
import Complete from "./Complete";
// import Complete from "./Complete";

type QuestionsRunnerProps = UserSurvey & {
  questions: Question[];
  answers: Answer[];
};

export default function QuestionsRunner({
  questions,
  answers = [],
}: QuestionsRunnerProps) {
  const answeredIds = new Set(answers.map((a) => a.questionId));

  const nextQuestion = questions.find((q) => !answeredIds.has(q.id));

  if (!nextQuestion) return <Complete />;

  return <QuestionStep question={nextQuestion} />;
}

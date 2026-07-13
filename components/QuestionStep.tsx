import { BrowserQuestion, QuestionRunnerState } from "@/app/actions";
import { SubmitButton } from "./ui/SubmitButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useTransition } from "react";
import Complete from "./Complete";

type CardOption = { value: string; title: string; description: string };

export default function QuestionStep({
  state,
  formAction,
}: {
  state: QuestionRunnerState;
  formAction: (payload: FormData) => void;
}) {
  const question = state.currentQuestion;
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  if (!question) {
    return (
      <Complete />
      // <div className="flex w-full h-full items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      //   <div className="text-white text-center">
      //     <h2 className="text-2xl font-bold mb-4">Survey Complete!</h2>
      //     <p className="text-gray-300">Thank you for completing the survey.</p>
      //   </div>
      // </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const answers = formData.getAll("answer");

    // Validate for multiple choice questions
    if (
      (question.type === "select_multiple" ||
        question.type === "select_multiple_card") &&
      answers.length === 0
    ) {
      setError("Please select at least one option");
      return;
    }

    setError(null);

    // Add actionType to formData for your server action
    formData.append("actionType", "submit");

    // Wrap in startTransition to properly handle useActionState
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="flex w-full h-full items-center justify-center bg-linear-to-br from-transparent via-purple-950 to-transparent rounded-2xl p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 animate-gradient-x" />

          {/* Glowing orb effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

          <div className="relative p-8 space-y-8">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="questionId" value={question.id} />
              <input type="hidden" name="questionType" value={question.type} />

              {/* Question text with animated reveal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-8 bg-linear-to-r from-purple-400 to-pink-400 rounded-full" />
                  <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                    Question {state.currentQuestionIndex + 1} of{" "}
                    {state.questionsCount}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {question.text}
                </h2>
              </motion.div>

              {/* Options with staggered animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isPending ? 0.5 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={isPending ? "pointer-events-none" : ""}
                >
                  {renderOptions(question)}
                </motion.div>
              </AnimatePresence>

              {/* Error message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-3 rounded-xl text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading overlay */}
              <AnimatePresence>
                {isPending && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 py-4"
                  >
                    <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-purple-300 text-sm font-medium">
                      Submitting your answer...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4"
              >
                <SubmitButton loadingText="Submitting...">
                  {state.currentQuestionIndex === state.questionsCount - 1
                    ? "Finish"
                    : "Next"}
                </SubmitButton>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function renderOptions(question: BrowserQuestion) {
  switch (question.type) {
    case "select_single": {
      const options = question.options as string[];
      return (
        <div className="space-y-3">
          {options.map((opt, index) => (
            <motion.div
              key={opt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <label className="relative flex items-center gap-3 px-5 py-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] bg-white/5 border-2 border-white/10 hover:border-white/20 hover:bg-white/10 has-checked:bg-linear-to-r has-checked:from-purple-500/20 has-checked:to-pink-500/20 has-checked:border-2 has-checked:border-purple-400 has-checked:shadow-lg has-checked:shadow-purple-500/20">
                <input
                  required
                  type="radio"
                  name="answer"
                  value={opt}
                  className="peer sr-only"
                  defaultChecked={question.answer === opt}
                />
                <div className="relative w-5 h-5 rounded-full border-2 border-white/30 peer-checked:border-purple-400 peer-checked:bg-purple-400 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <span className="text-lg text-gray-300 peer-checked:text-white peer-checked:font-medium transition-colors duration-300">
                  {opt}
                </span>
              </label>
            </motion.div>
          ))}
        </div>
      );
    }

    case "select_multiple": {
      const options = question.options as string[];
      return (
        <div className="space-y-3">
          {options.map((opt, index) => (
            <motion.div
              key={opt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <label className="relative flex items-center gap-3 px-5 py-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] bg-white/5 border-2 border-white/10 hover:border-white/20 hover:bg-white/10 has-checked:bg-linear-to-r has-checked:from-purple-500/20 has-checked:to-pink-500/20 has-checked:border-2 has-checked:border-purple-400 has-checked:shadow-lg has-checked:shadow-purple-500/20">
                <input
                  type="checkbox"
                  name="answer"
                  value={opt}
                  className="peer sr-only"
                  defaultChecked={(question.answer as string[])?.some(
                    (a) => a === opt,
                  )}
                />
                <div className="relative w-5 h-5 rounded border-2 border-white/30 peer-checked:border-purple-400 peer-checked:bg-purple-400 transition-all duration-300">
                  <svg
                    className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 p-0.5"
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
                <span className="text-lg text-gray-300 peer-checked:text-white peer-checked:font-medium transition-colors duration-300">
                  {opt}
                </span>
              </label>
            </motion.div>
          ))}
        </div>
      );
    }

    case "select_single_card": {
      const options = question.options as CardOption[];
      return (
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt, index) => (
            <motion.div
              key={opt.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="relative block p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-white/5 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 has-checked:bg-linear-to-br has-checked:from-purple-500/30 has-checked:to-pink-500/30 has-checked:border-2 has-checked:border-purple-400 has-checked:shadow-2xl has-checked:shadow-purple-500/30">
                <input
                  required
                  type="radio"
                  name="answer"
                  value={opt.value}
                  className="peer sr-only"
                  defaultChecked={question.answer === opt.value}
                />

                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl transition-all duration-300 bg-white/5 peer-checked:bg-white/20 peer-checked:shadow-inner">
                  <span className="block peer-checked:hidden">📋</span>
                  <span className="hidden peer-checked:block">✨</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-200 peer-checked:text-white transition-colors duration-300">
                  {opt.title}
                </h3>
                <p className="text-sm text-gray-400 peer-checked:text-purple-200 transition-colors duration-300">
                  {opt.description}
                </p>

                {/* Selection indicator */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-all duration-300 scale-0 peer-checked:scale-100">
                  <svg
                    className="w-4 h-4 text-white"
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
              </label>
            </motion.div>
          ))}
        </div>
      );
    }

    case "select_multiple_card": {
      const options = question.options as CardOption[];
      return (
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt, index) => (
            <motion.div
              key={opt.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="relative block p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-white/5 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 has-checked:bg-linear-to-br has-checked:from-purple-500/30 has-checked:to-pink-500/30 has-checked:border-2 has-checked:border-purple-400 has-checked:shadow-2xl has-checked:shadow-purple-500/30">
                <input
                  type="checkbox"
                  name="answer"
                  value={opt.value}
                  className="peer sr-only"
                  defaultChecked={(question.answer as string[])?.some(
                    (a) => a === opt.value,
                  )}
                />

                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl transition-all duration-300 bg-white/5 peer-checked:bg-white/20 peer-checked:shadow-inner">
                  <span className="block peer-checked:hidden">📋</span>
                  <span className="hidden peer-checked:block">✨</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-200 peer-checked:text-white transition-colors duration-300">
                  {opt.title}
                </h3>
                <p className="text-sm text-gray-400 peer-checked:text-purple-200 transition-colors duration-300">
                  {opt.description}
                </p>

                {/* Selection indicator */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-all duration-300 scale-0 peer-checked:scale-100">
                  <svg
                    className="w-4 h-4 text-white"
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
              </label>
            </motion.div>
          ))}
        </div>
      );
    }

    default:
      return null;
  }
}

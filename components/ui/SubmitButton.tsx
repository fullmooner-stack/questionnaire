"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  className,
  loadingText,
  children,
}: Readonly<{
  className?: string;
  loadingText?: string;
  children: React.ReactNode;
}>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      // className="flex disabled:bg-amber-300 h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
      // className="w-full py-4 text-lg font-semibold bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      className={
        className ??
        "w-full py-4 text-lg font-semibold bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      }
    >
      {pending ? (loadingText ? loadingText : children) : children}
    </button>
  );
}

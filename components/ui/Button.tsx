import { ButtonHTMLAttributes } from "react";

// export default function Button({ text }: { text: string }) {
export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
      {...props}
    />
  );
}

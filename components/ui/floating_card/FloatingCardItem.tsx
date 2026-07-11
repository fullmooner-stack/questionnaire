export function FloatingCardItem({
  header = "",
  details = "",
  boxTag = "",
  boxColor = "from-purple-500",
}: {
  header?: string;
  details?: string;
  boxTag?: string;
  boxColor?: string;
}) {
  return (
    <div
      className="flex items-center gap-3 animate-fadeIn"
      style={{ animationDelay: "1s" }}
    >
      <div
        className={`w-10 h-10 rounded-xl bg-linear-to-br ${boxColor} to-pink-500 flex items-center justify-center text-white font-bold`}
      >
        {boxTag}
      </div>
      <div className="flex-1">
        <p className="text-white font-medium text-sm">{header}</p>
        <p className="text-purple-300 text-xs mt-1">{details}</p>
      </div>
    </div>
  );
}

export const FloatingCard = Object.assign(
  function ({ children }: { children?: React.ReactNode }) {
    return (
      <div className="animate-float-slow relative z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    );
  },
  {
    Item({
      header = "",
      details = "",
      boxTag = "",
      boxColor = "from-purple-500",
    }: {
      header?: string;
      details?: string;
      boxTag?: string;
      boxColor?: string;
    }) {
      return (
        <div
          className="flex items-center gap-3 animate-fadeIn"
          style={{ animationDelay: "1s" }}
        >
          <div
            className={`w-10 h-10 rounded-xl bg-linear-to-br ${boxColor} to-pink-500 flex items-center justify-center text-white font-bold`}
          >
            {boxTag}
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">{header}</p>
            <p className="text-purple-300 text-xs mt-1">{details}</p>
          </div>
        </div>
      );
    },
  },
);

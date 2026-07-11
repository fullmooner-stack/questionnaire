import Image from "next/image";
import Link from "next/link";

export function Nav({
  className,
}: Readonly<{
  className?: string;
}>) {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/tos", label: "Terms" },
    { href: "/privacy_policy", label: "Privacy" },
  ];

  return (
    <nav className={`relative ${className}`} aria-label="Global Navigation">
      {/* Background with glass morphism */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between h-20">
          {/* Logo */}
          <li>
            <Link
              href="/"
              className="group relative flex items-center gap-2 font-bold transition-all duration-300 hover:scale-105"
            >
              <div className="absolute -inset-3 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative">
                <Image
                  className="dark:invert transition-all duration-300 group-hover:brightness-110"
                  src="/logo-lookup.svg"
                  alt="generic logo"
                  width={100}
                  height={20}
                  priority
                />
                {/* Logo underline effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </Link>
          </li>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {link.label}
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  {/* Hover glow */}
                  <span className="absolute inset-0 bg-linear-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-lg transition-all duration-300" />
                </a>
              </li>
            ))}

            {/* Separator */}
            <div className="w-px h-6 bg-white/10 mx-2" />

            {/* CTA Button */}
            <li>
              <Link
                href={`/survey?id=${1}`}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-linear bg-size-[200%_200%]" />
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Button content */}
                <span className="relative flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Start Survey
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </div>

          {/* Mobile menu button */}
          <li className="md:hidden">
            <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom accent line with linear */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="h-px bg-linear-to-r from-transparent via-pink-500/20 to-transparent blur-sm" />
      </div>
    </nav>
  );
}

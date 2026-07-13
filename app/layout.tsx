import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Discover Yourself | Personal Insight Survey",
    template: "%s | Discover Yourself",
  },
  description:
    "A quick 20-question survey to explore your lifestyle, preferences, and dreams. Gain valuable insights into what makes you unique.",
  keywords: [
    "survey",
    "personality",
    "self-discovery",
    "lifestyle",
    "insights",
  ],
  openGraph: {
    title: "Discover Yourself | Personal Insight Survey",
    description:
      "Explore your lifestyle, preferences, and dreams in just 2 minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 selection:bg-purple-500/30 selection:text-white">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-linear(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

          {/* Ambient light orbs */}
          {/* <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" /> */}
          {/* <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:2s]" /> */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-pink-500 rounded-full blur-3xl opacity-5" /> */}
        </div>

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        {/* Header */}
        <header className="relative w-full z-40">
          <div className="absolute inset-0 backdrop-blur-xl bg-linear-to-b from-white/8 to-white/2 border-b border-white/10" />

          <div className="relative flex justify-center px-4">
            <Nav className="w-full max-w-5xl" />
          </div>

          {/* Header bottom glow effects */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="h-px bg-linear-to-r from-transparent via-pink-500/30 to-transparent blur-sm" />
          </div>
        </header>

        {/* Main Content */}
        <main
          id="main-content"
          className="relative flex flex-col flex-1 w-full"
        >
          <div className="flex-1 max-w-5xl w-full mx-auto">
            {/* Content wrapper with subtle border and glass effect */}
            <div className="min-h-full backdrop-blur-sm bg-white/2 border-x border-white/5 shadow-2xl shadow-black/20">
              {/* Animated linear line at top of content */}
              <div className="h-px bg-linear-to-r from-transparent via-purple-400/20 to-transparent" />

              {children}

              {/* Animated linear line at bottom of content */}
              <div className="h-px bg-linear-to-r from-transparent via-pink-400/20 to-transparent" />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative w-full mt-auto z-30">
          <div className="absolute inset-0 backdrop-blur-xl bg-linear-to-b from-white/2 to-white/5 border-t border-white/10" />

          {/* Footer top glow */}
          <div className="absolute top-0 left-0 right-0">
            <div className="h-px bg-linear-to-r from-transparent via-pink-500/30 to-transparent" />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left section */}
              <div className="flex flex-col items-center sm:items-start gap-2">
                <p className="text-sm font-medium text-gray-300">
                  Discover Yourself
                </p>
                <p className="text-xs text-gray-500">
                  © 2024 All rights reserved.
                </p>
              </div>

              {/* Center - Links */}
              <div className="flex items-center gap-6">
                {[
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                  { href: "/privacy_policy", label: "Privacy" },
                  { href: "/tos", label: "Terms" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Right section - Made with love */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Made with</span>
                <svg
                  className="w-4 h-4 text-pink-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>by Elbadri, Yousif</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

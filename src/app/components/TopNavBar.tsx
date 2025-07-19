"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center px-3 lg:px-12 transition-all duration-300",
        isHomePage
          ? "bg-gradient-to-r from-[color:var(--theme-blue)] to-[color:var(--theme-purple)] border-b-0 shadow-lg"
          : pathName.startsWith("/resume-builder") || pathName.startsWith("/resume-parser")
            ? "bg-[#6C38FF] border-b-0 shadow-lg"
            : "border-b-2 border-gray-100 bg-white"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">SwiftResume.io</span>
          <span
            className="text-2xl font-extrabold tracking-tight select-none text-white"
            style={{
              color: '#fff',
              textShadow: '0 2px 8px rgba(0,0,0,0.10)'
            }}
          >
            SwiftResume.io
          </span>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/", "Home"],
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-white hover:bg-white/10 focus-visible:bg-white/10 lg:px-4 transition-colors duration-150"
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

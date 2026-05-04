"use client";

import type { KeyLicenceState } from "@/app/components/KeyLicence";

const MAIN_WEBSITE_URL =
  process.env.NEXT_PUBLIC_GSTECH_MAIN_URL || "https://gstechkh.com";

export default function PromptAiHero({
  licenseStatus,
}: {
  licenseStatus: KeyLicenceState["status"];
}) {
  const licenseReady = licenseStatus === "ready";

  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 blur-3xl" />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-gray-700 dark:bg-gray-800">
              Prompt AI Suite
            </span>
            <span
              className={`rounded-full px-3 py-1 font-semibold ${
                licenseReady
                  ? "border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                  : "border border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
              }`}
            >
              {licenseReady ? "License active" : "License required"}
            </span>
          </div>
          <a
            href={MAIN_WEBSITE_URL}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-950"
          >
            Go to GSTECHKH
          </a>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Prompt AI Tools
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Image to Text • Text to Image • Text to Story • Story to Scene • Flow Queue
        </h1>
        <p className="max-w-3xl text-sm text-slate-500 dark:text-slate-400">
          Switch between tools without leaving this page. The Flow Queue now uses the same Prompt AI
          license automatically.
        </p>
      </div>
    </header>
  );
}

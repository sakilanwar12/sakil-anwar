"use client";

import WaveText from "../animations/WaveText";

function PreLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black to-default-900 text-foreground overflow-hidden">
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen z-10 relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-default-200 tracking-widest opacity-100 animate-fade-in-up">
          MD. SAKIL ANWAR
        </h1>
      </div>
    </div>
  );
}

export default PreLoader;

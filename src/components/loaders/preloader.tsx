"use client";

function PreLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

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

      {/* Glowing orb effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen z-10 relative">
        {/* Main content container */}
        <div className="text-center space-y-8">
          {/* Elegant name animation */}
          <div className="relative z-50">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-widest opacity-100 animate-fade-in-up">
              MD. SAKIL ANWAR
            </h1>
            {/* Subtle underline effect */}
            <div
              className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-100"
              style={{
                animation: "fadeIn 1s ease-out 2s forwards",
              }}
            />
          </div>

          {/* Elegant loading indicator */}
          <div
            className="space-y-6 opacity-100"
            style={{
              animation: "fadeIn 0.8s ease-out 2.5s forwards",
            }}
          >
            {/* Animated dots */}
            <div className="flex justify-center items-center gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  style={{
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slideInUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default PreLoader;

import "./globals.css";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import { ScrollProvider } from "@/components/animations/scrollbar/ScrollContext";
import SmoothScrollWrapper from "@/components/animations/scrollbar/SmoothScrollWrapper";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/utils/get-seo-meta";

export const metadata = getSeoMeta({
  title: "Portfolio - Sakil Anwar",
  description: "Portfolio",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRobotoFlex.variable} ${fontAnton.variable}  antialiased  font-roboto-flex bg-background text-default-100`}
      >
        <MountedProvider>
          {/* <FallingParticlesAnimation />
          <ScrollProvider>
            <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          </ScrollProvider> */}
          {children}
          <div className="absolute inset-0 opacity-5 ">
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
        </MountedProvider>
      </body>
    </html>
  );
}

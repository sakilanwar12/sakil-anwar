import "./globals.css";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import { ScrollProvider } from "@/components/animations/scrollbar/ScrollContext";
import ScrollProgressBar from "@/components/animations/scrollbar/ScrollProgressBar";
import SmoothScrollWrapper from "@/components/animations/scrollbar/SmoothScrollWrapper";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/utils/get-seo-meta";
import FixedEmail from "@/components/fixed-email";

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
    <html lang="en" className="overflow-hidden">
      <body
        className={`${fontAnton.variable} ${fontRobotoFlex.variable}  antialiased  font-roboto-flex bg-background text-default-100 overflow-hidden`}
      >
        <MountedProvider>
          <FallingParticlesAnimation />
          <FixedEmail />
          <ScrollProvider>
            <ScrollProgressBar />
            <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          </ScrollProvider>
        </MountedProvider>
      </body>
    </html>
  );
}

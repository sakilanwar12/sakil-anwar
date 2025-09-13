import "./globals.css";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/get-seo-meta";
import GridBackground from "@/components/GridBackground";
import SocialItems from "@/components/sections/Hero/SocialItems";
import { MouseEffectProvider } from "@/context/MouseEffectContext";
import MouseEffect from "@/components/MouseEffect";

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
        className={`${fontRobotoFlex.variable} ${fontAnton.variable} antialiased font-roboto-flex bg-background text-default-100`}
      >
        <MountedProvider>
          <MouseEffectProvider>
            <MouseEffect />
            {children}
          </MouseEffectProvider>

          <FallingParticlesAnimation />

          <GridBackground />
          <SocialItems />
        </MountedProvider>
      </body>
    </html>
  );
}

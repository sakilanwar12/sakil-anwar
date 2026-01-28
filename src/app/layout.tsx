import "@/styles/globals.css";
import "@/styles/style.css";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/get-seo-meta";
import GridBackground from "@/components/GridBackground";
import SocialItems from "@/components/sections/Hero/SocialItems";
import { MouseEffectProvider } from "@/context/MouseEffectContext";
import MouseEffect from "@/components/MouseEffect";
import { Toaster } from "react-hot-toast";
import { MetaPixel } from "@/components/MetaPixel";

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
        className={`${fontRobotoFlex.variable} ${fontAnton.variable} font-roboto-flex bg-background text-default-100 antialiased`}
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
        <Toaster />
        <MetaPixel />
      </body>
    </html>
  );
}

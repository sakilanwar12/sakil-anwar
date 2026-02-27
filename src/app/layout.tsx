import "@/styles/globals.css";
import "@/styles/style.css";
import MountedProvider from "@/providers/mounted-provider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { fontAnton, fontRobotoFlex, fontSpaceGrotesk } from "@/config/fonts";
import { getSeoMeta } from "@/lib/get-seo-meta";
import GlowingStars from "@/components/animations/GlowingStars";
import SocialItems from "@/components/sections/Hero/SocialItems";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "react-hot-toast";
import { MetaPixel } from "@/components/MetaPixel";
import { Suspense } from "react";

export const metadata = getSeoMeta({
  title: "Sakil Anwar — Frontend Developer Portfolio",
  description:
    "Premium interactive portfolio of Sakil Anwar, a Frontend Developer crafting exceptional digital experiences with React, Next.js, and modern web technologies.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRobotoFlex.variable} ${fontAnton.variable} ${fontSpaceGrotesk.variable} font-roboto-flex bg-background text-default-100 antialiased`}
      >
        <MountedProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
          </SmoothScrollProvider>

          <GlowingStars count={60} />
          <SocialItems />
        </MountedProvider>
        <Toaster
          toastOptions={{
            style: {
              background: "rgba(15, 15, 35, 0.9)",
              color: "#fff",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              backdropFilter: "blur(10px)",
            },
          }}
        />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}

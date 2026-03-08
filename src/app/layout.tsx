import "@/styles/globals.css";
import "@/styles/style.css";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontPlayfair, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/get-seo-meta";

import { Toaster } from "react-hot-toast";
import { MetaPixel } from "@/components/MetaPixel";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

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
        className={`${fontRobotoFlex.variable} ${fontAnton.variable} ${fontPlayfair.variable} font-roboto-flex bg-background text-default-100 antialiased`}
      >
        <MountedProvider>
          <main className="bg-background text-foreground min-h-screen">
            <Header />
            {children}
            <Footer />
          </main>
        </MountedProvider>
        <Toaster />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}

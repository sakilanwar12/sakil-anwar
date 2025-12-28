import "@/styles/globals.css";
import "@/styles/style.css";
import MountedProvider from "@/providers/mounted-provider";
import { fontAnton, fontRobotoFlex } from "@/config/fonts";
import { getSeoMeta } from "@/lib/get-seo-meta";
import { Toaster } from "react-hot-toast";

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
        <MountedProvider>{children}</MountedProvider>
        <Toaster />
      </body>
    </html>
  );
}

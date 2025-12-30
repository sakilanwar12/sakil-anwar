import React from "react";
import { notFound } from "next/navigation";
import { RenderEngine } from "@/components/builder/RenderEngine";
import { PageLayout } from "@/types/builder";

async function getPage(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/pages/public/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.success ? data.data : null;
}

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pageSlug = slug.join("/");

  const page = await getPage(pageSlug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Could add a header here if defined in a global layout */}
      <RenderEngine layout={page.content as PageLayout} readOnly={true} />
      {/* Could add a footer here */}
    </main>
  );
}

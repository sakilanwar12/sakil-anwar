"use client";

import React from "react";
import { Sidebar } from "@/components/builder/Sidebar";
import { Toolbar } from "@/components/builder/Toolbar";
import { EditorCanvas } from "@/components/builder/EditorCanvas";
import { BuilderDndWrapper } from "@/components/builder/BuilderDndWrapper";
import { RenderEngine } from "@/components/builder/RenderEngine";
import { useBuilderStore } from "@/store/useBuilderStore";
import { useParams } from "next/navigation";

export default function BuilderPage() {
  const { mode, setLayout } = useBuilderStore();
  const params = useParams();

  React.useEffect(() => {
    // If ID exists, fetch existing page
    // For now we just skip or load mock data
    if (params?.id) {
      fetch(`/api/pages/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.data.content) {
            setLayout(data.data.content);
          }
        });
    }
  }, [params?.id, setLayout]);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Toolbar />
      <div className="flex flex-1 overflow-hidden">
        {mode === "edit" ? (
          <>
            <BuilderDndWrapper />
          </>
        ) : (
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="mx-auto min-h-screen max-w-4xl border-x border-slate-100 shadow-sm">
              <BuilderContentWrapper />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Separate component to consume store for preview
const BuilderContentWrapper = () => {
  const { layout } = useBuilderStore();
  return <RenderEngine layout={layout} readOnly={true} />;
};

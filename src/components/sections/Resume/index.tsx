"use client";

import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

function Resume() {
  const resumeUrl = "/sakil-anwar-resume.pdf";

  return (
    <div className="relative min-h-screen py-32" id="resume">
      <div className="relative z-10 container">
        <SectionHeader
          title="Resume"
          description="My professional journey, skills, and qualifications."
        />

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href={resumeUrl} download="Sakil_Anwar_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button asChild color="outline" size="lg" className="rounded-full">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in New Tab
              </a>
            </Button>
          </div>

          <div className="border-default-700/50 bg-default-800/50 overflow-hidden rounded-xl border shadow-2xl backdrop-blur-sm">
            <object
              data={resumeUrl}
              type="application/pdf"
              className="h-[800px] w-full"
            >
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <p className="text-default-300 mb-4">
                  Your browser doesn't support PDF viewing.
                </p>
                <Button asChild>
                  <a href={resumeUrl} download="Sakil_Anwar_Resume.pdf">
                    Download Resume Instead
                  </a>
                </Button>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

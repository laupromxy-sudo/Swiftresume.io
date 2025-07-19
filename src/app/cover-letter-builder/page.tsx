import React from "react";

export const metadata = {
  title: "Free Cover Letter Builder | SwiftResume.io",
  description: "Create a professional cover letter for free with SwiftResume.io. ATS-friendly, modern, and easy to use. Download free cover letter templates and examples.",
  keywords: [
    "cover letter builder",
    "free cover letter template",
    "cover letter generator",
    "ATS cover letter",
    "online cover letter",
    "job application",
    "SwiftResume.io"
  ]
};

export default function CoverLetterBuilder() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-4">Free Cover Letter Builder</h1>
      <p className="mb-6 text-lg">Create a professional cover letter for free with SwiftResume.io. Our builder is ATS-friendly, modern, and easy to use. Download free cover letter templates and examples to boost your job application.</p>
      <ul className="list-disc pl-6 mb-8">
        <li>Easy-to-use online cover letter editor</li>
        <li>Modern, professional templates</li>
        <li>ATS-optimized for job applications</li>
        <li>Download as PDF</li>
        <li>Completely free, no sign up required</li>
      </ul>
      <div className="mt-8">
        <a href="/resume-import" className="btn-primary px-8 py-3 text-lg">Import Resume to Start</a>
      </div>
    </main>
  );
} 
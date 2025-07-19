import React from "react";

export const metadata = {
  title: "Career Blog & Resume Tips | SwiftResume.io",
  description: "Read expert articles on resume writing, cover letters, job search tips, and career advice from SwiftResume.io.",
  keywords: [
    "resume tips",
    "cover letter tips",
    "career blog",
    "job search advice",
    "SwiftResume.io"
  ]
};

export default function Blog() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-4">Career Blog & Resume Tips</h1>
      <p className="mb-6 text-lg">Read expert articles on resume writing, cover letters, job search tips, and career advice from SwiftResume.io.</p>
      <ul className="list-disc pl-6 mb-8">
        <li><a href="#" className="text-primary underline">How to Write a Resume That Gets Interviews</a></li>
        <li><a href="#" className="text-primary underline">Best Resume Templates for 2024</a></li>
        <li><a href="#" className="text-primary underline">How to Write a Cover Letter: Step-by-Step Guide</a></li>
        <li><a href="#" className="text-primary underline">Top 10 Resume Mistakes to Avoid</a></li>
      </ul>
      <div className="mt-8">
        <a href="/resume-builder" className="btn-primary px-8 py-3 text-lg">Start Building Your Resume</a>
      </div>
    </main>
  );
} 
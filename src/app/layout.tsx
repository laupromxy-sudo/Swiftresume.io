import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SwiftResume.io - Outstanding Resume Builder and Parser",
  description:
    "SwiftResume.io is a vibrant, modern, and powerful resume builder that allows anyone to create a professional resume in minutes. Import, build, and test your resume with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TETB179Y91"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TETB179Y91');
        ` }} />
        <title>Free Resume Builder & Cover Letter Generator | SwiftResume.io</title>
        <meta name="description" content="Create a professional resume or cover letter for free with SwiftResume.io. ATS-friendly, modern, and easy to use. Download free resume templates and cover letter examples." />
        <meta name="keywords" content="resume builder, cover letter builder, free resume template, resume generator, cover letter template, ATS resume, online resume, job application, SwiftResume.io" />
        <meta name="author" content="SwiftResume.io" />
        <meta property="og:title" content="Free Resume Builder & Cover Letter Generator | SwiftResume.io" />
        <meta property="og:description" content="Create a professional resume or cover letter for free with SwiftResume.io. ATS-friendly, modern, and easy to use." />
        <meta property="og:url" content="https://swiftresumeio.vercel.app/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

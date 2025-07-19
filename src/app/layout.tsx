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
        <title>SwiftResume.io - Free, Modern Resume Builder</title>
        <meta name="description" content="SwiftResume.io is a free, open-source resume builder and parser. Create a stunning, professional resume in minutes." />
        <meta name="keywords" content="resume, builder, parser, free, open-source, ATS, job, CV" />
        <meta name="author" content="SwiftResume.io" />
        <meta property="og:title" content="SwiftResume.io" />
        <meta property="og:description" content="Create a stunning resume for free with SwiftResume.io" />
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

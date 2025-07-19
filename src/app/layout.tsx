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
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

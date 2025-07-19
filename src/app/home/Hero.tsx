import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="relative lg:flex lg:h-[825px] lg:justify-center overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[color:var(--theme-blue)] to-[color:var(--theme-purple)] opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="glass-card relative z-10 mx-auto max-w-xl pt-12 pb-10 px-8 text-center lg:mx-0 lg:grow lg:pt-36 lg:text-left shadow-2xl">
        <h1 className="text-primary pb-2 text-5xl font-extrabold lg:text-6xl leading-tight">
          Create a stunning resume
          <br />
          with SwiftResume.io
        </h1>
        <p className="mt-5 text-xl lg:mt-7 lg:text-2xl text-gray-700 font-medium">
          The vibrant, free, and open-source resume builder that makes you stand out
        </p>
        <Link href="/resume-import" className="btn-primary mt-8 lg:mt-16 text-lg px-10 py-3 shadow-xl">
          Import Resume <span aria-hidden="true">→</span>
        </Link>
        <p className="ml-6 mt-4 text-base text-gray-600">No sign up required</p>
        <p className="mt-4 text-base text-gray-600 lg:mt-36">
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2 text-primary">
            resume parser
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow relative z-10">
        <AutoTypingResume />
      </div>
    </section>
  );
};

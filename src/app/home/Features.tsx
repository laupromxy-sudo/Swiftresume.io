import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free Forever",
    text: "SwiftResume.io is created with the belief that everyone should have free and easy access to a modern, visually outstanding resume design",
  },
  {
    src: featureUSSrc,
    title: "U.S. Best Practices",
    text: "SwiftResume.io has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy Focus",
    text: "SwiftResume.io stores data locally in your browser so only you have access to your data and with complete control",
  },
  {
    src: featureOpenSourceSrc,
    title: "Open-Source",
    text: (
      <>
        SwiftResume.io is an open-source project, and its source code can be viewed
        by anyone on its{" "}
        <Link href="https://github.com/xitanggg/open-resume">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="glass-card mx-auto max-w-6xl py-12 px-6 mt-12 mb-16 shadow-xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div className="px-2" key={feature.title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={feature.src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  <h3 className="mb-2 text-xl font-bold text-primary">{feature.title}</h3>
                </dt>
                <dd className="mt-2">{feature.text}</dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";

const features = [
  {
    icon: "/assets/feature-free.svg",
    title: "Free Forever",
    description:
      "SwiftResume.io is created with the belief that everyone should have free and easy access to a modern, visually outstanding resume design.",
  },
  {
    icon: "/assets/feature-us.svg",
    title: "U.S. Best Practices",
    description:
      "SwiftResume.io has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever.",
  },
  {
    icon: "/assets/feature-privacy.svg",
    title: "Privacy Focus",
    description:
      "SwiftResume.io stores data locally in your browser so only you have access to your data and have complete control.",
  },
];

const Features = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

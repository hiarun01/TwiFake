import React from "react";
import {Sparkles, Smile, ShieldCheck} from "lucide-react";
const features = [
  {
    icon: <Sparkles className="w-7 h-7 text-blue-600" />,
    title: "Realistic Tweets",
    desc: "Generate tweets that look just like the real thing.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
    title: "Safe & Private",
    desc: "No data is stored.",
  },
  {
    icon: <Smile className="w-7 h-7 text-blue-600" />,
    title: "Easy to Use",
    desc: "Create fake tweets in seconds with our simple interface.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 lg:py-15">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-5">
        Why Use TwiFake?
      </h2>
      <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto ">
        TwiFake is a simple tool that lets you create realistic-looking fake
        tweets for design mockups, social media content, or fun creative
        projects.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border shadow hover:shadow-lg p-12 flex flex-col items-center text-center"
          >
            <div className="mb-4 ">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from "react";
import {Button} from "./components/ui/button";
import {motion} from "framer-motion";
import {Link, NavLink} from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
          Create Fake Tweets <br className="hidden sm:block" /> in Seconds
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8">
          TwiFake is a simple tool that lets you create realistic-looking fake
          tweets (now called X posts) for design mockups, social media content,
          or fun creative projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <NavLink to="/dashboard">
            <Button className=" text-white px-6 py-5 rounded-lg font-semibold transition">
              ⚡ Start Creating
            </Button>
          </NavLink>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            No signup required
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Instant download
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            High quality
          </span>
        </div>
      </div>

      {/* Right content - Tweet mockup */}

      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          initial={{opacity: 0, y: 40, scale: 0.95}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.6, ease: "easeOut"}}
          className="bg-white p-6 rounded-xl shadow-md border w-full max-w-xs sm:max-w-sm"
        >
          <Link to="https://x.com/hiarun01">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center font-bold">
                <img src="/favicon.png" alt="" className="rounded-full" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Arun kumar</div>
                <div className="text-sm text-gray-500">@hiarun01</div>
              </div>
            </div>

            <p className="mb-4 text-gray-800">
              Just discovered this amazing fake tweet generator! Perfect for my
              design mockups 🚀
            </p>

            <div className="flex justify-between text-gray-500 text-sm">
              <span>💬 24</span>
              <span>🔁 12</span>
              <span>❤️ 156</span>
              <span>🔗</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

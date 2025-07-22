import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 py-20 h-full">
        {/* Section heading */}
        <motion.h2
          className="text-4xl font-bold inline-block border-b-4 border-gray-500 pb-2 self-start"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Brief bio */}
        <motion.p
          className="text-xl mt-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
           <span className="absolute -left-6 md:-left-10 top-2 w-3 h-3 rounded-full bg-indigo-400 shadow-lg" />
                         Hi, I’m <span className="font-semibold">Ananya</span> 👋 — I enjoy
          building things, from crisp UIs to ambitious ideas. Clean interfaces,
          clever algorithms, and digging into how full systems &amp; compilers work
           When I’m not coding, you’ll catch me devouring the
          latest space‑tech content.
        </motion.p>

        {/* Quick facts grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="p-6 bg-gray-700/40 rounded-2xl shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold mb-2">Current Focus</h3>
            <p className="text-lg">
              Building scalable full‑stack apps with React, Node.js, and MongoDB. Implementing machine learning models for real-world applications.
            </p>
          </div>

          <div className="p-6 bg-gray-700/40 rounded-2xl shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold mb-2">What excites me</h3>
            <p className="text-lg">
              Space tech 🚀, Competitive Programming,BlockChain,WebDevelopment,Data Structures &amp Algorithms,Operating System
            </p>
          </div>

          <div className="p-6 bg-gray-700/40 rounded-2xl shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
            <p className="text-lg">Team collaboration, public speaking, adaptability.</p>
          </div>

          <div className="p-6 bg-gray-700/40 rounded-2xl shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold mb-2">Fun fact</h3>
            <p className="text-lg">My memory’s sharp enough to recall exact line numbers from a 20,000‑line codebase.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
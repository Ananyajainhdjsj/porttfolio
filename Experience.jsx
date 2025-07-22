import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Rocket, Code } from "lucide-react";

const experiences = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Research Intern · IIT Guwahati",
    blurb: "Worked on advanced CPU‑cache optimisation techniques.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI/ML Intern · Microsoft‑Edunet",
    blurb: "Gained hands-on experience in AI/ML, building models for educational data.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Space Tech Intern · Agnirva / ISRO",
    blurb: "Contributed to space tech projects, enhancing my understanding of satellite systems.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "200+ DSA Problems Solved",
    blurb: "LeetCode, Codeforces & GeeksforGeeks → top 5% percentile, improving problem‑solving speed 3×.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white relative"
    >
      {/* vertical guideline */}
      <div className="hidden md:block absolute left-6 top-24 bottom-10 w-px bg-gray-600/50" />

      <div className="max-w-screen-md mx-auto flex flex-col px-6 py-24 space-y-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold border-b-4 border-gray-500 pb-2 inline-block self-start"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-xl leading-relaxed pl-10 md:pl-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="absolute -left-6 md:-left-10 top-2 w-3 h-3 rounded-full bg-indigo-400 shadow-lg" />
          Each role below pushed me to learn fast, optimise harder, and think at
          system scale.
        </motion.p>

        {/* Timeline */}
        {experiences.map((t, i) => (
          <motion.div
            key={t.title}
            className="flex gap-4 items-start pl-10 md:pl-16 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
          >
            {/* Dot */}
            <span className="absolute -left-6 md:-left-10 top-3 w-3 h-3 rounded-full bg-indigo-400 shadow-lg" />
            {/* Icon */}
            <div className="mt-0.5">{t.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="text-base text-gray-300">{t.blurb}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

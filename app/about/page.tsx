"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { name: "Javascript", level: "Advanced"},
  { name: "Tailwind", level: "Advanced"},
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Advanced"},
  { name: "Python", level: "Intermediate" },
  { name: "Git / Github", level: "Advanced"},
  { name: "SQL", level: "Intermediate"},
  { name: "MySQL", level: "Intermediate"},
  { name:"MongoDB", level: "Intermediate"},
];

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg dark:prose-invert mb-12">
            <p className="mb-3">
            👋 Hi, I&apos;m a passionate and curious student with a growing expertise in Data Science, Artificial Intelligence, and Machine Learning — all powered by Python. My journey began with exploring the fundamentals of Data Analysis, and now I&apos;m expanding my skill set into the exciting world of Web Development.
            
            </p>

            <p className="mb-3">

            🌱 I&apos;m constantly learning, building, and experimenting — whether it&apos;s crafting intelligent models, uncovering insights through data, or creating dynamic web experiences.
            
            </p>

            <p className="mb-3">

            💡 I thrive on solving real-world problems with data-driven solutions and turning ideas into impactful projects.
            
            </p>

            <p className="mb-3">

            🚀 I&apos;m always up for new challenges and collaborations. Let&apos;s connect and build something amazing together!

            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { FaChartBar } from "react-icons/fa";

import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiGooglecloud,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { FiCloud } from "react-icons/fi";
import { SiFlask } from "react-icons/si";

export const skills = [
  // Programming
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "SQL", icon: FaDatabase },

  // Machine Learning
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Neural Networks", icon: FiCloud },
  { name: "Model Training", icon: FiCloud },
  { name: "Model Evaluation", icon: FiCloud },

  // Computer Vision
  { name: "OpenCV", icon: SiOpencv },
  { name: "Image Processing", icon: FiCloud },

  // Data & Analytics
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Power BI", icon: "powerbi" },
  { name: "Excel", icon: FiCloud },

  // Web & Tools
  { name: "Flask", icon: SiFlask },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Google Colab", icon: FiCloud },
  { name: "Anaconda", icon: SiAnaconda },

  // Cloud
  { name: "Google Cloud", icon: SiGooglecloud },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // 🔥 re-animate every scroll
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full cursor-default bg-black py-40 px-6 lg:px-16"
    >
      {/* Heading */}
      <h2
        className={`text-center text-4xl lg:text-5xl font-light mb-40 transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-white">My Diverse </span>
        <span className="text-[#e85925]">Tech Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {skills.map((skill, index) => {
          const Icon = typeof skill.icon !== "string" ? skill.icon : null;

          return (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon + Text (Hover Trigger) */}
              <div className="group flex flex-col items-center text-white hover:text-[#e85925] transition-colors duration-500">
                {/* 🔥 CONDITIONAL ICON RENDER */}
                {skill.icon === "powerbi" ? (
                  <div className="relative flex items-end gap-1 mb-2 h-16">
                    {/* First bar – TOP */}
                    <div className="relative w-4 h-8 rounded-t-[5px] rounded-sm border-2 border-current bg-black -mr-2 z-30"></div>

                    {/* Second bar – MIDDLE */}
                    <div className="relative w-4 h-12 rounded-t-[5px] rounded-sm border-2 border-current bg-black -mr-2 z-20"></div>

                    {/* Third bar – BACK */}
                    <div className="relative w-4 h-16 rounded-t-[5px] rounded-sm border-2 border-current bg-black z-10"></div>
                  </div>
                ) : (
                  Icon && <Icon className="text-6xl mb-2" />
                )}
                {/* Skill Name */}
                <p className="text-lg tracking-[5px] mb-2 font-light">
                  {skill.name}
                </p>

                {/* Accent Line */}
                <div
                  className="
              w-10 h-[2px] bg-[#e85925] mt-3
              transition-transform duration-500 ease-out
              group-hover:translate-y-1
            "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

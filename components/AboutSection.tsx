"use client";

import { useEffect, useRef, useState } from "react";



export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Text Section - Dark background */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-8 lg:py-8 bg-gray-300">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-4xl -tracking-[2px] md:text-4xl lg:text-5xl font-semibold mb-2 text-black">
            Dipesh Dahiya
          </h1>

          <div className="text-4xl tracking-[2px] md:text-4xl lg:text-5xl font-bold ">
            <span className="text-[#e85925]">AI/ML Engineer</span>
          </div>

          <div className="text-4xl md:text-4xl  lg:text-5xl font-bold mb-8">
            <span className="text-black mr-2">and</span>
            <span className="text-[#e85925] tracking-[2px]">Full-Stack Developer</span>
          </div>
          

          <div className="border-t border-gray-700 my-8"></div>

          <div className="space-y-6 text-gray-900 font-semibold text-base md:text-mg tracking-[1px] leading-relaxed">
            <p>
              Welcome to my digital space. I’m Dipesh, a Computer Science
              Engineering (AI) student with hands-on experience in building 
              <span className="text-[#e85925] ml-1">AI-powered systems and full-stack web applications</span> that solve
              real-world problems.
            </p>
            <p>
              I work across React, Node.js, Flask, MongoDB, and MySQL, while
              leveraging Python, TensorFlow, OpenCV, and Scikit-learn to design
              intelligent solutions. From developing computer vision models to
              deploying end-to-end web platforms, I enjoy bridging the gap
              between data, logic, and user experience.
            </p>
            <p>
              My approach goes beyond writing code—I focus on why a solution
              exists, how users interact with it, and how it can scale
              efficiently.
            </p>
            <p>
              Whether it’s real-time AI systems, responsive web interfaces, or
              cloud-ready applications, I aim to deliver solutions that are
              reliable, impactful, and future-ready. I’m continuously learning,
              experimenting, and building—driven by curiosity and a strong
              desire to create technology that genuinely makes a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section - Light gray background */}
      <div className="flex-1 flex items-center justify-center relative bg-gray-200">
        <div
          className={`relative w-full h-full  transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <div className="relative w-full h-full  overflow-hidden">
                <img
                  src="../assets/about.jpg"
                  alt="Dipesh Dahiya"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-black/20"></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

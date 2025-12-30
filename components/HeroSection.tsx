"use client";

import { div } from "@tensorflow/tfjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden group">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover min-h-full min-w-full"
          >
            <source src="../assets/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center  text-center">
          <div
            className={`transition-all cursor-default duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Heading */}
            <h1
              className="
              text-4xl md:text-7xl lg:text-6xl font-bolder mb-6
              transition-transform duration-500 ease-out
              group-hover:-translate-y-2
            "
            >
              Transforming <span className="text-[#FF6B35]">Ideas</span> into
              <br className="hidden md:block" />
              Intelligent Digital Experiences
            </h1>

            {/* Animated Line */}
            <div className="flex justify-center my-4">
              <span
                className="
                block h-[1px] w-full bg-gray-300
                scale-x-0 origin-center
                transition-transform duration-500 ease-out
                group-hover:scale-x-100
                group-hover:-translate-y-2
              "
              />
            </div>

            {/* Description */}
            <p
              className="
              text-base md:text-lg lg:text-lg text-gray-300 max-w-5xl leading-relaxed
              transition-transform duration-500 ease-out
              group-hover:-translate-y-2
            "
            >
              I design and build modern web applications powered by intelligent
              systems. With a strong foundation in full-stack development and
              AI/ML, I specialize in creating scalable, user-centric, and
              performance-driven digital solutions. From crafting responsive
              interfaces to integrating data-driven and AI-powered features, I
              focus on building applications that are efficient, reliable, and
              aligned with real-world user needs.
            </p>
          </div>
        </div>
      </div>

      {/*AI-Interview */}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../assets/interview.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Interview, Reimagined
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  AI INTERVIEWER
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>
        </div>
      </div>

      {/*CCTV Anomaly Detection*/}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('../assets/cctv1.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>

          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Seeing Beyond the Ordinary.
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  ANOMALY DETECTION AI
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Remoteflow*/}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('../assets/remoteflow.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Work, Without the Noise
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  REMOTEFLOW
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>
        </div>
      </div>

      {/*Veya shoppings*/}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('../assets/veya_shopping.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>

          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Curated Beauty. Thoughtful Gifting.
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  VEYA SHOPPING
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JobPortal */}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('../assets/ai-trainer.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Train Smarter
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  AI FITNESS COACH
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>
        </div>
      </div>

      {/* JobPortal */}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/jobportal"
          aria-label="Go to Job Portal"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{
            backgroundImage: "url('../assets/jobportal.png')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>
          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Your Career Starts Here
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  JOBPORTAL
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ChatBot */}

      <div className="relative  w-full h-[90vh] overflow-hidden group cursor-pointer">
        <Link
          href="/chatbot"
          aria-label="Go to ChatBot"
          className="absolute inset-0 z-20"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1] "
          style={{
            backgroundImage: "url('../assets/chatbot.jpg')",
            opacity: 0.6,
          }}
        />

        <div className="flex flex-col md:flex-row  w-full h-full">
          {/* Right Content Area */}
          <div className="relative z-10 w-full h-1/2 md:w-[50%] md:h-full flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center text-white">
              <div
                className="
        flex flex-col items-center justify-center text-center
        transition-transform duration-500 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-xl">
                  Future of Conversation
                </h1>

                {/* Animated Line */}
                <div className="overflow-hidden my-4 w-full flex justify-center">
                  <span
                    className="
            block h-[1px] w-full bg-white
            scale-x-0 origin-center
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
          "
                  />
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg text-[#FF6B35] font-bold tracking-[5px]">
                  CHATBOT
                </p>

                {/* Plus Icon */}
                <div
                  className="
          relative mt-6 w-6 h-6
          opacity-0
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-y-2
        "
                >
                  {/* Horizontal */}
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF6B35] -translate-y-1/2" />

                  {/* Vertical */}
                  <span
                    className="
            absolute top-1/2 left-1/2 h-full w-[2px] bg-[#FF6B35]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90
            transition-transform duration-500 ease-out
            group-hover:rotate-0
          "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:w-[50%] md:h-full"></div>
        </div>
      </div>
    </div>
  );
}

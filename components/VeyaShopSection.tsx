"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VeyaShopSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  const sectionRef = useRef(null);

  // Track scroll progress of THIS section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Move image upward as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [100, -150]);

  return (
    <section className="w-full bg-black">
      <Link href="/work">
        <motion.div
          whileHover={{}}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="
      fixed
      bottom-6 right-6
      z-50
      bg-purple-950
      w-auto h-auto
      text-white
      px-5 py-3
      rounded-full
      font-semibold
      tracking-wide
      cursor-pointer
      shadow-lg
      duration-300
      text-sm md:text-sm
      hover:bg-veya
      transition-colors
    "
        >
          Back to Work
        </motion.div>
      </Link>
      {/* =========================
          SECTION 1 – HERO
      ========================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: false }}
        className="relative pb-20 w-full h-screen overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../assets/veya_shopping.png')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Center Heading */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="text-white text-4xl md:text-6xl font-semibold text-center"
          >
            Curated Beauty. Thoughtful Gifting.
          </motion.h1>
        </div>

        {/* Bottom Center Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="absolute bottom-8 w-full flex justify-center z-10"
        >
          <p className="text-purple-950 tracking-[5px] font-semibold text-2xl">
            VEYA SHOPPING
          </p>
        </motion.div>
      </motion.div>

      {/* =========================
          SECTION 2 – ABOUT + FEATURES
      ========================== */}
      <div className="w-full h-screen md:h-full">
        <div className="grid grid-cols-1 md:grid-cols-2  h-full">
          {/* LEFT – ABOUT */}
          <div className="bg-veya text-white p-8 md:p-12 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-4xl md:text-4xl font-semibold mb-6"
            >
              Chatbot — Human-Like{" "}
              <span className="text-purple-950">Conversations</span> Powered by
              AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-white font-semibold text-base md:text-mg tracking-[1px] leading-relaxed text-justify"
            >
              This chatbot project is a{" "}
              <span className="text-purple-950 font-medium">
                machine learning–based
              </span>{" "}
              conversational system developed as a full-stack web application.
              The goal of the project is to simulate natural, human-like
              conversations by understanding user intent and responding in a
              friendly and meaningful way. It focuses on creating an interactive
              AI experience that feels intuitive rather than robotic. The system
              integrates machine learning models with a modern web interface,
              allowing users to communicate with the AI in real time. Emphasis
              was placed on clean conversation flow, response relevance, and
              overall user experience. Built as a 4th-semester academic project
              at Chitkara University, this project showcases the practical
              implementation of AI concepts, full-stack development, and
              conversational design working together in a real-world scenario.
            </motion.p>
          </div>

          {/* RIGHT – FEATURES */}
          <div className="bg-purple-950 text-white p-8 md:p-12 flex flex-col items-left lg:items-center justify-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-120px" }}
                className="text-4xl items-start text-left md:text-4xl font-semibold mb-6"
              >
                Key Features
              </motion.h3>

              <motion.ul
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: false, margin: "-120px" }}
                className="space-y-4 uppercase items-start text-veya font-semibold text-base md:text-mg tracking-[1px] leading-relaxed"
              >
                <li>Smart Conversations</li>
                <li>Machine Learning Core</li>
                <li>Full-Stack System</li>
                <li>User-Friendly Design</li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          SECTION – IMAGE SHOWCASE
          ========================== */}
      <section
        ref={sectionRef}
        className="w-full bg-veya h-[80vh] md:h-[110vh] flex items-center justify-center px-6 md:px-12"
      >
        <div className="w-full flex items-center  justify-center ">
          <motion.img
            src="../assets/projects/chatbot-1.png"
            alt="Project preview"
            style={{ y }}
            className="
            w-full h-auto
            md:w-auto md:h-[110vh]
            object-contain
          "
          />
        </div>
      </section>
      <div className="w-full h-full md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2  h-full">
          {/* LEFT – SKILLS USED */}
          <div className="bg-purple-950 text-white p-8 md:p-12 flex flex-col items-left lg:items-center justify-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-120px" }}
                className="text-4xl text-left md:text-4xl font-semibold mb-6"
              >
                Skills & Technologies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false, margin: "-120px" }}
                className="text-white font-semibold italic  tracking-[2px] text-sm mb-8 -mt-4 "
              >
                "Comprehensive Technologies for a{" "}
                <span className="text-veya">Intelligent</span>{" "}
                Conversations"
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: false, margin: "-120px" }}
                className="space-y-4 uppercase text-veya font-semibold text-base md:text-mg tracking-[1px] leading-relaxed"
              >
                <li>Machine Learning & NLP</li>
                <li>Python & AI Libraries</li>
                <li>Full-Stack Web Development</li>
                <li>API Integration & Backend Logic</li>
                <li>Responsive UI Design</li>
              </motion.ul>
            </div>
          </div>

          {/* RIGHT – ARCHITECTURE / IMPACT */}
          <div className="bg-veya text-white p-8 md:p-12 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-4xl md:text-4xl font-semibold mb-6"
            >
              Built with Real-World Focus
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-white font-semibold text-base md:text-mg tracking-[1px] leading-relaxed text-justify"
            >
              This chatbot project was developed with a strong focus on
              real-world conversational systems rather than just academic
              requirements. The architecture emphasizes modularity, clarity, and
              maintainability, enabling the AI logic, backend services, and
              frontend interface to evolve independently without disrupting the
              overall system. <br />
              <br /> Careful attention was given to efficient request handling
              and conversation flow. The backend is designed to process user
              inputs reliably, manage contextual information, and deliver
              responses with minimal latency. Clean API communication and
              structured data handling ensure smooth interaction between the AI
              model and the web application, making the system suitable for
              scaling and future feature additions.
              <br />
              <br /> Security and reliability were also integral to the
              development process. Input validation, controlled data flow, and
              safe handling of user interactions were implemented to maintain
              system integrity. Overall, the project reflects a balanced
              approach to performance, usability, and extensibility—closely
              mirroring how production-ready conversational AI platforms are
              engineered in real-world environments.
            </motion.p>
          </div>
        </div>
      </div>
      <section className="w-full bg-veya h-full md:h-[90vh] px-6 md:px-12 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT – TEXT CONTENT */}
          <div className="text-white flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-4xl md:text-4xl font-semibold mb-6"
            >
              Designed for{" "}
              <span className="text-purple-950">Speed & Interaction</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="text-white font-semibold text-base md:text-mg tracking-[1px] leading-relaxed text-justify"
            >
              Beyond core functionality, the chatbot was optimized to deliver
              fast, smooth, and engaging interactions. Response time,
              conversation flow, and clarity of replies were prioritized to
              ensure users experience natural and uninterrupted communication
              with the AI.
              <br />
              <br />
              The interface is designed to be lightweight and responsive,
              adapting seamlessly across mobile, tablet, and desktop devices.
              Performance-focused design choices help maintain stability during
              continuous conversations and concurrent user interactions,
              ensuring consistent usability even as the system scales with
              increased usage and complexity.
            </motion.p>
          </div>

          {/* RIGHT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, margin: "-120px" }}
            className="w-full flex justify-center"
          >
            <img
              src="../assets/projects/chatbot-2.png"
              alt="Platform performance preview"
              className="w-full md:w-[85%] h-auto rounded-xl object-contain"
            />
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-veya h-auto pb-0 px-6 md:px-12 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, margin: "-120px" }}
            className="w-full flex justify-center"
          >
            <img
              src="../assets/projects/chatbot-3.png"
              alt="Connect illustration"
              className="w-full h-auto rounded-xl object-contain"
            />
          </motion.div>

          {/* RIGHT – TEXT */}
          <div className="flex flex-col justify-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="flex items-center gap-4"
            >
              <Link href="/contact">
                <motion.h2
                  initial="rest"
                  whileHover="hovered"
                  className="group text-6xl md:text-6xl font-semibold flex flex-wrap items-center gap-4 cursor-pointer"
                >
                  <span className="whitespace-nowrap">Connect with</span>

                  <span className="flex items-center gap-3 whitespace-nowrap">
                    <span className="text-purple-950">me</span>

                    <motion.span
                      variants={{
                        rest: {
                          x: 0,
                          color: "#7F45AE",
                          borderColor: "#7F45AE",
                        },
                        hovered: {
                          x: 6,
                          color: "#2e1065",
                          borderColor: "#2e1065",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="
          border-4
          rounded-full
          mt-2 pb-1
          w-12 h-12 md:w-14 md:h-14
          flex items-center justify-center
          text-3xl md:text-4xl
        "
                    >
                      ▶
                    </motion.span>
                  </span>
                </motion.h2>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-120px" }}
              className="mt-6 text-white font-semibold text-base pb-20 md:text-mg tracking-[1px] leading-relaxed"
            >
              Whether it’s collaboration, opportunities, or a quick conversation
              about technology and product ideas, I’m always open to meaningful
              connections. Feel free to reach out and start a conversation.
            </motion.p>
          </div>
        </div>
      </section>

      <motion.section
        whileHover="hovered"
        initial="rest"
        className="
    relative w-full h-[40vh]
    bg-cover bg-center
    flex items-center justify-center
    cursor-pointer
  "
        style={{
          backgroundImage: "url('../assets/ai-trainer.png')",
        }}
      >
        {/* Overlay */}
        <Link href="/ai-trainer">
          <motion.div
            variants={{
              rest: { backgroundColor: "rgba(0,0,0,0.4)" },
              hovered: { backgroundColor: "rgba(0,0,0,0.55)" },
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-black gap-3">
            {/* Top text */}
            <p className="uppercase tracking-[4px] text-sm md:text-base text-white/80">
              Up next
            </p>

            {/* Main link text */}

            <motion.span
              variants={{
                rest: { opacity: 0 },
                hovered: { opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
              text-purple-950
          font-semibold
          uppercase
          tracking-[6px]
          mt-2
          text-4xl md:text-6xl
          cursor-pointer
        "
            >
              AI-Trainer
            </motion.span>
          </div>
        </Link>
      </motion.section>
    </section>
  );
}

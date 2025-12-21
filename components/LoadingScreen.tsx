"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [opacity, setOpacity] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [display, setDisplay] = useState("block");

  // 🔹 Centralized text size control (EDIT HERE ONLY)
  const textSize = {
    large: "text-6xl md:text-7xl lg:text-8xl",
    medium: "text-5xl md:text-6xl lg:text-7xl",
    small: "text-4xl md:text-4xl lg:text-5xl",
  };
  const [textOpacity, setTextOpacity] = useState(1);
  // REMOVE slide1 / slide2 logic
const [phase, setPhase] = useState<"idle" | "fadeText" | "slide">("idle");


  const textLines = [
    {
      parts: [
        { text: "Hello.  ", color: "orange", size: "medium" },
        { text: "\u00A0I am", color: "gray", size: "small" },
      ],
    },
    {
      parts: [{ text: "Dipesh Dahiya", color: "white", size: "large" }],
    },
    {
      parts: [
        { text: "a\u00A0", color: "gray", size: "small" },
        { text: "  Full-Stack Developer", color: "orange", size: "medium" },
      ],
    },
    {
      parts: [
        { text: "and\u00A0", color: "gray", size: "small" },
        { text: "AI/ML Engineer", color: "orange", size: "medium" },
      ],
    },
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setVisibleWords((prev) => (prev < textLines.length ? prev + 1 : prev));
    }, 400);

    return () => clearInterval(wordInterval);
  }, [textLines.length]);

  useEffect(() => {
  if (visibleWords === textLines.length) {
    const timer = setTimeout(() => {
      // Fade text only
      setPhase("fadeText");
      setTextOpacity(0);

      // Start smooth slide AFTER fade finishes
      setTimeout(() => {
        setPhase("slide");
        setTranslateX(-100);

        setTimeout(() => {
          setDisplay("none");
          onComplete();
        }, 900);
      }, 500); // text fade duration
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [visibleWords, onComplete]);


  return (
    <div
  className="fixed inset-0 z-50 w-[100vw] h-[100vh] bg-black flex items-center justify-center cursor-default"
  style={{
    transform: `translateX(${translateX}%)`,
    transition:
      phase === "slide"
        ? "transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1)"
        : "none",
    display,
    overflow: "hidden",
  }}
>

      <div
        className="w-full h-full flex items-center justify-center -mt-5"
        style={{
          opacity: textOpacity,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div className="text-left">
          {textLines.map((line, index) => {
            const isVisible = index < visibleWords;

            return (
              <div key={index} className="overflow-hidden  -mb-2">
                <div
                  style={{
                    transform: isVisible ? "translateY(0)" : "translateY(100%)",
                    opacity: isVisible ? 1 : 0,
                    transition:
                      "transform 0.6s ease-out, opacity 0.6s ease-out",
                  }}
                >
                  {line.parts.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={`inline-block leading-tight ${
                        part.color === "orange"
                          ? "text-[#FF6B35] font-bold"
                          : part.color === "gray"
                          ? "text-gray-400 font-normal"
                          : "text-white font-bold"
                      } ${textSize[part.size as keyof typeof textSize]}`}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

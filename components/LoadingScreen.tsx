"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [translateX, setTranslateX] = useState(0);
  const [display, setDisplay] = useState("block");
  const [textOpacity, setTextOpacity] = useState(1);
  const [phase, setPhase] = useState<"idle" | "fadeText" | "slide">("idle");

  // 🔹 Centralized text size control (mobile-first)
  const textSize = {
    large: "text-5xl sm:text-5xl md:text-7xl lg:text-8xl",
    medium: "text-4xl sm:text-4xl md:text-6xl lg:text-7xl",
    small: "text-3xl sm:text-3xl md:text-5xl lg:text-5xl",
  };

  const textLines = [
    {
      parts: [
        { text: "Hello.\u00A0", color: "orange", size: "medium" },
        { text: " I am", color: "gray", size: "small" },
      ],
    },
    {
      parts: [{ text: "Dipesh Dahiya", color: "white", size: "large" }],
    },
    {
      parts: [
        { text: "a \u00A0", color: "gray", size: "small" },
        { text: "AI/ML Engineer", color: "orange", size: "medium" },
      ],
    },
    {
      parts: [
        { text: "and \u00A0", color: "gray", size: "small" },
        { text: "Full-Stack Developer", color: "orange", size: "medium" },
      ],
    },
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setVisibleWords((prev) =>
        prev < textLines.length ? prev + 1 : prev
      );
    }, 400);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    if (visibleWords === textLines.length) {
      const timer = setTimeout(() => {
        setPhase("fadeText");
        setTextOpacity(0);

        setTimeout(() => {
          setPhase("slide");
          setTranslateX(-100);

          setTimeout(() => {
            setDisplay("none");
            onComplete();
          }, 900);
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visibleWords, onComplete]);

  return (
    <div
      className="fixed w-full h-full inset-0 z-50 bg-black flex align-center items-center justify-center px-6"
      style={{
        transform: `translateX(${translateX}%)`,
        transition:
          phase === "slide"
            ? "transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1)"
            : "none",
        display,
      }}
    >
      <div
        className="w-full h-full flex  items-center justify-center"
        style={{
          opacity: textOpacity,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div className="text-left md:text-left">
          {textLines.map((line, index) => {
            const isVisible = index < visibleWords;

            return (
              <div key={index} className="overflow-hidden -mb-1">
                <div
                  style={{
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100%)",
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

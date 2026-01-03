"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMonitor, FiUser, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { i } from "framer-motion/client";
import { logicalOr } from "@tensorflow/tfjs";
import { log } from "console";

/* ---------------------------------------
   SIDEBAR THEMES (single source of truth)
--------------------------------------- */
const sidebarThemes = [
  {
    match: (path: string) => path.startsWith("/remoteflow"),
    logo: "../assets/logo-remoteflow.png", // ✅ NEW
    bg: "bg-surface",
    text: "text-primary",
    border: "border-gray-800",
    overlay: "bg-surface/50",
    burgerBg: "bg-black/80",
    burgerLine: "bg-primary",
    hover: "hover:text-remote",
    hover_button: "hover:bg-remote hover:text-surface border-gray-600 hover:border-surface",
    icon_hover: "group-hover:text-remote",
    icon_co: "text-primary",
  },
  {
    match: (path: string) => path.startsWith("/veyashop"),
    logo: "../assets/logo.png",
    bg: "bg-veya",
    text: "text-surface",
    border: "border-white",
    overlay: "bg-surface/50",
    burgerBg: "bg-surface",
    burgerLine: "bg-veya",
    hover: "hover:text-purple-950",
    hover_button:"hover:bg-purple-950 hover:text-surface  border-white hover:border-veya",
    icon_hover: "group-hover:text-purple-950",
  icon_co: "text-surface",
  },
  {
    match: (path: string) => path.startsWith("/chatbot"),
    logo: "../assets/logo.png",
    bg: "bg-primary",
    text: "text-surface",
    border: "border-gray-600",
    overlay: "bg-surface/50",
    burgerBg: "bg-surface",
    burgerLine: "bg-primary",
    hover: "hover:text-purple-900",
    hover_button:"hover:bg-purple-900 hover:text-surface  border-gray-600 hover:border-primary",
    icon_hover: "group-hover:text-purple-900",
  icon_co: "text-surface",
  },
];

/* Default theme */
const defaultTheme = {
  logo: "../assets/logo.png",
  bg: "bg-primary",
  text: "text-surface",
  border: "border-gray-800",
  overlay: "bg-primary/50",
  burgerBg: "bg-black/80",
  burgerLine: "bg-surface",
  hover: "hover:text-brand",
  hover_button:"hover:bg-brand hover:text-surface  border-gray-600 hover:border-primary",
  icon_hover: "group-hover:text-brand",
  icon_co: "text-surface",
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const pathname = usePathname();

  const theme =
    sidebarThemes.find((t) => t.match(pathname)) || defaultTheme;

  const navItems = [
    { icon: FiMonitor, label: "Work", href: "/work" },
    { icon: FiUser, label: "About", href: "/about" },
    { icon: FiMail, label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/dipesh-dahiya/" },
    { icon: FaGithub, href: "https://github.com/Dipeshdahiya" },
    { icon: FaUpwork, href: "#" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={`lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg transition-colors ${theme.burgerBg}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
          <span
            className={`block h-0.5 transition-all ${theme.burgerLine} ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 transition-all ${theme.burgerLine} ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 transition-all ${theme.burgerLine} ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Spacer for layout */}
      <div className="hidden lg:block w-[250px]" />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0
          h-full lg:h-screen
          w-[200px] lg:w-[250px]
          z-30
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${theme.bg} ${theme.text} ${theme.border}
          border-r
          flex flex-col items-center
          pt-14 px-6 gap-10
        `}
      >
        {/* Logo */}
        <div
          className={`mb-20 transition-all duration-700 ease-out ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/">
            <div className="w-40 h-40 flex items-center justify-center cursor-pointer">
              <img src={theme.logo} alt="Home - Logo" />

            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full flex justify-center">
          <ul className="space-y-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-500 ease-out ${
                  animateIn
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex  items-center space-x-4 transition-colors duration-500 ${theme.text} ${theme.hover}`}
                >
                  <item.icon className={`text-[24px] transition-colors ${theme.icon_hover} ${theme.icon_co} `} />
                  <span className="text-[20px] tracking-[8px] font-normal">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Download CV */}
        <a
          href="../assets/Dipesh_Dahiya_CV.pdf"
          download
          className={`
            mt-5 px-6 py-3 rounded-md tracking-[3px] text-sm
            transition-all duration-500 border
            ${theme.hover_button} 
          `}
        >
          DOWNLOAD CV
        </a>

        {/* Social Icons */}
        <div className="w-full mt-5">
          <div className={`border-t pt-8 ${theme.border}`}>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl transition-colors duration-300  ${theme.hover} ${theme.text}`}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-20 ${theme.overlay}`}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMonitor, FiUser, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: FiMonitor, label: "Work", href: "/work" },
    { icon: FiUser, label: "About", href: "/about" },
    { icon: FiMail, label: "Contact", href: "/contact" },
  ];

  const [animateIn, setAnimateIn] = useState(false);

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/dipesh-dahiya/" },
    { icon: FaGithub, href: "https://github.com/Dipeshdahiya" },
    { icon: FaUpwork, href: "#" },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }); // slight delay after loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-black/80 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
          <span
            className={`block h-0.5 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>
      <div className="hidden lg:block relative top-0 left-0 bg-gray-800 h-screen w-[250px]"></div>

      {/* Sidebar */}
      <aside
        className={`
    fixed
    top-0 left-0
    h-full lg:h-screen
    w-[200px] lg:w-[250px]
    bg-black
    z-30
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    flex flex-col items-center
    border-r border-gray-800
    pt-14 px-6 gap-10
  `}
      >
        {/* Logo */}
        <div
          className={`
    mb-20
    transition-all duration-700 ease-out
    ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
        >
          <a href="/" aria-label="Go to home">
            <div className="w-32 h-32 flex items-center justify-center cursor-pointer">
              <img src="../assets/logo.png" alt="Home - Logo" />
            </div>
          </a>
        </div>

        {/* Navigation (AUTO HEIGHT) */}
        <nav className="relative w-full flex flex-col justify-center items-center">
          <ul className="space-y-8 ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`
        transition-all duration-500 ease-out
        ${animateIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center space-x-4 text-white hover:text-[#FF6B35]"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="text-[24px] group-hover:text-[#FF6B35]" />
                  <span className="text-[20px] tracking-[8px] font-light">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Download CV Button */}
        <div
          className={`
    
    transition-all duration-700 ease-out
    ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
          style={{ transitionDelay: "420ms" }}
        >
          <a
            href="../assets/Dipesh_Dahiya_CV.pdf"
            download
            className="
      block text-center
      mt-5
      px-6 py-3
      border border-white
      text-white
      tracking-[3px]
      text-sm
      rounded-md
      transition-all duration-300
      hover:bg-[#FF6B35]
      hover:border-black
      hover:text-black
    "
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Social Icons pinned to bottom */}
        <div
          className={`
    w-full mt-5
    transition-all duration-700 ease-out
    ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="border-t border-white/20 pt-8">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF6B35] transition-colors text-3xl duration-800"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

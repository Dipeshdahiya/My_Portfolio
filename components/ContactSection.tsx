'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center pl-6 lg:pl-32 overflow-hidden"
    >
      <div className="w-full  cursor-default text-center lg:text-left">
        
        {/* Heading */}
        <div className="mb-12 ">
          <h2 className="font-bold mb-6 leading-none">
            
            {/* Let's get in */}
            <span
              className={`
                block text-[#FF6B35]
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                transition-all duration-1000 ease-out
                ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
              `}
            >
              Let&apos;s get in
            </span>

            {/* Touch */}
            <span
              className={`
                block text-white
                text-4xl sm:text-5xl md:text-6xl lg:text-8xl
                transition-opacity duration-2000 ease-out delay-100
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
            >
              Touch.
            </span>
          </h2>

          {/* Animated Line */}
          <div className="">
            <span
              className={`
                block h-[1px] bg-[#FF6B35]
                transition-transform duration-1000 ease-out delay-500
                origin-left
                ${isVisible ? 'scale-x-400' : 'scale-x-0'}
              `}
            />
          </div>
        </div>
        

        {/* Contact Details */}
        <div className="space-y-8">
          
          {/* Phone */}
          <a
            href="tel:7496801160"
            className={`
              flex items-center justify-center lg:justify-start
              space-x-4 text-white hover:text-[#FF6B35]
              transition-all duration-700 ease-out delay-600
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              7496801160
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:brijeshdahiya18@gmail.com"
            className={`
              flex items-center justify-center lg:justify-start
              space-x-4 text-white hover:text-[#FF6B35]
              transition-all duration-700 ease-out delay-800
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium break-all">
              brijeshdahiya18@gmail.com
            </span>
          </a>

        </div>
      </div>
    </section>
  )
}

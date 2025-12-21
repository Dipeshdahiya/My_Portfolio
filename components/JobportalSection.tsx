'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function JobportalSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black text-white px-6 sm:px-10 lg:px-20 py-20">
      {/* Header */}
      <div
        className={`
          max-w-5xl mx-auto mb-16
          transition-all duration-1000 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-[#FF6B35]">JobPortal</span> Platform
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
          JobPortal is a modern recruitment platform designed to connect talent
          with opportunity. It simplifies job discovery, candidate screening,
          and employer outreach through a clean user experience and scalable
          architecture.
        </p>
      </div>

      {/* Features */}
      <div
        className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
          max-w-6xl mx-auto mb-20
          transition-all duration-1000 delay-200 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {[
          {
            title: 'Smart Job Search',
            desc: 'Advanced filters, role-based recommendations, and fast discovery for job seekers.',
          },
          {
            title: 'Employer Dashboard',
            desc: 'Post jobs, manage applicants, and track hiring progress from a single dashboard.',
          },
          {
            title: 'Secure Authentication',
            desc: 'Role-based login for candidates and recruiters with secure session handling.',
          },
          {
            title: 'Scalable Architecture',
            desc: 'Built with modern frameworks to support growth and high traffic.',
          },
          {
            title: 'User-Centric Design',
            desc: 'Minimal, accessible UI focused on clarity and usability.',
          },
          {
            title: 'Future-Ready',
            desc: 'Designed to integrate AI-based matching and analytics in later phases.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border border-white/10 p-6 rounded-lg hover:border-[#FF6B35] transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#FF6B35]">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div
        className={`
          max-w-5xl mx-auto mb-20
          transition-all duration-1000 delay-300 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Technology Stack
        </h2>
        <p className="text-gray-300 mb-6 max-w-3xl">
          The platform is built using modern, industry-standard technologies
          focused on performance, scalability, and maintainability.
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>• React / Next.js</li>
          <li>• Tailwind CSS</li>
          <li>• Django / REST API</li>
          <li>• PostgreSQL / MongoDB</li>
          <li>• JWT Authentication</li>
          <li>• Cloud Deployment Ready</li>
        </ul>
      </div>

      {/* CTA */}
      <div
        className={`
          max-w-4xl mx-auto text-center
          transition-all duration-1000 delay-500 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Want to explore the project further?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/contact"
            className="px-8 py-3 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black transition-colors duration-300 rounded-md"
          >
            Contact Me
          </Link>

          <Link
            href="/work"
            className="px-8 py-3 border border-white/30 text-white hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors duration-300 rounded-md"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

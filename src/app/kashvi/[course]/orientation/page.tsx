"use client";

import { useState } from "react";
import Link from "next/link";

const weeks = [
  { num: 1, title: "Week 1: Building Blocks" },
  { num: 2, title: "Week 2: Talking To The Machine" },
  { num: 3, title: "Week 3: Building Logic" },
  { num: 4, title: "Week 4: Functions" },
  { num: 5, title: "Week 5: Current Trends" },
  { num: 6, title: "Week 6: Productivity With AI" },
];

export default function OrientationPage() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`bg-surface-container-low border-r border-gray-200 transition-all duration-300 fixed lg:relative z-20 h-full ${
          isMinimized ? "w-16" : "w-64"
        } ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors mb-4"
          >
            <svg
              className={`w-5 h-5 transition-transform ${isMinimized ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          
          <nav className="space-y-2">
            {!isMinimized && (
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Course Content
              </span>
            )}
            {weeks.map((week) => (
              <Link
                key={week.num}
                href={`#week${week.num}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                  isMinimized ? "justify-center" : ""
                }`}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-accent text-white text-xs font-bold">
                  {week.num}
                </span>
                {!isMinimized && (
                  <span className="text-sm font-medium truncate">{week.title}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 p-4 lg:p-8 w-full max-w-4xl">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-30 p-3 rounded-full bg-purple-accent text-white shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1 className="text-2xl lg:text-3xl font-bold mb-6">Orientation: Getting Started</h1>
        
        <div className="prose max-w-none">
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            Welcome to Kashvi! Before we begin Week 1, let's get oriented with how this course works.
          </p>

          <h2 className="text-lg lg:text-xl font-semibold mb-3">How This Course Works</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Each week has 6 days of content</li>
            <li>Day 1-5: New concepts with hands-on practice</li>
            <li>Day 6: Review and apply what you've learned</li>
          </ul>

          <h2 className="text-lg lg:text-xl font-semibold mb-3">What to Expect</h2>
          <p className="text-gray-600 mb-6">
            This course is designed for complete beginners. We'll start from the very basics 
            and build up your programming skills step by step. No prior experience required!
          </p>

          <h2 className="text-lg lg:text-xl font-semibold mb-3">Course Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {weeks.map((week) => (
              <div
                key={week.num}
                id={`week${week.num}`}
                className="p-4 rounded-lg bg-surface-container-low border border-gray-200"
              >
                <h3 className="font-semibold mb-2">{week.title}</h3>
                <p className="text-sm text-gray-500">6 days of content</p>
              </div>
            ))}
          </div>

          <h2 className="text-lg lg:text-xl font-semibold mb-3">Ready to Begin?</h2>
          <p className="text-gray-600">
            Head to Week 1 when you're ready to start your programming journey.
          </p>
        </div>
      </main>
    </div>
  );
}
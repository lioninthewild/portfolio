"use client";

import { useState } from "react";
import Link from "next/link";

interface WeekPageProps {
  weekNum: number;
  weekTitle: string;
}

const weeks = [
  { num: 1, title: "Week 1: Building Blocks" },
  { num: 2, title: "Week 2: Talking To The Machine" },
  { num: 3, title: "Week 3: Building Logic" },
  { num: 4, title: "Week 4: Functions" },
  { num: 5, title: "Week 5: Current Trends" },
  { num: 6, title: "Week 6: Productivity With AI" },
];

const days = [1, 2, 3, 4, 5, 6];

export default function WeekPage({ weekNum, weekTitle }: WeekPageProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const weekHref = (num: number) => `/kashvi/programming-fundamentals/week${num}`;

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
            <Link
              href="/kashvi/programming-fundamentals"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium">Home</span>}
            </Link>
            <Link
              href="/kashvi/programming-fundamentals/orientation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium">Orientation</span>}
            </Link>
            {weeks.map((week) => (
              <Link
                key={week.num}
                href={weekHref(week.num)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                  isMinimized ? "justify-center" : ""
                } ${week.num === weekNum ? "bg-purple-accent text-white hover:bg-purple-accent/90" : ""}`}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-accent text-xs font-bold">
                  {week.num}
                </span>
                {!isMinimized && (
                  <span className="text-sm font-medium truncate">{week.title}</span>
                )}
              </Link>
            ))}
            <Link
              href="/kashvi/programming-fundamentals/assignments"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium">Assignments</span>}
            </Link>
          </nav>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 p-4 lg:p-8 w-full">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-30 p-3 rounded-full bg-purple-accent text-white shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold">{weekTitle}</h1>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low border border-gray-200 hover:bg-surface-container-high transition-colors text-sm lg:text-base"
              >
                <span>Day {selectedDay}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-surface-container-low border border-gray-200 rounded-lg shadow-lg z-10">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => {
                        setSelectedDay(day);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-surface-container-high transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedDay === day ? "bg-purple-accent text-white hover:bg-purple-accent/90" : ""
                      }`}
                    >
                      Day {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-base lg:text-lg text-gray-600 mb-6">
              Welcome to Week {weekNum}! In this week, we'll continue building your programming skills.
            </p>

            <h2 className="text-lg lg:text-xl font-semibold mb-3">Day {selectedDay}: Content</h2>
            <p className="text-gray-600">
              This is the content for Day {selectedDay} of Week {weekNum}. Each day covers different topics 
              to help you build a strong foundation in programming.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
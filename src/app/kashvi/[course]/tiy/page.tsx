"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tiyContent } from "@/data/tiy-content";

const difficulties = ["easy", "medium", "hard"] as const;

const weeks = [
  { num: 1, title: "Week 1: Building Blocks" },
  { num: 2, title: "Week 2: Talking To The Machine" },
  { num: 3, title: "Week 3: Building Logic" },
  { num: 4, title: "Week 4: Functions" },
  { num: 5, title: "Week 5: Current Trends" },
  { num: 6, title: "Week 6: Productivity With AI" },
];

const days = [1, 2, 3, 4, 5, 6];

export default function TIYPage() {
  const params = useParams();
  const course = params?.course || "python";
  
  const [isMinimized, setIsMinimized] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks(prev => 
      prev.includes(weekNum) 
        ? prev.filter(n => n !== weekNum)
        : [...prev, weekNum]
    );
  };

  const isWeekExpanded = (weekNum: number) => expandedWeeks.includes(weekNum);

  const getStyles = (difficulty: string) => {
    const key = difficulty as keyof typeof tiyContent;
    return tiyContent[key]?.color || {
      badge: "bg-gray-100 text-gray-700",
      border: "border-gray-300",
      bg: "bg-gray-50",
      icon: "⚪"
    };
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-surface-container-low border-r border-gray-200 transition-all duration-300 fixed lg:relative z-20 h-full ${
          isMinimized ? "w-16" : "w-64"
        }`}
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
          
          <nav className="space-y-1">
            {!isMinimized && (
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Course Content
              </span>
            )}
            
            <Link
              href={`/kashvi/${course}/course`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Home</span>}
            </Link>

            <button
              onClick={() => window.location.href = `/kashvi/${course}/course?view=orientation`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Orientation</span>}
            </button>

            {weeks.map((week) => (
              <div key={week.num}>
                <button
                  onClick={() => toggleWeek(week.num)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform ${isWeekExpanded(week.num) ? "rotate-90" : ""} flex-shrink-0`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {!isMinimized && (
                    <>
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-accent text-white text-xs font-bold flex-shrink-0">
                        {week.num}
                      </span>
                      <span className="text-sm font-medium truncate">{week.title}</span>
                    </>
                  )}
                </button>

                {!isMinimized && isWeekExpanded(week.num) && (
                  <div className="ml-8 mt-1 space-y-1">
                    {days.map((day) => (
                      <Link
                        key={day}
                        href={`/kashvi/${course}/course?view=week${week.num}&day=${day}`}
                        className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-high transition-colors text-sm text-gray-600"
                      >
                        <span>Day {day}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => window.location.href = `/kashvi/${course}/tiy/`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Try It Yourself</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Try It Yourself</h1>
            <p className="text-gray-600 mt-1">Test your understanding with these challenges</p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {difficulties.map((difficulty) => {
              const content = tiyContent[difficulty];
              const styles = getStyles(difficulty);

              return (
                <Link
                  key={difficulty}
                  href={`/kashvi/${course}/tiy/${difficulty}`}
                  className={`block p-6 rounded-xl border-2 ${styles.border} ${styles.bg} hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{styles.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 capitalize">{difficulty}</h2>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${styles.badge}`}>
                        {content?.marks || 0} marks
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span>📝</span>
                      <span>Conceptual</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span>💻</span>
                      <span>Coding</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
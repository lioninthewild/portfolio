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

const assignments = [
  { week: 1, title: "Assignment 1: Hello World", description: "Write your first program" },
  { week: 1, title: "Assignment 2: Variables", description: "Practice using variables" },
  { week: 2, title: "Assignment 3: User Input", description: "Handle user input" },
  { week: 2, title: "Assignment 4: Calculations", description: "Basic math operations" },
  { week: 3, title: "Assignment 5: If Statements", description: "Conditional logic" },
  { week: 3, title: "Assignment 6: Loops", description: "Repeating actions" },
];

export default function AssignmentsPage() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const filteredAssignments = selectedWeek 
    ? assignments.filter(a => a.week === selectedWeek)
    : assignments;

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
                href={`/kashvi/programming-fundamentals/week${week.num}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors"
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
            <h1 className="text-2xl lg:text-3xl font-bold">Assignments</h1>
            
            <div className="relative">
              <select
                value={selectedWeek || ""}
                onChange={(e) => setSelectedWeek(e.target.value ? Number(e.target.value) : null)}
                className="px-4 py-2 rounded-lg bg-surface-container-low border border-gray-200 hover:bg-surface-container-high transition-colors text-sm lg:text-base appearance-none cursor-pointer pr-10"
              >
                <option value="">All Weeks</option>
                {weeks.map((week) => (
                  <option key={week.num} value={week.num}>Week {week.num}</option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredAssignments.map((assignment, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-surface-container-low border border-gray-200 hover:border-purple-accent hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-accent text-white">
                    Week {assignment.week}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{assignment.title}</h3>
                <p className="text-sm text-gray-500">{assignment.description}</p>
              </div>
            ))}
          </div>

          {filteredAssignments.length === 0 && (
            <p className="text-gray-500 text-center py-8">No assignments found for this week.</p>
          )}
        </div>
      </main>
    </div>
  );
}
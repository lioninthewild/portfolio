"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SlideViewer from "@/components/course/SlideViewer";

const weeks = [
  { num: 1, title: "Week 1: Building Blocks" },
  { num: 2, title: "Week 2: Talking To The Machine" },
  { num: 3, title: "Week 3: Building Logic" },
  { num: 4, title: "Week 4: Functions" },
  { num: 5, title: "Week 5: Current Trends" },
  { num: 6, title: "Week 6: Productivity With AI" },
];

const days = [1, 2, 3, 4, 5, 6];

type NavItem = 
  | { type: "orientation" }
  | { type: "week"; weekNum: number; dayNum: number }
  | { type: "tiy" };

interface CourseClientProps {
  content: Record<string, string>;
  initialView?: string;
  initialDay?: string;
}

function getInitialState(view?: string, day?: string): { expandedWeeks: number[]; selectedItem: NavItem } {
  if (!view) {
    return { expandedWeeks: [1], selectedItem: { type: "orientation" } };
  }

  if (view === "orientation") {
    return { expandedWeeks: [], selectedItem: { type: "orientation" } };
  }

  if (view === "tiy") {
    return { expandedWeeks: [], selectedItem: { type: "tiy" } };
  }

  const weekMatch = view.match(/week(\d+)/);
  if (weekMatch && weekMatch[1]) {
    const weekNum = parseInt(weekMatch[1]);
    const dayNum = day ? parseInt(day) : 1;
    return { 
      expandedWeeks: [weekNum], 
      selectedItem: { type: "week", weekNum, dayNum } 
    };
  }

  return { expandedWeeks: [1], selectedItem: { type: "orientation" } };
}

export default function CourseClient({ content, initialView, initialDay }: CourseClientProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1]);
  const [selectedItem, setSelectedItem] = useState<NavItem>({ type: "orientation" });

  useEffect(() => {
    const initial = getInitialState(initialView, initialDay);
    setExpandedWeeks(initial.expandedWeeks);
    setSelectedItem(initial.selectedItem);
  }, [initialView, initialDay]);

  const getContentKey = (item: NavItem): string => {
    if (item.type === "orientation") return "orientation";
    if (item.type === "tiy") return "tiy";
    return `${item.weekNum}-${item.dayNum}`;
  };

  const markdown = content[getContentKey(selectedItem)] || "# Content not found";

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks(prev => 
      prev.includes(weekNum) 
        ? prev.filter(n => n !== weekNum)
        : [...prev, weekNum]
    );
  };

  const selectItem = (item: NavItem) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false);
  };

  const isWeekExpanded = (weekNum: number) => expandedWeeks.includes(weekNum);

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
          
          <nav className="space-y-1">
            {!isMinimized && (
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Course Content
              </span>
            )}
            
            <Link
              href="/kashvi/programming-fundamentals"
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
              onClick={() => selectItem({ type: "orientation" })}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                selectedItem.type === "orientation" ? "bg-purple-accent text-white hover:bg-purple-accent/90" : ""
              } ${isMinimized ? "justify-center" : ""}`}
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
                      <button
                        key={day}
                        onClick={() => selectItem({ type: "week", weekNum: week.num, dayNum: day })}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-high transition-colors text-sm ${
                          selectedItem.type === "week" && selectedItem.weekNum === week.num && selectedItem.dayNum === day
                            ? "bg-purple-accent/20 text-purple-accent font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        <span>Day {day}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => selectItem({ type: "tiy" })}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                selectedItem.type === "tiy" ? "bg-purple-accent text-white hover:bg-purple-accent/90" : ""
              } ${isMinimized ? "justify-center" : ""}`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Try It Yourself</span>}
            </button>
          </nav>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 p-4 lg:p-8 w-full overflow-auto">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-30 p-3 rounded-full bg-purple-accent text-white shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="max-w-5xl mx-auto">
          <SlideViewer markdown={markdown} key={getContentKey(selectedItem)} />
        </div>
      </main>
    </div>
  );
}
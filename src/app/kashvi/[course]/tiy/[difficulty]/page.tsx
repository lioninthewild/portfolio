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

export default function TIYDifficultyPage() {
  const params = useParams();
  const course = params?.course || "python";
  const difficulty = params.difficulty as string;
  const content = tiyContent[difficulty];
  
  const [expandedSection, setExpandedSection] = useState<string | null>("conceptual");
  const [isMinimized, setIsMinimized] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks(prev => 
      prev.includes(weekNum) 
        ? prev.filter(n => n !== weekNum)
        : [...prev, weekNum]
    );
  };

  const isWeekExpanded = (weekNum: number) => expandedWeeks.includes(weekNum);

  const styles = content?.color || {
    badge: "bg-gray-100 text-gray-700",
    border: "border-gray-300",
    bg: "bg-gray-50",
    icon: "⚪"
  };

  const renderContent = (contentText: string) => {
    let html = contentText;
    
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    const lines = html.split('\n');
    let inList = false;
    let processedLines = lines.map((line: string) => {
      const match = line.match(/^> (.+)$/);
      if (match) {
        return `<blockquote>${match[1]}</blockquote>`;
      }
      
      const listMatch = line.match(/^(\d+)\. (.+)$/);
      if (listMatch) {
        inList = true;
        return `<li>${listMatch[2]}</li>`;
      } else if (inList && line.trim() === '') {
        inList = false;
        return '';
      } else if (inList) {
        return '';
      }
      
      return line;
    });
    html = processedLines.join('\n');
    html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul>$&</ul>');
    
    const finalLines = html.split('\n').map((line: string) => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.match(/^<(pre|ul|ol|blockquote|table)/)) return trimmed;
      if (trimmed.match(/^<(h[1-6]|p|strong|em|code)/)) return trimmed;
      return `<p>${trimmed}</p>`;
    });
    
    return finalLines.join('');
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Content not found</p>
      </div>
    );
  }

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
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link 
              href={`/kashvi/${course}/tiy`}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to TIY</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            
            {/* Difficulty Tabs */}
            <nav className="flex items-center gap-1">
              {difficulties.map((diff) => {
                const item = tiyContent[diff];
                const isActive = diff === difficulty;
                const itemStyles = item.color;
                return (
                  <Link
                    key={diff}
                    href={`/kashvi/${course}/tiy/${diff}`}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? `${itemStyles.bg} ${itemStyles.badge.replace('bg-', 'text-').replace('-100', '-700')}` 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {itemStyles.icon} {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Color Banner */}
          <div className={`rounded-xl border-2 ${styles.border} ${styles.bg} p-6 mb-6`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{styles.icon}</span>
              <div>
                <h2 className={`text-2xl font-bold ${styles.badge.replace('bg-', 'text-').replace('-100', '-700')}`}>
                  {content.name}
                </h2>
                <p className="text-gray-600">Total Marks: {content.marks}</p>
              </div>
            </div>
          </div>

          {/* Conceptual Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('conceptual')}
              className={`w-full flex items-center justify-between p-4 rounded-t-xl border-2 ${styles.border} ${styles.bg} hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">📝</span>
                <span className="font-bold text-gray-800">{content.conceptual.title}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${styles.badge}`}>
                  {content.conceptual.marks} marks
                </span>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform ${expandedSection === 'conceptual' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'conceptual' && (
              <div className="border-2 border-t-0 border-gray-200 rounded-b-xl bg-white p-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderContent(content.conceptual.content) }}
                />
              </div>
            )}
          </div>

          {/* Coding Section */}
          <div>
            <button
              onClick={() => toggleSection('coding')}
              className={`w-full flex items-center justify-between p-4 rounded-t-xl border-2 ${styles.border} ${styles.bg} hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">💻</span>
                <span className="font-bold text-gray-800">{content.coding.title}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${styles.badge}`}>
                  {content.coding.marks} marks
                </span>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform ${expandedSection === 'coding' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'coding' && (
              <div className="border-2 border-t-0 border-gray-200 rounded-b-xl bg-white p-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderContent(content.coding.content) }}
                />
              </div>
            )}
          </div>
        </div>

        <style jsx global>{`
          .prose p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #374151;
          }
          .prose strong {
            color: #1a1a1a;
            font-weight: 600;
          }
          .prose em {
            color: #7c3aed;
            font-style: italic;
          }
          .prose code.inline-code {
            background: #f3e8ff;
            color: #7c3aed;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.9em;
          }
          .prose pre {
            background: #ffffff;
            color: #000000;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 2px solid #9333ea;
            overflow-x: auto;
            margin: 1rem 0;
            font-family: monospace;
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .prose pre code {
            background: transparent;
            color: inherit;
            padding: 0;
            font-size: inherit;
          }
          .prose ul {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
          }
          .prose li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            color: #374151;
          }
          .prose li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #9333ea;
            font-weight: bold;
          }
          .prose blockquote {
            border-left: 4px solid #9333ea;
            padding-left: 1rem;
            margin: 1rem 0;
            color: #6b7280;
            font-style: italic;
            background: #f9fafb;
            padding: 0.75rem 1rem;
            border-radius: 0 0.5rem 0.5rem 0;
          }
        `}</style>
      </main>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tiyContent, TIYDifficulty } from "@/data/tiy-content";

const difficulties = ["easy", "medium", "hard"] as const;

export default function TIYDifficultyPage() {
  const params = useParams();
  const difficulty = params.difficulty as string;
  const content = tiyContent[difficulty];
  
  const [expandedSection, setExpandedSection] = useState<string | null>("conceptual");
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Content not found</p>
      </div>
    );
  }

  const styles = content.color;

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            href="/kashvi/python/tiy"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to TIY</span>
          </Link>
          <div className="h-6 w-px bg-gray-300"></div>
          
          {/* Sidebar Navigation */}
          <nav className="flex items-center gap-1">
            {difficulties.map((diff) => {
              const item = tiyContent[diff];
              const isActive = diff === difficulty;
              const itemStyles = item.color;
              return (
                <Link
                  key={diff}
                  href={`/kashvi/python/tiy/${diff}`}
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

      <main className="max-w-4xl mx-auto px-4 py-6">
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
      </main>

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
    </div>
  );
}
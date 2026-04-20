"use client";

import { useState, useEffect, useCallback } from "react";

interface SlideViewerProps {
  markdown: string;
}

export default function SlideViewer({ markdown }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [processedSlides, setProcessedSlides] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!markdown) {
      setProcessedSlides([]);
      return;
    }

    const parts = markdown.split(/\n---\n|\n---\s|\n---/).filter(p => p.trim());
    
    const slides = parts.map(part => {
      let html = part.trim();
      
      html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
      html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
      html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
      
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      
      html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
      html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
      
      const lines = html.split('\n');
      let inList = false;
      let processedLines = lines.map(line => {
        const match = line.match(/^[\*\-]\s+(.+)$/);
        if (match) {
          inList = true;
          return `<li>${match[1]}</li>`;
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
      
      const finalLines = html.split('\n').map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        if (trimmed.match(/^<[hupolbpre]/)) return trimmed;
        return `<p>${trimmed}</p>`;
      });
      
      return finalLines.join('');
    });
    
    setProcessedSlides(slides);
    setCurrentSlide(0);
  }, [markdown]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentSlide, isAnimating]);

  const goToNext = useCallback(() => {
    if (currentSlide < processedSlides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentSlide, processedSlides.length, isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const progress = processedSlides.length > 0 
    ? ((currentSlide + 1) / processedSlides.length) * 100 
    : 0;

  if (processedSlides.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <div className="w-full mb-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3 px-2">
          <span className="font-medium">Slide {currentSlide + 1} of {processedSlides.length}</span>
          <div className="flex items-center gap-2">
            {processedSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(idx);
                    setTimeout(() => setIsAnimating(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide 
                    ? "bg-purple-600 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        
        <div 
          className={`w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 min-h-[520px] border border-gray-100 transition-all duration-300 ${
            isAnimating ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: processedSlides[currentSlide] }}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between mb-4 px-2">
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              currentSlide === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 shadow-sm'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Use ← → arrow keys</span>
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentSlide >= processedSlides.length - 1}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              currentSlide >= processedSlides.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg'
            }`}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style jsx global>{`
        .prose h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #2d2d2d;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #404040;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #525252;
          margin-bottom: 1rem;
        }
        .prose ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }
        .prose li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #525252;
        }
        .prose li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #9333ea;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .prose code {
          background: #f3e8ff;
          color: #7c3aed;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-family: monospace;
          font-size: 0.9em;
        }
        .prose pre {
          background: #1e1e2e;
          color: #cdd6f4;
          padding: 1.25rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.25rem 0;
          font-size: 0.95rem;
          line-height: 1.6;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
        }
        .prose pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }
        .prose strong {
          color: #1a1a1a;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
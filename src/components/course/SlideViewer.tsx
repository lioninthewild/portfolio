"use client";

import { useState, useEffect } from "react";

interface SlideViewerProps {
  markdown: string;
}

export default function SlideViewer({ markdown }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [processedSlides, setProcessedSlides] = useState<string[]>([]);

  // Parse markdown into slides
  useEffect(() => {
    if (!markdown) {
      setProcessedSlides([]);
      return;
    }

    // Split by --- separators
    const parts = markdown.split(/\n---\n|\n---\s|\n---/).filter(p => p.trim());
    
    // Process each part into HTML
    const slides = parts.map(part => {
      let html = part.trim();
      
      // Headers
      html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
      html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
      html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
      
      // Bold text
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      
      // Code blocks
      html = html.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
      html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
      
      // Lists - convert * or - at start of line
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
      
      // Wrap consecutive li elements in ul
      html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul>$&</ul>');
      
      // Paragraphs for remaining text
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

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < processedSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

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
      {/* Slide Display */}
      <div className="w-full mb-6 bg-white rounded-xl shadow-lg p-8 md:p-12 min-h-[500px]">
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: processedSlides[currentSlide] }}
        />
      </div>

      {/* Navigation */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-3 px-4">
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            ← Previous
          </button>
          
          <span className="text-sm font-medium text-gray-600">
            {currentSlide + 1} / {processedSlides.length}
          </span>
          
          <button
            onClick={goToNext}
            disabled={currentSlide >= processedSlides.length - 1}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
              currentSlide >= processedSlides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            Next →
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
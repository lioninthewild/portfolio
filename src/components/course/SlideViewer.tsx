"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";

interface SlideViewerProps {
  markdown: string;
}

const slideStyles = `
  .reveal .slides section {
    background: white !important;
    color: #1a1a1a !important;
    padding: 40px !important;
    text-align: left !important;
    font-size: 28px !important;
    line-height: 1.6 !important;
  }
  .reveal .slides section h1 {
    color: #7c3aed !important;
    font-size: 48px !important;
    margin-bottom: 30px !important;
  }
  .reveal .slides section h2 {
    color: #5b21b6 !important;
    font-size: 36px !important;
    margin-bottom: 20px !important;
  }
  .reveal .slides section h3 {
    color: #4c1d95 !important;
    font-size: 28px !important;
    margin-bottom: 15px !important;
  }
  .reveal .slides section p {
    color: #374151 !important;
    margin-bottom: 20px !important;
  }
  .reveal .slides section ul {
    margin-left: 20px !important;
  }
  .reveal .slides section li {
    color: #374151 !important;
    margin-bottom: 10px !important;
  }
  .reveal .slides section pre {
    background: #f3f4f6 !important;
    padding: 20px !important;
    border-radius: 8px !important;
    overflow-x: auto !important;
  }
  .reveal .slides section code {
    color: #7c3aed !important;
    font-family: 'Courier New', monospace !important;
  }
  .reveal {
    background: white !important;
  }
`;

export default function SlideViewer({ markdown }: SlideViewerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const deckRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const initializeReveal = async () => {
      if (typeof window === "undefined") return;

      const RevealModule = await import("reveal.js");
      const Reveal = RevealModule.default;

      const deck = new Reveal({
        embedded: true,
        hash: false,
        slideNumber: false,
        progress: false,
        center: false,
        transition: "slide",
        transitionSpeed: "default",
      });

      deck.initialize({
        width: 1200,
        height: 700,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      deck.on("slidechanged", (event: any) => {
        setCurrentSlide(event.indexh);
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      deck.on("ready", () => {
        setTotalSlides(deck.getTotalSlides());
        setCurrentSlide(deck.getIndices().h || 0);
      });

      deckRef.current = deck;
    };

    initializeReveal();

    return () => {
      if (deckRef.current) {
        deckRef.current.destroy();
      }
    };
  }, []);

  const goPrevious = () => {
    if (deckRef.current && currentSlide > 0) {
      deckRef.current.left();
    }
  };

  const goNext = () => {
    if (deckRef.current && currentSlide < totalSlides - 1) {
      deckRef.current.right();
    }
  };

  const progress = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  const slides = markdown.split(/^---$/m).map((slide, index) => {
    let content = slide.trim();
    
    content = content.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    content = content.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    content = content.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    content = content.replace(/^\*\*([^*]+)\*\*$/gm, '<strong>$1</strong>');
    content = content.replace(/^\* ([^*]+)$/gm, '<li>$1</li>');
    content = content.replace(/^- (.+)$/gm, '<li>$1</li>');
    
    const hasList = content.includes('<li>');
    if (hasList) {
      content = content.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$&</ul>');
    }
    
    return { index, content };
  });

  return (
    <div className="flex flex-col items-center">
      <style dangerouslySetInnerHTML={{ __html: slideStyles }} />
      <div className="reveal w-full max-w-5xl mx-auto mb-4">
        <div className="slides">
          {slides.map((slide) => (
            <section
              key={slide.index}
              dangerouslySetInnerHTML={{ __html: slide.content }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-2 px-4">
          <button
            onClick={goPrevious}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-accent text-white hover:bg-purple-accent/90"
            }`}
          >
            ← Previous
          </button>
          
          <span className="text-sm text-gray-600">
            {currentSlide + 1} / {totalSlides}
          </span>
          
          <button
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === totalSlides - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-accent text-white hover:bg-purple-accent/90"
            }`}
          >
            Next →
          </button>
        </div>

        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
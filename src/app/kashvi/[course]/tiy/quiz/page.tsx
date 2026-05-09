"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tiyQuizContent } from "@/data/tiy-quiz-content";

const weeks = [
  { num: 1, title: "Week 1: Building Blocks" },
  { num: 2, title: "Week 2: Talking To The Machine" },
];

const days = [1, 2, 3, 4, 5, 6];

export default function TIYQuizPage() {
  const params = useParams();
  const course = Array.isArray(params?.course) ? params.course[0] : (params?.course || "python");
  
  const quiz = tiyQuizContent["quiz1"];
  const questions = quiz?.questions || [];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index 
        ? "bg-purple-100 border-purple-500" 
        : "bg-white border-gray-200 hover:border-purple-300";
    }
    
    const isCorrect = index === questions[currentQuestion].correctAnswer;
    const isSelected = index === selectedAnswer;
    
    if (isCorrect) {
      return "bg-green-100 border-green-500";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-100 border-red-500";
    }
    return "bg-white border-gray-200 opacity-50";
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="flex min-h-screen bg-gray-50">
        <aside className={`bg-gray-800 text-white transition-all duration-300 fixed lg:relative z-20 h-full ${isMinimized ? "w-16" : "w-64"}`}>
          <div className="p-4">
            <button onClick={() => setIsMinimized(!isMinimized)} className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 mb-4">
              <svg className={`w-5 h-5 transition-transform ${isMinimized ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            <nav className="space-y-1">
              <Link href={`/kashvi/${course}/course`} className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 ${isMinimized ? "justify-center" : ""}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                {!isMinimized && <span className="text-sm font-medium">Home</span>}
              </Link>
              <Link href={`/kashvi/${course}/tiy`} className={`flex items-center gap-3 p-2 rounded-lg bg-purple-600 ${isMinimized ? "justify-center" : ""}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                {!isMinimized && <span className="text-sm font-medium">Try It Yourself</span>}
              </Link>
            </nav>
          </div>
        </aside>
        
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-6">
              {percentage >= 80 ? "🎉" : percentage >= 50 ? "👍" : "📚"}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            <p className="text-xl text-gray-600 mb-2">Your Score</p>
            <p className="text-5xl font-bold text-purple-600 mb-6">{score} / {questions.length}</p>
            <p className="text-lg text-gray-500 mb-8">{percentage}% Correct</p>
            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white transition-all duration-300 fixed lg:relative z-20 h-full ${isMinimized ? "w-16" : "w-64"}`}>
        <div className="p-4">
          <button 
            onClick={() => setIsMinimized(!isMinimized)} 
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 mb-4"
          >
            <svg className={`w-5 h-5 transition-transform ${isMinimized ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          
          <nav className="space-y-1">
            {!isMinimized && <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Course</span>}
            
            <Link href={`/kashvi/${course}/course`} className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 ${isMinimized ? "justify-center" : ""}`}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Home</span>}
            </Link>

            {weeks.map((week) => (
              <div key={week.num}>
                <div className={`flex items-center gap-2 p-2 text-gray-400 text-xs ${isMinimized ? "justify-center" : ""}`}>
                  {!isMinimized && <span>Week {week.num}</span>}
                </div>
              </div>
            ))}

            <div className={`border-t border-gray-700 my-2 ${isMinimized ? 'w-8 mx-auto' : ''}`} />

            <Link 
              href={`/kashvi/${course}/tiy`} 
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 ${isMinimized ? "justify-center" : ""}`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Try It Yourself</span>}
            </Link>

            <Link 
              href={`/kashvi/${course}/tiy/quiz`} 
              className={`flex items-center gap-3 p-2 rounded-lg bg-purple-600 ${isMinimized ? "justify-center" : ""}`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Quiz</span>}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Quiz 1</h1>
            <p className="text-gray-600">Test your understanding of Week 1 & Week 2 concepts</p>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${getOptionStyle(index)}`}
                >
                  <span className="font-bold mr-2">
                    {question.isTrueFalse ? (index === 0 ? "True" : "False") : String.fromCharCode(65 + index) + ")"}
                  </span>
                  {question.isTrueFalse ? (index === 0 ? "True" : "False") : option}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showResult && (
              <div className={`mt-6 p-4 rounded-lg ${selectedAnswer === question.correctAnswer ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"} border-2`}>
                <p className={`font-bold text-lg ${selectedAnswer === question.correctAnswer ? "text-green-700" : "text-red-700"}`}>
                  {selectedAnswer === question.correctAnswer ? "✅ Correct!" : "❌ Incorrect!"}
                </p>
                <p className="text-gray-700 mt-2">{question.explanation}</p>
                {selectedAnswer !== question.correctAnswer && (
                  <p className="text-green-700 font-bold mt-2">
                    Correct Answer: {question.isTrueFalse 
                      ? (question.correctAnswer === 0 ? "True" : "False")
                      : `${String.fromCharCode(65 + question.correctAnswer)}) ${question.options[question.correctAnswer]}`}
                  </p>
                )}
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <button
                onClick={nextQuestion}
                className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg"
              >
                {currentQuestion < questions.length - 1 ? "Next Question →" : "Finish Quiz"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
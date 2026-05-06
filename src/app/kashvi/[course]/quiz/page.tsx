"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  topic: string;
}

const questions: Question[] = [
  // Week 1 Day 1 - Internet Basics
  {
    id: 1,
    question: "What is the main role of a server in the client-server model?",
    options: [
      "To browse the internet",
      "To store and provide data/resources to clients",
      "To display websites on the screen",
      "To create websites"
    ],
    correctAnswer: 1,
    topic: "Internet Basics"
  },
  {
    id: 2,
    question: "What does IP address stand for?",
    options: [
      "Internet Protocol Address",
      "Internal Process Address",
      "Internet Provider Address",
      "Information Protocol Address"
    ],
    correctAnswer: 0,
    topic: "Internet Basics"
  },
  {
    id: 3,
    question: "What is the main advantage of using a domain name over an IP address?",
    options: [
      "It is faster",
      "It is easier to remember",
      "It is more secure",
      "It is required by law"
    ],
    correctAnswer: 1,
    topic: "Internet Basics"
  },
  // Week 1 Day 2 - Variables
  {
    id: 4,
    question: "Which of the following is the correct way to create a variable in Python?",
    options: [
      "variable = value",
      "var value = variable",
      "let variable = value",
      "variable : value"
    ],
    correctAnswer: 0,
    topic: "Variables"
  },
  {
    id: 5,
    question: "What is the data type of the value 15 in Python?",
    options: [
      "STRING",
      "INTEGER",
      "FLOAT",
      "BOOLEAN"
    ],
    correctAnswer: 1,
    topic: "Data Types"
  },
  {
    id: 6,
    question: "What will be the output of: name = 'Prassist'; print(type(name))",
    options: [
      "<class 'int'>",
      "<class 'str'>",
      "<class 'float'>",
      "<class 'bool'>"
    ],
    correctAnswer: 1,
    topic: "Data Types"
  },
  // Week 1 Day 3 - Input
  {
    id: 7,
    question: "What does the input() function always return?",
    options: [
      "A number",
      "A string",
      "A boolean",
      "A list"
    ],
    correctAnswer: 1,
    topic: "Input"
  },
  {
    id: 8,
    question: "What is the result of: 'Hello' + 'World'?",
    options: [
      "HelloWorld",
      "Hello World",
      "Hello+World",
      "Error"
    ],
    correctAnswer: 0,
    topic: "String Operations"
  },
  // Week 1 Day 5 - Type Conversion & Operators
  {
    id: 9,
    question: "What does int('25') do?",
    options: [
      "Converts 25 to a string",
      "Converts '25' to the number 25",
      "Creates an integer list",
      "Removes decimal from 25"
    ],
    correctAnswer: 1,
    topic: "Type Conversion"
  },
  {
    id: 10,
    question: "What is the result of 10 // 3?",
    options: [
      "3.33",
      "3",
      "4",
      "Error"
    ],
    correctAnswer: 1,
    topic: "Operators"
  },
  {
    id: 11,
    question: "What does the % (modulus) operator do?",
    options: [
      "Adds two numbers",
      "Divides and returns the decimal",
      "Divides and returns the remainder",
      "Multiplies two numbers"
    ],
    correctAnswer: 2,
    topic: "Operators"
  },
  {
    id: 12,
    question: "What is the result of str(42)?",
    options: [
      "42",
      "'42'",
      "42.0",
      "Error"
    ],
    correctAnswer: 1,
    topic: "Type Conversion"
  },
  // Week 2 Day 1 - Strings
  {
    id: 13,
    question: "What does 'hello'.upper() return?",
    options: [
      "hello",
      "HELLO",
      "Hello",
      "hELLO"
    ],
    correctAnswer: 1,
    topic: "String Methods"
  },
  {
    id: 14,
    question: "What is the index of the first character in a string?",
    options: [
      "1",
      "0",
      "-1",
      "First"
    ],
    correctAnswer: 1,
    topic: "String Indexing"
  },
  {
    id: 15,
    question: "What does 'python'[1:4] return?",
    options: [
      "pyt",
      "yth",
      "ython",
      "pytho"
    ],
    correctAnswer: 1,
    topic: "String Slicing"
  },
  {
    id: 16,
    question: "What does len('hello') return?",
    options: [
      "4",
      "5",
      "6",
      "Error"
    ],
    correctAnswer: 1,
    topic: "String Methods"
  },
  {
    id: 17,
    question: "What does 'I love cats'.replace('cats', 'dogs') return?",
    options: [
      "I love dogs",
      "I love cats",
      "dogs",
      "Error"
    ],
    correctAnswer: 0,
    topic: "String Methods"
  },
  // Week 2 Day 2 - Lists & sorted()
  {
    id: 18,
    question: "What does sorted([3, 1, 2]) return?",
    options: [
      "[3, 1, 2]",
      "[1, 2, 3]",
      "[2, 1, 3]",
      "Error"
    ],
    correctAnswer: 1,
    topic: "sorted()"
  },
  {
    id: 19,
    question: "Which escape character is used for a new line?",
    options: [
      "\\t",
      "\\n",
      "\\\\",
      "\\'"
    ],
    correctAnswer: 1,
    topic: "Escape Characters"
  },
  {
    id: 20,
    question: "What is the correct way to access the second element of a list fruits = ['apple', 'banana', 'cherry']?",
    options: [
      "fruits[1]",
      "fruits[2]",
      "fruits[0]",
      "fruits[second]"
    ],
    correctAnswer: 0,
    topic: "Lists"
  }
];

export default function QuizPage() {
  const params = useParams();
  const course = params?.course || "python";
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (submitted) return; // Prevent changing answer after submission
    
    const correct = optionIndex === questions[currentQuestion].correctAnswer;
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
    setIsCorrect(correct);
    setSubmitted(true);
  };

  const nextQuestion = () => {
    setSubmitted(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    setSubmitted(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { message: "Excellent! You're a star!", color: "text-green-600" };
    if (percentage >= 70) return { message: "Great job! Keep it up!", color: "text-blue-600" };
    if (percentage >= 50) return { message: "Good effort! Review the topics and try again.", color: "text-yellow-600" };
    return { message: "Keep practicing! You'll get better.", color: "text-red-600" };
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setSubmitted(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-purple-100 shadow-lg transition-all duration-300 fixed lg:relative z-20 h-full ${
          isMinimized ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors mb-4"
          >
            <svg
              className={`w-5 h-5 text-purple-600 transition-transform ${isMinimized ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          
          <nav className="space-y-1">
            {!isMinimized && (
              <span className="block text-xs font-semibold text-purple-500 uppercase tracking-wider mb-3 px-2">
                Course Content
              </span>
            )}
            
            <Link
              href={`/kashvi/${course}/course`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium text-gray-700 truncate">Home</span>}
            </Link>

            {[
              { num: 1, title: "Week 1: Building Blocks" },
              { num: 2, title: "Week 2: Talking To The Machine" },
            ].map((week) => (
              <div key={week.num}>
                <button
                  className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex-shrink-0">
                    {week.num}
                  </span>
                  {!isMinimized && (
                    <span className="text-sm font-medium text-gray-700 truncate">{week.title}</span>
                  )}
                </button>
              </div>
            ))}

            <Link
              href={`/kashvi/${course}/tiy/`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium text-gray-700 truncate">Try It Yourself</span>}
            </Link>

            <Link
              href={`/kashvi/${course}/evaluation/`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium text-gray-700 truncate">Evaluation</span>}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-purple-100">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-purple-800">Python Quiz</h1>
            <p className="text-gray-600 mt-1">Week 1 to Week 2 Day 3</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {!showResults ? (
            <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-purple-50 px-6 py-4 border-b border-purple-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-purple-700">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-purple-600">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-8">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    {questions[currentQuestion].topic}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  {questions[currentQuestion].question}
                </h2>

                {/* Feedback Banner */}
                {submitted && (
                  <div className={`mb-6 p-4 rounded-xl ${
                    isCorrect 
                      ? "bg-green-50 border-2 border-green-300" 
                      : "bg-red-50 border-2 border-red-300"
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl`}>
                        {isCorrect ? "✅" : "❌"}
                      </span>
                      <div>
                        <p className={`font-bold ${
                          isCorrect ? "text-green-700" : "text-red-700"
                        }`}>
                          {isCorrect ? "Correct!" : "Wrong Answer!"}
                        </p>
                        {!isCorrect && (
                          <p className="text-red-600 text-sm mt-1">
                            The correct answer is: <strong>{questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => {
                    // Determine the styling based on submission state
                    let buttonClass = "border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700";
                    let spanClass = "bg-gray-100 text-gray-500";
                    
                    if (submitted) {
                      if (index === questions[currentQuestion].correctAnswer) {
                        // Correct answer - always show green
                        buttonClass = "border-green-500 bg-green-100 text-green-800";
                        spanClass = "bg-green-500 text-white";
                      } else if (index === answers[currentQuestion] && index !== questions[currentQuestion].correctAnswer) {
                        // Wrong answer selected by user - show red
                        buttonClass = "border-red-500 bg-red-100 text-red-800";
                        spanClass = "bg-red-500 text-white";
                      } else {
                        // Other options - dimmed
                        buttonClass = "border-gray-200 bg-gray-50 text-gray-400";
                        spanClass = "bg-gray-200 text-gray-400";
                      }
                    } else if (answers[currentQuestion] === index) {
                      buttonClass = "border-purple-500 bg-purple-50 text-purple-800";
                      spanClass = "bg-purple-500 text-white";
                    }
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={submitted}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${buttonClass} ${submitted ? 'cursor-default' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${spanClass}`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="font-medium">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    currentQuestion === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600"
                  }`}
                >
                  ← Previous
                </button>
                
                {submitted ? (
                  <button
                    onClick={nextQuestion}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg"
                  >
                    {currentQuestion === questions.length - 1 ? "See Results 🎉" : "Next Question →"}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    disabled={answers[currentQuestion] === undefined}
                    className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                      answers[currentQuestion] === undefined
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results */
            <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
                <p className={`text-xl font-semibold mb-4 ${getScoreMessage(calculateScore()).color}`}>
                  {getScoreMessage(calculateScore()).message}
                </p>
                
                <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl px-8 py-6 mb-8">
                  <div className="text-5xl font-bold">{calculateScore()}</div>
                  <div className="text-purple-200">out of {questions.length}</div>
                </div>

                {/* Answer Review */}
                <div className="text-left mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Your Answers:</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {questions.map((q, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl border ${
                          answers[index] === q.correctAnswer
                            ? "border-green-200 bg-green-50"
                            : "border-red-200 bg-red-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            answers[index] === q.correctAnswer
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}>
                            {answers[index] === q.correctAnswer ? "✓" : "✗"}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{q.question}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Your answer: {answers[index] !== undefined ? q.options[answers[index]] : "Not answered"}
                              {answers[index] !== q.correctAnswer && (
                                <span className="text-green-600 ml-2">
                                  → Correct: {q.options[q.correctAnswer]}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={restartQuiz}
                  className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
                >
                  Try Again 🔄
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
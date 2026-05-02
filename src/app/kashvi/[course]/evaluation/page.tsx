"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

const weeks = [1, 2, 3, 4, 5, 6];

interface MetricScore {
  testObtained: number;
  testTotal: number;
  testPercentage: number;
  curiosity: number;
  understanding: number;
  creativity: number;
  problemSolving: number;
}

interface WeekData {
  week: number;
  metrics: MetricScore;
  notes: string;
  date: string;
  isFilled: boolean;
}

interface StudentData {
  id: string;
  name: string;
  weeks: Record<number, WeekData>;
}

const initialMetric: MetricScore = {
  testObtained: 0,
  testTotal: 30,
  testPercentage: 0,
  curiosity: 3,
  understanding: 3,
  creativity: 3,
  problemSolving: 3,
};

export default function EvaluationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const course = params?.course || "python";
  const viewMode = searchParams.get("view") || "teacher";
  const isStudentView = viewMode === "student";

  const [activeWeek, setActiveWeek] = useState(1);
  const [students, setStudents] = useState<StudentData[]>([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [currentMetrics, setCurrentMetrics] = useState<MetricScore>(initialMetric);
  const [notes, setNotes] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`evaluation-${course}`);
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, [course]);

  const saveStudents = (data: StudentData[]) => {
    setStudents(data);
    localStorage.setItem(`evaluation-${course}`, JSON.stringify(data));
  };

  const addStudent = () => {
    if (!newStudentName.trim()) return;
    const newStudent: StudentData = {
      id: Date.now().toString(),
      name: newStudentName.trim(),
      weeks: {},
    };
    saveStudents([...students, newStudent]);
    setNewStudentName("");
  };

  const removeStudent = (id: string) => {
    saveStudents(students.filter(s => s.id !== id));
  };

  const handleMetricChange = (field: keyof MetricScore, value: number) => {
    const updated = { ...currentMetrics, [field]: value };
    if (field === "testObtained" || field === "testTotal") {
      updated.testPercentage = updated.testTotal > 0 
        ? Math.round((updated.testObtained / updated.testTotal) * 100) 
        : 0;
    }
    setCurrentMetrics(updated);
  };

  const saveEvaluation = () => {
    if (!selectedStudent) return;
    
    const updatedStudents = students.map(s => {
      if (s.id === selectedStudent) {
        return {
          ...s,
          weeks: {
            ...s.weeks,
            [activeWeek]: {
              week: activeWeek,
              metrics: currentMetrics,
              notes,
              date: new Date().toISOString(),
              isFilled: true,
            },
          },
        };
      }
      return s;
    });
    
    saveStudents(updatedStudents);
    setSelectedStudent("");
    setCurrentMetrics(initialMetric);
    setNotes("");
  };

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks(prev => 
      prev.includes(weekNum) 
        ? prev.filter(n => n !== weekNum)
        : [...prev, weekNum]
    );
  };

  const isWeekExpanded = (weekNum: number) => expandedWeeks.includes(weekNum);

  const calculateWeekTotal = (metrics: MetricScore): number => {
    const testScore = (metrics.testPercentage / 100) * 25;
    const otherScore = ((metrics.curiosity + metrics.understanding + metrics.creativity + metrics.problemSolving) / 20) * 75;
    return Math.round(testScore + otherScore);
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getPieChartSegments = (metrics: MetricScore) => {
    const total = metrics.testPercentage + metrics.curiosity + metrics.understanding + metrics.creativity + metrics.problemSolving;
    if (total === 0) return [];
    
    const segments = [
      { label: "Test", value: metrics.testPercentage, color: "#9333ea" },
      { label: "Curiosity", value: metrics.curiosity * 20, color: "#3b82f6" },
      { label: "Understanding", value: metrics.understanding * 20, color: "#10b981" },
      { label: "Creativity", value: metrics.creativity * 20, color: "#f59e0b" },
      { label: "Problem Solving", value: metrics.problemSolving * 20, color: "#ef4444" },
    ];
    
    let cumulative = 0;
    return segments.map(s => {
      const start = cumulative;
      cumulative += (s.value / total) * 360;
      return { ...s, startAngle: start, endAngle: cumulative };
    });
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

            {[
              { num: 1, title: "Week 1: Building Blocks" },
              { num: 2, title: "Week 2: Talking To The Machine" },
              { num: 3, title: "Week 3: Building Logic" },
              { num: 4, title: "Week 4: Functions" },
              { num: 5, title: "Week 5: Current Trends" },
              { num: 6, title: "Week 6: Productivity With AI" },
            ].map((week) => (
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
                    {[1,2,3,4,5,6].map((day) => (
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

            <button
              onClick={() => window.location.href = `/kashvi/${course}/evaluation/`}
              className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-high transition-colors ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {!isMinimized && <span className="text-sm font-medium truncate">Evaluation</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Student Evaluation</h1>
                <p className="text-gray-600 mt-1">
                  {isStudentView ? "Student Dashboard" : "Track student progress weekly"}
                </p>
              </div>
              {!isStudentView && (
                <div className="flex gap-2">
                  <Link 
                    href={`/kashvi/${course}/evaluation/`}
                    className="px-4 py-2 bg-purple-accent text-white rounded-lg hover:bg-purple-accent/90"
                  >
                    Teacher View
                  </Link>
                  <Link 
                    href={`/kashvi/${course}/evaluation/?view=student`}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Student View
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Week Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {weeks.map(week => (
              <button
                key={week}
                onClick={() => setActiveWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeWeek === week 
                    ? "bg-purple-accent text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>

          {!isStudentView && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Add Student</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  placeholder="Enter student name"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-accent"
                  onKeyPress={(e) => e.key === "Enter" && addStudent()}
                />
                <button
                  onClick={addStudent}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Add
                </button>
              </div>

              {students.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {students.map(s => (
                    <span 
                      key={s.id} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
                    >
                      {s.name}
                      <button 
                        onClick={() => removeStudent(s.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Evaluation Form (Teacher only) */}
          {!isStudentView && students.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Evaluate - Week {activeWeek}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Student</label>
                  <select
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-accent"
                  >
                    <option value="">Select a student</option>
                    {students.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Test Marks</label>
                    <input
                      type="number"
                      value={currentMetrics.testObtained}
                      onChange={(e) => handleMetricChange("testObtained", Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-accent"
                      placeholder="Obtained"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total</label>
                    <input
                      type="number"
                      value={currentMetrics.testTotal}
                      onChange={(e) => handleMetricChange("testTotal", Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-accent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[
                  { key: "curiosity", label: "Curiosity" },
                  { key: "understanding", label: "Understanding" },
                  { key: "creativity", label: "Creativity" },
                  { key: "problemSolving", label: "Problem Solving" },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={currentMetrics[key as keyof MetricScore]}
                      onChange={(e) => handleMetricChange(key as keyof MetricScore, Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600">
                      {currentMetrics[key as keyof MetricScore]}/5
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-accent"
                  rows={2}
                  placeholder="Any observations..."
                />
              </div>

              <button
                onClick={saveEvaluation}
                disabled={!selectedStudent}
                className="px-6 py-2 bg-purple-accent text-white rounded-lg hover:bg-purple-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Evaluation
              </button>
            </div>
          )}

          {/* Student Dashboards */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-4">
              Week {activeWeek} - Student Performance
            </h2>
          </div>

          {students.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No students added yet. Add students above to start evaluating.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map(student => {
                const weekData = student.weeks[activeWeek];
                const metrics = weekData?.metrics;
                const totalScore = metrics ? calculateWeekTotal(metrics) : 0;
                const segments = metrics ? getPieChartSegments(metrics) : [];
                
                return (
                  <div 
                    key={student.id}
                    className={`bg-white rounded-xl border-2 ${weekData?.isFilled ? 'border-purple-200' : 'border-gray-200'} overflow-hidden`}
                  >
                    <div className={`${weekData?.isFilled ? 'bg-purple-50' : 'bg-gray-50'} px-4 py-3 border-b border-gray-200`}>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800">{student.name}</h3>
                        {weekData?.isFilled && (
                          <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getPerformanceColor(totalScore)}`}>
                            {totalScore}%
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      {!weekData?.isFilled ? (
                        <p className="text-gray-500 text-center py-4">No evaluation yet</p>
                      ) : (
                        <>
                          {/* Test Score */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Test</span>
                              <span className="font-medium">
                                {metrics.testObtained}/{metrics.testTotal} ({metrics.testPercentage}%)
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div 
                                className="bg-purple-500 h-2 rounded-full" 
                                style={{ width: `${metrics.testPercentage}%` }}
                              />
                            </div>
                          </div>

                          {/* Other Metrics */}
                          <div className="space-y-2 mb-4">
                            {[
                              { key: "curiosity", label: "Curiosity", color: "bg-blue-500" },
                              { key: "understanding", label: "Understanding", color: "bg-green-500" },
                              { key: "creativity", label: "Creativity", color: "bg-yellow-500" },
                              { key: "problemSolving", label: "Problem Solving", color: "bg-red-500" },
                            ].map(({ key, label, color }) => (
                              <div key={key} className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{label}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className={`${color} h-2 rounded-full`} 
                                      style={{ width: `${(metrics[key as keyof MetricScore] as number / 5) * 100}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium w-6">{metrics[key as keyof MetricScore]}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Pie Chart */}
                          {segments.length > 0 && (
                            <div className="flex justify-center mb-3">
                              <div className="relative w-24 h-24">
                                <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                                  {segments.map((seg, i) => {
                                    const radius = 16;
                                    const circumference = 2 * Math.PI * radius;
                                    const offset = (seg.startAngle / 360) * circumference;
                                    const length = ((seg.endAngle - seg.startAngle) / 360) * circumference;
                                    return (
                                      <circle
                                        key={i}
                                        cx="18"
                                        cy="18"
                                        r={radius}
                                        fill="transparent"
                                        stroke={seg.color}
                                        strokeWidth="3"
                                        strokeDasharray={`${length} ${circumference - length}`}
                                        strokeDashoffset={-offset}
                                      />
                                    );
                                  })}
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-xs font-bold text-gray-700">{totalScore}%</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Legend */}
                          <div className="flex flex-wrap justify-center gap-2 text-xs">
                            {segments.map((seg, i) => (
                              <span key={i} className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: seg.color }} />
                                {seg.label}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
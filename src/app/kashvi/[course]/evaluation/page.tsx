"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
} from 'recharts';

const weeks = [1, 2, 3, 4, 5, 6];

interface EvaluationData {
  student_name: string;
  week: number;
  test_obtained: number;
  test_total: number;
  test_percentage: number;
  curiosity: number;
  understanding: number;
  creativity: number;
  problem_solving: number;
  notes: string;
}

interface StoredData {
  students: string[];
  evaluations: Record<string, Record<number, EvaluationData>>;
}

const initialMetric = {
  testObtained: 0,
  testTotal: 30,
  testPercentage: 0,
  curiosity: 3,
  understanding: 3,
  creativity: 3,
  problemSolving: 3,
};

const TEACHER_PASSWORD = process.env.NEXT_PUBLIC_TEACHER_PASSWORD || "kashvi2024";

function getStorageKey(course: string) {
  return `kashvi_evaluations_${course}`;
}

export default function EvaluationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const course = Array.isArray(params?.course) ? params.course[0] : (params?.course || "python");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const viewMode = searchParams.get("view") || "student";
  const password = searchParams.get("pwd") || "";
  const isTeacherView = viewMode === "teacher" && password === TEACHER_PASSWORD;

  const [activeWeek, setActiveWeek] = useState(1);
  const [students, setStudents] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<Record<string, Record<number, EvaluationData>>>({});
  const [newStudentName, setNewStudentName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [currentMetrics, setCurrentMetrics] = useState(initialMetric);
  const [notes, setNotes] = useState("");
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Presentation mode state
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [selectedStudentForPresentation, setSelectedStudentForPresentation] = useState("");
  const [selectedWeekForPresentation, setSelectedWeekForPresentation] = useState(1);
  const [showClassAverage, setShowClassAverage] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    if (!isTeacherView) return;
    
    try {
      const stored = localStorage.getItem(getStorageKey(course));
      if (stored) {
        const data: StoredData = JSON.parse(stored);
        setStudents(data.students || []);
        setEvaluations(data.evaluations || {});
      }
      setDataLoaded(true);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }, [course, isTeacherView]);

  // Save to localStorage
  const saveToLocalStorage = () => {
    try {
      const data: StoredData = { students, evaluations };
      localStorage.setItem(getStorageKey(course), JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Export backup
  const exportBackup = () => {
    const data: StoredData = { students, evaluations };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `evaluation_backup_${course}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import backup
  const importBackup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data: StoredData = JSON.parse(e.target?.result as string);
        if (data.students && data.evaluations) {
          setStudents(data.students);
          setEvaluations(data.evaluations);
          localStorage.setItem(getStorageKey(course), JSON.stringify(data));
          alert('Backup restored successfully!');
        } else {
          alert('Invalid backup file format');
        }
      } catch (error) {
        alert('Error reading backup file');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Clear all data
  const clearAllData = () => {
    if (!confirm("Are you sure you want to delete ALL evaluation data? This cannot be undone!")) return;
    setStudents([]);
    setEvaluations({});
    localStorage.removeItem(getStorageKey(course));
    alert('All data cleared!');
  };

  const addStudent = () => {
    if (!newStudentName.trim()) return;
    const newName = newStudentName.trim();
    if (!students.includes(newName)) {
      setStudents([...students, newName]);
    }
    setNewStudentName("");
    saveToLocalStorage();
  };

  const removeStudent = (studentName: string) => {
    if (!confirm(`Delete all evaluations for ${studentName}?`)) return;
    const newEvaluations = { ...evaluations };
    delete newEvaluations[studentName];
    setStudents(students.filter(s => s !== studentName));
    setEvaluations(newEvaluations);
    saveToLocalStorage();
  };

  const handleMetricChange = (field: string, value: number) => {
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
    
    const evalData: EvaluationData = {
      student_name: selectedStudent,
      week: activeWeek,
      test_obtained: currentMetrics.testObtained,
      test_total: currentMetrics.testTotal,
      test_percentage: currentMetrics.testPercentage,
      curiosity: currentMetrics.curiosity,
      understanding: currentMetrics.understanding,
      creativity: currentMetrics.creativity,
      problem_solving: currentMetrics.problemSolving,
      notes: notes,
    };

    const newEvaluations = {
      ...evaluations,
      [selectedStudent]: {
        ...(evaluations[selectedStudent] || {}),
        [activeWeek]: evalData,
      },
    };
    
    setEvaluations(newEvaluations);
    saveToLocalStorage();
    
    setSelectedStudent("");
    setCurrentMetrics(initialMetric);
    setNotes("");
    alert('Evaluation saved!');
  };

  const getEvaluation = (studentName: string, week: number): EvaluationData | undefined => {
    return evaluations[studentName]?.[week];
  };

  // Get radar chart data for a student/week
  const getRadarData = () => {
    const data = [];
    
    if (showClassAverage) {
      // Calculate class averages
      let totals = { curiosity: 0, understanding: 0, creativity: 0, problem_solving: 0, test: 0, count: 0 };
      students.forEach(student => {
        const evalData = getEvaluation(student, selectedWeekForPresentation);
        if (evalData) {
          totals.curiosity += evalData.curiosity;
          totals.understanding += evalData.understanding;
          totals.creativity += evalData.creativity;
          totals.problem_solving += evalData.problem_solving;
          totals.test += evalData.test_percentage;
          totals.count++;
        }
      });
      
      if (totals.count > 0) {
        data.push({ subject: 'Curiosity', value: Math.round(totals.curiosity / totals.count), fullMark: 5 });
        data.push({ subject: 'Understanding', value: Math.round(totals.understanding / totals.count), fullMark: 5 });
        data.push({ subject: 'Creativity', value: Math.round(totals.creativity / totals.count), fullMark: 5 });
        data.push({ subject: 'Problem Solving', value: Math.round(totals.problem_solving / totals.count), fullMark: 5 });
        data.push({ subject: 'Test Score', value: Math.round(totals.test / totals.count / 20), fullMark: 5 });
      }
    } else {
      const evalData = getEvaluation(selectedStudentForPresentation, selectedWeekForPresentation);
      if (evalData) {
        data.push({ subject: 'Curiosity', value: evalData.curiosity, fullMark: 5 });
        data.push({ subject: 'Understanding', value: evalData.understanding, fullMark: 5 });
        data.push({ subject: 'Creativity', value: evalData.creativity, fullMark: 5 });
        data.push({ subject: 'Problem Solving', value: evalData.problem_solving, fullMark: 5 });
        data.push({ subject: 'Test Score', value: Math.round(evalData.test_percentage / 20), fullMark: 5 });
      }
    }
    
    return data;
  };

  // Get bar chart data for a student/week (test score only, out of 30)
  const getBarData = () => {
    const data = [];
    
    if (showClassAverage) {
      let testTotal = 0, count = 0;
      students.forEach(student => {
        const evalData = getEvaluation(student, selectedWeekForPresentation);
        if (evalData) {
          testTotal += evalData.test_obtained;
          count++;
        }
      });
      
      if (count > 0) {
        data.push({ name: 'Test Score (out of 30)', value: Math.round(testTotal / count), fill: '#8b5cf6' });
      }
    } else {
      const evalData = getEvaluation(selectedStudentForPresentation, selectedWeekForPresentation);
      if (evalData) {
        data.push({ name: 'Test Score (out of 30)', value: evalData.test_obtained, fill: '#8b5cf6' });
      }
    }
    
    return data;
  };

  // Get notes for display
  const getDisplayNotes = (): string => {
    if (showClassAverage) return "Class average does not have specific feedback.";
    const evalData = getEvaluation(selectedStudentForPresentation, selectedWeekForPresentation);
    return evalData?.notes || "No feedback recorded for this week.";
  };

  // Access Denied for non-teachers
  if (!isTeacherView) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-gray-400 mb-4">
            This evaluation system is for teachers only.
          </p>
          <p className="text-sm text-gray-500">
            If you are a teacher, please use the correct URL with teacher password.
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading || !dataLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Student Evaluations</h1>
            <p className="text-gray-400">Course: {course.toUpperCase()}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={exportBackup}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Backup
            </button>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Import Backup
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={importBackup}
              className="hidden"
            />
            
            <button
              onClick={clearAllData}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All
            </button>
            
            <button
              onClick={() => {
                if (students.length > 0) {
                  setSelectedStudentForPresentation(students[0]);
                  setSelectedWeekForPresentation(1);
                  setIsPresentationMode(true);
                } else {
                  alert("Add some students first to present!");
                }
              }}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Present to Class
            </button>
          </div>
        </div>

        {/* Presentation Mode Overlay */}
        {isPresentationMode && (
          <div className="fixed inset-0 bg-black/90 z-50 overflow-auto">
            <div className="min-h-screen p-8">
              {/* Presentation Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-yellow-400">🎯 Presenting to Class</h1>
                  <p className="text-gray-400">Show student performance to the class</p>
                </div>
                
                <button
                  onClick={() => setIsPresentationMode(false)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-lg"
                >
                  ✕ Exit Presentation
                </button>
              </div>

              {/* Controls */}
              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-1">Student</label>
                    <select
                      value={selectedStudentForPresentation}
                      onChange={(e) => setSelectedStudentForPresentation(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:outline-none text-lg"
                    >
                      {students.map(student => (
                        <option key={student} value={student}>{student}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-1">Week</label>
                    <select
                      value={selectedWeekForPresentation}
                      onChange={(e) => setSelectedWeekForPresentation(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:outline-none text-lg"
                    >
                      {weeks.map(w => (
                        <option key={w} value={w}>Week {w}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="classAverage"
                      checked={showClassAverage}
                      onChange={(e) => setShowClassAverage(e.target.checked)}
                      className="w-5 h-5 accent-yellow-500"
                    />
                    <label htmlFor="classAverage" className="text-lg font-medium">Show Class Average</label>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Radar Chart */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-center">
                    {showClassAverage ? "Class Average - Soft Skills" : `${selectedStudentForPresentation} - Soft Skills (Week ${selectedWeekForPresentation})`}
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={getRadarData()}>
                        <PolarGrid stroke="#4b5563" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 14 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#6b7280' }} />
                        <Radar
                          name="Score"
                          dataKey="value"
                          stroke="#f59e0b"
                          fill="#f59e0b"
                          fillOpacity={0.5}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                          labelStyle={{ color: '#f59e0b' }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-center">
                    {showClassAverage ? "Class Average - Scores" : `${selectedStudentForPresentation} - Scores (Week ${selectedWeekForPresentation})`}
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getBarData()} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                        <XAxis type="number" domain={[0, 30]} tick={{ fill: '#9ca3af' }} />
                        <YAxis type="category" dataKey="name" tick={{ fill: '#9ca3af', fontSize: 14 }} width={160} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                          formatter={(value) => [`${value}/30`, 'Score']}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {getBarData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Notes/Feedback */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">📝 Teacher's Feedback</h2>
                <div className="bg-gray-700 rounded-lg p-4 min-h-[100px]">
                  <p className="text-lg text-gray-200">{getDisplayNotes()}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Student List */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Students</h2>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="Add student name"
                className="flex-1 px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && addStudent()}
              />
              <button
                onClick={addStudent}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                Add
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {students.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No students added yet</p>
              ) : (
                students.map((student) => (
                  <div
                    key={student}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedStudent === student ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedStudent(student);
                      setActiveWeek(1);
                    }}
                  >
                    <span className="font-medium">{student}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeStudent(student);
                      }}
                      className="text-gray-400 hover:text-red-400 p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Middle: Evaluation Form */}
          <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6">
            {!selectedStudent ? (
              <div className="text-center py-12 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>Select a student to start evaluating</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Evaluating: {selectedStudent}</h2>
                  
                  <select
                    value={activeWeek}
                    onChange={(e) => setActiveWeek(Number(e.target.value))}
                    className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  >
                    {weeks.map((w) => (
                      <option key={w} value={w}>Week {w}</option>
                    ))}
                  </select>
                </div>

                {/* Test Scores */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-purple-400">Test Scores</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Obtained</label>
                      <input
                        type="number"
                        value={currentMetrics.testObtained}
                        onChange={(e) => handleMetricChange("testObtained", Number(e.target.value))}
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Total</label>
                      <input
                        type="number"
                        value={currentMetrics.testTotal}
                        onChange={(e) => handleMetricChange("testTotal", Number(e.target.value))}
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Percentage</label>
                      <div className="px-3 py-2 bg-gray-600 rounded-lg text-center">
                        {currentMetrics.testPercentage}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-purple-400">Soft Skills (1-5)</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { key: "curiosity", label: "Curiosity" },
                      { key: "understanding", label: "Understanding" },
                      { key: "creativity", label: "Creativity" },
                      { key: "problemSolving", label: "Problem Solving" },
                    ].map(({ key, label }) => (
                      <div key={key}>
                        <label className="block text-sm text-gray-400 mb-1">{label}</label>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={currentMetrics[key as keyof typeof currentMetrics] as number}
                          onChange={(e) => handleMetricChange(key, Number(e.target.value))}
                          className="w-full accent-purple-500"
                        />
                        <div className="text-center text-sm text-gray-300">
                          {currentMetrics[key as keyof typeof currentMetrics]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-1">Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes about this student's performance..."
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none h-24 resize-none"
                  />
                </div>

                <button
                  onClick={saveEvaluation}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg"
                >
                  Save Evaluation
                </button>
              </>
            )}
          </div>
        </div>

        {/* Student Summary */}
        {students.length > 0 && (
          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Evaluation Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-gray-400">Student</th>
                    {weeks.map((w) => (
                      <th key={w} className="pb-3 text-gray-400 text-center">W{w}</th>
                    ))}
                    <th className="pb-3 text-gray-400 text-center">Avg</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    const percentages: number[] = [];
                    weeks.forEach((w) => {
                      const evalData = getEvaluation(student, w);
                      if (evalData) percentages.push(evalData.test_percentage);
                    });
                    const avg = percentages.length > 0
                      ? Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length)
                      : 0;
                    
                    return (
                      <tr key={student} className="border-b border-gray-700/50">
                        <td className="py-3 font-medium">{student}</td>
                        {weeks.map((w) => {
                          const evalData = getEvaluation(student, w);
                          return (
                            <td key={w} className="py-3 text-center">
                              {evalData ? (
                                <span className={`px-2 py-1 rounded text-sm ${
                                  evalData.test_percentage >= 70 ? "bg-green-600" : "bg-yellow-600"
                                }`}>
                                  {evalData.test_percentage}%
                                </span>
                              ) : (
                                <span className="text-gray-600">-</span>
                              )}
                            </td>
                          );
                        })}
                        <td className="py-3 text-center font-bold">{avg}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
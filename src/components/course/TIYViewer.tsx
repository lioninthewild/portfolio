interface TIYTask {
  difficulty: "easy" | "medium" | "hard";
  title: string;
  tasks: string[];
}

interface TIYViewerProps {
  content: string;
}

function parseTIYContent(content: string): TIYTask[] {
  const tasks: TIYTask[] = [];
  
  const sections = content.split(/(?=^#+ )/gm).filter(s => s.trim());
  
  for (const section of sections) {
    const lines = section.split("\n").filter(l => l.trim());
    if (lines.length === 0) continue;
    
    const titleMatch = section.match(/^#+\s+(Easy|Medium|Hard):?\s*(.+)?$/im);
    if (titleMatch) {
      const difficulty = titleMatch[1].toLowerCase() as "easy" | "medium" | "hard";
      const title = titleMatch[2]?.trim() || "";
      
      const taskLines = section
        .replace(/^#+\s+(Easy|Medium|Hard):?\s*.+$/gim, "")
        .split("\n")
        .filter(l => l.trim() && !l.startsWith("#"))
        .map(l => l.replace(/^[-•]\s*/, "").trim());
      
      tasks.push({ difficulty, title, tasks: taskLines });
    }
  }
  
  return tasks;
}

export default function TIYViewer({ content }: TIYViewerProps) {
  const tasks = parseTIYContent(content);
  
  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return {
          badge: "bg-green-100 text-green-700",
          border: "border-green-300",
          bg: "bg-green-50",
          icon: "🟢",
        };
      case "medium":
        return {
          badge: "bg-yellow-100 text-yellow-700",
          border: "border-yellow-300", 
          bg: "bg-yellow-50",
          icon: "🟡",
        };
      case "hard":
        return {
          badge: "bg-red-100 text-red-700",
          border: "border-red-300",
          bg: "bg-red-50",
          icon: "🔴",
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-700",
          border: "border-gray-300",
          bg: "bg-gray-50",
          icon: "⚪",
        };
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Try It Yourself
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Practice what you have learned. Build these projects step by step.
      </p>
      
      <div className="space-y-6">
        {tasks.map((task, index) => {
          const styles = getDifficultyStyles(task.difficulty);
          return (
            <div
              key={index}
              className={`rounded-xl border-2 ${styles.border} ${styles.bg} overflow-hidden`}
            >
              <div className={`px-6 py-3 ${styles.badge} font-bold text-sm flex items-center gap-2`}>
                <span className="text-lg">{styles.icon}</span>
                <span className="uppercase tracking-wide">{task.difficulty}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {task.title}
                </h3>
                
                <ul className="space-y-3">
                  {task.tasks.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200">
        <p className="text-purple-800 text-center font-medium">
          💡 Start with Easy! Once you complete one, move to the next level.
        </p>
      </div>
    </div>
  );
}
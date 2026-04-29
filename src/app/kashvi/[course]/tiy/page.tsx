import Link from "next/link";
import { tiyContent } from "@/data/tiy-content";

export default function TIYPage() {
  const difficulties = ["easy", "medium", "hard"] as const;

  const getStyles = (difficulty: string) => {
    const key = difficulty as keyof typeof tiyContent;
    return tiyContent[key]?.color || {
      badge: "bg-gray-100 text-gray-700",
      border: "border-gray-300",
      bg: "bg-gray-50",
      icon: "⚪"
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Try It Yourself</h1>
          <p className="text-gray-600 mt-1">Test your understanding with these challenges</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {difficulties.map((difficulty) => {
            const content = tiyContent[difficulty];
            const styles = getStyles(difficulty);

            return (
              <Link
                key={difficulty}
                href={`/kashvi/python/tiy/${difficulty}`}
                className={`block p-6 rounded-xl border-2 ${styles.border} ${styles.bg} hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{styles.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 capitalize">{difficulty}</h2>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${styles.badge}`}>
                      {content?.marks || 0} marks
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <span>📝</span>
                    <span>Conceptual</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <span>💻</span>
                    <span>Coding</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
import Link from "next/link";

export default function TIYPage() {
  const tasks = [
    {
      title: "Task 1: Hello World",
      description: "Write your first program that prints 'Hello, World!' to the screen.",
      difficulty: "Easy",
    },
    {
      title: "Task 2: Calculator",
      description: "Build a simple calculator that can add, subtract, multiply, and divide two numbers.",
      difficulty: "Medium",
    },
    {
      title: "Task 3: Number Guessing Game",
      description: "Create a game where the computer generates a random number and the user has to guess it.",
      difficulty: "Medium",
    },
    {
      title: "Task 4: To-Do List",
      description: "Build a simple to-do list application that allows adding and removing tasks.",
      difficulty: "Hard",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Link
        href="/kashvi/programming-fundamentals/course?view=tiy"
        className="inline-flex items-center gap-2 text-purple-accent hover:underline mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Course</span>
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Try It Yourself (TIY)
      </h1>
      <p className="text-[#787777] text-lg mb-8">
        Practice what you've learned with these hands-on tasks.
      </p>

      <div className="space-y-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-surface-container-low border border-gray-200 hover:border-purple-accent hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-accent text-white text-sm font-bold">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{task.title}</h3>
            </div>
            <p className="text-[#787777] mb-4">{task.description}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                task.difficulty === "Easy"
                  ? "bg-green-100 text-green-700"
                  : task.difficulty === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {task.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
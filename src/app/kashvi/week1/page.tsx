import Link from "next/link";

export default function Week1Page() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Week 1: Building Blocks of Programming</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn the fundamental concepts that form the foundation of all programming.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((day) => (
          <Link
            key={day}
            href={`/kashvi/week1/day${day}`}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="font-semibold dark:text-white">Day {day}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Content coming soon...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

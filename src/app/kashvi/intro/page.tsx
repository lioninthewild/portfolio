export default function IntroPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">
        Course Introduction
      </h1>
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Welcome to Kashvi - Programming for Beginners! This course is designed
          to take you from zero to writing your first programs.
        </p>
        <h2 className="text-xl font-semibold mb-3 dark:text-white">
          What You'll Learn
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
          <li>Fundamental programming concepts</li>
          <li>Problem-solving skills</li>
          <li>How to think like a programmer</li>
          <li>Building real projects from scratch</li>
        </ul>
        <h2 className="text-xl font-semibold mb-3 dark:text-white">
          Prerequisites
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          This course is designed for complete beginners. No prior programming
          experience required - just a computer and willingness to learn!
        </p>
      </div>
    </div>
  );
}

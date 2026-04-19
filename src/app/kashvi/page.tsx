import Link from "next/link";

const courses = [
  {
    slug: "programming-fundamentals",
    title: "My course name",
    description: "Programming for Beginners",
    level: "Beginner",
    duration: "8 weeks",
  },
];

export default function KashviPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/kashvi/${course.slug}`}
            className="block p-6 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-[#787777] mb-4">{course.description}</p>
            <div className="flex gap-4 text-sm text-[#787777]">
              <span className="px-2 py-1 rounded bg-surface-container-highest">
                {course.level}
              </span>
              <span className="px-2 py-1 rounded bg-surface-container-highest">
                {course.duration}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Course Content</h2>
        <Link
          href="/kashvi/intro"
          className="block p-4 rounded-lg bg-surface-container-low border border-transparent hover:border-gray-300 transition-colors"
        >
          <h3 className="text-lg font-semibold">Course Introduction</h3>
          <p className="text-[#787777]">Learn about this course</p>
        </Link>
        
        <Link
          href="/kashvi/orientation"
          className="block p-4 rounded-lg bg-surface-container-low border border-transparent hover:border-gray-300 transition-colors"
        >
          <h3 className="text-lg font-semibold">Orientation</h3>
          <p className="text-[#787777]">Get started with the course</p>
        </Link>
        
        <Link
          href="/kashvi/week1"
          className="block p-4 rounded-lg bg-surface-container-low border border-transparent hover:border-gray-300 transition-colors"
        >
          <h3 className="text-lg font-semibold">Week 1</h3>
          <p className="text-[#787777]">Building Blocks of Programming</p>
        </Link>

        <Link
          href="/kashvi/assignments"
          className="block p-4 rounded-lg bg-surface-container-low border border-transparent hover:border-gray-300 transition-colors"
        >
          <h3 className="text-lg font-semibold">Assignments</h3>
          <p className="text-[#787777]">Practice problems and exercises</p>
        </Link>

        <Link
          href="/kashvi/resources"
          className="block p-4 rounded-lg bg-surface-container-low border border-transparent hover:border-gray-300 transition-colors"
        >
          <h3 className="text-lg font-semibold">Resources</h3>
          <p className="text-[#787777]">Additional learning materials</p>
        </Link>
      </div>
    </div>
  );
}
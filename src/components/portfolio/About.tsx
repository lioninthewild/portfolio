import Link from "next/link";

export function About() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 bg-surface-container-low p-8 rounded-xl min-h-[300px]">
          <span className="text-3xl font-bold uppercase tracking-tight text-purple-accent mb-4 block">
            About Me
          </span>
          <h3 className="text-sm font-bold tracking-tight text-black mb-4 leading-tight">
            Data & ML Enthusiast
          </h3>
          <p className="text-[#787777] max-w-md">
            I am a passionate developer focused on building intelligent systems
            and exploring the use of AI. With a strong foundation in mathematics
            and machine learning, I love turning complex problems into elegant
            solutions.
          </p>

          <hr className="border-t border-gray-200 my-4" />

          <div className="mb-4">
            <h4 className="text-base font-bold text-black uppercase tracking-wide mb-3">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                JavaScript
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                React
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Git
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                C
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Python
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Data Visualization
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Algorithms
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                APIs
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Machine Learning
              </span>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-4" />

          <div>
            <h4 className="text-base font-bold text-black uppercase tracking-wide mb-3">
              Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Football
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Guitar
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Chess
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Books
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                AI
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Music
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-surface-container-highest text-on-surface-variant">
                Sports
              </span>
            </div>
          </div>
        </div>
        <Link
          href="/kashvi/programming-fundamentals"
          className="block bg-inverse-surface p-6 rounded-xl min-h-[220px] hover:bg-opacity-80 transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-center"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Programming Fundamentals
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Starting the journey of digital world
            </p>{" "}
            <br></br>
            <p className="text-white/50 text-sm leading-relaxed">
              A comprehensive programming course designed for beginners. Learn
              the fundamentals of programming with practical examples and
              real-world projects. Build a strong foundation in coding that will
              serve you throughout your programming journey.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

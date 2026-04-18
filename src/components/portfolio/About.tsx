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
            and exploring the boundaries of AI. With a strong foundation in
            machine learning and data science, I love turning complex problems
            into elegant solutions.
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
                Git & Github
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
                Reading
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
        <div className="bg-inverse-surface p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
          <div className="space-y-3">
            <img 
              src="/kashvi.png" 
              alt="Programming Fundamentals"
              className="w-36 h-36 object-contain"
            />
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Programming Fundamentals
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Starting The Journey of digital world
              </p>
            </div>
          </div>
          <a
            href="/kashvi/programming-fundamentals"
            className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-purple-accent transition-colors cursor-pointer"
          >
            <span>View Course</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

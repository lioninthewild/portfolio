export function About() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 bg-surface-container-low p-8 rounded-xl min-h-[300px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-accent mb-4 block">
            About Me
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-black mb-4 leading-tight">
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
            <h4 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                JavaScript
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Git & Github
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                C
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Python
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Data Visualization
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Algorithms
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                APIs
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Machine Learning
              </span>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-4" />

          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
              Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Football
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Guitar
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Chess
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Reading
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                AI
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Music
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">
                Sports
              </span>
            </div>
          </div>
        </div>
        <div className="bg-inverse-surface p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
          <div className="text-white/40">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28l-1.02-1.78c2.04-.88 3.46-2.98 3.46-5.5 0-3.04-2.19-5.55-5.08-6.04L13 5.95V2.05zM11 2.05C6.05 2.55 3 6.02 3 11v6c0 4.05 2.95 7.45 7 7.95v-2.03c-3.24-.44-5.75-2.68-5.75-5.92 0-3.51 2.51-6.33 6-6.92V2.28l2 1.73c-3.21.53-5.75 2.84-5.75 5.57 0 2.46 1.83 4.5 4.47 5.12l1.04-1.74c-1.67-.5-2.8-2.17-2.8-4.08 0-2.54 2.52-4.65 5.75-5.08V2.05z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Active Research
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Currently investigating sparse attention mechanisms in large-scale
              transformer models for edge deployment.
            </p>
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

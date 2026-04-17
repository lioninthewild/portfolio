import type { Metadata } from "next";
import "../../globals.css";

export default function CourseOverviewPage() {
  const bannerImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzUBm_cNA6YU_Fk7K23Ued7K79TCEExesEfsLhg4TBa9sn6Z-N1FH0pHdCdLYkmvw4FXvKILXLkzCORuzQq1QzSkVts71qyhJPYSR2C4fyKBl0Q-mfR_KKipaJlsTV96HNhHve7iv96EZ-WRc--9FmsGo03IKgLztRCaA5uLkWOEivPIRgrvZZXKM1nJuO-bLVhe7aur4HNkFRtodZpJU9G7S-qYauo-kby6l5vfSZa2lPVRbRxnVOoQzDZYQnjMPQSDFoYZPioyU";

  const whatYouWillLearn = [
    "Fundamental programming concepts",
    "Problem-solving skills and algorithmic thinking",
    "Build real-world projects from scratch",
    "Best practices and coding standards",
  ];

  const prerequisites = [
    "No prior programming experience required",
    "Basic computer skills",
    "Willingness to learn and practice",
  ];

  const courseIsNot = [
    "Just about syntax - you'll learn the why behind the what",
    "Theory heavy - you'll actively build and experiment every session",
    "A fixed, rigid syllabus - parts of the course adapt based on students interests",
  ];

  const weeks = [
    "Week 1: Building Blocks: Rewiring The Brain",
    "Week 2: Talking To The Machine: First Real Coding",
    "Week 3: Building Logic: Making Decisions and Repetitions",
    "Week 4: Functions and Modular Programming",
    "Week 5: Current Trends: How The Tech World Is Moving",
    "Week 6: Productivity With AI",
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="relative w-full mb-8">
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-xl bg-surface-container-low">
          <img
            src={bannerImage}
            alt="Course banner"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Programming Fundamentals
          </h1>
          <p className="text-[#787777] mt-2">
            Start the journey of digital world
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container-low p-8 rounded-xl">
            <span className="text-purple-accent text-sm font-bold uppercase tracking-wider">
              About This Course
            </span>
            <p className="text-[#787777] text-lg mt-4">
              A comprehensive programming course designed for beginners. Learn
              the fundamentals of programming with practical examples and
              real-world projects. Build a strong foundation in coding that will
              serve you throughout your programming journey.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <ul className="space-y-3">
              {whatYouWillLearn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Prerequisites</h2>
            <ul className="space-y-3">
              {prerequisites.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-purple-accent mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Course Timeline</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {weeks.map((week, index) => (
                <div
                  key={index}
                  className="block p-5 rounded-lg bg-surface-container-low border border-gray-200 hover:border-purple-accent hover:shadow-lg transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-accent text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{week}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What This Course Is Not</h2>
            <ul className="space-y-3">
              {courseIsNot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl sticky top-24">
            <h3 className="text-lg font-bold mb-4">This Course Includes</h3>
            <ul className="space-y-3 text-[#787777]">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                6 Weeks of Content
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Practice Exercises
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Downloadable Resources
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
                Certificate of Completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

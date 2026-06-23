import focusTarget from '../assets/focus_target.png'
import habitSeedlings from '../assets/habit_seedlings.png'

export default function FocusTools() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO & FOCUS TARGET */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Focus Better.<br />Build Habits.<br />Take Control.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Your brain isn't broken, the systems you use are just too heavy. We build lightweight, protective tools designed for neurodivergent minds to flourish.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none">
              <span className="text-xs tracking-wide">Explore Systems</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                ➔
              </span>
            </button>
          </div>

          {/* Archery Target Image (Right) */}
          <div className="lg:col-span-5 h-[340px] md:h-[400px] rounded-[32px] overflow-hidden shadow-md">
            <img src={focusTarget} alt="Focus Target" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>


      {/* SECTION 2: MOTIVATION ISN'T THE PROBLEM */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6">
            <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
              The Truth About ADHD Productivity
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Motivation Isn't the Problem
            </h2>
            <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed">
              <p>
                Most productivity advice relies on willpower—a finite resource that burns out quickly. When motivation fades, the system collapses.
              </p>
              <p>
                Our philosophy is Systems Over Willpower. We design environments that reduce friction, so the right choice becomes the easiest choice.
              </p>
            </div>
          </div>

          {/* Right Diagram (Willpower vs System) */}
          <div className="lg:col-span-6 bg-gray-50/50 border border-gray-100 rounded-3xl p-8 flex items-center justify-center shadow-xs">
            <div className="flex items-center gap-6 w-full max-w-sm">
              {/* Willpower */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 text-center shadow-2xs">
                <span className="text-2xl block mb-2 text-red-500">⚡</span>
                <h4 className="font-bold text-gray-900 text-xs">Willpower</h4>
                <span className="text-[10px] text-red-500 font-semibold block mt-1">Friction</span>
              </div>

              {/* Arrow */}
              <div className="text-gray-400 font-bold text-xl">➔</div>

              {/* System */}
              <div className="bg-[#f0fdf4] border border-green-100 rounded-2xl p-5 flex-1 text-center shadow-2xs">
                <span className="text-2xl block mb-2 text-[#439c47]">📋</span>
                <h4 className="font-bold text-[#2f7a37] text-xs">System</h4>
                <span className="text-[10px] text-[#439c47] font-semibold block mt-1">Interactive</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: PRODUCTIVITY INSIGHTS ON THE GO */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Productivity Insights On The Go
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-xl leading-relaxed">
          Listen to expert-guided audio sessions designed to help you improve focus, build habits, manage distractions, and create sustainable productivity systems.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition flex items-center gap-4">
            <span className="text-xl">🎙️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-0.5">Focus Foundations</h4>
              <span className="text-[10px] text-gray-400">12 mins • Episode 1</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition flex items-center gap-4">
            <span className="text-xl">🎙️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-0.5">Managing Distractions</h4>
              <span className="text-[10px] text-gray-400">15 mins • Episode 2</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition flex items-center gap-4">
            <span className="text-xl">🎙️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-0.5">Habit Stacking Secrets</h4>
              <span className="text-[10px] text-gray-400">10 mins • Episode 3</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition flex items-center gap-4">
            <span className="text-xl">🎙️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-0.5">Building Willpower</h4>
              <span className="text-[10px] text-gray-400">18 mins • Episode 4</span>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 4: SMALL HABITS CREATE BIG RESULTS */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Flow */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Small Habits Create Big Results
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="bg-[#f0fdf4] text-[#2f7a37] text-xs font-bold px-5 py-3 rounded-full border border-green-100 shadow-2xs">
                1: Wake Up
              </div>
              <div className="text-gray-300 font-bold text-lg hidden sm:block">➔</div>
              <div className="bg-[#f0fdf4] text-[#2f7a37] text-xs font-bold px-5 py-3 rounded-full border border-green-100 shadow-2xs">
                2: Hydrate (500ml)
              </div>
              <div className="text-gray-300 font-bold text-lg hidden sm:block">➔</div>
              <div className="bg-[#439c47] text-white text-xs font-bold px-5 py-3 rounded-full shadow-xs">
                3: Review for 2 Mins
              </div>
            </div>

            <p className="text-gray-500 italic text-sm leading-relaxed max-w-xl font-light">
              "Success is the product of daily habits—not once-in-a-lifetime transformations."
            </p>
          </div>

          {/* Right Sprout Image */}
          <div className="lg:col-span-5 h-[260px] md:h-[300px] rounded-3xl overflow-hidden shadow-xs">
            <img src={habitSeedlings} alt="Habit Seedling Sprouts" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>


      {/* SECTION 5: BUILD YOUR PERSONAL PRODUCTIVITY TOOLKIT */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-55">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
              The All-in-One Hub
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Build Your Personal Productivity Toolkit
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
              Combine planning, focusing, and daily practice to create a productivity system that works consistently over time.
            </p>
            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
              Explore Features ➔
            </button>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            
            <div className="bg-[#fcfdfc] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition text-center">
              <span className="text-2xl block mb-2">🎓</span>
              <h4 className="font-bold text-gray-900 text-xs">Learn Through Courses</h4>
            </div>

            <div className="bg-[#fcfdfc] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition text-center">
              <span className="text-2xl block mb-2">🎧</span>
              <h4 className="font-bold text-gray-900 text-xs">Listen to Audiobooks</h4>
            </div>

            <div className="bg-[#fcfdfc] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition text-center">
              <span className="text-2xl block mb-2">⏱</span>
              <h4 className="font-bold text-gray-900 text-xs">Practice Focus</h4>
            </div>

            <div className="bg-[#fcfdfc] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition text-center">
              <span className="text-2xl block mb-2">☑</span>
              <h4 className="font-bold text-gray-900 text-xs">Multi-Habit Choice</h4>
            </div>

            <div className="bg-[#fcfdfc] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition text-center col-span-2 md:col-span-1">
              <span className="text-2xl block mb-2">📈</span>
              <h4 className="font-bold text-gray-900 text-xs">Track Progress</h4>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

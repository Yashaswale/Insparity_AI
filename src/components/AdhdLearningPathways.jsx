import courseDesk from '../assets/course_desk.png'

export default function AdhdLearningPathways() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
            Learn How Your<br />ADHD Brain Works
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Move beyond standard systems. Discover structured journeys designed specifically for the executive function strengths and hurdles of the ADHD mind.
          </p>
          <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
            <span className="text-xs tracking-wide">Initiate Journey Here</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* SECTION 2: NOT EVERYONE LEARNS THE SAME WAY */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Not Everyone Learns the Same Way
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Standard learning systems prioritize linear progression and rigid timing methods, which stack up against the natural flow of an ADHD brain. We flip the script.
            </p>
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3.5 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Doping-first approach to executive function</span>
              </div>
              <div className="flex items-center gap-3.5 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Micro-learning blocks designed for cognitive satiety levels</span>
              </div>
              <div className="flex items-center gap-3.5 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Systemic adjustment for energy, not focus flow</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
            <img src={courseDesk} alt="Neural pathways desk" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 3: 4 CARDS GRID */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Recognizing Stress Signals */}
          <div className="bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Recognizing Stress Signals</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">Fundamentals of the brain, dopamine cycles, and attention architecture.</p>
            </div>
          </div>

          {/* Card 2: Building Routines */}
          <div className="bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Building Routines</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">Morning habit stacking, morning rituals, and frictionless planning.</p>
            </div>
          </div>

          {/* Card 3: Focus Mastery */}
          <div className="bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Focus Mastery</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">Time-work techniques, distraction shielding, and energy awareness.</p>
            </div>
          </div>

          {/* Card 4: Emotional Core (Highlighted Greenish) */}
          <div className="bg-[#f2faf3] border border-green-100/40 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#439c47] flex items-center justify-center mb-6 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Emotional Core</h3>
              <p className="text-[#3a893e] text-xs leading-relaxed font-medium">Regulation, rejection sensitivity, and neurodivergent confidence.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE SOLUTION SHIFT */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">The Solution Shift</h2>
            <p className="text-gray-550 text-sm leading-relaxed max-w-xl">We don't fix you. We provide the tools that unlock your impulses.</p>
          </div>
          <div>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Explore Systems</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Item 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xs transition duration-300">
            <span className="font-semibold text-gray-800 text-sm">"I struggle to stay focused on long-term tasks."</span>
            <span className="text-xs text-gray-500 font-semibold md:text-right">Attention management & gamified milestones</span>
          </div>

          {/* Item 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xs transition duration-300">
            <span className="font-semibold text-gray-800 text-sm">"I start things but rarely finish them."</span>
            <span className="text-xs text-gray-500 font-semibold md:text-right">Momentum systems & the 80% completion rule</span>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xs transition duration-300">
            <span className="font-semibold text-gray-800 text-sm">"Every day feels like starting from zero."</span>
            <span className="text-xs text-gray-500 font-semibold md:text-right">External brain architecture & habit anchors</span>
          </div>

          {/* Item 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xs transition duration-300">
            <span className="font-semibold text-gray-800 text-sm">"I feel overwhelmed by my own potential."</span>
            <span className="text-xs text-gray-500 font-semibold md:text-right">Constraint frameworks & priority filters</span>
          </div>

        </div>
      </section>

      {/* SECTION 5: YOUR EVOLUTION TIMELINE */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Your Evolution Timeline</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">Success isn't overnight, it's a series of aligned shifts.</p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Week 1 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              1
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Week 1</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] font-medium">Mapping your focus patterns and dopamine drives.</p>
          </div>

          {/* Week 3 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              3
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Week 3</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] font-medium">Implementing friction-free routines and core habits.</p>
          </div>

          {/* Week 6 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              6
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Week 6</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] font-medium">Achieving consistency through systems, not willpower.</p>
          </div>

          {/* Week 12 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              12
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Week 12</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] font-medium">Operating from a state of effortless confidence.</p>
          </div>

        </div>
      </section>

    </div>
  )
}

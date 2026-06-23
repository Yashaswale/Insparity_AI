import coachStarry from '../assets/coach_starry.png'
import overwhelmedWoman from '../assets/overwhelmed_woman.png'

export default function ExecutiveFunctionCoach() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO & DASHBOARD CARDS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Your Personal AI Executive<br />Function Coach
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              An intelligent guide that helps you organize tasks, prioritize what matters, build routines, manage focus, and turn intentions into consistent action.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none">
              <span className="text-xs tracking-wide">See How It Works</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                ➔
              </span>
            </button>
          </div>

          {/* Staggered cards (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 max-w-[280px]">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#439c47] flex items-center justify-center text-lg">
                ⊞
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Organization</h4>
                <span className="text-[10px] text-gray-400">Structure life</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 max-w-[280px] self-end lg:mr-8">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#439c47] flex items-center justify-center text-lg">
                🕒
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Time Awareness</h4>
                <span className="text-[10px] text-gray-400">Manage schedules</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 max-w-[280px]">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#439c47] flex items-center justify-center text-lg">
                📅
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs">Planning</h4>
                <span className="text-[10px] text-gray-400">Turn goals into steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: WHY EXECUTIVE FUNCTION MATTERS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Executive Function Matters
            </h2>
            <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed">
              <p>
                For those with ADHD or heavy mental loads, executive function skills—planning, prioritizing, and focusing—can feel like a persistent uphill battle. It's not a lack of will, it's a neurobiological friction.
              </p>
              <p>
                Our AI Coach acts as a supportive cognitive prosthesis, breaking down complex obligations into microscopic, actionable actions, reducing the "wall of awful" to a gentle staircase.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 h-[260px] md:h-[340px] rounded-3xl overflow-hidden shadow-xs">
            <img src={coachStarry} alt="Executive function space" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>


      {/* SECTION 3: FROM OVERWHELMED TO ORGANIZED */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          From Overwhelmed to Organized
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 h-[280px] md:h-[340px] rounded-3xl overflow-hidden shadow-xs">
            <img src={overwhelmedWoman} alt="Overwhelmed user at desk" className="w-full h-full object-cover" />
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before Card */}
            <div className="bg-red-50/20 border border-red-100 rounded-3xl p-6 hover:shadow-sm transition">
              <span className="text-red-500 text-xs font-bold uppercase tracking-wider block mb-4">
                Before
              </span>
              <ul className="space-y-4 text-xs text-gray-600 font-medium list-none p-0">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Too many tasks, unclear priorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Missed important deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Constant mental fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Inconsistent daily routines</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="bg-green-50/20 border border-green-100 rounded-3xl p-6 hover:shadow-sm transition">
              <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                After
              </span>
              <ul className="space-y-4 text-xs text-gray-700 font-medium list-none p-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#3e9447] font-bold">✓</span>
                  <span>Clear, action-by-action plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e9447] font-bold">✓</span>
                  <span>Flexible focus timers on commitments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e9447] font-bold">✓</span>
                  <span>Reduced mental clutter & anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e9447] font-bold">✓</span>
                  <span>Sustainable, supportive systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: DO ANY OF THESE FEEL FAMILIAR? */}
      <section className="bg-gray-50/30 py-16 md:py-20 border-t border-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">
            Do Any of These Feel Familiar?
          </h2>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I know what I need to do, but I can't get started."</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I commonly forget important issues."</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I jump between tasks without finishing them."</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I feel overwhelmed by planning."</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I struggle to manage my time."</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition duration-200">
              <p className="text-gray-700 text-sm italic font-light">"I get distracted even when I'm motivated."</p>
            </div>
          </div>

          <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
            Try Now ➔
          </button>
        </div>
      </section>


      {/* SECTION 5: SEE THE COACH IN ACTION */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-55">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          See The Coach In Action
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#fcfdfc] border border-gray-100 rounded-[28px] p-6 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                Reactive Planning
              </span>
              <div className="space-y-4 font-sans text-xs">
                <div className="bg-[#f0fdf4] text-[#2f7a37] p-3.5 rounded-2xl rounded-tr-none max-w-[90%] ml-auto text-right">
                  "I have so many things, start listing all of my options."
                </div>
                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-none max-w-[90%] shadow-2xs text-gray-700">
                  "Let's focus on the single main task, what is the target for the next 60 seconds?"
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcfdfc] border border-gray-100 rounded-[28px] p-6 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                Reactive Prioritizing
              </span>
              <div className="space-y-4 font-sans text-xs">
                <div className="bg-[#f0fdf4] text-[#2f7a37] p-3.5 rounded-2xl rounded-tr-none max-w-[90%] ml-auto text-right">
                  "I have 20 emails, a meeting, and laundry. I feel anxious."
                </div>
                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-none max-w-[90%] shadow-2xs text-gray-700">
                  "Deep breath. Strategy: write out a 'shallow list'. The meeting is fixed. Let's pick 3 big items to answer first."
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfdfc] border border-gray-100 rounded-[28px] p-6 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                Reactive Focus
              </span>
              <div className="space-y-4 font-sans text-xs">
                <div className="bg-[#f0fdf4] text-[#2f7a37] p-3.5 rounded-2xl rounded-tr-none max-w-[90%] ml-auto text-right">
                  "I keep looking at my phone every 3 minutes while writing."
                </div>
                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-none max-w-[90%] shadow-2xs text-gray-700">
                  "Put the phone in another room or turn on 'Focus Mode'. Let's set a timer for 15 minutes."
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

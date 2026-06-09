import beachWoman from '../assets/beach_woman.png'

export default function LifeTransitionCoaching() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Life Transition Coaching
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Navigate life's major changes with personalized guidance, practical planning tools, and reflective coaching experiences designed to help you move forward with confidence.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Map My Transition Journey</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Beach Woman Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={beachWoman} alt="Woman walking on beach at sunset" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE NEXT CHAPTER */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="bg-[#fcfdfc] border border-gray-100/80 rounded-[32px] p-8 md:p-12 text-center max-w-5xl mx-auto shadow-2xs">
          <span className="text-[#3e9447] text-[10px] font-bold uppercase tracking-wider block mb-3">THE NEXT CHAPTER</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-6">
            Every New Chapter Begins With A Transition
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Change is not an endpoint, but a threshold. At Insparity AI, we believe moving through significant life changes requires more than just logic—it requires emotional clarity, purposeful reflection, and a roadmap for what lies ahead. Whether you're stepping away from a career or redefining your identity, we provide the space to breathe and the tools to build.
          </p>
        </div>
      </section>

      {/* SECTION 3: PRODUCTIVITY INSIGHTS ON THE GO */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Productivity Insights On The Go</h2>
        <p className="text-gray-500 text-sm mb-10 max-w-xl leading-relaxed">
          Listen to expert-guided audio sessions designed to help you improve focus, build habits, manage distractions, and create sustainable productivity systems.
        </p>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Retirement */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Retirement</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Moving beyond the 9-to-5, financial legacy, pension protocols, and redefined purpose.</p>
          </div>

          {/* Card 2: Career Changes */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Career Changes</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Navigating shifts in professional identity and industry leaps.</p>
          </div>

          {/* Card 3: Empty Nest */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Empty Nest</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Rediscovering self and home after children move forward.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: YOU DON'T NEED TO HAVE ALL THE ANSWERS TODAY */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              You Don't Need To Have<br />All The Answers Today
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Every meaningful transition begins with the right questions. Use these reflection prompts to explore your next steps and find clarity in the journey ahead.
            </p>
          </div>

          {/* Right Cards List (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Reflection */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
              <span className="text-[#3e9447] text-[10px] font-bold block uppercase tracking-wider mb-2 italic">Reflection</span>
              <h4 className="font-bold text-gray-900 text-sm">"What's next for me?"</h4>
            </div>

            {/* Adaptation */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
              <span className="text-[#3e9447] text-[10px] font-bold block uppercase tracking-wider mb-2 italic">Adaptation</span>
              <h4 className="font-bold text-gray-900 text-sm">"How do I adapt to this pace?"</h4>
            </div>

            {/* Identity */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
              <span className="text-[#3e9447] text-[10px] font-bold block uppercase tracking-wider mb-2 italic">Identity</span>
              <h4 className="font-bold text-gray-900 text-sm">"Who am I without my title?"</h4>
            </div>

            {/* Legacy */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
              <span className="text-[#3e9447] text-[10px] font-bold block uppercase tracking-wider mb-2 italic">Legacy</span>
              <h4 className="font-bold text-gray-900 text-sm">"What do I want to leave behind?"</h4>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: REFLECTION PROMPTS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Reflection Prompts</h2>
        
        {/* 3 Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Prompt 1 */}
          <div className="bg-white border border-gray-150 rounded-[24px] p-8 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-gray-400 text-base block mb-6">➖</span>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed mb-6">
                "What excites you about the future when you remove the constraints of your current role?"
              </p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#439c47] hover:text-[#38843c] text-xs font-bold flex items-center gap-1">
              Write Response ➔
            </a>
          </div>

          {/* Prompt 2 */}
          <div className="bg-white border border-gray-150 rounded-[24px] p-8 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-gray-400 text-base block mb-6">➖</span>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed mb-6">
                "What is one dream you set aside 20 years ago that might be ready for a comeback?"
              </p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#439c47] hover:text-[#38843c] text-xs font-bold flex items-center gap-1">
              Write Response ➔
            </a>
          </div>

          {/* Prompt 3 */}
          <div className="bg-white border border-gray-150 rounded-[24px] p-8 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-gray-400 text-base block mb-6">➖</span>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed mb-6">
                "If this transition were a book chapter title, what would you call it today?"
              </p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#439c47] hover:text-[#38843c] text-xs font-bold flex items-center gap-1">
              Write Response ➔
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

import patternDocumentMagnifier from '../assets/pattern_document_magnifier.png'

export default function BehaviouralPatternTracking() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Behavioural Pattern<br />Tracking
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Discover the subtle rhythms of your mind. We map your daily actions to unveil insights into your evolving habits, focus cycles, and sustainable growth journey.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Explore My Patterns</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* 3D Document Illustration (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={patternDocumentMagnifier} alt="Pattern Tracking Document" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: ECOSYSTEM OBSERVATION AREAS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Ecosystem Observation Areas</h2>
        
        {/* Top 3 Columns Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Learning Patterns */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Learning Patterns</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Cognitive intake & retention cycles.</p>
          </div>

          {/* Card 2: Focus Patterns */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Focus Patterns</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Deep work vs. reactive focus.</p>
          </div>

          {/* Card 3: Reflection Patterns */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Reflection Patterns</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Self-awareness & clarity trends.</p>
          </div>
        </div>

        {/* Bottom 2 Columns Grid (Centered or spaced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 4: Audiobook Engagement (Highlighted Light Green Background) */}
          <div className="bg-[#f2faf3] border border-green-100/40 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#439c47] flex items-center justify-center mb-6 text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Audiobook Engagement</h3>
            <p className="text-[#3a893e] text-xs font-semibold leading-relaxed">Auditory consumption habits.</p>
          </div>

          {/* Card 5: Habit Patterns */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Habit Patterns</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Routine stability & strength.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: AI PATTERN DISCOVERY */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">AI Pattern Discovery</h2>
        
        {/* 3 Green Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: LEARNING INSIGHT */}
          <div className="bg-[#4a8a4f] text-white rounded-[28px] p-8 flex flex-col justify-between min-h-[200px] hover:shadow-md transition duration-300">
            <div>
              <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider block mb-4">LEARNING INSIGHT</span>
              <p className="text-white text-sm leading-relaxed font-light">"Visual summaries increase your module completion rate by 40% compared to audio-only."</p>
            </div>
          </div>

          {/* Card 2: FOCUS INSIGHT */}
          <div className="bg-[#4a8a4f] text-white rounded-[28px] p-8 flex flex-col justify-between min-h-[200px] hover:shadow-md transition duration-300">
            <div>
              <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider block mb-4">FOCUS INSIGHT</span>
              <p className="text-white text-sm leading-relaxed font-light">"Your concentration peaks exactly 30 minutes after your morning caffeine routine."</p>
            </div>
          </div>

          {/* Card 3: AUDIO INSIGHT */}
          <div className="bg-[#4a8a4f] text-white rounded-[28px] p-8 flex flex-col justify-between min-h-[200px] hover:shadow-md transition duration-300">
            <div>
              <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider block mb-4">AUDIO INSIGHT</span>
              <p className="text-white text-sm leading-relaxed font-light">"You engage best with high-energy narrators during afternoon focus slumps."</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: PATTERNS WORTH NOTICING */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Patterns Worth Noticing</h2>
        
        {/* 2 Bordered Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Correlation 1 */}
          <div className="bg-white border border-gray-150 rounded-[24px] p-8 hover:shadow-xs transition duration-300 text-center">
            <h4 className="font-bold text-gray-900 text-xs mb-3 uppercase tracking-wider text-gray-500">Consistency Correlation</h4>
            <p className="text-gray-800 text-sm italic font-light leading-relaxed">
              "Users who journal daily tend to complete 2.5x more courses than those who skip reflection."
            </p>
          </div>

          {/* Correlation 2 */}
          <div className="bg-white border border-gray-150 rounded-[24px] p-8 hover:shadow-xs transition duration-300 text-center">
            <h4 className="font-bold text-gray-900 text-xs mb-3 uppercase tracking-wider text-gray-500">Rest-Focus Relation</h4>
            <p className="text-gray-800 text-sm italic font-light leading-relaxed">
              "An 8-hour sleep window correlates with a 30% lower distraction rate in morning focus blocks."
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

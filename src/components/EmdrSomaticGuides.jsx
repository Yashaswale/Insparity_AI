import somaticMan from '../assets/somatic_man.png'
import wellnessExperts from '../assets/wellness_experts.png'

export default function EmdrSomaticGuides() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              EMDR & Somatic<br />Therapy Guides
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Reconnect with your nervous system through science-backed somatic courses and guided EMDR experiences designed for gentle, trauma-informed healing.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Explore Sessions</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Meditating Somatic Man Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={somaticMan} alt="Somatic meditation exercises" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICE WITH WELLNESS EXPERTS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Practice With Wellness Experts</h2>
            <p className="text-gray-505 text-sm leading-relaxed max-w-xl">Join live workshops and guided sessions to learn practical techniques directly from experienced wellness practitioners.</p>
          </div>
          <div>
            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
              Book Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Workshop Left Card (lg:col-span-6) */}
          <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden min-h-[340px] flex items-end">
            <img src={wellnessExperts} alt="Somatic workshop" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="relative z-10 p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-950/40 px-3 py-1.5 rounded-full inline-block mb-4">LIVE SESSION</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Introduction to Somatic Awareness</h3>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-md">
                Learn body-based techniques for managing stress and releasing emotional blockages.
              </p>
            </div>
          </div>

          {/* Workshop Schedule Right List (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 md:p-8 flex flex-col justify-between">
            <div className="mb-4">
              <span className="text-[10px] font-bold text-gray-400 block mb-6 uppercase tracking-wider">UPCOMING WORKSHOPS</span>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-xs transition cursor-pointer">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">Guided Grounding Workshop</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Tuesday, 4:00 PM</span>
                  </div>
                  <span className="text-gray-400">➔</span>
                </div>

                {/* Item 2 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-xs transition cursor-pointer">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">Understanding Stress Resonance</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Wednesday, 11:00 AM</span>
                  </div>
                  <span className="text-gray-400">➔</span>
                </div>

                {/* Item 3 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-xs transition cursor-pointer">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">Emotional Regulation Circle</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Thursday, 3:00 PM</span>
                  </div>
                  <span className="text-gray-400">➔</span>
                </div>

                {/* Item 4 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-xs transition cursor-pointer">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">Calm Mind, Calm Body Session</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Friday, 9:00 AM</span>
                  </div>
                  <span className="text-gray-400">➔</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: GUIDED HEALING COURSES */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Guided Healing Courses</h2>
            <p className="text-gray-550 text-sm leading-relaxed max-w-xl">Explore video and somatic feedback with expert-led lessons.</p>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-sm font-semibold text-[#439c47] hover:underline">View all</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                {/* Course Image */}
                <div className="h-44 w-full overflow-hidden border-b border-gray-100">
                  <img src={wellnessExperts} alt="EMDR awareness" className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-450 uppercase">Marcus Taylor</span>
                    <span className="text-[10px] font-bold text-[#439c47]">⭐ 4.8</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">Introduction to EMDR Awareness</h4>
                  <p className="text-gray-405 text-[10px] leading-relaxed mb-4">A gentle introduction to somatic stimulation and neurodivergent regulation practices.</p>
                  
                  {/* Info Row */}
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold mb-4">
                    <span>🎬 12 Video Lessons</span>
                    <span>⏱️ 3 Hrs</span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-end gap-2.5">
                    <span className="text-xs text-gray-400 line-through font-medium">AUD 1500.00</span>
                    <span className="text-sm font-bold text-[#439c47]">AUD 190.00</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-full cursor-pointer transition">
                  Detail
                </button>
                <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 rounded-full cursor-pointer transition border-none shadow-2xs">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PERSONALIZED SUPPORT */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">EXPERIENCE THE FUTURE OF SUPPORT</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Personalized Support Whenever You Need It</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
              Continue learning between sessions with AI-guided support designed to recommend wellness, grounding practices, and nervous system exercises.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Support that adapts to your current emotional state.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Calming questions to deepen your self-awareness.</span>
              </div>
            </div>

            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3.5 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
              Talk to Coach
            </button>
          </div>

          {/* Right Column (Chat simulation) */}
          <div className="lg:col-span-6 bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 md:p-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[360px]">
              {/* Chat Header */}
              <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>
                <span className="text-xs font-bold text-gray-900">Somatic Companion</span>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/20 text-xs">
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-700 rounded-2xl rounded-tl-none p-3.5 max-w-[85%] leading-relaxed">
                    How have you been feeling since our last somatic check-in? Let's take a deep breath together. Tell me what's on your mind.
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-[#f0fdf4] text-[#2f7a37] rounded-2xl rounded-tr-none p-3.5 max-w-[85%] leading-relaxed border border-green-100">
                    I've been feeling a bit tense because of work pressure.
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-700 rounded-2xl rounded-tl-none p-3.5 max-w-[85%] leading-relaxed">
                    Work stress is very common. Let's start with a 2-minute grounding exercise to help release that tension.
                  </div>
                </div>
              </div>

              {/* Form Input mockup */}
              <div className="px-5 py-3 border-t border-gray-100 bg-white flex items-center justify-between text-gray-400 text-xs">
                <span>Type your message...</span>
                <span className="w-7 h-7 rounded-full bg-green-100 text-[#439c47] flex items-center justify-center font-bold">➔</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

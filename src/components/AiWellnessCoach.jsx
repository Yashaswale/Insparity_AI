import wellnessCrystal from '../assets/wellness_crystal.png'

export default function AiWellnessCoach() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO & METRICS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Your AI Wellness<br />Companion
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Experience a sanctuary of supportive conversations. Our AI coach provides gentle guidance, reflective questioning, and personalized wellness strategies designed for clarity and safety.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Start Conversations</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* AI Mood Insights Card */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-2xs flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 text-xs">
                  👁️‍🗨️
                </div>
                <h4 className="font-bold text-gray-900 text-xs mb-1 uppercase tracking-wider text-gray-400">AI Mood Insights</h4>
                <p className="text-gray-800 text-sm font-semibold">Consistent and grounded.</p>
              </div>
            </div>

            {/* Daily Reflection Card */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-2xs flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 text-xs">
                  💬
                </div>
                <h4 className="font-bold text-gray-900 text-xs mb-1 uppercase tracking-wider text-gray-400">Daily Reflection</h4>
                <p className="text-gray-800 text-sm font-semibold">"What is the main focus of your day?"</p>
              </div>
            </div>

            {/* Gauge Indicator Card (Spans across or aligns) */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-2xs flex flex-col items-center justify-center min-h-[160px] sm:col-span-2">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#439c47" strokeWidth="6" fill="transparent" 
                          strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.75)} strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">75%</span>
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Total Resilience</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: DESIGNED FOR PROTECTIVE CLARITY */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Designed for Protective Clarity
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              The AI Wellness Companion is constructed with trauma-informed systems at its core, helping you navigate complex emotions without fear of judgment. It works dynamically to help you find your inner anchor by providing structure where it is felt fully.
            </p>
            
            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              <span className="bg-[#f9fafb] border border-gray-150 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">Trauma-Informed Support</span>
              <span className="bg-[#f9fafb] border border-gray-150 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">Guided Reflection</span>
              <span className="bg-[#f9fafb] border border-gray-150 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">Neurodivergent Affirming</span>
              <span className="bg-[#f9fafb] border border-gray-150 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">ADHD Friendly Pacing</span>
              <span className="bg-[#f9fafb] border border-gray-150 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">Energy Management</span>
            </div>
          </div>

          {/* Right Image (Crystal) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-100">
            <img src={wellnessCrystal} alt="Glowing crystal prism" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 3: SUPPORT CRAFTED FOR YOUR MIND */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Support Crafted for Your Mind</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Chat Mockup Card (Left - lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#fbfdfb] border border-green-100/30 rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Emotional Support Conversations</h3>
              <p className="text-gray-400 text-xs mb-8">A safe space to process difficult moments through chat.</p>
              
              <div className="space-y-4 mb-6">
                {/* User Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-700 text-xs rounded-2xl rounded-tl-none p-3.5 max-w-[85%] leading-relaxed">
                    I've been feeling a bit overwhelmed by my to-do list today.
                  </div>
                </div>

                {/* AI Coach Message */}
                <div className="flex justify-end">
                  <div className="bg-[#f0fdf4] border border-green-100/80 text-[#2f7a37] text-xs rounded-2xl rounded-tr-none p-3.5 max-w-[85%] leading-relaxed">
                    Focus on one task first. Let's do a box breathing exercise together. Would you like to check the details?
                  </div>
                </div>
                
                {/* User Message 2 */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-700 text-xs rounded-2xl rounded-tl-none p-3.5 max-w-[85%] leading-relaxed">
                    Yes, let's start.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards (Right - lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Session Reminder */}
            <div className="bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between flex-1">
              <div>
                <span className="text-lg block mb-4">🔔</span>
                <h4 className="font-bold text-gray-900 text-base mb-2">Session Reminder</h4>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed">Thoughtful check-ins when you need them most.</p>
              </div>
            </div>

            {/* Your Journey */}
            <div className="bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between flex-1">
              <div>
                <span className="text-lg block mb-4">📈</span>
                <h4 className="font-bold text-gray-900 text-base mb-2">Your Journey</h4>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed">Track your growth, resilience, and emotional feedback.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SIMPLICITY IN SUPPORT */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Simplicity in Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              ✉️
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">1. Start a Conversation</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Share what's on your mind, free of distraction, paced to your energy.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              💡
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">2. Receive Guidance</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Our AI provides validation, gentle support, and calming techniques.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              🌱
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">3. Reflect & Grow</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Build long-term resilience with personalized reflections.</p>
          </div>

        </div>
      </section>

      {/* SECTION 5: WELLNESS SUPPORT TOOLS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Wellness Support Tools</h2>
          <p className="text-gray-550 text-sm leading-relaxed max-w-xl mx-auto">Resource maps and tips to assist your coping process.</p>
        </div>

        {/* 8 Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
          
          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">👁️</span>
            <span className="font-bold text-gray-900 text-xs">Guided Video Lessons</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">🎧</span>
            <span className="font-bold text-gray-900 text-xs">Audio Learning Support</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">✍️</span>
            <span className="font-bold text-gray-900 text-xs">Reflection Prompts</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">😌</span>
            <span className="font-bold text-gray-900 text-xs">Mood Mapping</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">🌬️</span>
            <span className="font-bold text-gray-900 text-xs">Breathing Exercises</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">💬</span>
            <span className="font-bold text-gray-900 text-xs">AI Wellness Coach</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">🔒</span>
            <span className="font-bold text-gray-900 text-xs">Private Journaling</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition flex items-center gap-3.5">
            <span className="text-base text-gray-500">📈</span>
            <span className="font-bold text-gray-900 text-xs">Emotional Insights</span>
          </div>

        </div>

        <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
          <span className="text-xs tracking-wide">Support Library</span>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </button>

      </section>

    </div>
  )
}

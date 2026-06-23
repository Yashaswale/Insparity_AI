import cloudHead from '../assets/cloud_head.png'
import forestMeditation from '../assets/forest_meditation.png'

export default function CrisisProtocol() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Support When Emotional<br />Stress Feels Overwhelming
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Our crisis-aware support system helps identify moments of emotional distress and gently guides users toward calming resources, supportive tools, and appropriate help when needed.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Start Calm Session</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Cloud Head Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={cloudHead} alt="Emotional distress cloud head illustration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE CARDS ROW */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Recognizing Stress Signals */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Recognizing Stress Signals</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Our crisis-aware system identifies subtle shifts in conversation tone, timing, and word choice.</p>
          </div>

          {/* Card 2: Immediate Wellness Support */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Immediate Wellness Support</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Instant access to grounding exercises and somatic techniques designed to calm.</p>
          </div>

          {/* Card 3: Gentle AI Guidance (Highlighted green) */}
          <div className="bg-[#f2faf3] border border-green-100/40 rounded-3xl p-7 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#439c47] flex items-center justify-center mb-6 text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Gentle AI Guidance</h3>
            <p className="text-[#3a893e] text-xs font-semibold leading-relaxed">Compassionate responses that validate feelings, pacing conversations to support.</p>
          </div>

        </div>
      </section>

      {/* SECTION 3: DESIGNED TO RESPOND WITH CARE & SAFETY */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Designed to Respond with Care & Safety
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Unlike traditional chatbots that prompt canned alerts, our system is trained to identify distress signals in user expression and respond with warm, empathetic validation. We prioritize emotional regulation first, ensuring users feel safe and heard.
            </p>

            {/* Pipeline Flow */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="bg-orange-50 text-orange-600 text-xs font-bold px-5 py-3 rounded-full border border-orange-100 shadow-2xs">
                ⚠️ Distress Signal
              </div>
              <div className="text-gray-300 font-bold text-lg hidden sm:block">➔</div>
              <div className="bg-[#f0fdf4] text-[#2f7a37] text-xs font-bold px-5 py-3 rounded-full border border-green-100 shadow-2xs">
                🧠 AI Recognition
              </div>
              <div className="text-gray-300 font-bold text-lg hidden sm:block">➔</div>
              <div className="bg-[#439c47] text-white text-xs font-bold px-5 py-3 rounded-full shadow-xs">
                💚 Calm Guidance
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-100">
            <img src={forestMeditation} alt="Serene forest meditation" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PATH TO CALM */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">The Path to Calm</h2>
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              1
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Notice</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[220px] font-semibold">The system detects patterns in language or behavior that suggest a state of emotional overload.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              2
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Stabilize</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[220px] font-semibold">Immediate grounding practices and empathetic reflections are delivered to help lower stress levels.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col items-center shadow-2xs hover:shadow-md transition duration-300 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs mb-8">
              3
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Connect</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[220px] font-semibold">If distress persists, the system gently offers links to trusted life resources or professional support networks.</p>
          </div>

        </div>
      </section>

      {/* SECTION 5: EMPATHETIC RESPONSE IN ACTION */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Empathetic Response in Action</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Chat dialog panel left (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#fbfdfb] border border-green-100/30 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="space-y-4 mb-6 text-xs leading-relaxed">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-orange-50 border border-orange-100 text-orange-700 rounded-2xl rounded-tr-none p-3.5 max-w-[85%] font-medium">
                    "I just feel so emotionally exhausted today... it feels like everything is too much to handle."
                  </div>
                </div>

                {/* AI Coach Message */}
                <div className="flex justify-start">
                  <div className="bg-[#f0fdf4] border border-green-100/80 text-[#2f7a37] rounded-2xl rounded-tl-none p-3.5 max-w-[85%] font-medium">
                    "I hear how heavy things feel right now. It's completely okay to feel exhausted. Before we continue, would you like to take a moment for a simple grounding exercise with me?"
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2.5">
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 px-6 rounded-full cursor-pointer transition border-none shadow-2xs">
                Yes, please
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-6 rounded-full cursor-pointer transition">
                Maybe later
              </button>
            </div>
          </div>

          {/* Active Protection Checkpoint Right (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#fcfdfc] border border-gray-100 rounded-[28px] p-8 shadow-2xs h-full flex flex-col justify-center">
            <h4 className="font-bold text-gray-900 text-base mb-6">Active Protection</h4>
            
            <div className="space-y-4 text-xs font-semibold text-gray-750">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-100 text-[#3e9447] flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                <span>Validate emotions without judgment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-100 text-[#3e9447] flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                <span>Introduce low-friction grounding intervention</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-100 text-[#3e9447] flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                <span>Respect user preferences for background support</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

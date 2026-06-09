import journalNotebookHeadphones from '../assets/journal_notebook_headphones.png'
import safeWriting from '../assets/safe_writing.png'

export default function AudioTextJournal() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Audio & text journal with<br />sentiment analysis
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Capture thoughts through writing or voice recordings to identify emotional patterns, moods, stress signals, and reflection trends over time.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Start Journaling</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Notebook & Headphones Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={journalNotebookHeadphones} alt="Headphones and notebook journal" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: A PRIVATE SPACE FOR EMOTIONAL REFLECTION */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
            A Private Space for Emotional Reflection
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            This journaling experience lets you speak your mind naturally, analyze daily experiences, and build self-awareness through AI-powered sentiment insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Safe Expression Left Column (lg:col-span-6) */}
          <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden min-h-[300px] flex items-end">
            <img src={safeWriting} alt="Writing on paper" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-2xl font-bold mb-3 text-white">Safe Expression</h3>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-md">
                A judgment-free space where your thoughts are protected and secure.
              </p>
            </div>
          </div>

          {/* Sentiment Analysis Card Right Column (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Tab Simulator */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] font-bold text-gray-400 bg-white border border-gray-200 px-3 py-1.5 rounded-full">User Input</span>
                <span className="text-gray-300 text-xs">➔</span>
                <span className="text-[10px] font-bold text-[#2f7a37] bg-[#e8fbe5] border border-green-200 px-3 py-1.5 rounded-full">AI Analysis</span>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs mb-6">
                <p className="text-gray-700 text-xs leading-relaxed italic">
                  "I felt a bit of performance anxiety this morning, but felt much better after taking a walk and completing one core task."
                </p>
              </div>
            </div>

            <div className="bg-[#f0fdf4] border border-green-100/50 rounded-2xl p-5 shadow-2xs flex items-start gap-3">
              <span className="text-base">💡</span>
              <div>
                <h4 className="font-bold text-[#2f7a37] text-xs mb-0.5">Insight</h4>
                <p className="text-[#3a893e] text-xs leading-normal font-medium">You respond well to nature-based grounding.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: 5 CARDS FEATURE GRID */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Write Without Judgment (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gray-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Write Without Judgment</h3>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">A minimal, distraction-free writing interface designed to flow.</p>
            </div>
          </div>

          {/* Card 2: Speak Naturally (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-gray-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Speak Naturally</h3>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">Voice-to-text transcription to capture thoughts as they come.</p>
            </div>
          </div>

          {/* Card 3: Emotional State (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Emotional State</h3>
              
              {/* Pill Tags Selector */}
              <div className="flex gap-1.5 mb-5">
                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">Calm</span>
                <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">Stressed</span>
                <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">Reflected</span>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#f3f4f6" strokeWidth="4" fill="transparent" />
                    <circle cx="28" cy="28" r="24" stroke="#439c47" strokeWidth="4" fill="transparent" 
                            strokeDasharray={150.7} strokeDashoffset={150.7 * (1 - 0.75)} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-gray-900">75%</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Consistency</span>
                  <span className="text-xs font-bold text-gray-850">Growth Tracked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Track Emotional Growth (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2">Track Emotional Growth</h3>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed">Detailed history to help you track your monthly transitions.</p>
              </div>

              {/* Simulated chart illustration */}
              <div className="flex items-end justify-between gap-2.5 h-20 px-2 border-b border-gray-100">
                <div className="w-full bg-green-100 rounded-t-lg h-[40%]"></div>
                <div className="w-full bg-green-150 rounded-t-lg h-[65%]"></div>
                <div className="w-full bg-[#82cf87] rounded-t-lg h-[50%]"></div>
                <div className="w-full bg-[#4bb551] rounded-t-lg h-[80%]"></div>
                <div className="w-full bg-[#2c7c31] rounded-t-lg h-[100%]"></div>
              </div>
            </div>
          </div>

          {/* Card 5: Safe & Personal (lg:col-span-4, highlighted greenish) */}
          <div className="lg:col-span-4 bg-[#f2faf3] border border-green-100/40 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#439c47] flex items-center justify-center mb-6 text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Safe & Personal</h3>
              <p className="text-[#3a893e] text-xs font-semibold leading-relaxed">Private and encrypted for your peace of mind.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE JOURNEY OF UNDERSTANDING */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">The Journey of Understanding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              ✍️
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">1. Write or Record</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Express your thoughts naturally through text or convenient voice recording.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              🔬
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">2. AI Analysis</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">Our system analyzes sentiment tags to evaluate your emotional landscape.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 hover:shadow-md transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#3e9447] flex items-center justify-center font-bold text-sm mb-6">
              📊
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">3. Track Progress</h3>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed">See the big picture of your emotional wellness evolving over time.</p>
          </div>

        </div>
      </section>

      {/* SECTION 5: REAL-TIME INSIGHT, GENTLE GUIDANCE */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Real-Time Insight, Gentle Guidance</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
              Vocal and text-based analysis built to support you, free from scrutiny.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Detects burnout signs early</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <span className="w-5.5 h-5.5 rounded-full bg-green-150 text-[#3e9447] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                <span>Suggests actionable wellness tasks</span>
              </div>
            </div>

            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3.5 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
              Start Writing
            </button>
          </div>

          {/* Right Journal analysis simulation */}
          <div className="lg:col-span-6 bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 md:p-8 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-gray-400 block mb-4 uppercase tracking-wider">JOURNAL ENTRY</span>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs">
                <p className="text-gray-700 text-xs leading-relaxed italic">
                  "I've been feeling mentally exhausted today... the workload is manageable, but I feel restless."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Detection */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs">
                <span className="text-[10px] font-bold text-red-500 block mb-2 uppercase tracking-wider">AI Detection</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-md">Stress: High</span>
                  <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-md">Burnout Risk</span>
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-[#f0fdf4] border border-green-100/50 rounded-2xl p-5 shadow-2xs">
                <span className="text-[10px] font-bold text-[#2f7a37] block mb-2 uppercase tracking-wider">Recommendation</span>
                <p className="text-[#3a893e] text-xs font-semibold leading-normal">
                  Breathing Exercise<br />Take a Short Walk
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

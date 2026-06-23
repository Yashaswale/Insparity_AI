import greenHillsPath from '../assets/green_hills_path.png'
import readinessMen from '../assets/readiness_men.png'

export default function AiRetirementAdvisor() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              AI Retirement Planning<br />Advisor
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              A personalized sanctuary for your future. Navigate your path from today's decisions to a legacy of possibilities with an AI guide that understands your unique life story.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Start Planning</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Pathway Winding Hill Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={greenHillsPath} alt="Pathway winding hills journey" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: MEET YOUR AI ADVISOR */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="bg-[#fcfdfc] border border-gray-100/80 rounded-[32px] p-8 md:p-12 text-center max-w-5xl mx-auto shadow-2xs">
          <span className="text-[#3e9447] text-[10px] font-bold uppercase tracking-wider block mb-3">THE NEXT CHAPTER</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Meet Your AI Retirement Advisor<br />Your Personal Guide For Life's Most Meaningful Transition.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light">
            Planning for retirement shouldn't be a cold calculation of numbers. It's about clarifying the life you want to create. Our AI simplifies complex decisions, helping you visualize your purpose, your passions, and the legacy you wish to leave behind.
          </p>
        </div>
      </section>

      {/* SECTION 3: CORE PLANNING MODULES */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Core Planning Modules</h2>
        
        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Retirement Readiness (Spans large space - lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#fbfdfb] border border-green-100/30 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 items-stretch shadow-2xs">
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-base text-gray-500 block mb-4">📋</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retirement Readiness</h3>
                <p className="text-gray-450 text-xs font-semibold leading-relaxed mb-6">
                  A comprehensive analysis of your current trajectory, identifying gaps and opportunities for early freedom.
                </p>
              </div>
            </div>
            
            {/* Mature Men Image area */}
            <div className="w-full md:w-56 h-36 md:h-auto rounded-2xl overflow-hidden shadow-2xs border border-gray-100 flex-shrink-0 bg-gray-50">
              <img src={readinessMen} alt="Retirement readiness analysis" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Future Lifestyle (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-lg block mb-4">🧭</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Future Lifestyle</h4>
              <p className="text-gray-405 text-xs font-semibold leading-relaxed">Define the day-to-day experiences that will make your retirement truly fulfilling.</p>
            </div>
          </div>

          {/* Savings Goals (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-lg block mb-4">🏦</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Savings Goals</h4>
              <p className="text-gray-405 text-xs font-semibold leading-relaxed">Automated strategies to balance your future wellness without sacrificing today.</p>
            </div>
          </div>

          {/* Family Planning (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-lg block mb-4">👨‍👩‍👧‍👦</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Family Planning</h4>
              <p className="text-gray-405 text-xs font-semibold leading-relaxed">Guidance on critical steps to secure harmony across generations.</p>
            </div>
          </div>

          {/* Long-Term Wellbeing (lg:col-span-4, highlighted greenish) */}
          <div className="lg:col-span-4 bg-[#f2faf3] border border-green-100/40 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-lg block mb-4 text-[#439c47]">💚</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">Long-Term Wellbeing</h3>
              <p className="text-[#3a893e] text-xs font-semibold leading-relaxed">Health and wellness strategies designed for longevity and vitality.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: ASK QUESTIONS ABOUT YOUR FUTURE */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Ask Questions About<br />Your Future
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Our advisor uses deep context to provide nuanced answers to your life's biggest questions.
            </p>
          </div>

          {/* Right Q&A list (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
            
            {/* Q1 */}
            <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition duration-300">
              <span className="font-bold text-gray-900 block mb-2">"When can I realistically retire?"</span>
              <p className="text-gray-450 leading-relaxed font-semibold">Based on your current portfolio growth of 7.2% and lifestyle targets...</p>
            </div>

            {/* Q2 */}
            <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition duration-300">
              <span className="font-bold text-gray-900 block mb-2">"What lifestyle can I afford?"</span>
              <p className="text-gray-455 leading-relaxed font-semibold">We've modeled three scenarios ranging from 'Minimalist Living' to 'Global Travel'...</p>
            </div>

            {/* Q3 */}
            <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition duration-300">
              <span className="font-bold text-gray-900 block mb-2">"Should I downsize my home next year?"</span>
              <p className="text-gray-455 leading-relaxed font-semibold">Analyzing current market trends in your area and your long-term health needs...</p>
            </div>

            {/* Q4 */}
            <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-5 hover:shadow-xs transition duration-300">
              <span className="font-bold text-gray-900 block mb-2">"How can I better protect my legacy?"</span>
              <p className="text-gray-455 leading-relaxed font-semibold">By restructuring your trust and adjusting your gifting strategy today...</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

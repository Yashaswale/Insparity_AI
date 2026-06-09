import familyMoving from '../assets/family_moving.png'
import scenarioEarly from '../assets/scenario_early.png'
import scenarioMid from '../assets/scenario_mid.png'
import scenarioMature from '../assets/scenario_mature.png'
import scenarioRetired from '../assets/scenario_retired.png'

export default function PensionGuidance() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO & PROGRESS ROADMAP */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Pension, Savings &<br />Investment Guidance
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Learn how pensions, savings, and investments work together to support your future goals, retirement lifestyle, and long-term financial wellbeing.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Review My Financial Journey</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Progress Roadmap Tracker (Right - lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-gray-100/80 rounded-3xl p-6 md:p-8 flex items-center justify-center shadow-xs">
            <div className="flex items-center w-full max-w-md">
              {/* Node 1 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  💵
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Income</span>
              </div>

              {/* Line 1 */}
              <div className="h-[2px] bg-[#439c47] flex-1 -mt-4"></div>

              {/* Node 2 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  🛡️
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Savings</span>
              </div>

              {/* Line 2 */}
              <div className="h-[2px] bg-[#439c47] flex-1 -mt-4"></div>

              {/* Node 3 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  📈
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Investments</span>
              </div>

              {/* Line 3 */}
              <div className="h-[2px] bg-gray-200 flex-1 -mt-4"></div>

              {/* Node 4 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 text-gray-450 flex items-center justify-center font-bold text-xs shadow-2xs">
                  🏡
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Retirement</span>
              </div>

              {/* Line 4 */}
              <div className="h-[2px] bg-gray-200 flex-1 -mt-4"></div>

              {/* Node 5 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 text-gray-450 flex items-center justify-center font-bold text-xs shadow-2xs">
                  🌟
                </div>
                <span className="text-[9px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BUILDING A SECURE FUTURE STARTS WITH UNDERSTANDING */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Building A Secure Future Starts<br />With Understanding
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              The world of finance can often feel like an impenetrable maze of jargon and complex numbers. At Insparity AI, we believe clarity is the foundation of growth. By simplifying the core concepts of pensions, savings, and investments, we empower you to take intentional steps toward a life of freedom and security. Our guidance is designed to be your personal financial sanctuary, where complex financial health is translated into a roadmap you can trust.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-100">
            <img src={familyMoving} alt="Family inside new home" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 3: DIFFERENT PEOPLE. DIFFERENT FINANCIAL JOURNEYS. */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Different People. Different Financial Journeys.</h2>
        
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Scenario 1: Early Career */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300">
            <div className="h-44 w-full overflow-hidden border-b border-gray-100">
              <img src={scenarioEarly} alt="Early career steps" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[9px] font-bold text-gray-400 block mb-1.5 uppercase">SCENARIO 01</span>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Early Career</h4>
              <p className="text-gray-450 text-[10px] leading-relaxed">Building foundations and establishing long-term habits.</p>
            </div>
          </div>

          {/* Scenario 2: Mid-Career */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300">
            <div className="h-44 w-full overflow-hidden border-b border-gray-100">
              <img src={scenarioMid} alt="Mid career desk" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[9px] font-bold text-gray-400 block mb-1.5 uppercase">SCENARIO 02</span>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Mid-Career</h4>
              <p className="text-gray-455 text-[10px] leading-relaxed">Optimizing contributions and protecting assets.</p>
            </div>
          </div>

          {/* Scenario 3: Future Retiree */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300">
            <div className="h-44 w-full overflow-hidden border-b border-gray-100">
              <img src={scenarioMature} alt="Future retiree couple" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[9px] font-bold text-gray-400 block mb-1.5 uppercase">SCENARIO 03</span>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Future Retiree</h4>
              <p className="text-gray-455 text-[10px] leading-relaxed">Refining strategy and preparing for transition.</p>
            </div>
          </div>

          {/* Scenario 4: Retired */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300">
            <div className="h-44 w-full overflow-hidden border-b border-gray-100">
              <img src={scenarioRetired} alt="Retired senior" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[9px] font-bold text-gray-400 block mb-1.5 uppercase">SCENARIO 04</span>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Retired</h4>
              <p className="text-gray-455 text-[10px] leading-relaxed">Managing income drawdown and enjoying freedom.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: EXPLORE COMMON FINANCIAL QUESTIONS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Explore Common Financial Questions</h2>
        
        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          
          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">What is a Pension?</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">A long-term savings plan with tax relief to provide income later in life.</p>
          </div>

          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">Why is Saving Important?</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">Savings provide a safety net for emergencies and capital for short-term goals.</p>
          </div>

          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">What is Investing?</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">Putting your money into assets like stocks or bonds with the hope of growth.</p>
          </div>

          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">Saving vs Investing</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">Understanding the balance between immediate security and long-term potential.</p>
          </div>

          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">How Much Should I Save?</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">Personalized guidelines based on your income, age, and future aspirations.</p>
          </div>

          <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition duration-300">
            <h4 className="font-bold text-gray-900 text-xs mb-2 leading-tight">When Should I Start?</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed">The power of compounding means the best time to start is usually today.</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-[#f5fbf6] border-t border-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Left Column (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div 
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <img src="/Insparity AI logo.png" alt="Insparity AI" className="h-9 w-auto object-contain" />
            </div>
            
            <p className="text-gray-500 text-xs leading-relaxed mb-6 max-w-[240px]">
              Empowering mental wellness through ethical AI and trauma-informed guidance.
            </p>

            {/* Social media circle/box buttons */}
            <div className="flex gap-2 mb-8">
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-gray-150 flex items-center justify-center text-gray-500 hover:text-[#3e9447] hover:border-[#3e9447] transition">
                <span className="text-sm">✉</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-gray-150 flex items-center justify-center text-gray-500 hover:text-[#3e9447] hover:border-[#3e9447] transition">
                <span className="text-sm">🔗</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-gray-150 flex items-center justify-center text-gray-500 hover:text-[#3e9447] hover:border-[#3e9447] transition">
                <span className="text-sm">📞</span>
              </a>
            </div>
          </div>

          {/* App download badges */}
          <div className="space-y-2 max-w-[150px]">
            {/* App Store Badge */}
            <a href="#" className="bg-black hover:bg-gray-950 text-white rounded-lg px-3 py-1.5 flex items-center gap-2 transition no-underline">
              <span className="text-xl"></span>
              <div className="leading-tight text-left">
                <span className="text-[7px] text-gray-300 block font-light uppercase tracking-wider">Download on the</span>
                <span className="text-[10px] font-bold block">App Store</span>
              </div>
            </a>
            
            {/* Google Play Badge */}
            <a href="#" className="bg-black hover:bg-gray-950 text-white rounded-lg px-3 py-1.5 flex items-center gap-2 transition no-underline">
              <span className="text-lg">▶</span>
              <div className="leading-tight text-left">
                <span className="text-[7px] text-gray-300 block font-light uppercase tracking-wider">Get it on</span>
                <span className="text-[10px] font-bold block">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Directory Grid Columns (lg:col-span-9) */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Personal Development */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-5">
              Personal Development & ADHD
            </h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium list-none p-0">
              {/* Typo preserved: ADHA-Specific */}
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('adhd-learning-pathways'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">ADHA-Specific Learning Pathways</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('executive-function-coach'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">AI Executive Function Coach</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('focus-tools'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Focus Tools, Habit Stacking, Time-Blocking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('personalised-assessments'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Personalised AI Assessments</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('behavioural-pattern-tracking'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Behavioural Pattern Tracking Over Time</a></li>
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Neurodiversity-Affirming Content Library</a></li>
            </ul>
          </div>

          {/* Column 2: Trauma & Mental Wellness */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-5">
              Trauma & Mental Wellness
            </h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium list-none p-0">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('trauma-informed-learning'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Trauma-Informed Learning</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('ai-wellness-coach'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">AI Wellness Coach</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('audio-text-journal'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Audio & Text Journal With Sentiment Analysis</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('grounding-exercises'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Grounding & Regulation Exercises</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('crisis-protocol'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Crisis-Aware Escalation Protocol</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('emdr-somatic-guides'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">EMDR, Somatic Therapy Guides</a></li>
            </ul>
          </div>

          {/* Column 3: Retirement & Life Planning */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-5">
              Retirement & Life Planning
            </h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium list-none p-0">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('ai-retirement-advisor'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">AI Retirement Planning Advisor</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('pension-guidance'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Pension, Savings & Investment Guidance</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('life-transition-coaching'); }} className="hover:text-[#3e9447] transition-colors leading-relaxed block">Life Transition Coaching</a></li>
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Personalised Financial Scenario Modelling</a></li>
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Legacy Planning & Estate Conversations</a></li>
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Senior Wellbeing & Cognitive Health Tools</a></li>
            </ul>
          </div>

          {/* Column 4: Other */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-5">
              Other
            </h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium list-none p-0">
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Podcast</a></li>
              <li><a href="#" className="hover:text-[#3e9447] transition-colors leading-relaxed block">Contact Support</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}

import assessmentDiverse from '../assets/assessment_diverse.png'

export default function PersonalisedAssessments() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HEADER & TIMELINE */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Personalised AI Assessments
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Complete AI-powered assessments after each module to reinforce learning, unlock new content, track progress, and build confidence as you move through your learning journey.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none">
              <span className="text-xs tracking-wide">Start Assessment</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                ➔
              </span>
            </button>
          </div>

          {/* Horizontal Roadmap Tracker (Right) */}
          <div className="lg:col-span-5 bg-gray-50/50 border border-gray-100/50 rounded-3xl p-6 md:p-8 flex items-center justify-center shadow-xs">
            <div className="flex items-center w-full max-w-md">
              {/* Node 1 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  ✓
                </div>
                <span className="text-[10px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Module 1</span>
              </div>

              {/* Line 1 */}
              <div className="h-[3px] bg-[#439c47] flex-1 -mt-4"></div>

              {/* Node 2 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-[#439c47] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  📝
                </div>
                <span className="text-[10px] font-bold text-gray-900 mt-2 block whitespace-nowrap">Assessment</span>
              </div>

              {/* Line 2 */}
              <div className="h-[3px] bg-gray-200 flex-1 -mt-4"></div>

              {/* Node 3 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm shadow-2xs">
                  📖
                </div>
                <span className="text-[10px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Module 2</span>
              </div>

              {/* Line 3 */}
              <div className="h-[3px] bg-gray-200 flex-1 -mt-4"></div>

              {/* Node 4 */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm shadow-2xs">
                  🔒
                </div>
                <span className="text-[10px] font-bold text-gray-500 mt-2 block whitespace-nowrap">Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: ROADMAP (LEFT) & LEARNING STAGE (RIGHT) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Your Roadmap (Left - lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[32px] p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Roadmap</h2>
              
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="bg-gray-50 border border-gray-100/60 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">Module 1: ADHD Foundations</h4>
                      <span className="text-[10px] text-gray-400 block mt-0.5">Completed on Mar 12, 2026</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-950">92%</span>
                </div>

                {/* Module 2 */}
                <div className="bg-gray-50 border border-gray-100/60 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">Module 2: Neuro-Chemical Balance</h4>
                      <span className="text-[10px] text-gray-400 block mt-0.5">Completed on Oct 24, 2026</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-950">88%</span>
                </div>

                {/* Module 3 */}
                <div className="bg-gray-50 border border-gray-100/60 rounded-2xl p-5">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm">
                        ⟳
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">Module 3: Focus Patterns</h4>
                        <span className="text-[10px] text-[#439c47] font-semibold block mt-0.5">In Progress</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-950">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#439c47] h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-gray-50/50 border border-gray-100/40 rounded-2xl p-4 flex items-center justify-between gap-4 opacity-65">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 border border-gray-200 flex items-center justify-center font-bold text-sm">
                      🔒
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-500 text-sm leading-tight">Module 4: Social Mastery</h4>
                      <span className="text-[10px] text-gray-400 block mt-0.5">Locked • Complete previous assessment</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Learning Stage (Right - lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Stage</h2>
              
              <div className="space-y-6 relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                {/* Stage 1 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-[24px] h-[24px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 z-10 -ml-[19px]">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-sm leading-tight">Advanced Learner</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">75-100% Mastery</span>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#e8fbe5] border-2 border-[#439c47] flex items-center justify-center text-xs font-bold text-[#439c47] z-10 -ml-[19px]">
                    🎯
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3e9447] text-sm leading-tight">Practitioner</h4>
                    <span className="text-[10px] text-[#3e9447] font-semibold block mt-0.5">50-75% - Current Stage</span>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#439c47] text-white flex items-center justify-center text-[10px] font-bold z-10 -ml-[19px]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm leading-tight">Explorer</h4>
                    <span className="text-[10px] text-gray-500 block mt-0.5">25-50% - Achieved</span>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex items-start gap-4 relative">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#439c47] text-white flex items-center justify-center text-[10px] font-bold z-10 -ml-[19px]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm leading-tight">Beginner</h4>
                    <span className="text-[10px] text-gray-500 block mt-0.5">0-25% - Achieved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: ROADMAP FLOW ICONS ROW */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-150 flex items-center justify-center text-lg mx-auto mb-4">
              📖
            </div>
            <h4 className="font-bold text-gray-900 text-xs leading-snug">Complete Module</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-150 flex items-center justify-center text-lg mx-auto mb-4">
              🔒
            </div>
            <h4 className="font-bold text-gray-900 text-xs leading-snug">Unlock Assessment</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-150 flex items-center justify-center text-lg mx-auto mb-4">
              📝
            </div>
            <h4 className="font-bold text-gray-900 text-xs leading-snug">Answer Questions</h4>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-150 flex items-center justify-center text-lg mx-auto mb-4">
              📊
            </div>
            <h4 className="font-bold text-gray-900 text-xs leading-snug">Receive Results</h4>
          </div>

          {/* Card 5 (Active Highlighted) */}
          <div className="bg-[#439c47] text-white border border-[#439c47] rounded-2xl p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-lg mx-auto mb-4">
              ➔
            </div>
            <h4 className="font-bold text-white text-xs leading-snug">Next Module</h4>
          </div>

        </div>
      </section>


      {/* SECTION 4: DIVERSE ASSESSMENT FORMATS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          Diverse Assessment Formats
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Illustration */}
          <div className="lg:col-span-5 h-[280px] md:h-[320px] rounded-3xl overflow-hidden shadow-xs border border-gray-150 flex-shrink-0">
            <img src={assessmentDiverse} alt="Diverse formats" className="w-full h-full object-cover" />
          </div>

          {/* Right Cards Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Format 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm flex-shrink-0">
                ⌥
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Multiple Choice</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Quick conceptual checks.</p>
              </div>
            </div>

            {/* Format 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm flex-shrink-0">
                ⚙
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Scenario-Based</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Apply knowledge to real-life situations.</p>
              </div>
            </div>

            {/* Format 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm flex-shrink-0">
                ✍
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Reflection Questions</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Deep dives into your personal growth.</p>
              </div>
            </div>

            {/* Format 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#439c47]/10 text-[#439c47] flex items-center justify-center font-bold text-sm flex-shrink-0">
                🧩
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Interactive Activities</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Gamified drag-and-drop challenges.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

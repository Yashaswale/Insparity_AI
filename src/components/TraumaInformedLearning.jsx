import supportiveHands from '../assets/supportive_hands.png'
import wellnessExperts from '../assets/wellness_experts.png'
import overwhelmedWoman from '../assets/overwhelmed_woman.png'
import zenStones from '../assets/zen_stones.png'

export default function TraumaInformedLearning() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Trauma-Informed<br />Learning Courses
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Explore expert-led wellness courses focused on emotional healing, self-awareness, grounding practices, nervous system support, and personal growth in a safe and supportive environment.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#439c47] hover:bg-[#38843c] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition duration-200 cursor-pointer shadow-md border-none group">
              <span className="text-xs tracking-wide">Explore Courses</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Supportive Hands Image (Right) */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-50 flex items-center justify-center bg-gray-50/20">
            <img src={supportiveHands} alt="Supportive hands comfort" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT THESE COURSES HELP WITH */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50 text-center">
        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block mb-6">WHAT THESE COURSES HELP WITH</span>
        
        {/* Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Emotional Awareness</span>
          <span className="bg-[#f2faf3] border border-green-100 rounded-full px-5 py-2.5 text-xs font-semibold text-[#3e9447]">Stress Reduction</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Feeling Grounded</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Trauma Recovery</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Emotional Regulation</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Nervous System Support</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Self-Reflection</span>
          <span className="bg-gray-50 border border-gray-150 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700">Personal Growth</span>
        </div>
      </section>

      {/* SECTION 3: OUTCOME/BENEFIT CARDS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Guided Emotional Awareness (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-500">
                📝
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Guided Emotional Awareness</h3>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">Reflecting on your past experiences, triggers, and values.</p>
            </div>
          </div>

          {/* Card 2: Practical Healing Exercises (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-500">
                ⚙️
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Practical Healing Exercises</h3>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">Assessments and planning tools designed to empower you.</p>
            </div>
          </div>

          {/* Card 3: AI-Powered Personalized Guidance (lg:col-span-4, highlighted greenish) */}
          <div className="lg:col-span-4 bg-[#f2faf3] border border-green-100/40 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#439c47] flex items-center justify-center mb-6 text-white text-xs">
                💚
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">AI-Powered Personalized Guidance</h3>
              <p className="text-[#3a893e] text-xs font-semibold leading-relaxed">Intelligent recommendations based on your current emotional state.</p>
            </div>
          </div>

          {/* Card 4: Self-Paced Wellness Programs (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-500">
                ⏱️
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Self-Paced Wellness Programs</h3>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">Move through lessons at your own pace, set deadlines, and review your progress.</p>
            </div>
          </div>

          {/* Card 5: Progress & Reflection Tracking (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-gray-100/80 rounded-3xl p-7 hover:shadow-md transition duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Progress & Reflection Tracking</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#f3f4f6" strokeWidth="4" fill="transparent" />
                    <circle cx="28" cy="28" r="24" stroke="#439c47" strokeWidth="4" fill="transparent" 
                            strokeDasharray={150.7} strokeDashoffset={150.7 * (1 - 0.78)} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-gray-900">78%</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Progress Active</span>
                  <span className="text-xs font-bold text-gray-850">Track your journey</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: LEARN, HEAL & REFLECT AT YOUR OWN PACE */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Learn, Heal & Reflect at Your Own Pace</h2>
            <p className="text-gray-550 text-sm leading-relaxed max-w-xl">Explore video and somatic feedback with expert-led lessons.</p>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-sm font-semibold text-[#439c47] hover:underline">View all</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 w-full overflow-hidden border-b border-gray-100">
                <img src={overwhelmedWoman} alt="Emotional intelligence course" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-450 uppercase">Sarah Devia</span>
                  <span className="text-[10px] font-bold text-[#439c47]">⭐ 4.9</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">Emotional Intelligence 101</h4>
                <p className="text-gray-405 text-[10px] leading-relaxed mb-4">Understanding stress cycles, somatic responses, and recovery.</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold mb-4">
                  <span>🎬 15 Lessons</span>
                  <span>⏱️ 3 Hrs</span>
                </div>
                <div className="flex items-end gap-2.5">
                  <span className="text-xs text-gray-400 line-through font-medium">AUD 1200.00</span>
                  <span className="text-sm font-bold text-[#439c47]">AUD 250.00</span>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-full cursor-pointer transition">Detail</button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 rounded-full cursor-pointer transition border-none">Enroll</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 w-full overflow-hidden border-b border-gray-100">
                <img src={wellnessExperts} alt="Healing relations course" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-450 uppercase">Sarah Devia</span>
                  <span className="text-[10px] font-bold text-[#439c47]">⭐ 4.9</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">Emotional Intelligence 101</h4>
                <p className="text-gray-405 text-[10px] leading-relaxed mb-4">Understanding stress cycles, somatic responses, and recovery.</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold mb-4">
                  <span>🎬 15 Lessons</span>
                  <span>⏱️ 3 Hrs</span>
                </div>
                <div className="flex items-end gap-2.5">
                  <span className="text-xs text-gray-400 line-through font-medium">AUD 1200.00</span>
                  <span className="text-sm font-bold text-[#439c47]">AUD 250.00</span>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-full cursor-pointer transition">Detail</button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 rounded-full cursor-pointer transition border-none">Enroll</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 w-full overflow-hidden border-b border-gray-100">
                <img src={zenStones} alt="Mindfulness stones course" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-450 uppercase">Sarah Devia</span>
                  <span className="text-[10px] font-bold text-[#439c47]">⭐ 4.9</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">Emotional Intelligence 101</h4>
                <p className="text-gray-405 text-[10px] leading-relaxed mb-4">Understanding stress cycles, somatic responses, and recovery.</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold mb-4">
                  <span>🎬 15 Lessons</span>
                  <span>⏱️ 3 Hrs</span>
                </div>
                <div className="flex items-end gap-2.5">
                  <span className="text-xs text-gray-400 line-through font-medium">AUD 1200.00</span>
                  <span className="text-sm font-bold text-[#439c47]">AUD 250.00</span>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-full cursor-pointer transition">Detail</button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 rounded-full cursor-pointer transition border-none">Enroll</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 w-full overflow-hidden border-b border-gray-100">
                <img src={overwhelmedWoman} alt="Stress recovery course" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-450 uppercase">Sarah Devia</span>
                  <span className="text-[10px] font-bold text-[#439c47]">⭐ 4.9</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">Emotional Intelligence 101</h4>
                <p className="text-gray-405 text-[10px] leading-relaxed mb-4">Understanding stress cycles, somatic responses, and recovery.</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold mb-4">
                  <span>🎬 15 Lessons</span>
                  <span>⏱️ 3 Hrs</span>
                </div>
                <div className="flex items-end gap-2.5">
                  <span className="text-xs text-gray-400 line-through font-medium">AUD 1200.00</span>
                  <span className="text-sm font-bold text-[#439c47]">AUD 250.00</span>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-full cursor-pointer transition">Detail</button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 rounded-full cursor-pointer transition border-none">Enroll</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WELLNESS SUPPORT TOOLS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 md:py-24 border-t border-gray-50 text-center">
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

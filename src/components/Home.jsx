import { useState } from 'react'
import zenStones from '../assets/zen_stones.png'

// New imports
import marcusProfile from '../assets/marcus_profile.png'
import sarahProfile from '../assets/sarah_profile.png'
import courseStress from '../assets/course_stress.png'
import courseComfort from '../assets/course_comfort.png'
import courseDesk from '../assets/course_desk.png'
import CalmSoundsCard from './CalmSoundsCard'

export default function Home({
  activeAmbientSound,
  setActiveAmbientSound,
  isAmbientPlaying,
  setIsAmbientPlaying,
  ambientVolume,
  setAmbientVolume
}) {
  // Interactive States
  const [selectedMood, setSelectedMood] = useState('Growing')
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(14)
  const [chatMessageInput, setChatMessageInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'coach',
      text: "I noticed you mentioned feeling 'tightness' in your chest today. Would you like to try a 2-minute box breathing exercise together?"
    },
    {
      sender: 'user',
      text: "Yes, I think that would help. I've had a very stressful morning at work."
    },
    {
      sender: 'coach',
      text: "I'm sorry it's been a tough morning. You're doing the right thing by taking this moment for yourself. Let's start..."
    }
  ])

  const handleSendChatMessage = (e) => {
    e.preventDefault()
    if (!chatMessageInput.trim()) return
    setChatMessages([
      ...chatMessages,
      { sender: 'user', text: chatMessageInput.trim() }
    ])
    setChatMessageInput('')
  }

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-green-100 selection:text-green-800">

      {/* SECTION 1: HERO SECTION */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 relative">
        <div
          className="relative rounded-[32px] overflow-hidden flex items-center bg-cover bg-center min-h-[580px] lg:min-h-[660px] pb-28 lg:pb-32"
          style={{ backgroundImage: "url('/Hero_img.png')" }}
        >
          {/* Soft overlay to ensure readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Floating Coach Badges
          <div className="absolute top-[30%] left-[34%] bg-[#1e1b18]/70 backdrop-blur-xs text-white border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg hidden md:flex select-none z-10">
            <span className="w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center text-[10px] font-bold">A</span>
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 -ml-1.5">
              <img src={sarahProfile} className="w-full h-full object-cover" alt="badge" />
            </div>
          </div>
          <div className="absolute bottom-[40%] left-[19%] w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-lg hidden md:block select-none z-10">
            <img src={marcusProfile} className="w-full h-full object-cover" alt="badge" />
          </div> */}

          <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 px-6 md:px-16 py-12">
            {/* Left Content */}
            <div className="text-white max-w-2xl text-left select-none">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.12] mb-6 tracking-tight">
                Your Whole-Life<br />Wellness Platform
              </h1>
              <p className="text-white/90 text-sm md:text-[17px] font-light leading-relaxed max-w-xl">
                Personal Development-ADHD Trauma Care Retirement Planning AI Coaching -Kids & Seniors
              </p>
            </div>

            {/* Right Content - Calm Sounds Card */}
            {/* <div className="shrink-0 relative z-10 self-center">
              <CalmSoundsCard
                activeAmbientSound={activeAmbientSound}
                setActiveAmbientSound={setActiveAmbientSound}
                isAmbientPlaying={isAmbientPlaying}
                setIsAmbientPlaying={setIsAmbientPlaying}
                ambientVolume={ambientVolume}
                setAmbientVolume={setAmbientVolume}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Overlapping Category Boxes */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 -mt-24 pb-8 relative z-20 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Box 1: Personal Development */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl hover:translate-y-[-4px] transition duration-300 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-2 text-[#3e9447] mb-3">
              <span className="material-icons text-sm select-none">explore</span>
              <h4 className="font-bold text-xs uppercase tracking-wider">Personal Development</h4>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-none p-0 m-0 leading-relaxed">
              <li>• Personalised AI Assessments</li>
              <li>• AI Executive Function Coach</li>
              <li>• Focus tools, habit stacking, time-blocking</li>
            </ul>
          </div>

          {/* Box 2: ADHD */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl hover:translate-y-[-4px] transition duration-300 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-2 text-[#3e9447] mb-3">
              <span className="material-icons text-sm select-none">flash_on</span>
              <h4 className="font-bold text-xs uppercase tracking-wider">ADHD</h4>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-none p-0 m-0 leading-relaxed">
              <li>• ADHD-specific learning pathways</li>
              <li>• Behavioural pattern tracking over time</li>
            </ul>
          </div>

          {/* Box 3: Mental Wellness */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl hover:translate-y-[-4px] transition duration-300 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-2 text-[#3e9447] mb-3">
              <span className="material-icons text-sm select-none">spa</span>
              <h4 className="font-bold text-xs uppercase tracking-wider">Mental Wellness</h4>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-none p-0 m-0 leading-relaxed">
              <li>• AI Wellness Coach</li>
              <li>• Audio & text journal with sentiment analysis</li>
            </ul>
          </div>

          {/* Box 4: Trauma */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl hover:translate-y-[-4px] transition duration-300 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-2 text-[#3e9447] mb-3">
              <span className="material-icons text-sm select-none">shield</span>
              <h4 className="font-bold text-xs uppercase tracking-wider">Trauma</h4>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-none p-0 m-0 leading-relaxed">
              <li>• Trauma-informed learning</li>
              <li>• Grounding & regulation exercises</li>
              <li>• Crisis-aware escalation protocol</li>
              <li>• EMDR, somatic therapy guides</li>
            </ul>
          </div>

          {/* Box 5: Retirement & Life plan */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl hover:translate-y-[-4px] transition duration-300 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-2 text-[#3e9447] mb-3">
              <span className="material-icons text-sm select-none">elderly</span>
              <h4 className="font-bold text-xs uppercase tracking-wider">Retirement & Life plan</h4>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-none p-0 m-0 leading-relaxed">
              <li>• AI Retirement Planning Advisor</li>
              <li>• Pension, savings & investment guidance</li>
              <li>• Personalised financial scenario modelling</li>
              <li>• Legacy planning & estate conversations</li>
              <li>• Senior wellbeing & cognitive health tools</li>
            </ul>
          </div>
        </div>
      </section>


      {/* SECTION 2: CHOOSE THE COACH THAT UNDERSTANDS YOUR NEEDS */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-4">
            Choose The Coach That Understands Your Needs
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Connect with specialized AI companions designed with empathy and clinical insight to support your unique journey towards personal development, wellness and growth.
          </p>
        </div>

        {/* 5-Column Grid with Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {/* Card 1: AI Nadeem */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-5 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition duration-300">
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-5">
                <img src="/Agents/Agent1.png" className="w-full h-full object-cover" alt="AI Nadeem" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-1">AI Nadeem</h3>
              <p className="text-gray-400 text-xs mb-4">Personal Development Coach</p>

              <div className="bg-[#f0fdf4] text-[#2f7a37] text-[11px] font-medium px-4 py-2.5 rounded-xl w-full mb-6 min-h-[54px] flex items-center justify-center leading-normal">
                Adults processing trauma, anxiety, grief
              </div>

              <ul className="text-left text-xs text-gray-600 space-y-3 mb-8 w-full pl-5 list-disc leading-relaxed">
                <li>Goal setting and progress tracking</li>
                <li>Habit building and accountability</li>
                <li>Mindset and confidence coaching</li>
                <li>Daily reflection and growth plans</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#3e9447] hover:bg-[#2c6e33] text-white text-xs font-semibold py-3 px-4 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
              <span className="material-icons text-sm select-none">chat</span>
              Chat Now
            </button>
          </div>

          {/* Card 2: AI Kabeer */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-5 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition duration-300">
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-5">
                <img src="/Agents/Agent2.png" className="w-full h-full object-cover" alt="AI Kabeer" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-1">AI Kabeer</h3>
              <p className="text-gray-400 text-xs mb-4">Trauma, ADHD & Focus Coach</p>

              <div className="bg-[#f0fdf4] text-[#2f7a37] text-[11px] font-medium px-4 py-2.5 rounded-xl w-full mb-6 min-h-[54px] flex items-center justify-center leading-normal">
                Adults & teens with ADHD or executive function needs
              </div>

              <ul className="text-left text-xs text-gray-600 space-y-3 mb-8 w-full pl-5 list-disc leading-relaxed">
                <li>ADHD focus productivity coaching</li>
                <li>Audio/text journal reflections</li>
                <li>Grounding and coping exercises</li>
                <li>Task planning and habit support</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#f0fdf4] hover:bg-[#e2fbe7] text-[#2f7a37] text-xs font-semibold py-3 px-4 rounded-full transition duration-200 cursor-pointer border-none shadow-xs">
              <span className="material-icons text-sm select-none">chat</span>
              Chat Now
            </button>
          </div>

          {/* Card 3: AI hakeem */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-5 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition duration-300">
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-5">
                <img src="/Agents/Agent3.png" className="w-full h-full object-cover" alt="AI hakeem" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-1">AI hakeem</h3>
              <p className="text-gray-400 text-xs mb-4">Retirement & Wellness AI</p>

              <div className="bg-[#f0fdf4] text-[#2f7a37] text-[11px] font-medium px-4 py-2.5 rounded-xl w-full mb-6 min-h-[54px] flex items-center justify-center leading-normal">
                For adults 50+ and retirees seeking financial confidence, wellbeing, and life guidance.
              </div>

              <ul className="text-left text-xs text-gray-600 space-y-3 mb-8 w-full pl-5 list-disc leading-relaxed">
                <li>Retirement & pension planning</li>
                <li>Financial guidance</li>
                <li>Daily wellbeing support</li>
                <li>Legacy planning</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#f0fdf4] hover:bg-[#e2fbe7] text-[#2f7a37] text-xs font-semibold py-3 px-4 rounded-full transition duration-200 cursor-pointer border-none shadow-xs">
              <span className="material-icons text-sm select-none">chat</span>
              Chat Now
            </button>
          </div>

          {/* Card 4: Bu Ahmad */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-5 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition duration-300">
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-5">
                <img src="/Agents/Agent4.png" className="w-full h-full object-cover" alt="Bu Ahmad" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-1">Bu Ahmad</h3>
              <p className="text-gray-400 text-xs mb-4">Children's Emotional AI</p>

              <div className="bg-[#f0fdf4] text-[#2f7a37] text-[11px] font-medium px-4 py-2.5 rounded-xl w-full mb-6 min-h-[54px] flex items-center justify-center leading-normal">
                Children 6–16 and their parents
              </div>

              <ul className="text-left text-xs text-gray-600 space-y-3 mb-8 w-full pl-5 list-disc leading-relaxed">
                <li>Age-adapted emotional check-ins</li>
                <li>Trauma-safe storytelling</li>
                <li>ADHD-friendly focus games</li>
                <li>Parent-facing insight reports</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#f0fdf4] hover:bg-[#e2fbe7] text-[#2f7a37] text-xs font-semibold py-3 px-4 rounded-full transition duration-200 cursor-pointer border-none shadow-xs">
              <span className="material-icons text-sm select-none">chat</span>
              Chat Now
            </button>
          </div>

          {/* Card 5: The Captain */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-5 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition duration-300">
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-5">
                <img src="/Agents/Agent5.png" className="w-full h-full object-cover" alt="The Captain" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-1">The Captain</h3>
              <p className="text-gray-400 text-xs mb-4">Leadership & Performance AI</p>

              <div className="bg-[#f0fdf4] text-[#2f7a37] text-[11px] font-medium px-4 py-2.5 rounded-xl w-full mb-6 min-h-[54px] flex items-center justify-center leading-normal">
                For professionals leading teams, projects, and business growth.
              </div>

              <ul className="text-left text-xs text-gray-600 space-y-3 mb-8 w-full pl-5 list-disc leading-relaxed">
                <li>Leadership coaching</li>
                <li>Team management support</li>
                <li>Decision-making guidance</li>
                <li>Conflict resolution strategies</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#f0fdf4] hover:bg-[#e2fbe7] text-[#2f7a37] text-xs font-semibold py-3 px-4 rounded-full transition duration-200 cursor-pointer border-none shadow-xs">
              <span className="material-icons text-sm select-none">chat</span>
              Chat Now
            </button>
          </div>

        </div>
      </section>


      {/* SECTION 3: COMPREHENSIVE SUPPORT FOR EVERY STAGE OF LIFE */}
      <section className="bg-gray-50/50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-4">
              Comprehensive support for every stage of life
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Intelligent paths designed to guide you through life's most significant transitions.
            </p>
          </div>

          {/* Asymmetrical Grid Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

            {/* Card Left: Personal Dev & ADHD (lg:col-span-4) */}
            <div className="lg:col-span-4 bg-[#f4fdf5]/60 border border-green-100/50 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                  Efficiency
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                  Personal<br />Development & ADHD
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Habit stacking and neurodiverse-friendly focus tools to master your attention.
                </p>
              </div>

              {/* Progress Card */}
              <div className="bg-white border border-gray-100/80 rounded-2xl p-4 shadow-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-gray-900">Today's Focus Score</span>
                  <span className="text-[11px] font-bold text-gray-900">88%</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#439c47] h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            {/* Card Right: Mental Wellness & Trauma (lg:col-span-8) */}
            <div className="lg:col-span-8 bg-[#f4fdf5]/80 border border-green-100/50 rounded-[28px] p-8 flex flex-col md:flex-row justify-between gap-6 items-stretch hover:shadow-md transition duration-300">
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
                    Recovery
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                    Mental Wellness & Trauma
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Science-backed grounding techniques and private AI-guided journaling to process emotions safely.
                  </p>

                  {/* Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-green-100/80 text-[#3e9447] flex items-center justify-center font-bold text-xs">✓</span>
                      <span className="font-medium">Emotional grounding tools</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-green-100/80 text-[#3e9447] flex items-center justify-center font-bold text-xs">✓</span>
                      <span className="font-medium">Somatic awareness guides</span>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#3e9447] transition-colors group">
                  Explore Healing
                  <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
                </a>
              </div>

              {/* Sand Stones Image Area */}
              <div className="w-full md:w-64 h-56 md:h-auto rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                <img
                  src={zenStones}
                  alt="Zen stones"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Bottom Card: Retirement & Life Planning */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16 justify-between hover:shadow-md transition duration-300">

            {/* Left Box: Milestone Modeling Card */}
            <div className="w-full md:w-[360px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex-shrink-0">
              <h4 className="text-[13px] font-bold text-gray-900 mb-4">Milestone Scenario Modeling</h4>

              <div className="space-y-4">
                {/* Milestone 1 */}
                <div>
                  <div className="flex justify-between items-center text-[11px] font-medium text-gray-600 mb-1.5">
                    <span>Lifestyle Upgrade</span>
                    <span className="text-[#3e9447] font-bold">+15%</span>
                  </div>
                  <div className="w-full bg-gray-50 h-2.5 rounded-full overflow-hidden border border-gray-100">
                    <div className="bg-[#439c47] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div>
                  <div className="flex justify-between items-center text-[11px] font-medium text-gray-600 mb-1.5">
                    <span>Early Transition</span>
                    <span className="text-red-500 font-bold">-8%</span>
                  </div>
                  <div className="w-full bg-gray-50 h-2.5 rounded-full overflow-hidden border border-gray-100">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Content & Action */}
            <div className="flex-1">
              <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-3">
                Future
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                Retirement & Life Planning
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
                Sophisticated pension guidance and lifestyle scenario modeling for your next chapter.
              </p>

              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-6 rounded-full transition duration-200 cursor-pointer border-none">
                Map Your Future
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: WE HANDEL YOU AND GUIDE YOU IN YOUR JOURNEY */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24">

        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Typo preserved exactly as requested in the screenshot: "We Handel You..." */}
          <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-4">
            We Handle You And Guide You In Your Journey
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Build confidence for tomorrow with guidance designed to help you prepare for retirement, financial security, personal wellbeing, and life's next chapter.
          </p>
        </div>

        {/* 5-Column Grid with Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {/* Card 1: Financial Security */}
          <div className="bg-gray-50/50 border border-gray-100/50 rounded-[20px] p-6 flex flex-col hover:shadow-md transition duration-300">
            <div className="w-11 h-11 rounded-lg bg-[#439c47] flex items-center justify-center text-white mb-6">
              <span className="material-icons text-xl select-none">verified_user</span>
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-4">Financial Security</h3>

            <ul className="text-xs text-gray-500 space-y-4 leading-relaxed list-none p-0">
              <li>Build long-term financial confidence</li>
              <li>Understand pensions and savings</li>
              <li>Prepare for future expenses</li>
              <li>Reduce financial uncertainty</li>
            </ul>
          </div>

          {/* Card 2: Future Goals */}
          <div className="bg-gray-50/50 border border-gray-100/50 rounded-[20px] p-6 flex flex-col hover:shadow-md transition duration-300">
            <div className="w-11 h-11 rounded-lg bg-[#439c47] flex items-center justify-center text-white mb-6">
              <span className="material-icons text-xl select-none">ads_click</span>
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-4">Future Goals</h3>

            <ul className="text-xs text-gray-500 space-y-4 leading-relaxed list-none p-0">
              <li>Define retirement aspirations</li>
              <li>Plan meaningful life experiences</li>
              <li>Align finances with personal goals</li>
              <li>Create a clear future roadmap</li>
            </ul>
          </div>

          {/* Card 3: Life Transitions (HIGHLIGHTED CARD) */}
          <div className="bg-[#439c47] text-white rounded-[20px] p-6 flex flex-col shadow-lg shadow-green-100 hover:shadow-xl transition duration-300">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-[#439c47] mb-6">
              <span className="material-icons text-xl select-none">menu_book</span>
            </div>

            <h3 className="font-bold text-white text-base mb-4">Life Transitions</h3>

            <ul className="text-xs text-white/90 space-y-4 leading-relaxed list-none p-0">
              <li>Prepare for retirement changes</li>
              <li>Navigate major life decisions</li>
              <li>Build new routines and purpose</li>
              <li>Adapt confidently to new chapters</li>
            </ul>
          </div>

          {/* Card 4: Wellbeing & Lifestyle */}
          <div className="bg-gray-50/50 border border-gray-100/50 rounded-[20px] p-6 flex flex-col hover:shadow-md transition duration-300">
            <div className="w-11 h-11 rounded-lg bg-[#439c47] flex items-center justify-center text-white mb-6">
              <span className="material-icons text-xl select-none">healing</span>
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-4">Wellbeing & Lifestyle</h3>

            <ul className="text-xs text-gray-500 space-y-4 leading-relaxed list-none p-0">
              <li>Plan for healthy aging</li>
              <li>Maintain independence</li>
              <li>Support mental wellbeing</li>
              <li>Create a balanced lifestyle</li>
            </ul>
          </div>

          {/* Card 5: Legacy & Impact */}
          <div className="bg-gray-50/50 border border-gray-100/50 rounded-[20px] p-6 flex flex-col hover:shadow-md transition duration-300">
            <div className="w-11 h-11 rounded-lg bg-[#439c47] flex items-center justify-center text-white mb-6">
              <span className="material-icons text-xl select-none">domain</span>
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-4">Legacy & Impact</h3>

            <ul className="text-xs text-gray-500 space-y-4 leading-relaxed list-none p-0">
              <li>Protect family interests</li>
              <li>Plan future support strategies</li>
              <li>Organize long-term wishes</li>
              <li>Create meaningful impact</li>
            </ul>
          </div>

        </div>
      </section>


      {/* SECTION 5: YOUR AI COACH ALWAYS AVAILABLE FOR YOU (New Section 1) */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="bg-[#f4fdf5]/35 border border-green-100/30 rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Side Content */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[#3e9447] text-xs font-bold uppercase tracking-wider block mb-4">
              Experience the Future of Support
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
              Your AI Coach Always Available for You
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Unlike generic chatbots, our AI is trained on personal development, trauma care and trauma-informed frameworks to provide validating, safe and helpful responses 24/7.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-gray-800">
                <span className="material-icons text-xs text-[#3e9447] bg-green-100 rounded-full w-5 h-5 flex items-center justify-center select-none font-bold flex-shrink-0">check</span>
                <span className="font-medium">Deep contextual memory for long-term growth</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-800">
                <span className="material-icons text-xs text-[#3e9447] bg-green-100 rounded-full w-5 h-5 flex items-center justify-center select-none font-bold flex-shrink-0">check</span>
                <span className="font-medium">Zero judgment, high empathy communication</span>
              </div>
            </div>

            <div>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm">
                Chat Now
              </button>
            </div>
          </div>

          {/* Right Side Chat Mockup */}
          <div className="lg:col-span-6 bg-[#f4fdf5]/60 p-8 flex items-center justify-center border-l lg:border-l border-t lg:border-t-0 border-green-100/30">
            <div className="bg-white rounded-2xl border border-gray-100/80 shadow-md shadow-green-100/10 w-full max-w-md overflow-hidden flex flex-col h-[400px]">

              {/* Chat Header */}
              <div className="bg-white px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#439c47] flex items-center justify-center text-white text-sm font-bold shadow-xs">
                  <span className="material-icons text-[20px] text-white select-none">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111827] text-sm leading-tight">Insparity AI</h4>
                  <span className="text-[10px] font-semibold text-green-500">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-[20px] p-3 text-xs leading-relaxed ${msg.sender === 'user'
                        ? 'bg-[#f0fdf4] text-[#2f7a37] rounded-tr-none'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none shadow-2xs'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendChatMessage} className="bg-white p-4 border-t border-gray-100 flex items-center gap-2">
                <input
                  type="text"
                  value={chatMessageInput}
                  onChange={(e) => setChatMessageInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white border border-gray-200 rounded-full py-2.5 px-4 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#439c47]"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-full bg-[#439c47] hover:bg-[#38843c] flex items-center justify-center text-white border-none cursor-pointer flex-shrink-0"
                >
                  <span className="material-icons text-sm select-none text-white leading-none">send</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>


      {/* SECTION 6: REFLECTIVE JOURNAL / WELLNESS AUDIO / GROWTH PULSE (New Section 2) */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Card 1: Reflective Journal (lg:col-span-6) */}
          <div className="lg:col-span-5 bg-[#f4fdf5]/40 border border-green-100/20 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Reflective Journal</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
                Capture your thoughts, track your moods, and let AI identify patterns in your emotional landscape.
              </p>

              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-4">
                How are you feeling ?
              </span>

              {/* Mood Selector Row */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {/* Calm */}
                <button
                  onClick={() => setSelectedMood('Calm')}
                  className={`bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition ${selectedMood === 'Calm' ? 'border-2 border-[#439c47]' : 'border border-gray-100 hover:bg-gray-50/50'
                    }`}
                >
                  <span className="text-2xl mb-2">😌</span>
                  <span className="text-[10px] font-bold text-gray-700">Calm</span>
                </button>

                {/* Growing */}
                <button
                  onClick={() => setSelectedMood('Growing')}
                  className={`bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition ${selectedMood === 'Growing' ? 'border-2 border-[#439c47]' : 'border border-gray-100 hover:bg-gray-50/50'
                    }`}
                >
                  <span className="text-2xl mb-2">🌱</span>
                  <span className="text-[10px] font-bold text-gray-700">Growing</span>
                </button>

                {/* Foggy */}
                <button
                  onClick={() => setSelectedMood('Foggy')}
                  className={`bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition ${selectedMood === 'Foggy' ? 'border-2 border-[#439c47]' : 'border border-gray-100 hover:bg-gray-50/50'
                    }`}
                >
                  <span className="text-2xl mb-2">🌫️</span>
                  <span className="text-[10px] font-bold text-gray-700">Foggy</span>
                </button>

                {/* Charged */}
                <button
                  onClick={() => setSelectedMood('Charged')}
                  className={`bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition ${selectedMood === 'Charged' ? 'border-2 border-[#439c47]' : 'border border-gray-100 hover:bg-gray-50/50'
                    }`}
                >
                  <span className="text-2xl mb-2">🔋</span>
                  <span className="text-[10px] font-bold text-gray-700">Charged</span>
                </button>
              </div>
            </div>

            <div>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-6 rounded-full transition duration-200 cursor-pointer border-none">
                Start Now
              </button>
            </div>
          </div>

          {/* Card 2: Wellness Audio (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#56ab5c] to-[#439c47] rounded-[28px] p-8 flex flex-col justify-between text-white hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-1">Wellness Audio</h3>
              <p className="text-white/80 text-xs mb-8">Somatic narratives for deep rest.</p>
            </div>

            {/* Audio Wave Interface */}
            <div className="bg-white rounded-2xl p-6 mb-6 flex flex-col items-center justify-center shadow-sm">
              <div className="flex items-center gap-1.5 h-16 mb-4">
                {/* Simulated Wave Lines */}
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-8 animate-pulse' : 'h-4'}`}></span>
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-12 animate-pulse' : 'h-8'}`}></span>
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-14 animate-pulse' : 'h-10'}`}></span>
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-16 animate-pulse' : 'h-6'}`}></span>
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-10 animate-pulse' : 'h-8'}`}></span>
                <span className={`w-1 bg-[#111827] rounded-full transition-all duration-300 ${isAudioPlaying ? 'h-6 animate-pulse' : 'h-4'}`}></span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6 text-[#111827]">
                <button className="bg-transparent border-none cursor-pointer hover:text-[#439c47] p-1 flex items-center justify-center">
                  <span className="material-icons text-lg leading-none select-none">replay_10</span>
                </button>
                <button
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 p-0"
                >
                  {isAudioPlaying ? (
                    <span className="material-icons text-gray-900 select-none">pause</span>
                  ) : (
                    <span className="material-icons text-gray-900 select-none">play_arrow</span>
                  )}
                </button>
                <button className="bg-transparent border-none cursor-pointer hover:text-[#439c47] p-1 flex items-center justify-center">
                  <span className="material-icons text-lg leading-none select-none">forward_10</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="bg-white hover:bg-gray-50 text-[#439c47] font-semibold text-xs py-3 rounded-full transition duration-200 cursor-pointer border-none w-full"
            >
              {isAudioPlaying ? 'Pause Audio' : 'Listen Now'}
            </button>
          </div>

          {/* Card 3: Growth Pulse (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-[#f4fdf5]/40 border border-green-100/20 rounded-[28px] p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Growth Pulse</h3>

              <div className="space-y-5">
                {/* Metric 1 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">Emotional Clarity</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">Mindset Growth</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-gray-200"></span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">Daily Consistency</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">Stress Balance</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                    <span className="w-2.5 h-4 rounded-sm bg-[#439c47]"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="material-icons text-sm text-[#439c47] select-none">trending_up</span>
                  <span className="material-icons text-sm text-[#439c47] select-none">public</span>
                </div>
                <a href="#" className="text-[#111827] text-[11px] font-bold uppercase tracking-wider hover:text-[#3e9447] transition">
                  View Analytic
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 7: FIND THE RIGHT PATH FOR THIS MOMENT (New Section 3) */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-3">
              Find the Right Path for This Moment
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
              Explore Personal development, wellness, ADHD, growth, and life-planning programs powered by Insparity AI
            </p>
          </div>
          <div>
            <a href="#" className="text-gray-900 font-semibold text-sm hover:text-[#3e9447] transition flex-shrink-0">
              View all
            </a>
          </div>
        </div>

        {/* 4 Course Cards Grid with Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Course Card 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img src={courseStress} alt="Emotional Intelligence 101" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                {/* Author Info */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <img src={marcusProfile} alt="Marcus Throne" className="w-6 h-6 rounded-full object-cover border border-gray-100" />
                    <span className="text-gray-800 text-xs font-semibold">Marcus Throne</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span className="material-icons text-amber-500 text-sm select-none">star</span>
                    <span className="text-gray-700">4.2</span>
                    <span className="text-gray-400 font-normal">(236)</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Emotional Intelligence 101
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                  Master the art of self-regulation, purpose and ...
                </p>

                {/* Course Stats / Details */}
                <div className="space-y-3 text-[11px] font-semibold border-t border-gray-50 pt-5">
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">schedule</span>
                      6h 30m
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">menu_book</span>
                      24 Lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <span className="material-icons text-sm text-gray-400 select-none">group</span>
                    1.2k Enrolled
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer">
                Detail
              </button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer border-none">
                Enroll
              </button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img src={courseComfort} alt="Emotional Intelligence 101" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                {/* Author Info */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <img src={marcusProfile} alt="Marcus Throne" className="w-6 h-6 rounded-full object-cover border border-gray-100" />
                    <span className="text-gray-800 text-xs font-semibold">Marcus Throne</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span className="material-icons text-amber-500 text-sm select-none">star</span>
                    <span className="text-gray-700">4.2</span>
                    <span className="text-gray-400 font-normal">(236)</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Emotional Intelligence 101
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                  Master the art of self-regulation, purpose and ...
                </p>

                {/* Course Stats / Details */}
                <div className="space-y-3 text-[11px] font-semibold border-t border-gray-50 pt-5">
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">schedule</span>
                      6h 30m
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">menu_book</span>
                      24 Lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <span className="material-icons text-sm text-gray-400 select-none">group</span>
                    1.2k Enrolled
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer">
                Detail
              </button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer border-none">
                Enroll
              </button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img src={zenStones} alt="Emotional Intelligence 101" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                {/* Author Info */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <img src={marcusProfile} alt="Marcus Throne" className="w-6 h-6 rounded-full object-cover border border-gray-100" />
                    <span className="text-gray-800 text-xs font-semibold">Marcus Throne</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span className="material-icons text-amber-500 text-sm select-none">star</span>
                    <span className="text-gray-700">4.2</span>
                    <span className="text-gray-400 font-normal">(236)</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Emotional Intelligence 101
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                  Master the art of self-regulation, purpose and ...
                </p>

                {/* Course Stats / Details */}
                <div className="space-y-3 text-[11px] font-semibold border-t border-gray-50 pt-5">
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">schedule</span>
                      6h 30m
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">menu_book</span>
                      24 Lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <span className="material-icons text-sm text-gray-400 select-none">group</span>
                    1.2k Enrolled
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer">
                Detail
              </button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer border-none">
                Enroll
              </button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img src={courseDesk} alt="Emotional Intelligence 101" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                {/* Author Info */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <img src={marcusProfile} alt="Marcus Throne" className="w-6 h-6 rounded-full object-cover border border-gray-100" />
                    <span className="text-gray-800 text-xs font-semibold">Marcus Throne</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span className="material-icons text-amber-500 text-sm select-none">star</span>
                    <span className="text-gray-700">4.2</span>
                    <span className="text-gray-400 font-normal">(236)</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Emotional Intelligence 101
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                  Master the art of self-regulation, purpose and ...
                </p>

                {/* Course Stats / Details */}
                <div className="space-y-3 text-[11px] font-semibold border-t border-gray-50 pt-5">
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">schedule</span>
                      6h 30m
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons text-sm text-gray-400 select-none">menu_book</span>
                      24 Lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <span className="material-icons text-sm text-gray-400 select-none">group</span>
                    1.2k Enrolled
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer">
                Detail
              </button>
              <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2.5 px-4 rounded-full transition duration-200 cursor-pointer border-none">
                Enroll
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 8: BOOK A LIVE SESSION WITH AN EXPERT COACH (New Section 4) */}
      <section className="bg-[#fcfdfd] py-16 md:py-24 border-t border-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-4">
              Book a Live Session with an Expert Coach
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Join guided live sessions, personal development plan, emotional wellness workshops, ADHD coaching, trauma-informed discussions, and AI-powered growth experiences.
            </p>
          </div>

          {/* Interactive Row Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Card Left: Weekly Schedule */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-[28px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-gray-800 text-sm">Weekly Schedule</h4>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 cursor-pointer p-0 bg-transparent flex items-center justify-center">
                      <span className="material-icons text-base">chevron_left</span>
                    </button>
                    <button className="w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 cursor-pointer p-0 bg-transparent flex items-center justify-center">
                      <span className="material-icons text-base">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Days Matrix */}
                <div className="grid grid-cols-7 gap-1.5 text-center mb-6">
                  {/* Headers */}
                  <span className="text-[10px] font-bold text-gray-400">M</span>
                  <span className="text-[10px] font-bold text-gray-400">T</span>
                  <span className="text-[10px] font-bold text-gray-400">W</span>
                  <span className="text-[10px] font-bold text-gray-400">T</span>
                  <span className="text-[10px] font-bold text-gray-400">F</span>
                  <span className="text-[10px] font-bold text-gray-400">S</span>
                  <span className="text-[10px] font-bold text-gray-400">S</span>

                  {/* Date items */}
                  <button
                    onClick={() => setSelectedCalendarDay(12)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 12 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    12
                  </button>

                  <button
                    onClick={() => setSelectedCalendarDay(13)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 13 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    13
                  </button>

                  {/* Highlighted Day (14) */}
                  <button
                    onClick={() => setSelectedCalendarDay(14)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 14 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    14
                  </button>

                  <button
                    onClick={() => setSelectedCalendarDay(15)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 15 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    15
                  </button>

                  <button
                    onClick={() => setSelectedCalendarDay(16)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 16 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    16
                  </button>

                  {/* Accent Highlighted Day (17) */}
                  <button
                    onClick={() => setSelectedCalendarDay(17)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 17 ? 'bg-[#d8f9ce] text-[#2c7a31]' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    17
                  </button>

                  <button
                    onClick={() => setSelectedCalendarDay(18)}
                    className={`h-9 rounded-lg text-xs font-bold cursor-pointer transition border-none flex items-center justify-center ${selectedCalendarDay === 18 ? 'bg-[#439c47] text-white shadow-xs' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    18
                  </button>
                </div>
              </div>

              {/* Status Alert */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center">
                <span className="material-icons text-[#439c47] text-sm mr-2 select-none">people</span>
                <span className="text-[11px] font-bold text-gray-800 leading-tight">2 sessions scheduled today</span>
              </div>
            </div>

            {/* Card Middle: Upcoming Sessions */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-[28px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-gray-800 text-sm">Upcoming Sessions</h4>
                  <span className="material-icons text-gray-400 text-sm select-none">calendar_month</span>
                </div>

                <div className="space-y-4">
                  {/* Session Item 1 */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-[10px] font-semibold text-gray-400 block mb-1">Today 2:00 PM</span>
                    <h5 className="font-bold text-gray-900 text-xs mb-1">ADHD Focus Coaching</h5>
                    <p className="text-gray-500 text-[10px]">Executive function strategies</p>
                  </div>

                  {/* Session Item 2 */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-[10px] font-semibold text-gray-400 block mb-1">Tomorrow 10:00 AM</span>
                    <h5 className="font-bold text-gray-900 text-xs mb-1">Emotional Regulation Session</h5>
                    <p className="text-gray-500 text-[10px]">Grounding techniques for anxiety</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Right: Coach Profile & CTA Booking */}
            <div className="lg:col-span-4 flex flex-col gap-6 justify-between items-stretch">
              {/* Doctor Details */}
              <div className="bg-white border border-gray-100 rounded-[28px] p-6 flex gap-4 items-center shadow-xs hover:shadow-md transition flex-1">
                <img src={sarahProfile} alt="Dr. Sarah Chen" className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-bold mb-1">
                    <span className="material-icons text-amber-500 text-xs select-none">star</span>
                    <span className="text-gray-700">4.2</span>
                  </div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1.5">Dr. Sarah Chen</h5>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
                    Trauma Specialist with 15+ years experience in somatic healing and neurobiology.
                  </p>
                </div>
              </div>

              {/* Instant Book CTA */}
              <div className="bg-white border border-gray-100 rounded-[28px] p-6 text-center shadow-xs hover:shadow-md transition flex flex-col justify-center items-center">
                <h5 className="font-bold text-gray-900 text-sm mb-4 leading-normal">
                  Reserve Your Spot & Grow Together
                </h5>
                <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-8 rounded-full transition duration-200 cursor-pointer border-none shadow-sm w-full max-w-[200px]">
                  Join Live Session
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 9: READY TO BEGIN YOUR HEALING JOURNEY (CTA BLOCK) */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="bg-[#439c47] rounded-[32px] p-12 md:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-lg shadow-green-100">

          <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Ready to begin your healing journey?
            </h2>

            {/* Typo preserved exactly as requested in screenshot: "Insprairty AI" */}
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-md mx-auto">
              Join thousands of others finding clarity and peace with Insprairty AI
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="bg-transparent border border-white hover:bg-white/5 text-white font-semibold text-xs py-3.5 px-8 rounded-full transition duration-200 cursor-pointer w-full sm:w-auto">
                Talk to an Expert
              </button>

              {/* Typo preserved exactly as requested in screenshot: "Get Strated Now" */}
              <button className="bg-white hover:bg-gray-100 text-[#439c47] font-bold text-xs py-3.5 px-8 rounded-full transition duration-200 cursor-pointer border-none w-full sm:w-auto">
                Get Strated Now
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 10: FROM OUR COMMUNITY (TESTIMONIALS) */}
      <section className="bg-white max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            From Our Community
          </h2>
          {/* Typo preserved exactly as requested in screenshot: "Here's what other subscribe..." */}
          <p className="text-gray-500 text-sm leading-relaxed">
            Here's what other subscribe had to say about Production Online
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Testimonial 1 */}
          {/* Typo preserved: "Inspairty AI" */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[#3e9447] text-[40px] font-serif leading-none block mb-2">““</span>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                Inspairty AI has become my morning sanctuary. The AI coach guided me through a panic attack when I couldn't reach my therapist.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[#3e9447] text-[40px] font-serif leading-none block mb-2">““</span>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                Finally, a tool that understands ADHD. The AI doesn't judge my messy progress; it just helps me get back on track with kindness.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[#3e9447] text-[40px] font-serif leading-none block mb-2">““</span>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                The course on trauma-informed boundaries changed my life. I feel more in control of my time and my emotional energy than ever before.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

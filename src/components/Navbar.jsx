import { useState } from 'react'

export default function Navbar({ setCurrentPage }) {
  const [isCoachDropdownOpen, setIsCoachDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => setCurrentPage('home')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <svg 
            width="28" 
            height="34" 
            viewBox="0 0 28 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-9 flex-shrink-0"
          >
            <path 
              d="M14 0C14 0 28 10 28 20.5C28 26.5 23 31.5 17 33.5C14.5 34.3 14 31 14 31C14 31 13.5 34.3 11 33.5C5 31.5 0 26.5 0 20.5C0 10 14 0 14 0Z" 
              fill="url(#leaf-grad)" 
            />
            <path 
              d="M14 0V31C14 31 13.5 34.3 11 33.5C5 31.5 0 26.5 0 20.5C0 10 14 0 14 0Z" 
              fill="url(#leaf-dark-grad)" 
              opacity="0.15"
            />
            <defs>
              <linearGradient id="leaf-grad" x1="0" y1="0" x2="28" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8be28f" />
                <stop offset="50%" stopColor="#4bb551" />
                <stop offset="100%" stopColor="#2c7c31" />
              </linearGradient>
              <linearGradient id="leaf-dark-grad" x1="0" y1="0" x2="14" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-xl tracking-tight text-[#111827]">
            Insparity<span className="text-[#3e9447]">AI</span>
          </span>
        </div>

        {/* Center Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
            className="text-[#111827] font-semibold hover:text-[#3e9447] transition-colors"
          >
            Home
          </a>
          
          <div className="relative">
            <button 
              onClick={() => {
                setIsCoachDropdownOpen(!isCoachDropdownOpen)
                setActiveCategory(null)
              }}
              className="flex items-center gap-1 hover:text-[#3e9447] font-medium transition-colors focus:outline-none cursor-pointer"
            >
              AI Coach
              <svg 
                className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isCoachDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isCoachDropdownOpen && (
              <div className="absolute left-[-120px] mt-4 flex gap-4 z-50">
                {/* Categories Card (Left Panel) */}
                <div className="bg-white border border-gray-100 rounded-[28px] p-5 shadow-2xl w-[300px] flex flex-col gap-1.5 flex-shrink-0">
                  <button
                    onMouseEnter={() => setActiveCategory('personal-development')}
                    onClick={() => setActiveCategory('personal-development')}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${
                      activeCategory === 'personal-development' 
                        ? 'bg-transparent text-[#3e9447]' 
                        : 'bg-transparent text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>Personal Development</span>
                    <span className={`text-[9px] transform transition-transform ${activeCategory === 'personal-development' ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-955'}`}>
                      ▶
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveCategory('adhd')}
                    onClick={() => setActiveCategory('adhd')}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${
                      activeCategory === 'adhd' 
                        ? 'bg-transparent text-[#3e9447]' 
                        : 'bg-transparent text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>ADHD</span>
                    <span className={`text-[9px] transform transition-transform ${activeCategory === 'adhd' ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-955'}`}>
                      ▶
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveCategory('mental-wellness')}
                    onClick={() => setActiveCategory('mental-wellness')}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${
                      activeCategory === 'mental-wellness' 
                        ? 'bg-transparent text-[#3e9447]' 
                        : 'bg-transparent text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>Mental Wellness</span>
                    <span className={`text-[9px] transform transition-transform ${activeCategory === 'mental-wellness' ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-955'}`}>
                      ▶
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveCategory('trauma')}
                    onClick={() => setActiveCategory('trauma')}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${
                      activeCategory === 'trauma' 
                        ? 'bg-transparent text-[#3e9447]' 
                        : 'bg-transparent text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>Trauma</span>
                    <span className={`text-[9px] transform transition-transform ${activeCategory === 'trauma' ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-955'}`}>
                      ▶
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveCategory('retirement-life')}
                    onClick={() => setActiveCategory('retirement-life')}
                    className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${
                      activeCategory === 'retirement-life' 
                        ? 'bg-transparent text-[#3e9447]' 
                        : 'bg-transparent text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>Retirement & Life Planning</span>
                    <span className={`text-[9px] transform transition-transform ${activeCategory === 'retirement-life' ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-955'}`}>
                      ▶
                    </span>
                  </button>
                </div>

                {/* Subcategories Card (Right Panel) */}
                {activeCategory && (
                  <div className="bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xl w-[400px] flex flex-col gap-6 flex-shrink-0 min-h-[300px] justify-center">
                    {activeCategory === 'personal-development' && (
                      <>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('personalised-assessments'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Personalised AI Assessments
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('executive-function-coach'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          AI Executive Function Coach
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('focus-tools'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Focus tools, habit stacking, time-blocking
                        </a>
                      </>
                    )}

                    {activeCategory === 'adhd' && (
                      <>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('adhd-learning-pathways'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          ADHD-specific learning pathways
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('behavioural-pattern-tracking'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Behavioural pattern tracking over time
                        </a>
                      </>
                    )}

                    {activeCategory === 'mental-wellness' && (
                      <>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('ai-wellness-coach'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          AI Wellness Coach
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('audio-text-journal'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Audio & text journal with sentiment analysis
                        </a>
                      </>
                    )}

                    {activeCategory === 'trauma' && (
                      <>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('trauma-informed-learning'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Trauma-informed learning
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('grounding-exercises'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Grounding & regulation exercises
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('crisis-protocol'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Crisis-aware escalation protocol
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('emdr-somatic-guides'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          EMDR, somatic therapy guides
                        </a>
                      </>
                    )}

                    {activeCategory === 'retirement-life' && (
                      <>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('ai-retirement-advisor'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          AI Retirement Planning Advisor
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('pension-guidance'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Pension, savings & investment guidance
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentPage('life-transition-coaching'); setIsCoachDropdownOpen(false); }}
                          className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline"
                        >
                          Life transition coaching
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline">Personalised financial scenario modelling</a>
                        <a href="#" className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline">Legacy planning & estate conversations</a>
                        <a href="#" className="text-gray-800 hover:text-[#3e9447] text-sm font-medium transition-colors block text-left no-underline">Senior wellbeing & cognitive health tools</a>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[#3e9447] transition-colors">
            Podcast
          </a>
          <a href="#" className="hover:text-[#3e9447] transition-colors">
            Library
          </a>
          <a href="#" className="hover:text-[#3e9447] transition-colors">
            Contact
          </a>
        </div>

        {/* Right CTA Button */}
        <div>
          <button className="bg-[#439c47] hover:bg-[#38843c] active:bg-[#2e6d31] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer border-none">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

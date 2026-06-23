import { useState } from 'react'
import CalmSoundsCard from './CalmSoundsCard'

const COACH_CATEGORIES = [
  {
    id: 'personal-development',
    label: 'Personal Development',
    items: [
      { label: 'Personalised AI Assessments', page: 'personalised-assessments' },
      { label: 'AI Executive Function Coach', page: 'executive-function-coach' },
      { label: 'Focus tools, habit stacking, time-blocking', page: 'focus-tools' },
    ],
  },
  {
    id: 'adhd',
    label: 'ADHD',
    items: [
      { label: 'ADHD-specific learning pathways', page: 'adhd-learning-pathways' },
      { label: 'Behavioural pattern tracking over time', page: 'behavioural-pattern-tracking' },
    ],
  },
  {
    id: 'mental-wellness',
    label: 'Mental Wellness',
    items: [
      { label: 'AI Wellness Coach', page: 'ai-wellness-coach' },
      { label: 'Audio & text journal with sentiment analysis', page: 'audio-text-journal' },
    ],
  },
  {
    id: 'trauma',
    label: 'Trauma',
    items: [
      { label: 'Trauma-informed learning', page: 'trauma-informed-learning' },
      { label: 'Grounding & regulation exercises', page: 'grounding-exercises' },
      { label: 'Crisis-aware escalation protocol', page: 'crisis-protocol' },
      { label: 'EMDR, somatic therapy guides', page: 'emdr-somatic-guides' },
    ],
  },
  {
    id: 'retirement-life',
    label: 'Retirement & Life Planning',
    items: [
      { label: 'AI Retirement Planning Advisor', page: 'ai-retirement-advisor' },
      { label: 'Pension, savings & investment guidance', page: 'pension-guidance' },
      { label: 'Life transition coaching', page: 'life-transition-coaching' },
      { label: 'Personalised financial scenario modelling', page: null },
      { label: 'Legacy planning & estate conversations', page: null },
      { label: 'Senior wellbeing & cognitive health tools', page: null },
    ],
  },
]

export default function Navbar({
  setCurrentPage,
  isLoggedIn,
  userEmail,
  handleLogout,
  activeAmbientSound,
  setActiveAmbientSound,
  isAmbientPlaying,
  setIsAmbientPlaying,
  ambientVolume,
  setAmbientVolume
}) {
  const [showSoundsOverlay, setShowSoundsOverlay] = useState(false)
  const [isCoachDropdownOpen, setIsCoachDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('personal-development')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileCoachOpen, setMobileCoachOpen] = useState(false)
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null)

  const activeIndex = COACH_CATEGORIES.findIndex((c) => c.id === activeCategory)
  const activeItems =
    COACH_CATEGORIES.find((c) => c.id === activeCategory)?.items ?? []

  const goTo = (page) => {
    if (page) setCurrentPage(page)
    setIsCoachDropdownOpen(false)
  }

  const goToMobile = (page) => {
    if (page) setCurrentPage(page)
    setIsMobileMenuOpen(false)
    setMobileCoachOpen(false)
    setMobileOpenCategory(null)
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/Insparity AI logo.png" alt="Insparity AI" className="h-10 w-auto object-contain" />
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

          <div
            className="relative"
            onMouseEnter={() => setIsCoachDropdownOpen(true)}
            onMouseLeave={() => setIsCoachDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-[#3e9447] font-medium transition-colors focus:outline-none cursor-pointer"
            >
              AI Coach
              <span className={`material-icons text-sm text-gray-500 transition-transform duration-200 select-none ml-1 ${isCoachDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isCoachDropdownOpen && (
              <div className="absolute left-1/2 -ml-[150px] top-full pt-4 z-50">
                {/* Two cards side by side: categories (left) + subcategories (right) */}
                <div className="flex items-start gap-3">

                  {/* Categories Card (Left Panel) - vertical stack */}
                  <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-3 w-[300px] flex-shrink-0">
                    {COACH_CATEGORIES.map((cat) => {
                      const isActive = activeCategory === cat.id
                      return (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setActiveCategory(cat.id)}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`w-full flex items-center justify-between py-3.5 px-4 rounded-2xl text-[13px] font-semibold transition border-none text-left cursor-pointer ${isActive
                              ? 'bg-gray-50 text-[#3e9447]'
                              : 'bg-transparent text-gray-800 hover:bg-gray-50'
                            }`}
                        >
                          <span>{cat.label}</span>
                          <span className={`material-icons text-sm transition-transform select-none ${isActive ? 'text-[#3e9447] translate-x-0.5' : 'text-gray-300'}`}>
                            chevron_right
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Subcategories Card (Right Panel) - aligned to active category row */}
                  <div
                    className="bg-white border border-gray-100 rounded-[28px] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] w-[380px] flex-shrink-0 flex flex-col gap-1 transition-all duration-200"
                    style={{ marginTop: `${activeIndex * 52}px` }}
                  >
                    {activeItems.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        onClick={(e) => { e.preventDefault(); goTo(item.page) }}
                        className="text-gray-700 hover:text-[#3e9447] hover:bg-gray-50 text-sm font-medium transition-colors block text-left no-underline rounded-xl px-3 py-2.5"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                </div>
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
        <div className="flex items-center gap-3 relative">

          {/* Circular dial icon button for Calm Sounds */}
          <button
            onClick={() => setShowSoundsOverlay(!showSoundsOverlay)}
            className={`w-9.5 h-9.5 rounded-full border flex items-center justify-center transition cursor-pointer focus:outline-none ${isAmbientPlaying && activeAmbientSound
              ? 'border-[#439c47] bg-green-50 text-[#439c47] shadow-sm animate-pulse'
              : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 bg-transparent'
              }`}
            title="Calm Ambient Sounds"
          >
            <span className="material-icons text-lg">volume_up</span>
          </button>

          {/* Calm Sounds dropdown card */}
          {showSoundsOverlay && (
            <div className="absolute right-0 top-12 z-50 animate-fade-in shadow-2xl">
              <CalmSoundsCard
                activeAmbientSound={activeAmbientSound}
                setActiveAmbientSound={setActiveAmbientSound}
                isAmbientPlaying={isAmbientPlaying}
                setIsAmbientPlaying={setIsAmbientPlaying}
                ambientVolume={ambientVolume}
                setAmbientVolume={setAmbientVolume}
              />
            </div>
          )}

          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 select-none">
                <div className="w-9 h-9 rounded-full bg-[#439c47] text-white flex items-center justify-center font-semibold text-sm shadow-sm shadow-green-100/10">
                  {userEmail ? userEmail.substring(0, 2).toUpperCase() : 'U'}
                </div>
                <span className="hidden sm:inline-block text-xs font-semibold text-gray-700">
                  {userEmail}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-gray-500 hover:text-red-500 font-semibold bg-transparent border-none cursor-pointer p-0 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={() => setCurrentPage('login')}
                className="text-gray-600 hover:text-[#3e9447] text-sm font-semibold px-4 py-2.5 rounded-full transition bg-transparent border-none cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => setCurrentPage('signup')}
                className="bg-[#439c47] hover:bg-[#38843c] active:bg-[#2e6d31] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer border-none"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Hamburger (mobile only) - three lines */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); goToMobile('home'); }}
              className="text-[#111827] font-semibold text-sm px-3 py-3 rounded-xl hover:bg-gray-50 no-underline"
            >
              Home
            </a>

            {/* AI Coach accordion */}
            <button
              onClick={() => setMobileCoachOpen(!mobileCoachOpen)}
              className="flex items-center justify-between text-gray-800 font-semibold text-sm px-3 py-3 rounded-xl hover:bg-gray-50 bg-transparent border-none cursor-pointer text-left w-full"
            >
              AI Coach
              <span className={`material-icons text-base text-gray-500 transition-transform duration-200 ${mobileCoachOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {mobileCoachOpen && (
              <div className="pl-2 flex flex-col gap-0.5">
                {COACH_CATEGORIES.map((cat) => {
                  const isOpen = mobileOpenCategory === cat.id
                  return (
                    <div key={cat.id}>
                      <button
                        onClick={() => setMobileOpenCategory(isOpen ? null : cat.id)}
                        className={`flex items-center justify-between w-full text-[13px] font-semibold px-3 py-2.5 rounded-lg bg-transparent border-none cursor-pointer text-left transition ${isOpen ? 'text-[#3e9447]' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {cat.label}
                        <span className={`material-icons text-sm transition-transform ${isOpen ? 'rotate-90 text-[#3e9447]' : 'text-gray-300'}`}>chevron_right</span>
                      </button>
                      {isOpen && (
                        <div className="pl-4 flex flex-col gap-0.5 pb-1">
                          {cat.items.map((item) => (
                            <a
                              key={item.label}
                              href="#"
                              onClick={(e) => { e.preventDefault(); goToMobile(item.page); }}
                              className="text-gray-600 hover:text-[#3e9447] text-[13px] font-medium px-3 py-2 rounded-lg hover:bg-gray-50 no-underline block"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }} className="text-gray-700 font-medium text-sm px-3 py-3 rounded-xl hover:bg-gray-50 no-underline">Podcast</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }} className="text-gray-700 font-medium text-sm px-3 py-3 rounded-xl hover:bg-gray-50 no-underline">Library</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }} className="text-gray-700 font-medium text-sm px-3 py-3 rounded-xl hover:bg-gray-50 no-underline">Contact</a>

            <div className="border-t border-gray-100 my-2" />

            {/* Auth (mobile) */}
            {isLoggedIn ? (
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#439c47] text-white flex items-center justify-center font-semibold text-sm">
                    {userEmail ? userEmail.substring(0, 2).toUpperCase() : 'U'}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{userEmail}</span>
                </div>
                <button
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                  className="text-xs text-gray-500 hover:text-red-500 font-semibold bg-transparent border-none cursor-pointer transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-1">
                <button
                  onClick={() => { setCurrentPage('login'); setIsMobileMenuOpen(false); }}
                  className="text-gray-700 hover:text-[#3e9447] text-sm font-semibold px-4 py-3 rounded-full border border-gray-200 bg-transparent cursor-pointer transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setCurrentPage('signup'); setIsMobileMenuOpen(false); }}
                  className="bg-[#439c47] hover:bg-[#38843c] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer border-none"
                >
                  Sign Up
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </nav>
  )
}
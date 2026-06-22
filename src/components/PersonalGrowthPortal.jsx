import { useState } from 'react'

// Asset imports matching existing project assets
import climbingCliff from '../assets/climbing_cliff.png'
import marcusProfile from '../assets/marcus_profile.png'
import sarahProfile from '../assets/sarah_profile.png'
import zenStones from '../assets/zen_stones.png'
import courseStress from '../assets/course_stress.png'
import courseComfort from '../assets/course_comfort.png'
import courseDesk from '../assets/course_desk.png'
import focusTarget from '../assets/focus_target.png'
import habitSeedlings from '../assets/habit_seedlings.png'
import safeWriting from '../assets/safe_writing.png'
import journalNotebookHeadphones from '../assets/journal_notebook_headphones.png'
import wellnessCrystal from '../assets/wellness_crystal.png'
import cloudHead from '../assets/cloud_head.png'
import supportiveHands from '../assets/supportive_hands.png'
import forestMeditation from '../assets/forest_meditation.png'
import beachWoman from '../assets/beach_woman.png'
import greenHillsPath from '../assets/green_hills_path.png'
import coachStarry from '../assets/coach_starry.png'
import CalmSoundsCard from './CalmSoundsCard'

export default function PersonalGrowthPortal({
  activeAmbientSound,
  setActiveAmbientSound,
  isAmbientPlaying,
  setIsAmbientPlaying,
  ambientVolume,
  setAmbientVolume
}) {
  // Interactive Chat State
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'coach',
      text: "Welcome to your personal development space, Sara. I am here to help you structure your habits, reflect on your goals, or clear your mind. What would you like to explore today?"
    }
  ])

  // Interactive Journal State
  const [activeJournalTab, setActiveJournalTab] = useState('write') // 'write', 'voice'
  const [journalContent, setJournalContent] = useState('')
  const [selectedMood, setSelectedMood] = useState('Growing')
  const [journalAnalysis, setJournalAnalysis] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Interactive Course Enrollments state
  const [enrolledCourses, setEnrolledCourses] = useState([])

  // Interactive Library items limit state
  const [libraryLimit, setLibraryLimit] = useState(4)

  const handleSendChat = (textToSend) => {
    const text = textToSend || chatInput
    if (!text.trim()) return

    const userMessage = { sender: 'user', text: text.trim() }
    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')

    // Generate simulated smart AI Coach response
    setTimeout(() => {
      let coachReply = ""
      const lower = text.toLowerCase()
      if (lower.includes('habit')) {
        coachReply = "Creating a custom habit tracker is a great start. Let's aim to stack it: associate your new habit with an existing one (e.g. 'Right after I make my morning coffee, I will write down my top 3 daily focus areas'). Does that sound manageable?"
      } else if (lower.includes('morning') || lower.includes('routine')) {
        coachReply = "A solid morning routine starts the night before, but for the morning itself: try the 20-20-20 formula (20 minutes of movement, 20 minutes of reflection/journaling, and 20 minutes of learning). Would you like to customize these blocks?"
      } else if (lower.includes('reflection') || lower.includes('minute')) {
        coachReply = "Let's take a deep breath. Close your eyes for 3 seconds... Now write down: 1 thing you are grateful for, 1 thing you want to release today, and 1 focus area. This simple practice signals safety to your nervous system."
      } else if (lower.includes('mood') || lower.includes('analyze')) {
        coachReply = "Analyzing your mood over time helps us recognize stress triggers. I noticed you feel most 'Charged' in the mornings and 'Foggy' after lunch. Let's try adding a short 5-minute somatic stretch at 2 PM to reset your focus."
      } else {
        coachReply = "That's a very meaningful topic. When we work together on this, we can break it down into micro-steps so your nervous system feels safe and ready. What is the smallest action you can take on this today?"
      }
      setChatMessages(prev => [...prev, { sender: 'coach', text: coachReply }])
    }, 1000)
  }

  const handleJournalAnalyze = (e) => {
    e.preventDefault()
    if (!journalContent.trim()) return

    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setJournalAnalysis({
        sentiment: selectedMood === 'Growing' || selectedMood === 'Calm' || selectedMood === 'Charged' ? 'Positive & Forward-looking' : 'Reflective & Process-seeking',
        focusScore: '84%',
        somaticState: selectedMood === 'Calm' ? 'Restful & Regulated' : 'Active & Attentive',
        insight: "Your words indicate high self-awareness. You are successfully naming your feelings, which is the first step in emotional regulation. Keep dedicating this time to yourself."
      })
    }, 1500)
  }

  const toggleEnroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(prev => prev.filter(id => id !== courseId))
    } else {
      setEnrolledCourses(prev => [...prev, courseId])
    }
  }

  const libraryItems = [
    { id: 1, image: safeWriting, title: "Journaling Essentials", format: "PDF • 8 Pages" },
    { id: 2, image: habitSeedlings, title: "Habit Blueprint", format: "Audio • 12 Min" },
    { id: 3, image: focusTarget, title: "Focus Deep Dive", format: "Audio • 15 Min" },
    { id: 4, image: zenStones, title: "Somatic Grounding", format: "PDF • 10 Pages" },
    { id: 5, image: journalNotebookHeadphones, title: "Gratitude Practice", format: "Audio • 8 Min" },
    { id: 6, image: wellnessCrystal, title: "Emotional Regulation", format: "PDF • 12 Pages" },
    { id: 7, image: cloudHead, title: "Mindfulness Primer", format: "Audio • 20 Min" },
    { id: 8, image: supportiveHands, title: "Relational Health", format: "PDF • 6 Pages" },
  ]

  const courseItems = [
    { id: 1, image: courseStress, title: "Managing Work Stress", format: "6 Lessons • 2h 15m" },
    { id: 2, image: courseComfort, title: "Building Lasting Habits", format: "8 Lessons • 3h 10m" },
    { id: 3, image: courseDesk, title: "Time Blocking Mastery", format: "5 Lessons • 1h 45m" },
    { id: 4, image: forestMeditation, title: "Meditation for Beginners", format: "10 Lessons • 4h 20m" },
    { id: 5, image: beachWoman, title: "Mindfulness and Anxiety", format: "7 Lessons • 2h 50m" },
    { id: 6, image: focusTarget, title: "Deep Work Protocols", format: "6 Lessons • 2h 10m" },
    { id: 7, image: greenHillsPath, title: "Setting Life Milestones", format: "9 Lessons • 3h 40m" },
    { id: 8, image: coachStarry, title: "Cognitive Behavioral Growth", format: "12 Lessons • 5h 30m" },
  ]

  return (
    <div className="bg-[#fafbfa] text-gray-950 font-sans selection:bg-green-100 selection:text-green-800 pb-20">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-6">
        <div 
          className="relative rounded-[32px] overflow-hidden flex items-center bg-cover bg-right lg:bg-center min-h-[580px] lg:min-h-[660px] pb-16 lg:pb-20"
          style={{ backgroundImage: `url(${climbingCliff})` }}
        >
          {/* Overlay to ensure readability while preserving the climber image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent"></div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 px-6 md:px-16 py-12">
            {/* Left Content Card */}
            <div className="relative z-10 bg-black/30 backdrop-blur-md border border-white/10 rounded-[28px] p-10 md:p-14 max-w-3xl text-white shadow-xl text-left select-none self-center">
              <span className="inline-flex items-center gap-1.5 bg-[#439c47]/95 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6">
                Personal Development
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.1] mb-6 tracking-tight font-sans">
                Become The Best<br />Version Of Yourself
              </h1>
              <p className="text-white/95 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
                Cultivate growth, enhance focus, strengthen resilience, and build a more fulfilling future with AI-powered guidance.
              </p>
              
              <button className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 active:scale-95 transition duration-200 cursor-pointer shadow-lg border-none">
                <span className="text-sm tracking-wide font-bold">Get started</span>
                <span className="w-9 h-9 rounded-full bg-[#439c47] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right Content - Calm Sounds Card */}
            <div className="shrink-0 relative z-10 self-center">
              <CalmSoundsCard 
                activeAmbientSound={activeAmbientSound}
                setActiveAmbientSound={setActiveAmbientSound}
                isAmbientPlaying={isAmbientPlaying}
                setIsAmbientPlaying={setIsAmbientPlaying}
                ambientVolume={ambientVolume}
                setAmbientVolume={setAmbientVolume}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRANSFORMS PERSONAL GROWTH VIDEO AREA */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
          See How Insparity AI Transforms Your Personal Growth
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10 font-light">
          An intuitive look into how personalized checklists, tools, and mental wellbeing resources help you evolve.
        </p>

        {/* Video Placeholder Container */}
        <div className="max-w-4xl mx-auto bg-[#e4ebe4] border border-[#d2dfd2] rounded-[32px] overflow-hidden p-8 sm:p-12 relative flex flex-col md:flex-row items-center justify-between shadow-xs gap-6 min-h-[280px]">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-left">
            {/* Marcus avatar */}
            <div className="relative shrink-0">
              <img 
                src={marcusProfile} 
                alt="Marcus" 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-sm object-cover"
              />
              <span className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2 select-none">
                <img src="/Insparity leaf.svg" alt="leaf" className="w-4.5 h-5.5 object-contain" />
                <span className="font-bold text-sm tracking-tight text-gray-800">Insparity AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight font-sans">
                Personal Development
              </h3>
              <p className="text-gray-600 text-sm font-semibold">Made Simple</p>
            </div>
          </div>

          {/* Central Play Trigger */}
          <button 
            onClick={() => alert("Playing Introduction to Personal Development video guide...")}
            className="w-16 h-16 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center text-[#439c47] hover:scale-105 active:scale-95 shadow-lg border-none cursor-pointer transition duration-200 shrink-0"
          >
            <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* SECTION 3: TURN GOALS INTO DAILY PROGRESS */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
          Turn Goals Into Daily Progress
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10 font-light">
          Track your objectives, manage your energy, and follow tailored pathways to achieve your potential.
        </p>

        {/* Action Panel */}
        <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-[28px] p-8 shadow-xs text-left">
          <div className="space-y-6 mb-8">
            {/* Point 1 */}
            <div className="flex gap-4 items-start pb-4 border-b border-gray-50">
              <div className="w-8 h-8 rounded-full bg-green-50 text-[#439c47] flex items-center justify-center shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Daily Goals</h4>
                <p className="text-gray-500 text-xs mt-0.5 font-light">Actively structure and prioritize your day.</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4 items-start pb-4 border-b border-gray-50">
              <div className="w-8 h-8 rounded-full bg-green-50 text-[#439c47] flex items-center justify-center shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Work-life balance</h4>
                <p className="text-gray-500 text-xs mt-0.5 font-light">Keep healthy boundaries and energy tracking.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-green-50 text-[#439c47] flex items-center justify-center shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Pathways</h4>
                <p className="text-gray-500 text-xs mt-0.5 font-light">Create structured roadmaps for self-development.</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#439c47] hover:bg-[#38843c] text-white text-sm font-semibold py-3.5 px-4 rounded-xl transition duration-200 cursor-pointer border-none shadow-sm shadow-green-50 text-center">
            Map Your Future
          </button>
        </div>
      </section>

      {/* SECTION 4: YOUR PERSONAL GROWTH COACH */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
            Your Personal Growth Coach
          </h2>
          <p className="text-gray-500 text-sm font-light">
            Interact with our AI coach trained to guide you in personal development, habit building, and mental clarity.
          </p>
        </div>

        {/* Chat UI Card */}
        <div className="w-full bg-white border border-gray-100/80 rounded-[28px] shadow-sm overflow-hidden flex flex-col h-[620px]">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-50 flex items-center gap-3">
            <div className="relative">
              <img 
                src={sarahProfile} 
                alt="AI Coach" 
                className="w-10 h-10 rounded-full border border-gray-100 object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm leading-tight">Al Nadeem</h4>
              <span className="text-[10px] font-semibold text-green-500">Trauma & Wellness AI Coach</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fafbf9]/30">
            {chatMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#f0fdf4] text-[#2f7a37] rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-3xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestion Prompts (Only visible if there is only 1 message in conversation) */}
          {chatMessages.length === 1 && (
            <div className="p-4 border-t border-gray-50 bg-gray-50/20 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button 
                onClick={() => handleSendChat("Create a custom habit tracker")}
                className="text-left py-2.5 px-4 bg-white border border-gray-100 hover:border-[#439c47] rounded-xl text-xs text-gray-700 font-medium cursor-pointer transition shadow-3xs"
              >
                🌱 Create a custom habit tracker
              </button>
              <button 
                onClick={() => handleSendChat("Help me structure my morning routine")}
                className="text-left py-2.5 px-4 bg-white border border-gray-100 hover:border-[#439c47] rounded-xl text-xs text-gray-700 font-medium cursor-pointer transition shadow-3xs"
              >
                ⏰ Help me structure my morning routine
              </button>
              <button 
                onClick={() => handleSendChat("Guide me through a 5-minute reflection")}
                className="text-left py-2.5 px-4 bg-white border border-gray-100 hover:border-[#439c47] rounded-xl text-xs text-gray-700 font-medium cursor-pointer transition shadow-3xs"
              >
                😌 Guide me through a 5-minute reflection
              </button>
              <button 
                onClick={() => handleSendChat("Analyze my recent mood patterns")}
                className="text-left py-2.5 px-4 bg-white border border-gray-100 hover:border-[#439c47] rounded-xl text-xs text-gray-700 font-medium cursor-pointer transition shadow-3xs"
              >
                📊 Analyze my recent mood patterns
              </button>
            </div>
          )}

          {/* Input Box */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendChat(); }}
            className="p-4 bg-white border-t border-gray-50 flex gap-2.5 items-center"
          >
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask your AI coach..." 
              className="flex-1 bg-[#fafbfa] border border-gray-200 focus:border-[#439c47] rounded-full py-2.5 px-5 text-xs text-gray-800 placeholder-gray-400 outline-none transition"
            />
            <button 
              type="submit" 
              className="w-10 h-10 rounded-full bg-[#439c47] hover:bg-[#38843c] flex items-center justify-center text-white border-none cursor-pointer flex-shrink-0"
            >
              <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 5: YOUR PERSONAL DEVELOPMENT LIBRARY */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
              Your Personal Development Library
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Explore clinical journals, audio guides, and interactive worksheets tailored to your growth goals.
            </p>
          </div>
          <button 
            onClick={() => setLibraryLimit(libraryLimit === 4 ? 8 : 4)}
            className="text-xs text-[#3e9447] hover:underline font-bold bg-transparent border-none cursor-pointer shrink-0"
          >
            {libraryLimit === 4 ? "View All (8)" : "View Less"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryItems.slice(0, libraryLimit).map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full bg-gray-50 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.format.split(' • ')[0]}
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-[10px] font-medium">{item.format.split(' • ')[1]}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex justify-between items-center">
                <span className="text-[10px] font-bold text-[#439c47] uppercase tracking-wider">Free Access</span>
                <button 
                  onClick={() => alert(`Opening resource: ${item.title}`)}
                  className="w-8 h-8 rounded-full bg-green-50 text-[#439c47] hover:bg-[#439c47] hover:text-white flex items-center justify-center border-none cursor-pointer transition duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More button */}
        {libraryLimit < libraryItems.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setLibraryLimit(8)}
              className="bg-transparent hover:bg-gray-50 text-gray-600 border border-gray-200 text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* SECTION 6: TRACK YOUR THOUGHTS, UNDERSTAND YOUR EMOTIONS (JOURNALING) */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
            Track Your Thoughts, Understand Your Emotions
          </h2>
          <p className="text-gray-500 text-sm font-light">
            Private, clinically-informed journaling with sentiment and pattern analysis.
          </p>
        </div>

        {/* Journal Form */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[28px] shadow-sm overflow-hidden">
          
          {/* Tab Selector */}
          <div className="flex border-b border-gray-50 select-none">
            <button 
              onClick={() => { setActiveJournalTab('write'); setJournalAnalysis(null); }}
              className={`flex-1 py-4 text-center text-xs font-bold transition duration-200 border-none cursor-pointer ${
                activeJournalTab === 'write' ? 'bg-[#fafbfa] text-[#439c47] border-b-2 border-b-[#439c47]' : 'bg-white text-gray-400 hover:text-gray-600'
              }`}
            >
              ✍️ Write Entry
            </button>
            <button 
              onClick={() => { setActiveJournalTab('voice'); setJournalAnalysis(null); }}
              className={`flex-1 py-4 text-center text-xs font-bold transition duration-200 border-none cursor-pointer ${
                activeJournalTab === 'voice' ? 'bg-[#fafbfa] text-[#439c47] border-b-2 border-b-[#439c47]' : 'bg-white text-gray-400 hover:text-gray-600'
              }`}
            >
              🎙️ Voice Memo
            </button>
          </div>

          <div className="p-6 md:p-8">
            {activeJournalTab === 'write' ? (
              <form onSubmit={handleJournalAnalyze} className="space-y-6">
                <div>
                  <textarea 
                    value={journalContent}
                    onChange={(e) => setJournalContent(e.target.value)}
                    required
                    placeholder="Type how you're feeling, what you accomplished, or what's on your mind today..."
                    className="w-full h-40 bg-[#fafbfa] border border-gray-200 focus:border-[#439c47] rounded-xl p-4 text-xs text-gray-900 placeholder-gray-400 outline-none resize-none transition"
                  ></textarea>
                </div>

                {/* Mood Smileys */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 select-none">
                    Select current mood
                  </label>
                  <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    {['Calm', 'Growing', 'Foggy', 'Charged', 'Anxious'].map((mood) => {
                      const smileys = { Calm: '😌', Growing: '🌱', Foggy: '🌫️', Charged: '🔋', Anxious: '😰' }
                      return (
                        <button 
                          key={mood}
                          type="button"
                          onClick={() => setSelectedMood(mood)}
                          className={`flex-1 py-3 border rounded-xl flex flex-col items-center cursor-pointer transition select-none ${
                            selectedMood === mood 
                              ? 'bg-[#f0fdf4] border-[#439c47] text-[#2f7a37]' 
                              : 'bg-white border-gray-150 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-xl mb-1">{smileys[mood]}</span>
                          <span className="text-[9px] font-bold">{mood}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isAnalyzing}
                  className="w-full bg-[#439c47] hover:bg-[#38843c] active:scale-[0.99] text-white text-xs font-semibold py-3.5 px-4 rounded-xl transition duration-200 cursor-pointer border-none shadow-sm shadow-green-50 text-center flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Analyzing sentiment...
                    </>
                  ) : "Analyze & Save Entry"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center py-10 text-center">
                <button 
                  onClick={() => alert("Recording voice journal entry... Speak now.")}
                  className="w-16 h-16 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center hover:scale-105 active:scale-95 shadow-md border-none cursor-pointer transition duration-200 mb-4"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <h4 className="font-bold text-gray-900 text-sm mb-1 font-sans">Tap to start voice recording</h4>
                <p className="text-gray-400 text-xs font-light">Speak naturally. We'll transcribe it and perform emotional tracking.</p>
              </div>
            )}

            {/* Analysis Result Display */}
            {journalAnalysis && (
              <div className="mt-8 border border-green-100 bg-[#f4fdf5]/40 rounded-2xl p-5 animate-fade-in text-left">
                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4 select-none">
                  Emotional Pulse Assessment
                </h4>
                
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div className="bg-white border border-green-50 p-3.5 rounded-xl text-center">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Sentiment</span>
                    <span className="text-[11px] font-bold text-green-700 leading-tight">{journalAnalysis.sentiment}</span>
                  </div>
                  <div className="bg-white border border-green-50 p-3.5 rounded-xl text-center">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Focus Level</span>
                    <span className="text-[11px] font-bold text-green-700 leading-tight">{journalAnalysis.focusScore}</span>
                  </div>
                  <div className="bg-white border border-green-50 p-3.5 rounded-xl text-center">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Somatic State</span>
                    <span className="text-[11px] font-bold text-green-700 leading-tight">{journalAnalysis.somaticState}</span>
                  </div>
                </div>

                <div className="bg-white border border-green-50 p-4 rounded-xl">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">AI Coaching Insight</span>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">{journalAnalysis.insight}</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 7: PERSONAL GROWTH COURSES */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">
              Personal Growth Courses
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Structured learning pathways designed by clinical psychologists and productivity experts.
            </p>
          </div>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Viewing all growth courses catalog..."); }}
            className="text-xs text-[#3e9447] hover:underline font-bold shrink-0"
          >
            View All
          </a>
        </div>

        {/* Grid of Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseItems.map((course) => {
            const isEnrolled = enrolledCourses.includes(course.id)
            return (
              <div 
                key={course.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full bg-gray-50 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{course.title}</h4>
                    <p className="text-gray-400 text-[10px] font-medium">{course.format}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <button 
                    onClick={() => toggleEnroll(course.id)}
                    className={`w-full text-xs font-semibold py-2.5 rounded-full transition duration-200 border-none cursor-pointer text-center ${
                      isEnrolled 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-[#439c47] hover:bg-[#38843c] text-white shadow-2xs'
                    }`}
                  >
                    {isEnrolled ? "Enrolled ✓" : "Enroll"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

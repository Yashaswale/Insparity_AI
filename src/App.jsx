import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import PersonalisedAssessments from './components/PersonalisedAssessments'
import ExecutiveFunctionCoach from './components/ExecutiveFunctionCoach'
import FocusTools from './components/FocusTools'
import AdhdLearningPathways from './components/AdhdLearningPathways'
import BehaviouralPatternTracking from './components/BehaviouralPatternTracking'
import AiWellnessCoach from './components/AiWellnessCoach'
import AudioTextJournal from './components/AudioTextJournal'
import EmdrSomaticGuides from './components/EmdrSomaticGuides'
import CrisisProtocol from './components/CrisisProtocol'
import GroundingExercises from './components/GroundingExercises'
import TraumaInformedLearning from './components/TraumaInformedLearning'
import LifeTransitionCoaching from './components/LifeTransitionCoaching'
import PensionGuidance from './components/PensionGuidance'
import AiRetirementAdvisor from './components/AiRetirementAdvisor'
import Auth from './components/Auth'
import PersonalGrowthPortal from './components/PersonalGrowthPortal'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  // Ambient sound states
  const [activeAmbientSound, setActiveAmbientSound] = useState(null)
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false)
  const [ambientVolume, setAmbientVolume] = useState(0.5)

  // Handle ambient sound playback trigger
  useEffect(() => {
    const audio = document.getElementById('global-ambient-audio')
    if (!audio) return

    if (isAmbientPlaying && activeAmbientSound) {
      audio.play().catch(err => {
        console.warn('Audio playback was prevented by browser policy. Interacting with the page is required first.', err)
      })
    } else {
      audio.pause()
    }
  }, [isAmbientPlaying, activeAmbientSound])

  // Handle ambient sound volume level
  useEffect(() => {
    const audio = document.getElementById('global-ambient-audio')
    if (audio) {
      audio.volume = ambientVolume
    }
  }, [ambientVolume])

  // Helper to scroll to top whenever page changes
  const handleSetPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleAuthSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
    handleSetPage('home')
  }

  // If we are on login or signup pages, render full-screen Auth component
  if (currentPage === 'login' || currentPage === 'signup') {
    return (
      <Auth 
        initialStep={currentPage} 
        onAuthSuccess={handleAuthSuccess} 
        setCurrentPage={handleSetPage} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        setCurrentPage={handleSetPage} 
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        handleLogout={handleLogout}
        activeAmbientSound={activeAmbientSound}
        setActiveAmbientSound={setActiveAmbientSound}
        isAmbientPlaying={isAmbientPlaying}
        setIsAmbientPlaying={setIsAmbientPlaying}
        ambientVolume={ambientVolume}
        setAmbientVolume={setAmbientVolume}
      />
      
      {currentPage === 'home' && (
        isLoggedIn ? (
          <PersonalGrowthPortal 
            activeAmbientSound={activeAmbientSound}
            setActiveAmbientSound={setActiveAmbientSound}
            isAmbientPlaying={isAmbientPlaying}
            setIsAmbientPlaying={setIsAmbientPlaying}
            ambientVolume={ambientVolume}
            setAmbientVolume={setAmbientVolume}
          />
        ) : (
          <Home 
            activeAmbientSound={activeAmbientSound}
            setActiveAmbientSound={setActiveAmbientSound}
            isAmbientPlaying={isAmbientPlaying}
            setIsAmbientPlaying={setIsAmbientPlaying}
            ambientVolume={ambientVolume}
            setAmbientVolume={setAmbientVolume}
          />
        )
      )}
      {currentPage === 'personalised-assessments' && <PersonalisedAssessments />}
      {currentPage === 'executive-function-coach' && <ExecutiveFunctionCoach />}
      {currentPage === 'focus-tools' && <FocusTools />}
      {currentPage === 'adhd-learning-pathways' && <AdhdLearningPathways />}
      {currentPage === 'behavioural-pattern-tracking' && <BehaviouralPatternTracking />}
      {currentPage === 'ai-wellness-coach' && <AiWellnessCoach />}
      {currentPage === 'audio-text-journal' && <AudioTextJournal />}
      {currentPage === 'emdr-somatic-guides' && <EmdrSomaticGuides />}
      {currentPage === 'crisis-protocol' && <CrisisProtocol />}
      {currentPage === 'grounding-exercises' && <GroundingExercises />}
      {currentPage === 'trauma-informed-learning' && <TraumaInformedLearning />}
      {currentPage === 'life-transition-coaching' && <LifeTransitionCoaching />}
      {currentPage === 'pension-guidance' && <PensionGuidance />}
      {currentPage === 'ai-retirement-advisor' && <AiRetirementAdvisor />}
      
      <Footer setCurrentPage={handleSetPage} />

      {/* Hidden audio element for global looping ambient sound */}
      <audio 
        id="global-ambient-audio"
        src={activeAmbientSound ? `/sounds/${activeAmbientSound}.mp3` : undefined}
        loop
      />
    </div>
  )
}

export default App


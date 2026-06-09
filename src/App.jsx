import { useState } from 'react'
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

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Helper to scroll to top whenever page changes
  const handleSetPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar setCurrentPage={handleSetPage} />
      
      {currentPage === 'home' && <Home />}
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
    </div>
  )
}

export default App


import meditatingMat from '../assets/meditating_mat.png'
import neuralNet from '../assets/neural_net.png'

export default function GroundingExercises() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen py-10 selection:bg-green-100 selection:text-green-800">
      
      {/* SECTION 1: HERO & METRICS */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Title & Description */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Calm Your Mind & Regulate<br />Your Emotions
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Discover a library of clinically-informed grounding techniques and nervous system tools designed to help you stay present when the world feels loud.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Balance & Stress cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Balance */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs">
                <span className="text-base text-gray-400 block mb-3">📊</span>
                <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider mb-1">Balance</span>
                <span className="text-2xl font-bold text-gray-900">82%</span>
              </div>

              {/* Stress */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs">
                <span className="text-base text-red-400 block mb-3">❤️</span>
                <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider mb-1">Stress</span>
                <span className="text-2xl font-bold text-gray-900">Low</span>
              </div>
            </div>

            {/* Guided Breathing dropdown block */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold text-gray-450 uppercase block mb-1">GUIDED BREATHING</span>
                <h4 className="font-bold text-gray-900 text-lg leading-tight">Box Breathing</h4>
                <span className="text-[10px] text-gray-400 mt-1 block font-semibold">5-Min Session</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#439c47]">
                🌬️
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: YOUR JOURNEY TO REGULATION */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Your Journey to Regulation</h2>
        
        {/* Step Flow Card */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 max-w-4xl mx-auto shadow-2xs flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Before */}
          <div className="flex-1 flex flex-col items-center">
            <span className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold mb-4">⚠️</span>
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">Before</h4>
            <p className="text-gray-450 text-[10px] leading-relaxed max-w-[150px] font-semibold mb-2">High cortisol, shallow breathing, racing thoughts.</p>
            <div className="w-12 h-1.5 bg-red-400 rounded-full"></div>
          </div>

          {/* Flow Arrow / Button */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
            <span className="text-gray-300 text-xs font-bold uppercase tracking-wider block">5 Min Session</span>
            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-2 px-6 rounded-full border-none shadow-2xs cursor-pointer flex items-center gap-1.5">
              Start Calm Session
              <span>➔</span>
            </button>
          </div>

          {/* After */}
          <div className="flex-1 flex flex-col items-center">
            <span className="w-8 h-8 rounded-full bg-green-50 text-[#439c47] flex items-center justify-center text-xs font-bold mb-4">✓</span>
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">After</h4>
            <p className="text-gray-455 text-[10px] leading-relaxed max-w-[150px] font-semibold mb-2">Restored vagal tone, steady pulse, focused presence.</p>
            <div className="w-12 h-1.5 bg-green-450 rounded-full"></div>
          </div>

        </div>
      </section>

      {/* SECTION 3: TOOLS DESIGNED TO HELP YOU FEEL PRESENT & SAFE */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Tools Designed to Help You Feel Present & Safe
            </h2>
            
            <div className="space-y-6 max-w-xl text-left">
              <div className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-gray-50 text-gray-650 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Recognize Overwhelm</h4>
                  <p className="text-gray-450 text-xs font-semibold leading-relaxed">Gentle AI detection helps you notice stress before it peaks.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-gray-50 text-gray-650 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Apply Grounding</h4>
                  <p className="text-gray-450 text-xs font-semibold leading-relaxed">Use the 5-4-3-2-1 technique to tether back to reality.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-gray-50 text-gray-650 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Calm Regained</h4>
                  <p className="text-gray-450 text-xs font-semibold leading-relaxed">Notice the heart rate lowering and focus returning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-[32px] overflow-hidden shadow-xs border border-gray-100">
            <img src={meditatingMat} alt="Meditating on a mat" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: AI SUGGESTION & NERVOUS SYSTEM REGULATION */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* AI Suggestion Left Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[28px] p-8 shadow-2xs flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[9px] font-bold text-gray-400 block mb-4 uppercase tracking-wider">AI SUGGESTION</span>
              <div className="flex gap-3 items-start mb-6">
                <span className="w-6 h-6 rounded-full bg-green-50 text-[#439c47] flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                <p className="text-gray-800 text-xs font-semibold leading-relaxed">
                  Based on your heart rate trends, I recommend a 2-minute Grounding Sequence before your next meeting.
                </p>
              </div>
            </div>
            <button className="bg-[#439c47] hover:bg-[#38843c] text-white text-xs font-semibold py-3 px-6 rounded-full cursor-pointer transition border-none shadow-2xs">
              Accept Suggestion
            </button>
          </div>

          {/* Nervous System Regulation Right Card (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#fbfdfb] border border-green-100/30 rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 items-center shadow-2xs min-h-[220px]">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-3">Nervous System Regulation</h3>
              <p className="text-gray-500 text-xs font-semibold leading-relaxed max-w-sm">
                Identify and soothe physiological responses to stress through vagus nerve stimulation and gentle somatic movements.
              </p>
            </div>
            
            {/* Synapse Illustration Area */}
            <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shadow-2xs border border-gray-100 flex-shrink-0 bg-black">
              <img src={neuralNet} alt="Neural net synapse illustration" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

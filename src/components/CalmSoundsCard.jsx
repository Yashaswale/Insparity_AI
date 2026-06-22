import { useState } from 'react'

export default function CalmSoundsCard({
  activeAmbientSound,
  setActiveAmbientSound,
  isAmbientPlaying,
  setIsAmbientPlaying,
  ambientVolume,
  setAmbientVolume
}) {
  const sounds = [
    { id: 'rain', name: 'Rain', icon: '🌧️' },
    { id: 'fire', name: 'Fire', icon: '🔥' },
    { id: 'ocean', name: 'Ocean', icon: '🌊' },
    { id: 'forest', name: 'Forest', icon: '🌲' }
  ]

  const handleTogglePlay = () => {
    if (!activeAmbientSound) {
      setActiveAmbientSound('rain')
    }
    setIsAmbientPlaying(!isAmbientPlaying)
  }

  const handleSoundSelect = (soundId) => {
    setActiveAmbientSound(soundId)
    setIsAmbientPlaying(true)
  }

  return (
    <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-5 shadow-2xl w-full max-w-[280px] text-gray-800 pointer-events-auto text-left select-none">
      {/* Title */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-green-600 text-sm">🎵</span>
        <h4 className="font-bold text-sm text-gray-900 leading-none">Clam sounds</h4>
      </div>
      <p className="text-gray-400 text-[10px] leading-tight mb-4 font-light">
        Background ambience to help you focus and settle.
      </p>

      {/* Sound selection items */}
      <div className="space-y-1.5 mb-4">
        {sounds.map((sound) => {
          const isActive = activeAmbientSound === sound.id
          return (
            <button
              key={sound.id}
              onClick={() => handleSoundSelect(sound.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold border transition text-left cursor-pointer ${
                isActive 
                  ? 'bg-[#f0fdf4] border-[#439c47] text-[#2f7a37]' 
                  : 'bg-white border-gray-100 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm select-none">{sound.icon}</span>
              <span>{sound.name}</span>
            </button>
          )
        })}
      </div>

      {/* Volume / Play Controls */}
      <div className="flex items-center gap-3 pt-2.5 border-t border-gray-50">
        <button
          onClick={handleTogglePlay}
          className="w-9 h-9 rounded-full bg-[#439c47] hover:bg-[#38843c] text-white flex items-center justify-center border-none cursor-pointer transition shrink-0"
        >
          {isAmbientPlaying && activeAmbientSound ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Volume slider */}
        <div className="flex items-center gap-2 flex-1">
          <span className="text-gray-400 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={ambientVolume}
            onChange={(e) => setAmbientVolume(parseFloat(e.target.value))}
            className="w-full h-1 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#439c47]"
          />
        </div>
      </div>
    </div>
  )
}

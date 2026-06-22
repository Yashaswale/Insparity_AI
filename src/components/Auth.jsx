import { useState, useEffect } from 'react'
import authBg from '../assets/auth_bg.png'

export default function Auth({ initialStep = 'signup', onAuthSuccess, setCurrentPage }) {
  const [authStep, setAuthStep] = useState(initialStep) // 'login', 'signup', 'verify-email', 'success'
  
  // Signup state with defaults matching mockup screenshots
  const [formData, setFormData] = useState({
    fullName: 'Sara Khan',
    email: 'sarakhan@gmail.com',
    phone: '',
    countryCode: 'AE +971',
    country: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  })

  // Login form state
  const [loginData, setLoginData] = useState({
    email: 'sarakhan@gmail.com',
    password: ''
  })

  // OTP Code fields (6 fields, defaults as empty)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  // Password visibility triggers
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)

  // Sync authStep with initialStep if the prop changes
  useEffect(() => {
    setAuthStep(initialStep)
  }, [initialStep])

  // Handle password default values clearing on focus
  useEffect(() => {
    // If the default mask is there, clear it when the user wants to type
    if (authStep === 'signup') {
      // Keep defaults as in mockups, but allow editing
    }
  }, [authStep])

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // Move to verification step
    setAuthStep('verify-email')
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    // In demo, login immediately succeeds and routes user home
    if (onAuthSuccess) {
      onAuthSuccess(loginData.email)
    }
    setCurrentPage('home')
  }

  const handleVerifySubmit = (e) => {
    e.preventDefault()
    // Move to success step
    setAuthStep('success')
  }

  const handleSuccessContinue = () => {
    if (onAuthSuccess) {
      onAuthSuccess(formData.email)
    }
    setCurrentPage('home')
  }

  // Handle OTP focus transition
  const handleOtpChange = (val, idx) => {
    if (!/^[0-9]?$/.test(val)) return // allow only single digit

    const newOtp = [...otp]
    newOtp[idx] = val
    setOtp(newOtp)

    // Automatically focus next input if typing a digit
    if (val !== '' && idx < 5) {
      const nextInput = document.getElementById(`otp-input-${idx + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && otp[idx] === '' && idx > 0) {
      // Focus previous input on backspace if current is empty
      const prevInput = document.getElementById(`otp-input-${idx - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handleResendCode = () => {
    alert("Verification code has been resent to: " + (formData.email || 'your email'))
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans">
      
      {/* Left Column (Mist/Forest Image Panel) */}
      <div 
        className="hidden lg:flex lg:w-[42%] xl:w-[40%] text-white relative flex-col justify-between p-16 bg-cover bg-center shrink-0 min-h-screen"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        {/* Soft dark/greenish overlay for rich aesthetics and contrast */}
        <div className="absolute inset-0 bg-[#0c1810]/35 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div></div> {/* Spacer to push main content down */}
          
          {/* Main benefits overview */}
          <div className="my-auto space-y-10">
            <h1 className="text-[32px] font-bold leading-tight tracking-tight max-w-sm font-sans">
              Personalized Growth, Wellness & Life Planning In One Place
            </h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-md font-light">
              Build healthier habits, improve focus, strengthen wellbeing, and create a more fulfilling future with AI-powered guidance and expert support.
            </p>
            
            {/* Features list */}
            <div className="space-y-6 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg className="w-5 h-5 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Choose Your Growth Plan</h4>
                  <p className="text-white/70 text-xs mt-0.5 font-light">Start your journey to growth and wellbeing.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg className="w-5 h-5 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9s0 0 0 0M7.5 12h9s0 0 0 0m-9 3.75h3m-3 1.5H12c.074 0 .148-.003.22-.008l3.41 3.41c.477.477 1.29.14 1.29-.532v-2.87c1.238-.344 2.08-1.464 2.08-2.75V6.75A2.25 2.25 0 0016.75 4.5H7.25A2.25 2.25 0 005 6.75v8.25a2.25 2.25 0 002.25 2.25h.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">5 Specialized AI Coaches</h4>
                  <p className="text-white/70 text-xs mt-0.5 font-light">Personalized support for wellness, ADHD, trauma, retirement, and life planning.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg className="w-5 h-5 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Private & Secure</h4>
                  <p className="text-white/70 text-xs mt-0.5 font-light">Your conversations, journals, and progress remain confidential.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer branding */}
          <div className="text-white/50 text-[11px] font-medium tracking-wide mt-8">
            Guided By Expertise. Powered By Insparity AI
          </div>
        </div>
      </div>

      {/* Right Column (Form Panel) */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-16 sm:px-12 md:px-20 bg-white min-h-screen overflow-y-auto">
        
        {/* VIEW 1: SIGN UP */}
        {authStep === 'signup' && (
          <div className="w-full max-w-[460px] animate-fade-in">
            {/* Header / Logo */}
            <div className="mb-8 select-none">
              <img src="/Insparity AI logo.png" alt="Insparity AI" className="h-10 w-auto object-contain" />
            </div>
            
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight mb-2 font-sans">
              Create your account
            </h2>
            <p className="text-gray-400 text-sm mb-8 font-light">
              A calm, private space for learning and emotional support. Takes under a minute.
            </p>
            
            {/* Form */}
            <form className="space-y-4" onSubmit={handleSignupSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Full name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Sara Khan" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="sarakhan@gmail.com" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Mobile number</label>
                <div className="flex gap-2.5">
                  <div className="relative shrink-0">
                    <select 
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      className="appearance-none bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-4 pr-10 text-sm text-gray-900 outline-none cursor-pointer transition duration-200 shadow-2xs"
                    >
                      <option value="AE +971">AE +971</option>
                      <option value="US +1">US +1</option>
                      <option value="GB +44">GB +44</option>
                      <option value="IN +91">IN +91</option>
                      <option value="SA +966">SA +966</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="50 123 4567" 
                    className="flex-1 bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Country</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </span>
                  <select 
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full appearance-none bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-10 text-sm text-gray-950 outline-none cursor-pointer transition duration-200 shadow-2xs"
                  >
                    <option value="" className="text-gray-400">Select your country</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="India">India</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Create password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a5 5 0 11-7.07-7.07l1.41-1.41a5 5 0 00.22 7.07l2.83-2.83a5 5 0 007.07-.22l-1.41 1.41a5 5 0 01-7.07 0l-2.83 2.83z" />
                    </svg>
                  </span>
                  <input 
                    type={showPassword1 ? "text" : "password"} 
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="••••••••••" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword1(!showPassword1)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    {showPassword1 ? (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-2.228-2.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Confirm password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a5 5 0 11-7.07-7.07l1.41-1.41a5 5 0 00.22 7.07l2.83-2.83a5 5 0 007.07-.22l-1.41 1.41a5 5 0 01-7.07 0l-2.83 2.83z" />
                    </svg>
                  </span>
                  <input 
                    type={showPassword2 ? "text" : "password"} 
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="••••••••••" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    {showPassword2 ? (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-2.228-2.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1.5 select-none">
                <input 
                  id="agree-terms"
                  type="checkbox" 
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                  className="w-4.5 h-4.5 rounded border-gray-300 text-[#439c47] focus:ring-[#439c47] cursor-pointer mt-0.5 accent-[#439c47]"
                />
                <label htmlFor="agree-terms" className="text-xs text-gray-500 font-light leading-relaxed cursor-pointer">
                  I agree to the <span className="text-[#3e9447] font-semibold hover:underline">Terms & Privacy Policy</span>
                </label>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                className="w-full bg-[#439c47] hover:bg-[#38843c] active:scale-[0.99] text-white text-sm font-semibold py-3.5 px-4 rounded-xl transition duration-200 cursor-pointer border-none shadow-md shadow-green-100/10 mt-3"
              >
                Create account
              </button>
            </form>
            
            <div className="text-center mt-6 text-xs text-gray-500 font-light">
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={() => setAuthStep('login')}
                className="text-[#3e9447] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Sign in
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: VERIFY EMAIL */}
        {authStep === 'verify-email' && (
          <div className="w-full max-w-[460px] animate-fade-in">
            {/* Back Button */}
            <button 
              type="button"
              onClick={() => setAuthStep('signup')}
              className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 mb-8 bg-white cursor-pointer transition shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight mb-2 font-sans">
              Verify your email
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
              We sent a 6-digit code to <span className="font-semibold text-gray-900">{formData.email}</span>. Enter it below to continue.
            </p>
            
            {/* 6 Digit Input Boxes */}
            <div className="flex gap-2.5 justify-between mb-4">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  id={`otp-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                  className="w-12 h-14 sm:w-14 sm:h-14 bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl text-center text-xl font-bold text-gray-900 outline-none transition shadow-2xs"
                />
              ))}
            </div>
            
            {/* Resend Actions */}
            <div className="flex justify-between items-center text-xs text-gray-400 mb-8 select-none">
              <span>Didn't get it</span>
              <button 
                type="button"
                onClick={handleResendCode}
                className="text-[#3e9447] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Resend Code
              </button>
            </div>
            
            {/* Submit Verify */}
            <button 
              type="button"
              onClick={handleVerifySubmit}
              className="w-full bg-[#439c47] hover:bg-[#38843c] active:scale-[0.99] text-white text-sm font-semibold py-3.5 px-4 rounded-xl transition duration-200 cursor-pointer border-none shadow-md shadow-green-100/10"
            >
              Verify & Continue
            </button>
          </div>
        )}

        {/* VIEW 3: SUCCESS (YOU'RE ALL SET) */}
        {authStep === 'success' && (
          <div className="w-full max-w-[460px] flex flex-col items-center text-center animate-fade-in">
            {/* Green circle with white check */}
            <div className="w-16 h-16 rounded-full bg-[#439c47] flex items-center justify-center text-white mb-8 shadow-md shadow-green-100/10">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight mb-2 font-sans">
              You're all set <span className="inline-block">🌿</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light max-w-sm">
              Your email is verified. Let's set up your space.
            </p>
            
            {/* Success Continue */}
            <button 
              type="button"
              onClick={handleSuccessContinue}
              className="bg-[#439c47] hover:bg-[#38843c] active:scale-[0.99] text-white text-sm font-semibold py-3 px-8 rounded-xl transition duration-200 cursor-pointer border-none shadow-md shadow-green-100/10"
            >
              Continue to Insparity
            </button>
          </div>
        )}

        {/* VIEW 4: LOGIN / SIGN IN */}
        {authStep === 'login' && (
          <div className="w-full max-w-[460px] animate-fade-in">
            {/* Header / Logo */}
            <div className="mb-8 select-none">
              <img src="/Insparity AI logo.png" alt="Insparity AI" className="h-10 w-auto object-contain" />
            </div>
            
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight mb-2 font-sans">
              Welcome back
            </h2>
            <p className="text-gray-400 text-sm mb-8 font-light">
              A calm, private space for learning and emotional support.
            </p>
            
            {/* Form */}
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input 
                    type="email" 
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    placeholder="sarakhan@gmail.com" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-1.5 select-none">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">Password</label>
                  <button 
                    type="button" 
                    className="text-xs text-[#3e9447] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0 focus:outline-none"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a5 5 0 11-7.07-7.07l1.41-1.41a5 5 0 00.22 7.07l2.83-2.83a5 5 0 007.07-.22l-1.41 1.41a5 5 0 01-7.07 0l-2.83 2.83z" />
                    </svg>
                  </span>
                  <input 
                    type={showLoginPassword ? "text" : "password"} 
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    placeholder="••••••••••" 
                    className="w-full bg-white border border-gray-200 focus:border-[#439c47] focus:ring-1 focus:ring-[#439c47] rounded-xl py-3 pl-11 pr-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition duration-200 shadow-2xs"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    {showLoginPassword ? (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-2.228-2.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Login */}
              <button 
                type="submit" 
                className="w-full bg-[#439c47] hover:bg-[#38843c] active:scale-[0.99] text-white text-sm font-semibold py-3.5 px-4 rounded-xl transition duration-200 cursor-pointer border-none shadow-md shadow-green-100/10 mt-3"
              >
                Sign in
              </button>
            </form>
            
            <div className="text-center mt-6 text-xs text-gray-500 font-light">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={() => setAuthStep('signup')}
                className="text-[#3e9447] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Sign up
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

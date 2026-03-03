import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Apple, Chrome } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

export default function Login() {
  const navigate = useNavigate()
  const { dark } = useTheme()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeTerms: false,
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions')
      return
    }
    setLoading(true)
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 500)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Signing up with ${provider}`)
    
  }

  return (
    <div className={`h-screen flex overflow-hidden transition-colors duration-300 ${
      dark
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black'
        : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50'
    }`}>
      
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className={`hidden lg:flex lg:w-1/2 flex-col justify-center px-12 transition-colors duration-300 ${
        dark ? '' : 'text-gray-900'
      }`}>
        <div className="max-w-md">
          
          <div className="mb-12">
            <h1 className={`text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>APS</h1>
            <p className={`text-xl ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
              Advanced Penetration Scanner
            </p>
          </div>

          
          <p className={`text-lg leading-relaxed mb-12 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Enterprise-grade security vulnerability scanning and reporting. Identify and mitigate risks before they become threats.
          </p>

          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
              <div>
                <h3 className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  Comprehensive Scanning
                </h3>
                <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Deep vulnerability analysis across your infrastructure
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
              <div>
                <h3 className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>Real-time Reporting</h3>
                <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Instant alerts and detailed vulnerability reports
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
              <div>
                <h3 className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>Compliance Ready</h3>
                <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Meet OWASP, NIST, and industry standards
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
              <div>
                <h3 className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>Expert Support</h3>
                <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  24/7 security experts at your service
                </p>
              </div>
            </div>
          </div>

          
          <div className={`mt-16 pt-8 border-t ${dark ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-600'}`}>
              Trusted by security teams worldwide
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          
          <div className={`rounded-2xl shadow-2xl p-8 md:p-10 transition-colors duration-300 ${
            dark
              ? 'bg-white text-gray-900'
              : 'bg-white text-gray-900 border border-gray-100'
          }`}>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Join the security revolution</p>
            </div>

            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              
              <div className="flex items-start gap-3 pt-2">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500 cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-600 cursor-pointer">
                  I agree to the <span className="text-cyan-600 font-medium hover:underline">Terms of Service</span> and{' '}
                  <span className="text-cyan-600 font-medium hover:underline">Privacy Policy</span>
                </label>
              </div>

              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6 shadow-lg"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            
            <div className="grid grid-cols-3 gap-3 mb-6">
              
              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                aria-label="Sign up with Apple"
              >
                <Apple className="w-5 h-5 text-gray-700" />
              </button>

             
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                aria-label="Sign up with Google"
              >
                <Chrome className="w-5 h-5 text-gray-700" />
              </button>

              
              <button
                type="button"
                onClick={() => handleSocialLogin('Meta')}
                className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                aria-label="Sign up with Meta"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </button>
            </div>

            
            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-cyan-600 font-medium hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
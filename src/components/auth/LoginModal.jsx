import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const LoginModal = ({ onClose, onJoinNowClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes
      if (email === 'demo@example.com' && password === 'password') {
        onClose()
      } else {
        setError('Invalid email or password')
      }
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative bg-dark-100 rounded-lg w-full max-w-md p-6 mx-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <FiX size={24} />
          </button>
        </div>
        
        {error && (
          <div className="bg-error-700 bg-opacity-20 border border-error-700 text-error-500 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-200 text-white w-full px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-dark-200 text-white w-full px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-slate-700 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                Remember me
              </label>
            </div>
            
            <a href="#" className="text-sm text-accent-500 hover:text-accent-400">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full btn-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Don't have an account?{' '}
            <button 
              onClick={onJoinNowClick}
              className="text-accent-500 hover:text-accent-400 font-medium"
            >
              Join Now
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginModal
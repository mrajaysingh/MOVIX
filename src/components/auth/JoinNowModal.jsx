import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'

const JoinNowModal = ({ onClose, onLoginClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return
    }
    
    setIsLoading(true)
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      // In a real app, you would register the user and show a success message
    }, 1500)
  }

  const benefits = [
    'Unlimited access to all premium content',
    'Ad-free viewing experience',
    'New content added weekly',
    'Stream on multiple devices',
    'HD & 4K streaming quality'
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative bg-dark-100 rounded-lg w-full max-w-lg p-6 mx-auto shadow-xl overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Join Premium</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <FiX size={24} />
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-dark-200 to-slate-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gradient">Premium Benefits</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <FiCheck className="text-accent-500 mr-2 mt-1" />
                <span className="text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {error && (
          <div className="bg-error-700 bg-opacity-20 border border-error-700 text-error-500 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="sign-up-email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="sign-up-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-200 text-white w-full px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="sign-up-password" className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              id="sign-up-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-dark-200 text-white w-full px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-dark-200 text-white w-full px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-slate-700 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-slate-300">
                I agree to the <a href="#" className="text-accent-500 hover:text-accent-400">Terms of Service</a> and <a href="#" className="text-accent-500 hover:text-accent-400">Privacy Policy</a>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full btn-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Already have an account?{' '}
            <button 
              onClick={onLoginClick}
              className="text-accent-500 hover:text-accent-400 font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default JoinNowModal
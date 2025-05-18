import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container-custom">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-6 inline-block">
              <span className="text-9xl font-bold text-accent-600">404</span>
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary-500 rounded-full blur-3xl opacity-20"></div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
            
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-primary py-3 px-8">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
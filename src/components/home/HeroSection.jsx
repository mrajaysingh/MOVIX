import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPlay, FiPlus } from 'react-icons/fi'

const HeroSection = () => {
  const videoRef = useRef(null)
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error)
      })
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-dark-300 bg-opacity-60 z-10"></div>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        poster="https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="container-custom relative z-20 mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl px-4 sm:px-0"
        >
          <span className="inline-block px-3 py-1 bg-accent-600 bg-opacity-90 text-white text-xs sm:text-sm font-medium rounded-full mb-4">
            PREMIUM EXCLUSIVE
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Epic Adventures in Paradise Island
          </h1>
          
          <p className="text-lg sm:text-xl text-white text-opacity-90 mb-6 sm:mb-8 max-w-xl">
            Journey through breathtaking landscapes and experience thrilling adventures in this premium exclusive series.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/video/paradise-island-1" 
              className="btn-primary py-3 px-6 w-full sm:w-auto text-center"
            >
              <FiPlay className="mr-2 inline-block" /> Watch Now
            </Link>
            
            <button className="btn-secondary py-3 px-6 w-full sm:w-auto text-center">
              <FiPlus className="mr-2 inline-block" /> Add to Watchlist
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-300 to-transparent"></div>
    </section>
  )
}

export default HeroSection
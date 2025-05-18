import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPlay, FiPlus, FiStar } from 'react-icons/fi'

const ContentCard = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="card group relative touch-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Link to={`/video/${content.id}`} className="block relative aspect-[2/3] overflow-hidden rounded-t-lg">
        <img 
          src={content.thumbnail} 
          alt={content.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Rating */}
        <div className="absolute top-2 right-2 bg-dark-300 bg-opacity-90 text-accent-500 text-xs sm:text-sm font-medium rounded-full flex items-center px-2 py-1">
          <FiStar className="mr-1" /> {content.rating}
        </div>
        
        {/* Premium badge */}
        {content.isPremium && (
          <div className="absolute top-2 left-2 bg-accent-600 text-white text-xs font-medium rounded-full px-2 py-1">
            PREMIUM
          </div>
        )}
        
        {/* Play overlay - Always visible on mobile, hover on desktop */}
        <div className={`absolute inset-0 bg-dark-300 bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-0'
        } sm:hover:opacity-100`}>
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <button className="bg-accent-600 hover:bg-accent-700 text-white p-2 sm:p-3 rounded-full">
              <FiPlay size={20} />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg font-medium text-white line-clamp-1">
            <Link to={`/video/${content.id}`} className="hover:text-accent-500 transition-colors">
              {content.title}
            </Link>
          </h3>
          
          <button className="text-slate-400 hover:text-white p-1" aria-label="Add to watchlist">
            <FiPlus size={16} sm:size={18} />
          </button>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-400 mb-2 line-clamp-1">
          {content.duration} • {content.year}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {content.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-dark-200 text-slate-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ContentCard
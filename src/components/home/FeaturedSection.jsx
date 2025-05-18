import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ContentCard from '../ui/ContentCard'
import { featuredContent } from '../../data/content'

const FeaturedSection = ({ title, subtitle }) => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = { mobile: 1, tablet: 2, desktop: 4 }
  
  const slideLeft = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }
  
  const slideRight = () => {
    setStartIndex((prev) => 
      Math.min(
        featuredContent.length - visibleCount.desktop, 
        prev + 1
      )
    )
  }

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={slideLeft}
              disabled={startIndex === 0}
              className={`p-2 rounded-full border border-slate-700 ${
                startIndex === 0 
                  ? 'text-slate-600 cursor-not-allowed' 
                  : 'text-white hover:bg-slate-800'
              }`}
              aria-label="Previous"
            >
              <FiChevronLeft size={20} />
            </button>
            
            <button 
              onClick={slideRight}
              disabled={startIndex >= featuredContent.length - visibleCount.desktop}
              className={`p-2 rounded-full border border-slate-700 ${
                startIndex >= featuredContent.length - visibleCount.desktop
                  ? 'text-slate-600 cursor-not-allowed' 
                  : 'text-white hover:bg-slate-800'
              }`}
              aria-label="Next"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-4 md:space-x-6"
              initial={false}
              animate={{
                x: `calc(-${startIndex * 100}% / ${visibleCount.desktop})`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {featuredContent.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full min-w-[280px] sm:min-w-[320px] md:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)]"
                >
                  <ContentCard content={item} />
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(featuredContent.length / visibleCount.mobile) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIndex(i * visibleCount.mobile)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(startIndex / visibleCount.mobile) === i 
                      ? 'bg-accent-500' 
                      : 'bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
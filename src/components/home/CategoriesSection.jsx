import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ContentCard from '../ui/ContentCard'
import { categoryContent } from '../../data/content'

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('trending')
  
  const categories = [
    { id: 'trending', name: 'Trending' },
    { id: 'latest', name: 'Latest' },
    { id: 'popular', name: 'Popular' },
    { id: 'action', name: 'Action' },
    { id: 'drama', name: 'Drama' },
    { id: 'comedy', name: 'Comedy' },
  ]

  return (
    <section className="py-12 bg-dark-200">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Browse Categories
        </h2>
        
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent-600 text-white'
                    : 'bg-dark-100 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryContent[activeCategory].slice(0, 8).map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                to={`/categories/${activeCategory}`}
                className="btn-secondary py-3 px-6"
              >
                View All {categories.find(c => c.id === activeCategory)?.name}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CategoriesSection
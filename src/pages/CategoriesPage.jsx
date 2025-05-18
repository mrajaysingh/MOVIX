import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContentCard from '../components/ui/ContentCard'
import { categoryContent } from '../data/content'

const CategoriesPage = () => {
  const { category } = useParams()
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  
  // Filter options
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'popular', name: 'Popular' },
    { id: 'latest', name: 'Latest' },
    { id: 'premium', name: 'Premium Only' },
  ]
  
  useEffect(() => {
    // Simulate loading content
    setLoading(true)
    setTimeout(() => {
      const content = categoryContent[category] || []
      setContents(content)
      setLoading(false)
    }, 500)
  }, [category])
  
  // Apply filters
  const filteredContent = contents.filter(item => {
    if (filter === 'all') return true
    if (filter === 'premium') return item.isPremium
    if (filter === 'popular') return item.rating >= 4.5
    if (filter === 'latest') return item.year >= 2023
    return true
  })
  
  // Get category display name
  const getCategoryName = () => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {getCategoryName()} Videos
        </h1>
        <p className="text-slate-400 mb-8">
          Discover our collection of {getCategoryName().toLowerCase()} videos
        </p>
        
        {/* Filters */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 min-w-max pb-2">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-accent-600 text-white'
                    : 'bg-dark-100 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {filterOption.name}
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="animate-pulse-slow">
              <div className="w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : filteredContent.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredContent.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </motion.div>
        ) : (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium text-white mb-2">No Results Found</h3>
              <p className="text-slate-400">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoriesPage
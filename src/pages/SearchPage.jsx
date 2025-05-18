import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContentCard from '../components/ui/ContentCard'
import { featuredContent, categoryContent } from '../data/content'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  
  // Filter options
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'movies', name: 'Movies' },
    { id: 'series', name: 'Series' },
    { id: 'premium', name: 'Premium Only' },
  ]
  
  useEffect(() => {
    if (!query) return
    
    setLoading(true)
    
    // Simulate search results fetch
    setTimeout(() => {
      // Combine all content for search
      const allContent = [
        ...featuredContent,
        ...Object.values(categoryContent).flat(),
      ]
      
      // Filter for unique items by id
      const uniqueContent = Array.from(
        new Map(allContent.map(item => [item.id, item])).values()
      )
      
      // Search in title and tags
      const filtered = uniqueContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase())
        const tagsMatch = item.tags.some(tag => 
          tag.toLowerCase().includes(query.toLowerCase())
        )
        return titleMatch || tagsMatch
      })
      
      setResults(filtered)
      setLoading(false)
    }, 600)
  }, [query])
  
  // Apply filters
  const filteredResults = results.filter(item => {
    if (filter === 'all') return true
    if (filter === 'premium') return item.isPremium
    if (filter === 'movies') return item.type === 'movie'
    if (filter === 'series') return item.type === 'series'
    return true
  })

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Search Results
        </h1>
        <p className="text-slate-400 mb-8">
          {results.length} results for "{query}"
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
        ) : filteredResults.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredResults.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </motion.div>
        ) : (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium text-white mb-2">No Results Found</h3>
              <p className="text-slate-400">
                We couldn't find any matches for "{query}". Try different keywords or filters.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
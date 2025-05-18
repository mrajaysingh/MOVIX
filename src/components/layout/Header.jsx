import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Header = ({ isScrolled, onLoginClick, onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  
  const categories = [
    { name: 'Trending', path: '/categories/trending' },
    { name: 'Latest', path: '/categories/latest' },
    { name: 'Popular', path: '/categories/popular' },
    { name: 'Action', path: '/categories/action' },
    { name: 'Drama', path: '/categories/drama' },
    { name: 'Comedy', path: '/categories/comedy' },
  ]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-300 shadow-lg' : 'bg-gradient-to-b from-dark-300 to-transparent'}`}>
      <div className="container-custom py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={category.path}
                className="nav-link text-sm font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-dark-100 text-white rounded-full py-2 pl-4 pr-10 w-32 lg:w-56 focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <FiSearch size={18} />
              </button>
            </form>
            
            <button 
              onClick={onLoginClick}
              className="nav-link flex items-center text-sm font-medium"
            >
              <FiUser className="mr-1" /> Login
            </button>
            
            <button 
              onClick={onJoinClick}
              className="btn-primary text-sm"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-200 border-t border-slate-800"
          >
            <div className="container-custom py-4">
              <form 
                onSubmit={handleSearchSubmit}
                className="relative mb-4"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-dark-100 text-white rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <FiSearch size={18} />
                </button>
              </form>
              
              <nav className="flex flex-col space-y-3 mb-4">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={category.path}
                    className="nav-link font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    onLoginClick()
                    setIsMenuOpen(false)
                  }}
                  className="btn-secondary py-3 text-base"
                >
                  Login
                </button>
                
                <button 
                  onClick={() => {
                    onJoinClick()
                    setIsMenuOpen(false)
                  }}
                  className="btn-primary py-3 text-base"
                >
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
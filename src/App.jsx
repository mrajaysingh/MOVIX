import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import MembershipPage from './pages/MembershipPage'
import VideoPage from './pages/VideoPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/categories/:category" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CategoriesPage />
            </motion.div>
          } />
          <Route path="/membership" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MembershipPage />
            </motion.div>
          } />
          <Route path="/video/:id" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VideoPage />
            </motion.div>
          } />
          <Route path="/search" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SearchPage />
            </motion.div>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  )
}

export default App
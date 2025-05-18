import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginModal from '../auth/LoginModal'
import JoinNowModal from '../auth/JoinNowModal'

const Layout = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isScrolled={isScrolled}
        onLoginClick={() => setShowLoginModal(true)}
        onJoinClick={() => setShowJoinModal(true)}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onJoinNowClick={() => {
            setShowLoginModal(false)
            setShowJoinModal(true)
          }}
        />
      )}
      
      {showJoinModal && (
        <JoinNowModal 
          onClose={() => setShowJoinModal(false)}
          onLoginClick={() => {
            setShowJoinModal(false)
            setShowLoginModal(true)
          }}
        />
      )}
    </div>
  )
}

export default Layout
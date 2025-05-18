import { Link } from 'react-router-dom'
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-slate-800 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-4 text-slate-400 text-sm">
              Premium streaming platform offering exclusive high-quality entertainment content for discerning viewers.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="YouTube">
                <FiYoutube size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categories/trending" className="text-slate-400 hover:text-white">Trending</Link></li>
              <li><Link to="/categories/latest" className="text-slate-400 hover:text-white">Latest</Link></li>
              <li><Link to="/categories/popular" className="text-slate-400 hover:text-white">Popular</Link></li>
              <li><Link to="/categories/action" className="text-slate-400 hover:text-white">Action</Link></li>
              <li><Link to="/categories/drama" className="text-slate-400 hover:text-white">Drama</Link></li>
              <li><Link to="/categories/comedy" className="text-slate-400 hover:text-white">Comedy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white">Careers</Link></li>
              <li><Link to="/press" className="text-slate-400 hover:text-white">Press</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
              <li><Link to="/help" className="text-slate-400 hover:text-white">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-slate-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-slate-400 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/guidelines" className="text-slate-400 hover:text-white">Content Guidelines</Link></li>
              <li><Link to="/dmca" className="text-slate-400 hover:text-white">DMCA</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PremiumStream. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/faq" className="text-slate-400 hover:text-white">FAQ</Link>
            <Link to="/sitemap" className="text-slate-400 hover:text-white">Sitemap</Link>
            <Link to="/membership" className="text-slate-400 hover:text-white">Membership</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
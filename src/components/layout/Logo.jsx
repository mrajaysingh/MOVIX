import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 bg-accent-600 rounded">
        <span className="text-white font-bold text-base sm:text-lg">MX</span>
      </div>
      <span className="ml-2 text-lg sm:text-xl font-bold text-white">MOVIX</span>
    </Link>
  )
}

export default Logo
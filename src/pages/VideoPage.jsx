import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize, FiPlus, FiShare2, FiThumbsUp, FiClock } from 'react-icons/fi'
import ContentCard from '../components/ui/ContentCard'
import { featuredContent } from '../data/content'

const VideoPage = () => {
  const { id } = useParams()
  const [video, setVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef(null)
  const controlsTimeoutRef = useRef(null)
  
  // Get video data
  useEffect(() => {
    setLoading(true)
    
    // Simulate fetching video data
    setTimeout(() => {
      const foundVideo = featuredContent.find(v => v.id === id) || featuredContent[0]
      setVideo(foundVideo)
      setLoading(false)
    }, 800)
  }, [id])
  
  // Handle video controls
  useEffect(() => {
    if (!videoRef.current) return
    
    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime)
      setDuration(videoRef.current.duration)
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
    
    const handleEnded = () => {
      setIsPlaying(false)
    }
    
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
    videoRef.current.addEventListener('ended', handleEnded)
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        videoRef.current.removeEventListener('ended', handleEnded)
      }
    }
  }, [videoRef.current])
  
  // Hide controls after inactivity
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)
      
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
      }, 3000)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [isPlaying])
  
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  
  const toggleMute = () => {
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }
  
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }
  
  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }
  
  // Format time (mm:ss)
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  // Similar videos
  const similarVideos = featuredContent.filter(v => v.id !== id).slice(0, 4)

  return (
    <div className="pt-16 pb-16">
      {loading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="animate-pulse-slow">
            <div className="w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      ) : video && (
        <div>
          {/* Video Player */}
          <div className="relative bg-black aspect-video">
            {/* Poster image shown before play */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button 
                    onClick={togglePlay}
                    className="bg-accent-600 hover:bg-accent-700 text-white p-6 rounded-full transition-transform hover:scale-110"
                  >
                    <FiPlay size={32} />
                  </button>
                </div>
              </div>
            )}
            
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full"
              poster={video.thumbnail}
              onClick={togglePlay}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video controls */}
            <div 
              className={`absolute inset-0 z-20 flex flex-col justify-end transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-gradient-to-t from-black to-transparent p-4">
                {/* Progress bar */}
                <div 
                  className="relative h-1 bg-slate-700 rounded mb-4 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="absolute top-0 left-0 h-full bg-accent-600 rounded"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-accent-500 transition-colors"
                    >
                      {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                    </button>
                    
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-accent-500 transition-colors"
                    >
                      {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
                    </button>
                    
                    <div className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handleFullscreen}
                      className="text-white hover:text-accent-500 transition-colors"
                    >
                      <FiMaximize size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="container-custom mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-dark-100 rounded-lg p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {video.title}
                  </h1>
                  
                  <div className="flex items-center text-sm text-slate-400 mb-4">
                    <span>{video.year}</span>
                    <span className="mx-2">•</span>
                    <span>{video.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <FiThumbsUp className="mr-1" /> {video.rating}/5
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {video.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/categories/${tag.toLowerCase()}`}
                        className="bg-dark-200 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-accent-600 hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-6">
                    {video.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.'}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="btn-primary">
                      <FiPlay className="mr-2" /> Play
                    </button>
                    
                    <button className="btn-secondary">
                      <FiPlus className="mr-2" /> Add to List
                    </button>
                    
                    <button className="btn-secondary">
                      <FiClock className="mr-2" /> Watch Later
                    </button>
                    
                    <button className="btn-secondary">
                      <FiShare2 className="mr-2" /> Share
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Similar Videos
                </h2>
                
                <div className="space-y-4">
                  {similarVideos.map((item) => (
                    <Link 
                      key={item.id}
                      to={`/video/${item.id}`}
                      className="flex bg-dark-100 rounded-lg overflow-hidden hover:bg-dark-200 transition-colors duration-200"
                    >
                      <div className="w-1/3 aspect-video">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="w-2/3 p-3">
                        <h3 className="text-white font-medium mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {item.duration} • {item.year}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* More from this category */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                More From {video.tags[0]}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredContent.slice(0, 4).map((item) => (
                  <ContentCard key={item.id} content={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPage
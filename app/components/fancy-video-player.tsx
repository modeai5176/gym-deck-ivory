"use client"

import React, { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

interface FancyVideoPlayerProps {
  src: string
  title: string
  poster?: string
}

export default function FancyVideoPlayer({ src, title, poster }: FancyVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  const handleMouseEnter = () => {
    setShowControls(true)
  }

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false)
    }
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer overflow-hidden rounded-xl bg-black"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        poster={poster}
        muted
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Custom Overlay Controls */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 ${!isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        
        {/* Play/Pause Button - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          >
            {isPlaying ? (
              <Pause className="text-black ml-0" size={32} />
            ) : (
              <Play className="text-black ml-1" size={32} />
            )}
          </button>
        </div>



        {/* Loading/Play Indicator */}
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
} 
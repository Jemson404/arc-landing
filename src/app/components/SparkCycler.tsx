'use client'

import { useState, useEffect } from 'react'

interface Spark {
  spark: string
}

const sparks: Spark[] = [
  { spark: "You don't need more answers — you need fewer, better questions." },
  { spark: "The opposite of distraction isn't focus; it's meaning." },
  { spark: "When ARC-0 listens, ARC-1 dares. Balance is intelligence." },
  { spark: "If it must be loud to be heard, it isn't your truth." },
  { spark: "You are not lost — you are looping until you listen." },
  { spark: "The mirror doesn't judge; it translates." },
]

export default function SparkCycler() {
  const [currentSparkIndex, setCurrentSparkIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAutomatic, setIsAutomatic] = useState(true)

  // Auto-cycle every 10 seconds
  useEffect(() => {
    if (!isAutomatic) return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSparkIndex((prev) => (prev + 1) % sparks.length)
        setIsVisible(true)
      }, 300) // Short fade out duration
    }, 10000)

    return () => clearInterval(interval)
  }, [isAutomatic])

  const generateRandomSpark = () => {
    setIsAutomatic(false) // Stop auto-cycling when user interacts
    setIsVisible(false)
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sparks.length)
      setCurrentSparkIndex(randomIndex)
      setIsVisible(true)
    }, 300)
    
    // Resume auto-cycling after 30 seconds of inactivity
    setTimeout(() => {
      setIsAutomatic(true)
    }, 30000)
  }

  return (
    <div className="text-center space-y-8">
      {/* Spark Display */}
      <div className="relative h-32 flex items-center justify-center">
        <div
          className={`transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="spark-symbol spark-pulse text-4xl">✦</span>
          </div>
          <blockquote className="text-lg md:text-xl text-foreground font-medium max-w-2xl mx-auto px-4">
            "{sparks[currentSparkIndex].spark}"
          </blockquote>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={generateRandomSpark}
          className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors duration-200"
        >
          Generate a Random Spark
        </button>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className={`transition-opacity ${isAutomatic ? 'opacity-100' : 'opacity-50'}`}>
            Auto-cycling {isAutomatic ? 'on' : 'paused'}
          </span>
          <div className="flex gap-1">
            {sparks.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSparkIndex
                    ? 'bg-accent scale-110'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
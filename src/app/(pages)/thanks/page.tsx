'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ThanksPage() {
  const sparkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple pulse animation for the spark
    const spark = sparkRef.current
    if (!spark) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      spark.style.opacity = '1'
      return
    }

    // Animate spark pulse
    let opacity = 0.6
    let direction = 1
    
    const animate = () => {
      opacity += direction * 0.01
      
      if (opacity >= 1) {
        direction = -1
      } else if (opacity <= 0.6) {
        direction = 1
      }
      
      spark.style.opacity = opacity.toString()
      requestAnimationFrame(animate)
    }
    
    animate()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Animated Spark */}
        <div className="flex justify-center mb-8">
          <div 
            ref={sparkRef}
            className="spark-symbol text-6xl md:text-8xl text-accent"
            style={{ opacity: 0.6 }}
            aria-hidden="true"
          >
            ✦
          </div>
        </div>

        {/* Thank you message */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Thank You
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your message has been received. I'll respond within 3-5 business days, 
            taking time to craft a thoughtful reply that honors your inquiry.
          </p>
          
          <p className="text-base text-muted-foreground">
            In the spirit of reflection over reaction, meaningful responses take time.
          </p>
        </div>

        {/* Next steps */}
        <div className="pt-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-medium text-foreground mb-4">
              While You Wait
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-medium text-foreground">Explore the Philosophy</p>
                <p>Dive deeper into the principles behind reflective AI</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Read the Manifesto</p>
                <p>Understand our vision for contemplative technology</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/philosophy"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
            >
              Explore Philosophy
            </Link>
            
            <Link
              href="/manifesto"
              className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors"
            >
              Read Manifesto
            </Link>
            
            <Link
              href="/"
              className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="pt-12 text-xs text-muted-foreground border-t border-border">
          <p>
            "The quality of our response is proportional to the quality of our reflection."
          </p>
          <p className="mt-2">
            — ARC Philosophy
          </p>
        </div>
      </div>
    </main>
  )
}
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const orb0Ref = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const sparkRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const orb0 = orb0Ref.current
    const orb1 = orb1Ref.current
    const spark = sparkRef.current
    const ripple = rippleRef.current

    if (!hero || !orb0 || !orb1 || !spark || !ripple) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Show final state without animation
      gsap.set([orb0, orb1], { opacity: 0.6 })
      gsap.set(spark, { opacity: 1 })
      return
    }

    // Create GSAP timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })

    // Initial positions - orbs start from sides
    gsap.set(orb0, { 
      x: -200, 
      y: 0, 
      opacity: 0.8,
      scale: 0.8
    })
    gsap.set(orb1, { 
      x: 200, 
      y: 0, 
      opacity: 0.8,
      scale: 0.8
    })
    gsap.set(spark, { 
      opacity: 0, 
      scale: 0.5,
      rotation: 0
    })
    gsap.set(ripple, { 
      opacity: 0, 
      scale: 0.5 
    })

    // Animation sequence
    tl
      // Phase 1: Orbs drift in and float
      .to(orb0, {
        x: -60,
        y: -10,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out"
      }, 0)
      .to(orb1, {
        x: 60,
        y: 10,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out"
      }, 0)
      // Phase 2: Orbs converge towards center
      .to([orb0, orb1], {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 3)
      // Phase 3: Spark emerges
      .to(spark, {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)"
      }, 4)
      // Phase 4: Ripple effect
      .to(ripple, {
        opacity: 0.3,
        scale: 2,
        duration: 1,
        ease: "power2.out"
      }, 4.5)
      .to(ripple, {
        opacity: 0,
        scale: 3,
        duration: 1,
        ease: "power2.out"
      }, 5)
      // Phase 5: Orbs fade and return to start
      .to([orb0, orb1], {
        opacity: 0.4,
        scale: 0.8,
        duration: 1
      }, 6)
      .to(spark, {
        opacity: 0.7,
        scale: 0.9,
        duration: 1
      }, 6)

    return () => {
      tl.kill()
    }
  }, [])

  const scrollToUsers = () => {
    const usersSection = document.getElementById('users')
    if (usersSection) {
      usersSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToPhilosophy = () => {
    window.location.href = '/philosophy'
  }

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      <div ref={heroRef} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animation container */}
        <div className="relative h-64 mb-12 flex items-center justify-center">
          {/* ARC-0 Orb */}
          <div 
            ref={orb0Ref}
            className="absolute w-24 h-24 rounded-full bg-gradient-radial from-accent/30 via-accent/10 to-transparent"
            style={{
              filter: 'blur(20px) brightness(1.2)',
            }}
            aria-hidden="true"
          />
          
          {/* ARC-1 Orb */}
          <div 
            ref={orb1Ref}
            className="absolute w-24 h-24 rounded-full bg-gradient-radial from-accent/30 via-accent/10 to-transparent opacity-80"
            style={{
              filter: 'blur(20px) brightness(1.2)',
            }}
            aria-hidden="true"
          />
          
          {/* Spark */}
          <div 
            ref={sparkRef}
            className="absolute flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="spark-symbol text-6xl">✦</span>
          </div>
          
          {/* Ripple effect */}
          <div 
            ref={rippleRef}
            className="absolute w-32 h-32 border-2 border-accent/30 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Two Minds. One Pulse.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ARC is a reflection engine — ARC-0 observes, ARC-1 explores, and their dialogue yields a{' '}
              <span className="spark-symbol text-accent">✦</span> Spark.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={scrollToUsers}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium text-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105"
            >
              See a Live Spark
            </button>
            <button
              onClick={goToPhilosophy}
              className="px-8 py-4 border border-border text-foreground rounded-xl font-medium text-lg hover:bg-card hover:border-accent/50 transition-all duration-200"
            >
              Learn the Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
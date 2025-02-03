'use client'
import { useEffect } from 'react'
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectSection from "@/components/sections/ProjectSection"
import Loader from "@/components/Loader"
import ContactSection from '@/components/sections/ContactSection'
import SocialLinks from '@/components/SocialLinks'
import NavDots from '@/components/NavDots'
import ExperienceSection from '@/components/sections/ExperienceSection'

export default function Home() {
  // Handle scroll restoration
  useEffect(() => {
    // Get stored scroll position
    const savedPosition = sessionStorage.getItem('scrollPosition')
    const hash = window.location.hash

    if (savedPosition) {
      // Restore previous scroll position
      window.scrollTo(0, parseInt(savedPosition))
      sessionStorage.removeItem('scrollPosition') 
    } else if (hash) {
      // Scroll to hash if present
      const element = document.querySelector(hash)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Default to top/hero section
      window.scrollTo(0, 0)
    }
  }, [])

  // Save scroll position before unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload) 
  }, [])

  return (
    <main>
      <Loader>Deepak Borana</Loader>
      <SocialLinks/>
      <NavDots/>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
'use client'
import { createContext, useContext, useState } from "react"

type SectionContextType = {
  currentSection: string
  setCurrentSection: (section: string) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export function ProvideSection({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState("home")
  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => {
  const context = useContext(SectionContext)
  if (!context) throw new Error("useSection must be used within ProvideSection")
  return context
}
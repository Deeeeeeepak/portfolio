'use client'
import { createContext, useContext, useState } from "react"

type FilterContextType = {
  filter: string
  setFilter: (filter: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function ProvideFilter({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState("all")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) throw new Error("useFilter must be used within ProvideFilter")
  return context
}
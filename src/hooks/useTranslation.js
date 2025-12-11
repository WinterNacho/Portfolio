import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

// Custom hook to use translations
export function useTranslation() {
  const context = useContext(AppContext)
  
  if (!context) {
    throw new Error('useTranslation must be used within AppProvider')
  }
  
  return {
    t: context.t,
    language: context.language,
    toggleLanguage: context.toggleLanguage
  }
}

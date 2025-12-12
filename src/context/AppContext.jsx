import { createContext, useState, useEffect } from 'react'
import es from '../locales/es.json'
import en from '../locales/en.json'

// Create context
export const AppContext = createContext()

// Translations object
const translations = {
  es,
  en
}

// AppProvider component
export function AppProvider({ children }) {
  // Get saved preferences from localStorage or use defaults
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es'
  })

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es')
  }

  // Get translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }
    
    return value
  }

  const value = {
    theme,
    language,
    toggleTheme,
    toggleLanguage,
    t
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}


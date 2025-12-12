import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function LanguageButton() {
  const { language, toggleLanguage } = useContext(AppContext)

  return (
    <button
      onClick={toggleLanguage}
      className="card p-4 flex justify-center items-center gap-2 transition-colors font-medium cursor-pointer"
      style={{ color: 'var(--text-secondary)', width: '80px', minWidth: '80px' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent-primary)'
        e.currentTarget.style.borderColor = 'var(--accent-primary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-secondary)'
        e.currentTarget.style.borderColor = 'var(--border-primary)'
      }}
      aria-label={`Cambiar a ${language === 'es' ? 'inglés' : 'español'}`}
    >
      <span className="text-lg">🌐</span>
      <span>{language.toUpperCase()}</span>
    </button>
  )
}

export default LanguageButton

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function LanguageButton() {
  const { language, toggleLanguage } = useContext(AppContext)

  return (
    <div className="card p-4">
      <button
        onClick={toggleLanguage}
        className="transition-colors w-8 font-medium"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        aria-label={`Cambiar a ${language === 'es' ? 'inglés' : 'español'}`}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  )
}

export default LanguageButton

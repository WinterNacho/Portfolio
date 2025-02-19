import { useState } from 'react'

function LanguageButton() {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <div className="card p-4">
      <button
        onClick={toggleLanguage}
        className="text-zinc-400 hover:text-amber-400 transition-colors w-8"
      >
        {language === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  )
}

export default LanguageButton

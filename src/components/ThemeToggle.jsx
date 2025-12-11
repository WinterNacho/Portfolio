import { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { AppContext } from '../context/AppContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext)
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="card p-4 w-full flex justify-center items-center transition-colors cursor-pointer"
      style={{ color: 'var(--text-secondary)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent-primary)'
        e.currentTarget.style.borderColor = 'var(--accent-primary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-secondary)'
        e.currentTarget.style.borderColor = 'var(--border-primary)'
      }}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle

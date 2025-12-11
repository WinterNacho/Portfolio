import { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { AppContext } from '../context/AppContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext)
  const isDark = theme === 'dark'

  return (
    <div className="flex justify-between items-center card p-4">
      <button
        onClick={toggleTheme}
        className="transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  )
}

export default ThemeToggle

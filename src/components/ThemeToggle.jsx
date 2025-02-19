import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.style.setProperty('background-color', 'rgb(244, 244, 245)')
      document.documentElement.style.setProperty('color', 'rgb(24, 24, 27)')
    } else {
      document.documentElement.style.setProperty('background-color', 'rgb(9, 9, 11)')
      document.documentElement.style.setProperty('color', 'rgb(228, 228, 231)')
    }
  }

  return (
    <div className="flex justify-between items-center card p-4">
      <button
        onClick={toggleTheme}
        className="text-zinc-400 hover:text-amber-400 transition-colors "
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>

  )
}

export default ThemeToggle

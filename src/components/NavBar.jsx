import { useTranslation } from '../hooks/useTranslation'
import LanguageButton from './LanguageButton'
import ThemeToggle from './ThemeToggle'
import PropTypes from 'prop-types'

function NavBar({ setActiveSection, activeSection }) {
  const { t } = useTranslation()

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') }
  ]

  return (
    <div className="navbar-container">
      <nav className="card navbar-nav">
        <ul className="navbar-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className="transition-colors navbar-button"
                style={{
                  color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'var(--accent-hover)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar-controls">
        <LanguageButton />
        <ThemeToggle />
      </div>
    </div>
  )
}

NavBar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired
}

export default NavBar

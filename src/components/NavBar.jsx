import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { Menu, X } from 'lucide-react'
import LanguageButton from './LanguageButton'
import ThemeToggle from './ThemeToggle'
import PropTypes from 'prop-types'

function NavBar({ setActiveSection, activeSection }) {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') }
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close menu after selection
  }

  return (
    <div className="navbar-container">
      {/* Hamburger Button - Mobile Only */}
      <button
        className="hamburger-button card"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
        ) : (
          <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="card navbar-nav navbar-desktop">
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <nav 
            className="card mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mobile-menu-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="mobile-menu-button"
                    style={{
                      color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      backgroundColor: activeSection === item.id ? 'var(--bg-tertiary)' : 'transparent'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

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

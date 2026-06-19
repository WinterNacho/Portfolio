import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import NavBar from './NavBar'
import Experience from './Experience'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Content() {
  const { t } = useTranslation()

  // Initialize from URL hash or default to 'about'
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '')
    return ['about', 'experience', 'projects'].includes(hash) ? hash : 'about'
  }

  const [activeSection, setActiveSection] = useState(getInitialSection)

  // Update URL when section changes
  const handleSetActiveSection = (section) => {
    setActiveSection(section)
    window.location.hash = section
  }

  // Listen for hash changes (browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (['about', 'experience', 'projects'].includes(hash)) {
        setActiveSection(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe key="about" />
      case 'experience':
        return <Experience key="experience" />
      case 'projects':
        return <Projects key="projects" />
      default:
        return <AboutMe key="about-default" />
    }
  }

  return (
    <main className="content-container">
      <NavBar setActiveSection={handleSetActiveSection} activeSection={activeSection} />
      <section className="card content-main fade-in" aria-live="polite">
        {renderContent()}
      </section>
      <footer className="site-footer" style={{ color: 'var(--text-tertiary)' }}>
        {t('common.footer')}
      </footer>
    </main>
  )
}

export default Content

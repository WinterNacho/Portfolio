import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Experience from './Experience'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Content() {
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
    <div className="content-container">
      <NavBar setActiveSection={handleSetActiveSection} activeSection={activeSection} />
      <div className="card content-main">
        <div className="fade-in">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Content

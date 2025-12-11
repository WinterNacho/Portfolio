import { useState } from 'react'
import NavBar from './NavBar'
import Experience from './Experience'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Content() {
  const [activeSection, setActiveSection] = useState('about')

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
      <NavBar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="card content-main">
        <div className="fade-in">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Content

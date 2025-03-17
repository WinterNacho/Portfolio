import { useState } from 'react'
import NavBar from './NavBar'
import Resume from './Resumen'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Games from './Games'

function Content() {
  const [activeSection, setActiveSection] = useState('about')

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />
      case 'resume':
        return <Resume />
      case 'projects':
        return <Projects />
      case 'games':
          return <Games />
      default:
        return <AboutMe />
    }
  }

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-3rem)] flex-grow">
      <NavBar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="card flex-grow overflow-auto p-10">
        {renderContent()}
      </div>
    </div>
  )
}

export default Content


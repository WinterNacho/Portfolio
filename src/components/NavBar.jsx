import LanguageButton from './LanguageButton';
import ThemeToggle from './ThemeToggle';

function NavBar({ setActiveSection, activeSection }) {
  return (
    <div className="flex justify-between items-center h-[60px] min-h-[60px]">
      <nav className="card p-4 h-full flex items-center">
        <ul className="flex gap-10 mx-4">
          <li>
            <button
              onClick={() => setActiveSection('about')}
              className={`${activeSection === 'about' ? 'text-amber-400' : 'text-zinc-400'} hover:text-amber-300`}
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('resume')}
              className={`${activeSection === 'resume' ? 'text-amber-400' : 'text-zinc-400'} hover:text-amber-300`}
            >
              Resumen
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('projects')}
              className={`${activeSection === 'projects' ? 'text-amber-400' : 'text-zinc-400'} hover:text-amber-300`}
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('games')}
              className={`${activeSection === 'games' ? 'text-amber-400' : 'text-zinc-400'} hover:text-amber-300`}
            >
              Habilidades
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 justify-end">
        <LanguageButton />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default NavBar;
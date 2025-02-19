import LanguageButton from './LanguageButton'
import ThemeToggle from './ThemeToggle'

function NavBar() {
  return (
    <div className="flex justify-between items-center h-[60px] min-h-[60px]">
      <nav className="card p-4 h-full flex items-center">
        <ul className="flex gap-10 mx-4">
          <li>
            <a href="#about" className="text-amber-400 hover:text-amber-300">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#resume" className="text-zinc-400 hover:text-amber-400">
              Resumen
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-zinc-400 hover:text-amber-400">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#blog" className="text-zinc-400 hover:text-amber-400">
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 justify-end">
          <LanguageButton />
          <ThemeToggle />
      </div>
    </div>
  )
}

export default NavBar

import { useTranslation } from "../hooks/useTranslation"
import { ExternalLink, Github } from "lucide-react"

function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.projectsData')

  return (
    <section aria-labelledby="projects-title">
      <h2
        id="projects-title"
        className="text-3xl font-bold mb-8"
        style={{ color: 'var(--text-primary)' }}
      >
        {t('projects.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="article-card"
          >
            <header className="mb-4">
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                <span style={{ color: 'var(--accent-primary)' }}>{project.organization}</span>
                <span aria-hidden="true">•</span>
                {project.startDate === project.endDate ? (
                  <time dateTime={project.endDate}>{project.period}</time>
                ) : (
                  <>
                    <time dateTime={project.startDate}>{project.periodStart}</time>
                    {' - '}
                    <time dateTime={project.endDate}>{project.periodEnd}</time>
                  </>
                )}
              </div>
            </header>

            <p
              className="mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mb-4 list-none p-0 m-0">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>
                  <span className="tech-tag tech-tag--muted">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--bg-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)'
                  }}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {t('projects.viewDemo')}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium border"
                  style={{
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-secondary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)'
                    e.currentTarget.style.color = 'var(--accent-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-primary)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  <Github size={16} aria-hidden="true" />
                  {t('projects.viewCode')}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

import { useTranslation } from "../hooks/useTranslation"
import { ExternalLink, Github } from "lucide-react"

function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.projectsData')

  return (
    <div>
      <h2 
        className="text-3xl font-bold mb-8"
        style={{ color: 'var(--text-primary)' }}
      >
        {t('projects.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-6 border transition-all"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-primary)'
            }}
          >
            {/* Project Header */}
            <div className="mb-4">
              <h3 
                className="text-xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                <span style={{ color: 'var(--accent-primary)' }}>{project.organization}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
            </div>

            {/* Project Description */}
            <p 
              className="mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--border-secondary)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
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
                  <ExternalLink size={16} />
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
                  <Github size={16} />
                  {t('projects.viewCode')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

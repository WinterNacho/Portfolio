import { Briefcase } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

function Experience() {
  const { t } = useTranslation()
  const experience = t('resume.experienceData')

  return (
    <section aria-labelledby="experience-title">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase size={28} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
        <h2
          id="experience-title"
          className="text-3xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('resume.experience')}
        </h2>
      </div>

      <div className="relative">
        {experience.map((item, index) => (
          <article key={index} className="relative pl-8 pb-8 last:pb-0">
            {/* Vertical line - only if not the last item */}
            {index !== experience.length - 1 && (
              <div
                className="absolute left-[7px] top-[20px] bottom-0 w-[2px]"
                style={{ backgroundColor: 'var(--border-primary)' }}
                aria-hidden="true"
              />
            )}

            {/* Circle marker */}
            <div
              className="absolute left-0 top-[6px] w-4 h-4 rounded-full border-2"
              style={{
                backgroundColor: 'var(--accent-primary)',
                borderColor: 'var(--bg-primary)'
              }}
              aria-hidden="true"
            />

            <header className="mb-2">
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-lg mt-1" style={{ color: 'var(--accent-primary)' }}>
                {item.company}
              </p>
            </header>

            <div className="flex flex-wrap gap-3 items-center mb-3">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span aria-hidden="true">📍 </span>{item.location}
              </p>
              <span style={{ color: 'var(--text-tertiary)' }} aria-hidden="true">•</span>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span aria-hidden="true">📅 </span>
                <time dateTime={item.startDate}>{item.periodStart}</time>
                {' — '}
                <time dateTime={item.endDate}>{item.periodEnd}</time>
              </p>
            </div>

            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mr-3 mt-1" style={{ color: 'var(--accent-primary)' }} aria-hidden="true">▸</span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4 list-none p-0 m-0">
                {item.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>
                    <span className="tech-tag">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience

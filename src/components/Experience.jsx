import { Briefcase } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

function Experience() {
  const { t } = useTranslation()
  const experience = t('resume.experienceData')

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Briefcase size={28} style={{ color: 'var(--text-primary)' }} />
        <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {t('resume.experience')}
        </h2>
      </div>

      <div className="relative">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 last:pb-0">
            {/* Línea vertical - solo si NO es el último */}
            {index !== experience.length - 1 && (
              <div 
                className="absolute left-[7px] top-[20px] bottom-0 w-[2px]"
                style={{ backgroundColor: 'var(--border-primary)' }}
              ></div>
            )}
            
            {/* Círculo */}
            <div 
              className="absolute left-0 top-[6px] w-4 h-4 rounded-full border-2"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                borderColor: 'var(--bg-primary)'
              }}
            ></div>
            
            <div className="mb-2">
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-lg mt-1" style={{ color: 'var(--accent-primary)' }}>
                {item.company}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center mb-3">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                📍 {item.location}
              </p>
              <span style={{ color: 'var(--text-tertiary)' }}>•</span>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                📅 {item.period}
              </p>
            </div>

            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mr-3 mt-1" style={{ color: 'var(--accent-primary)' }}>▸</span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience


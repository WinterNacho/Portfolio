import { Book, Briefcase } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

function Resume() {
  const { t } = useTranslation()
  
  const education = t('resume.educationData')
  const experience = t('resume.experienceData')

  return (
    <div>
      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Book 
            size={24}
            style={{ color: 'var(--text-primary)' }}
          />
          <h2 
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('resume.education')}
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div 
                className="absolute left-0 top-2 w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              ></div>
              
              <h3 
                className="text-lg font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.institution}
              </h3>
              <p 
                className="mt-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.degree}
              </p>
              <p 
                className="mt-1 text-sm"
                style={{ color: 'var(--accent-primary)' }}
              >
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase 
            size={24}
            style={{ color: 'var(--text-primary)' }}
          />
          <h2 
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('resume.experience')}
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div 
                className="absolute left-0 top-2 w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              ></div>
              
              <h3 
                className="text-lg font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.title}
              </h3>
              <p 
                className="mt-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.company}
              </p>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.location}
              </p>
              <p 
                className="mt-1 text-sm"
                style={{ color: 'var(--accent-primary)' }}
              >
                {item.period}
              </p>

              {item.responsibilities && item.responsibilities.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <li 
                      key={respIndex} 
                      className="flex items-start"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span 
                        className="mr-2"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        •
                      </span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume

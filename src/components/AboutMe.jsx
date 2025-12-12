import { Database, GraduationCap, Bug, Code, Zap } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

function AboutMe() {
  const { t } = useTranslation()
  const specializationsData = [
    {
      title: t('about.specializations.optimization.title'),
      description: t('about.specializations.optimization.description'),
      icon: Database,
    },
    {
      title: t('about.specializations.debugging.title'),
      description: t('about.specializations.debugging.description'),
      icon: Bug,
    },
    {
      title: t('about.specializations.backend.title'),
      description: t('about.specializations.backend.description'),
      icon: Code,
    },
    {
      title: t('about.specializations.integration.title'),
      description: t('about.specializations.integration.description'),
      icon: Zap,
    },
  ]

  return (
    <div className="space-y-12">
      <section id="about">
        <h2 
          className="text-3xl font-bold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('about.title')}
        </h2>
        <div 
          className="space-y-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p>{t('about.description')}</p>
        </div>
      </section>
      <section>
        <h2 
          className="text-3xl font-bold mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('about.specializations.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          {specializationsData.map((spec, index) => (
            <div 
              key={index} 
              className="rounded-lg p-4 border flex items-center gap-4"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)', 
                borderColor: 'var(--border-secondary)',
                minHeight: '110px',
                width: '100%'
              }}
            >
              <div className="p-2 rounded-md flex-shrink-0">
                <spec.icon 
                  className="w-7 h-7"
                  style={{ color: 'var(--accent-primary)' }}
                />
              </div>
              <div>
                <h3 
                  className="text-lg font-semibold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {spec.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={28} style={{ color: 'var(--text-primary)' }} />
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t('resume.education')}
          </h2>
        </div>

        <div className="space-y-6">
          {t('resume.educationData').map((item, index) => (
            <div key={index} className="relative pl-8">
              <div 
                className="absolute left-0 top-2 w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              ></div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {item.institution}
              </h3>
              <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>
                {item.degree}
              </p>
              <p className="mt-1 text-sm" style={{ color: 'var(--accent-primary)' }}>
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutMe

import { Smartphone, Code, Gamepad, Database } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

function AboutMe() {
  const { t } = useTranslation()
  const servicesData = [
    {
      title: t('about.services.webDev.title'),
      description: t('about.services.webDev.description'),
      icon: Code,
    },
    {
      title: t('about.services.backend.title'),
      description: t('about.services.backend.description'),
      icon: Database,
    },
    {
      title: t('about.services.gameDev.title'),
      description: t('about.services.gameDev.description'),
      icon: Gamepad,
    },
    {
      title: t('about.services.mobile.title'),
      description: t('about.services.mobile.description'),
      icon: Smartphone,
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
          {t('about.whatImDoing')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 border flex flex-col"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)', 
                borderColor: 'var(--border-secondary)' 
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-md">
                  <service.icon 
                    className="w-8 h-8"
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </div>
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutMe

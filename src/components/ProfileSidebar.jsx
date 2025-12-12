import { Github, Linkedin, Mail, MapPin, createLucideIcon } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"

// Custom X (Twitter) icon using simpleicons.org SVG
const XIcon = createLucideIcon("XIcon", [
  ["path", { d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z", fill: "currentColor", stroke: "none", key: "x-icon" }]
])

function ProfileSidebar() {
  const { t } = useTranslation()

  return (
    <aside className="card card-container p-[1.5rem]">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative w-42 h-42 mb-4">
          <img src={"/me.jpg"} alt={t('profile.name')} className="rounded-3xl" />
          <div 
            className="absolute bottom-2 right-2 w-3 h-3 rounded-full"
            style={{ backgroundColor: 'var(--status-online)' }}
            title={t('profile.available')}
          ></div>
        </div>
        <h1 
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('profile.name')}
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {t('profile.role')}
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div 
          className="flex items-center gap-3"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Mail className="w-5 h-5" />
          <a 
            href={`mailto:${t('profile.email')}`}
            className="hover:underline transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            {t('profile.email')}
          </a>
        </div>
        <div 
          className="flex items-center gap-3"
          style={{ color: 'var(--text-secondary)' }}
        >
          <MapPin className="w-5 h-5" />
          <span>{t('profile.location')}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 absolute bottom-6 left-0 right-0">
        <a 
          href="https://www.linkedin.com/in/winternacho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/WinterNacho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://x.com/WinterNacho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          aria-label="X (Twitter) Profile"
        >
          <XIcon className="w-5 h-5" />
        </a>
      </div>
    </aside>
  )
}
export default ProfileSidebar

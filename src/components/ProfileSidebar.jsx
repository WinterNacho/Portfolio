import { useContext } from 'react'
import { Github, Linkedin, Mail, MapPin, createLucideIcon } from "lucide-react"
import { AppContext } from '../context/AppContext'
import { useTranslation } from "../hooks/useTranslation"

// Custom X (Twitter) icon using simpleicons.org SVG
const XIcon = createLucideIcon("XIcon", [
  ["path", { d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z", fill: "currentColor", stroke: "none", key: "x-icon" }]
])

function ProfileSidebar() {
  const { t } = useTranslation()
  const { toggleGreenTheme } = useContext(AppContext)

  return (
    <aside className="card card-container profile-sidebar">
      <div className="profile-header">
        <button
          type="button"
          onClick={toggleGreenTheme}
          className="profile-photo-button"
          aria-label={t('profile.name')}
        >
          <img src={"/me.jpg"} alt="" className="profile-photo" />
          <span
            className="profile-status"
            style={{ backgroundColor: 'var(--status-online)' }}
            title={t('profile.available')}
          />
        </button>

        <div className="profile-identity">
          <h1 className="profile-name" style={{ color: 'var(--text-primary)' }}>
            {t('profile.name')}
          </h1>
          <p className="profile-role" style={{ color: 'var(--text-secondary)' }}>
            {t('profile.role')}
          </p>
        </div>
      </div>

      <div className="profile-contact">
        <address
          className="profile-contact-item not-italic"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Mail className="profile-contact-icon" aria-hidden="true" />
          <a
            href={`mailto:${t('profile.email')}`}
            className="profile-contact-link hover:underline transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            {t('profile.email')}
          </a>
        </address>

        <div className="profile-contact-item" style={{ color: 'var(--text-secondary)' }}>
          <MapPin className="profile-contact-icon" aria-hidden="true" />
          <span>{t('profile.location')}</span>
        </div>
      </div>

      <div className="profile-social">
        <a
          href="https://www.linkedin.com/in/winternacho"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-link transition-colors"
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
          className="profile-social-link transition-colors"
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
          className="profile-social-link transition-colors"
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

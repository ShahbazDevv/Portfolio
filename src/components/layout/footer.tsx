import { Mail, MapPin, Phone } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { profile } from '@/data/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="text-xl font-bold text-heading tracking-tight">
              Muhammad <span className="text-primary">Shahbaz</span>
            </a>
            <p className="mt-3 text-sm text-paragraph leading-relaxed max-w-xs">
              {profile.title} and {profile.status.toLowerCase()}. Building
              cross-platform experiences with Flutter.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-paragraph hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-paragraph hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-sm text-paragraph hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-paragraph">
                <MapPin size={14} />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paragraph hover:text-primary transition-colors"
                >
                  <FiGithub size={14} />
                  ShahbazDevv
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paragraph">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-paragraph">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

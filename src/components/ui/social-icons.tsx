import { Mail } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { profile } from '@/data/profile'

interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
}

const links: SocialLink[] = [
  { icon: FiGithub, href: profile.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

interface SocialIconsProps {
  className?: string
  iconClassName?: string
}

export function SocialIcons({ className = '', iconClassName = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`h-11 w-11 rounded-[14px] border border-border bg-surface flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 ${iconClassName}`}
          aria-label={link.label}
        >
          <link.icon size={18} />
        </a>
      ))}
    </div>
  )
}

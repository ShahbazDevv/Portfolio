import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { useTheme } from '@/lib/theme-provider'

const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Resume', section: 'resume' },
  { label: 'Contact', section: 'contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (location.pathname !== '/') return

      const sections = navLinks.map((link) => link.section)
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault()

    if (section === 'resume') {
      window.open(profile.resumeUrl, '_blank')
      setIsOpen(false)
      return
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } })
    } else {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    setIsOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-xl font-bold text-heading tracking-tight"
          >
            Muhammad <span className="text-primary">Shahbaz</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={(e) => handleNavClick(e, link.section)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer',
                  activeSection === link.section && location.pathname === '/'
                    ? 'text-primary bg-primary/10'
                    : 'text-paragraph hover:text-heading hover:bg-surface'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-paragraph hover:text-heading hover:bg-surface rounded-lg transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 text-paragraph hover:text-heading hover:bg-surface rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href={`mailto:${profile.email}`}>
              <Button variant="default" size="sm">
                Hire Me
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-paragraph hover:text-heading rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-heading hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-surface/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={cn(
                    'block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer',
                    activeSection === link.section && location.pathname === '/'
                      ? 'text-primary bg-primary/10'
                      : 'text-paragraph hover:text-heading hover:bg-surface'
                  )}
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-border/50 my-2" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-paragraph hover:text-heading rounded-lg transition-colors"
              >
                <FiGithub size={18} />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="block mt-2">
                <Button variant="default" size="sm" className="w-full">
                  Hire Me
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

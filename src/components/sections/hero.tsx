import { motion } from 'framer-motion'
import { ArrowDown, FileText, Eye, Mail } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const socialLinks = [
  { icon: FiGithub, href: profile.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm md:text-base text-primary font-medium tracking-wide mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-tight mb-4"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-primary font-medium mb-6"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-paragraph leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {profile.heroParagraph}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </Button>
              </a>
              <a href="#projects">
                <Button variant="secondary" size="lg">
                  <Eye size={18} className="mr-2" />
                  View Projects
                </Button>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-paragraph hover:text-primary underline underline-offset-4 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="h-11 w-11 rounded-[14px] border border-border bg-surface flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-[32px] blur-2xl" />
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-surface/40 backdrop-blur-xl border border-border/50 rounded-[24px] p-3 shadow-2xl"
                >
                  <div className="rounded-[18px] overflow-hidden">
                    <img
                      src={profile.imageUrl}
                      alt={profile.name}
                      className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-[24px] ring-1 ring-white/10 pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-paragraph hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

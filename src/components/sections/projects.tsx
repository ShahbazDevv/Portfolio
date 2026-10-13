import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SectionHeader } from '@/components/ui/section-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  return (
    <div
      data-project-card
      className="group/card h-full overflow-hidden rounded-[24px] bg-surface border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/project/${project.id}`} state={{ from: 'homepage' }} className="block group">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="text-[10px] px-2.5 py-1 bg-background/60 backdrop-blur-sm border-accent/20"
            >
              {project.category}
            </Badge>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 h-9 w-9 rounded-[10px] bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/50 transition-all duration-200"
            aria-label={`${project.title} GitHub repository`}
          >
            <FiGithub size={16} />
          </a>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-heading mb-1.5 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-paragraph leading-relaxed line-clamp-2 mb-4">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {(project.cardTechnologies || project.technologies).slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">
                {tech}
              </Badge>
            ))}
            {(project.cardTechnologies || project.technologies).length > 3 && (
              <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                +{(project.cardTechnologies || project.technologies).length - 3}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="default" size="sm" className="text-xs gap-1.5 h-9">
              <FiExternalLink size={12} />
              View Details
            </Button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="sm" className="text-xs gap-1.5 h-9 text-paragraph">
                <FiGithub size={12} />
                Repository
              </Button>
            </a>
          </div>
        </div>
      </Link>
    </div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const isPointerDownRef = useRef(false)
  const hasDraggedRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftStartRef = useRef(0)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

    const card = el.querySelector<HTMLElement>('[data-project-card]')
    if (card) {
      const cardStep = card.offsetWidth + 24
      const idx = Math.round(scrollLeft / cardStep)
      setActiveIndex(Math.max(0, Math.min(idx, featuredProjects.length - 1)))
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [featuredProjects.length])

  const scrollByCard = (direction: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-project-card]')
    const step = card ? card.offsetWidth + 24 : 420
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>('[data-project-card]')
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    isPointerDownRef.current = true
    hasDraggedRef.current = false
    startXRef.current = e.pageX
    scrollLeftStartRef.current = scrollRef.current?.scrollLeft ?? 0
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isPointerDownRef.current || !scrollRef.current) return
      const dx = e.pageX - startXRef.current
      if (Math.abs(dx) > 6) {
        if (!hasDraggedRef.current) {
          hasDraggedRef.current = true
          setIsDragging(true)
        }
        scrollRef.current.scrollLeft = scrollLeftStartRef.current - dx
      }
    }

    const handleGlobalMouseUp = () => {
      if (isPointerDownRef.current) {
        isPointerDownRef.current = false
        setIsDragging(false)
        setTimeout(() => {
          hasDraggedRef.current = false
        }, 50)
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [])

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault()
      e.stopPropagation()
      hasDraggedRef.current = false
    }
  }

  if (featuredProjects.length === 0) return null

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Featured Projects"
          title="Things I've Built"
          description="A collection of Flutter applications built during my learning journey, showcasing responsive UI, state management, backend integration, and AI experimentation."
        />

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard(-1)}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/50 transition-all shadow-lg cursor-pointer"
              aria-label="Previous project"
            >
              <FiChevronLeft size={18} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard(1)}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/50 transition-all shadow-lg cursor-pointer"
              aria-label="Next project"
            >
              <FiChevronRight size={18} />
            </button>
          )}

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onClickCapture={handleClickCapture}
            style={{
              scrollSnapType: 'x proximity',
              scrollBehavior: 'smooth',
            }}
            tabIndex={0}
            role="region"
            aria-label="Featured projects carousel"
            className={`projects-scrollbar overflow-x-auto flex gap-4 sm:gap-6 py-6 px-4 sm:px-6 md:px-8 select-none focus:outline-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="w-[85vw] max-w-[340px] sm:max-w-none sm:w-[380px] md:w-[420px] lg:w-[440px] shrink-0 snap-start"
              >
                <ProjectCard project={project} />
              </div>
            ))}
            <div className="w-2 shrink-0 pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-border hover:bg-paragraph'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              View All Projects on GitHub
              <FiArrowRight size={16} className="ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

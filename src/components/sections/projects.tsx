import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SectionHeader } from '@/components/ui/section-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'

function ProjectCard({
  project,
  index,
  x,
  cardWidth,
  gap,
  containerWidth,
}: {
  project: (typeof projects)[0]
  index: number
  x: MotionValue<number>
  cardWidth: number
  gap: number
  containerWidth: number
}) {
  const cardOffset = index * (cardWidth + gap)
  const cardMid = cardOffset + cardWidth / 2
  const halfCard = cardWidth * 0.45

  const rawDist = useTransform(x, (latestX: number) => {
    if (containerWidth === 0) return 2
    const viewCenter = containerWidth / 2 - latestX
    return Math.abs(cardMid - viewCenter) / halfCard
  })

  const scale = useTransform(rawDist, (d: number) => Math.max(0.85, 1 - Math.min(d, 2) * 0.15))
  const opacity = useTransform(rawDist, (d: number) => Math.max(0.65, 1 - Math.min(d, 2) * 0.35))
  const translateY = useTransform(rawDist, (d: number) => Math.min(Math.min(d, 2) * 10, 10))
  const zIndex = useTransform(rawDist, (d: number) => (Math.min(d, 2) < 0.5 ? 10 : 1))

  const shadow = useTransform(rawDist, (d: number) =>
    Math.min(d, 2) < 0.3
      ? '0 25px 60px -12px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.12)'
      : '0 4px 6px -1px rgba(0,0,0,0.08)'
  )

  return (
    <motion.div
      style={{ scale, opacity, y: translateY, zIndex, boxShadow: shadow }}
      className="shrink-0 overflow-hidden rounded-[24px] bg-surface border border-border/50"
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
          <h3 className="text-lg font-bold text-heading mb-1.5">{project.title}</h3>
          <p className="text-sm text-paragraph leading-relaxed line-clamp-2 mb-4">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                +{project.technologies.length - 3}
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
    </motion.div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [viewportFraction, setViewportFraction] = useState(0.8)
  const gap = 16
  const x = useMotionValue(0)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setViewportFraction(0.82)
      else if (w < 1024) setViewportFraction(0.55)
      else setViewportFraction(0.38)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const cardWidth = containerWidth * viewportFraction
  const totalWidth = featuredProjects.length * cardWidth + (featuredProjects.length - 1) * gap
  const maxDrag = Math.max(0, totalWidth - containerWidth)

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (containerWidth === 0) return
    const unsubscribe = x.on('change', (latestX) => {
      const idx = Math.round(-latestX / (cardWidth + gap))
      setActiveIndex(Math.max(0, Math.min(idx, featuredProjects.length - 1)))
    })
    return unsubscribe
  }, [x, containerWidth, cardWidth, gap, featuredProjects.length])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo) => {
    const offset = Math.abs(x.get())
    const snapped = Math.round(offset / (cardWidth + gap))
    const target = Math.max(0, Math.min(snapped, featuredProjects.length - 1))
    animate(x, -(target * (cardWidth + gap)), {
      type: 'spring',
      stiffness: 350,
      damping: 35,
    })
  }

  const scrollTo = (index: number) => {
    animate(x, -(index * (cardWidth + gap)), {
      type: 'spring',
      stiffness: 350,
      damping: 35,
    })
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

        <div className="relative" ref={sectionRef}>
          {activeIndex > 0 && (
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/50 transition-all shadow-lg cursor-pointer"
              aria-label="Previous project"
            >
              <FiChevronLeft size={18} />
            </button>
          )}
          {activeIndex < featuredProjects.length - 1 && (
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/50 transition-all shadow-lg cursor-pointer"
              aria-label="Next project"
            >
              <FiChevronRight size={18} />
            </button>
          )}

          {containerWidth > 0 && (
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ x, gap }}
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
            >
              {featuredProjects.map((project, index) => (
                <div key={project.id} style={{ width: cardWidth }} className="shrink-0">
                  <ProjectCard
                    project={project}
                    index={index}
                    x={x}
                    cardWidth={cardWidth}
                    gap={gap}
                    containerWidth={containerWidth}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
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

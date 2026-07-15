import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { SectionHeader } from '@/components/ui/section-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Featured Projects"
          title="Things I've Built"
          description="A collection of Flutter applications built during my learning journey, showcasing responsive UI, state management, backend integration, and AI experimentation."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-[18px] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Background Image + Overlay */}
              <div className="relative h-72 sm:h-80 md:h-[22rem]">
                <img
                  src={project.coverImage}
                  alt={`${project.title} project`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlays — use black for consistent image visibility in both themes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

                {/* Subtle blur effect on hover */}
                <div
                  className={cn(
                    'absolute inset-0 backdrop-blur-[2px] transition-all duration-500',
                    hoveredId === project.id ? 'opacity-0' : 'opacity-100'
                  )}
                />

                {/* Title centered over image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h3
                    animate={{
                      y: hoveredId === project.id ? -60 : 0,
                      scale: hoveredId === project.id ? 0.85 : 1,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-3xl sm:text-4xl md:text-4xl font-bold text-white tracking-tight text-center px-6"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Category badge — top right */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-2.5 py-1 bg-background/60 backdrop-blur-sm border-border/50"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* GitHub icon — top left */}
                <div className="absolute top-4 left-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-[10px] bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/50 transition-all duration-200"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FiGithub size={16} />
                  </a>
                </div>

                {/* Glassmorphism info panel */}
                <motion.div
                  animate={{
                    y: hoveredId === project.id ? 0 : 80,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 right-0 p-5 bg-black/50 backdrop-blur-xl border-t border-white/10"
                >
                  <p className="text-sm text-paragraph leading-relaxed line-clamp-2 mb-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 border-border/50"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={`/project/${project.id}`}>
                      <Button
                        variant="default"
                        size="sm"
                        className="text-xs gap-1.5 h-9"
                      >
                        <FiExternalLink size={12} />
                        View Details
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs gap-1.5 h-9 text-paragraph"
                      >
                        <FiGithub size={12} />
                        Repository
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Default bottom panel when not hovered (shows on mobile too) */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/50 to-transparent md:hidden',
                    hoveredId === project.id && 'hidden'
                  )}
                >
                  <p className="text-sm text-paragraph leading-relaxed line-clamp-2 mb-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0.5"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={`/project/${project.id}`}>
                      <Button
                        variant="default"
                        size="sm"
                        className="text-xs gap-1.5 h-9"
                      >
                        <FiExternalLink size={12} />
                        View Details
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs gap-1.5 h-9 text-paragraph"
                      >
                        <FiGithub size={12} />
                        Repository
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
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

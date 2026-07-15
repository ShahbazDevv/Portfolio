import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowLeft, FiCheckCircle, FiBookOpen } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-heading mb-4">Project Not Found</h1>
          <p className="text-paragraph mb-6">The project you're looking for doesn't exist.</p>
          <Button variant="default" onClick={() => navigate('/')}>
            <FiArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={project.coverImage}
          alt={`${project.title} banner`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-[14px] bg-background/60 backdrop-blur-sm border border-border/50 text-sm text-paragraph hover:text-heading hover:bg-background/80 transition-all"
        >
          <FiArrowLeft size={16} />
          Back
        </button>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-heading mb-4">Overview</h2>
              <p className="text-paragraph leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-heading mb-4">Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-3 rounded-[14px] border border-border/50 bg-surface/20">
                    <FiCheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-paragraph">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Learning Objectives */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-heading mb-4">Learning Outcomes</h2>
              <div className="space-y-3">
                {project.learningObjectives.map((objective) => (
                  <div key={objective} className="flex items-start gap-3 p-3 rounded-[14px] border border-border/50 bg-surface/20">
                    <FiBookOpen size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-paragraph">{objective}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20">
              <h3 className="text-sm font-semibold text-heading mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20">
              <h3 className="text-sm font-semibold text-heading mb-3">Status</h3>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    project.status === 'completed' ? 'bg-success' : 'bg-accent'
                  }`}
                />
                <span className="text-sm text-paragraph capitalize">
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20">
              <h3 className="text-sm font-semibold text-heading mb-3">Repository</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="w-full gap-2">
                  <FiGithub size={16} />
                  View on GitHub
                </Button>
              </a>
            </div>

            {/* Back */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="w-full gap-2"
            >
              <FiArrowLeft size={14} />
              Back to Projects
            </Button>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

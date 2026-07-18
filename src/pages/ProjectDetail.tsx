import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiArrowLeft,
  FiCheckCircle,
  FiBookOpen,
  FiTarget,
  FiLayout,
  FiCode,
  FiExternalLink,
} from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

const stagger = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

function SectionCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      {...stagger}
      transition={{ duration: 0.5, delay }}
      className="p-6 md:p-8 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-primary/10 text-primary">
        {icon}
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-heading">{title}</h2>
    </div>
  )
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const project = projects.find((p) => p.id === id)

  const handleBack = () => {
    if (location.state?.from === 'homepage') {
      navigate('/', { state: { scrollTo: 'projects' } })
    } else if (window.history.length > 2) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-heading mb-4">
            Project Not Found
          </h1>
          <p className="text-paragraph mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button variant="default" onClick={() => navigate('/')}>
            <FiArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[50vh] min-h-[320px] md:h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={project.coverImage}
          alt={`${project.title} banner`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-6 left-4 sm:left-6 z-20"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 rounded-[14px] bg-background/60 backdrop-blur-sm border border-border/50 text-sm text-paragraph hover:text-heading hover:bg-background/80 transition-all"
          >
            <FiArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
        </motion.div>

        {/* Title group */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs px-3 py-1 bg-background/40 backdrop-blur-sm border-accent/20"
            >
              {project.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-white/70 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* ═══ Main Content ═══ */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Objective */}
            <SectionCard delay={0.05}>
              <SectionHeading icon={<FiTarget size={18} />} title="Main Objective" />
              <p className="text-paragraph leading-relaxed">
                {project.mainObjective}
              </p>
            </SectionCard>

            {/* Overview */}
            <SectionCard delay={0.1}>
              <SectionHeading icon={<FiBookOpen size={18} />} title="Overview" />
              <div className="space-y-4 text-paragraph leading-relaxed">
                <p>{project.fullDescription}</p>
                <p>{project.currentStatus}</p>
              </div>
            </SectionCard>

            {/* Key Features */}
            <SectionCard delay={0.15}>
              <SectionHeading
                icon={<FiCheckCircle size={18} />}
                title="Key Features"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-3 p-4 rounded-[14px] border border-border/50 bg-surface/10 hover:bg-surface/20 hover:border-primary/20 transition-all"
                  >
                    <FiCheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-paragraph leading-snug">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SectionCard>

            {/* UI/UX Highlights */}
            <SectionCard delay={0.2}>
              <SectionHeading icon={<FiLayout size={18} />} title="UI/UX Highlights" />
              <div className="space-y-3">
                {project.uiUxHighlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-[14px] border border-border/50 bg-surface/10"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-paragraph leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SectionCard>

            {/* Challenges Solved */}
            <SectionCard delay={0.25}>
              <SectionHeading icon={<FiCode size={18} />} title="Challenges Solved" />
              <div className="space-y-3">
                {project.challengesSolved.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-[14px] border border-border/50 bg-surface/10"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-paragraph leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SectionCard>

            {/* What I Learned */}
            <SectionCard delay={0.3}>
              <SectionHeading
                icon={<FiBookOpen size={18} />}
                title="What I Learned"
              />
              <div className="space-y-3">
                {project.whatILearned.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-[14px] border border-border/50 bg-surface/10"
                  >
                    <FiBookOpen
                      size={16}
                      className="text-accent mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-paragraph leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* ═══ Sidebar ═══ */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Tech Stack */}
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm">
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
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm">
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
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-heading mb-3">
                Repository
              </h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full gap-2"
                >
                  <FiGithub size={16} />
                  View on GitHub
                </Button>
              </a>
            </div>

            {/* Live Demo (if available) */}
            {project.liveDemoUrl && (
              <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-heading mb-3">
                  Live Demo
                </h3>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm" className="w-full gap-2">
                    <FiExternalLink size={16} />
                    View Live Demo
                  </Button>
                </a>
              </div>
            )}

            {/* Back to Projects */}
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="w-full gap-2 text-paragraph hover:text-heading"
              >
                <FiArrowLeft size={14} />
                Back to All Projects
              </Button>
            </Link>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

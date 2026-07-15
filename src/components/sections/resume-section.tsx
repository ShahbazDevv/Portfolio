import { motion } from 'framer-motion'
import { FileText, Download, Eye } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Resume"
          title="My Resume"
          description="A detailed overview of my education, skills, and development journey."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm text-center">
            <div className="h-20 w-20 rounded-[18px] bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={36} className="text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-heading mb-3">
              {profile.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-1">
              {profile.title}
            </p>
            <p className="text-sm text-paragraph mb-6">{profile.status}</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Eye size={18} className="mr-2" />
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

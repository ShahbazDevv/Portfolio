import { motion } from 'framer-motion'
import { BookOpen, Code, Box, Flame, Database, Cpu, Search } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { profile } from '@/data/profile'

const timelineIcons = [
  BookOpen,
  Code,
  Box,
  Flame,
  Database,
  Cpu,
  Search,
]

export function LearningJourney() {
  return (
    <section id="learning-journey" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Learning Journey"
          title="My Path in Development"
          description="A timeline of my growth as a developer — from first lines of Dart to seeking internship opportunities."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-border hidden md:block" />

          <div className="space-y-8">
            {profile.learningJourney.map((item, index) => {
              const Icon = timelineIcons[index] || Code
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-14"
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-0 top-1 h-10 w-10 rounded-[14px] bg-surface border border-border items-center justify-center z-10">
                    <Icon size={16} className="text-primary" />
                  </div>

                  <div className="p-5 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <span className="text-xs font-semibold text-primary tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-base font-semibold text-heading mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-paragraph leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

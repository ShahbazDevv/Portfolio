import { motion } from 'framer-motion'
import {
  Smartphone,
  Box,
  Database,
  Code2,
  Layout,
  Cpu,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { profile } from '@/data/profile'

const categoryIcons: Record<string, React.ElementType> = {
  'Flutter Development': Smartphone,
  'State Management': Box,
  'Backend': Database,
  'Development Tools': Code2,
  'Architecture': Layout,
  'AI': Cpu,
}

const allIcons: Record<string, React.ElementType> = {
  Flutter: Smartphone,
  Dart: Code2,
  'Cross Platform Development': Layout,
  'Responsive UI': Layout,
  GetX: Box,
  Firebase: Database,
  Supabase: Database,
  'REST API (Learning)': Database,
  Git: Code2,
  GitHub: Code2,
  'Android Studio': Code2,
  'VS Code': Code2,
  MVVM: Layout,
  'Material Design': Layout,
  'Flutter ScreenUtil': Layout,
  'Gemini API': Cpu,
  'AI API Integration (Learning)': Cpu,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Technical Skills"
          title="Technologies I Work With"
          description="Tools and technologies I've learned and applied through hands-on projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skillCategories.map((category, catIndex) => {
            const CatIcon = categoryIcons[category.label] || Code2
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-[12px] bg-primary/10 flex items-center justify-center">
                    <CatIcon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-heading">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = allIcons[skill]
                    return (
                      <motion.div
                        key={skill}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="group flex items-center gap-2 px-3.5 py-2 rounded-[12px] border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
                      >
                        {SkillIcon && (
                          <SkillIcon
                            size={14}
                            className="text-paragraph group-hover:text-primary transition-colors"
                          />
                        )}
                        <span className="text-xs font-medium text-paragraph group-hover:text-heading transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

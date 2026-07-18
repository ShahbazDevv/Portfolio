import { useState } from 'react'
import {
  Smartphone,
  Box,
  Database,
  Code2,
  Layout,
  Cpu,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { profile } from '@/data/profile'

const allIcons: Record<string, LucideIcon> = {
  Flutter: Smartphone,
  Dart: Code2,
  GetX: Box,
  'Provider (Basic)': Box,
  Supabase: Database,
  Firebase: Database,
  'REST API': Database,
  JSON: Code2,
  Git: Code2,
  GitHub: Code2,
  'Android Studio': Code2,
  'VS Code': Code2,
  Postman: Code2,
  'Responsive UI': Layout,
  'Material Design': Layout,
  'AI Integration': Cpu,
  'Prompt Engineering': Workflow,
}

const allSkills = profile.skillCategories.flatMap((cat) => cat.skills)
const mid = Math.ceil(allSkills.length / 2)
const row1Skills = allSkills.slice(0, mid)
const row2Skills = allSkills.slice(mid)

function MarqueeRow({
  skills,
  direction,
  speed,
}: {
  skills: string[]
  direction: 'left' | 'right'
  speed: number
}) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-3 w-max will-change-transform"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {[...skills, ...skills].map((skill, i) => {
          const SkillIcon = allIcons[skill]
          return (
            <div
              key={`${skill}-${i}`}
              className="group flex items-center gap-2 px-3.5 py-2 rounded-[12px] border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default select-none shrink-0"
            >
              {SkillIcon && (
                <SkillIcon
                  size={14}
                  className="text-paragraph group-hover:text-primary transition-colors"
                />
              )}
              <span className="text-xs font-medium text-paragraph group-hover:text-heading transition-colors whitespace-nowrap">
                {skill}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
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

        <div className="space-y-6">
          <MarqueeRow skills={row1Skills} direction="right" speed={35} />
          <MarqueeRow skills={row2Skills} direction="left" speed={35} />
        </div>
      </div>
    </section>
  )
}

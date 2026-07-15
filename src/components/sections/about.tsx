import { motion } from 'framer-motion'
import { GraduationCap, UserRound, Target, MapPin } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { profile } from '@/data/profile'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  UserRound,
  Target,
  MapPin,
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          description="Building the future of cross-platform mobile applications, one widget at a time."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg font-semibold text-heading mb-2">
                {profile.title}
              </p>
              <p className="text-sm text-primary font-medium mb-4">
                {profile.status}
              </p>
            </div>
            <p className="text-paragraph leading-relaxed">
              {profile.summary}
            </p>

            <div className="space-y-3">
              {profile.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-paragraph">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {profile.aboutCards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm hover:border-primary/30 hover:bg-surface/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-[14px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-heading mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-paragraph leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

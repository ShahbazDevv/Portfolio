import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-paragraph max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

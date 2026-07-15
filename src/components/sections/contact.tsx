import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { SectionHeader } from '@/components/ui/section-header'
import { ContactForm } from '@/components/ui/contact-form'
import { profile } from '@/data/profile'

const contactMethods = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiGithub, label: 'GitHub', value: 'ShahbazDevv', href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="I'm actively looking for internship and junior developer opportunities. Reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactMethods.map((method) => (
              <div key={method.label}>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-[18px] border border-border/50 bg-surface/20 hover:border-primary/30 hover:bg-surface/40 transition-all duration-300 group"
                  >
                    <div className="h-11 w-11 rounded-[14px] bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-paragraph">{method.label}</div>
                      <div className="text-sm font-medium text-heading group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-[18px] border border-border/50 bg-surface/20">
                    <div className="h-11 w-11 rounded-[14px] bg-primary/10 flex items-center justify-center">
                      <method.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-paragraph">{method.label}</div>
                      <div className="text-sm font-medium text-heading">{method.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-[18px] border border-border/50 bg-surface/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-heading mb-5">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

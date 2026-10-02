import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resumeUrl?: string
}

export function ResumeModal({
  isOpen,
  onClose,
  resumeUrl = '/Shahbaz_CV.pdf',
}: ResumeModalProps) {
  // Close on Escape key & lock scroll
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] flex flex-col rounded-[22px] border border-border/60 bg-surface shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-surface/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">
                    Resume Preview
                  </h3>
                  <p className="text-xs text-paragraph">Shahbaz_CV.pdf</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download="Shahbaz_CV.pdf"
                  className="hidden sm:inline-flex"
                >
                  <Button variant="default" size="sm">
                    <Download size={15} className="mr-1.5" />
                    Download Resume
                  </Button>
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-9 w-9 rounded-xl hover:bg-surface/80"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>

            {/* Desktop: Iframe Preview */}
            <div className="hidden md:block flex-1 min-h-0 bg-neutral-900/50">
              <iframe
                src={`${resumeUrl}#toolbar=0`}
                className="w-full h-full border-0"
                title="Muhammad Shahbaz Resume"
              />
            </div>

            {/* Mobile Fallback */}
            <div className="flex md:hidden flex-col items-center justify-center p-6 text-center flex-1 space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={32} />
              </div>
              <div className="space-y-1 max-w-xs">
                <h4 className="text-lg font-semibold text-heading">
                  Muhammad Shahbaz CV
                </h4>
                <p className="text-sm text-paragraph">
                  PDF in-browser previews may not be supported on mobile browsers.
                  You can view it in a new tab or download it directly.
                </p>
              </div>
              <div className="flex flex-col w-full max-w-xs gap-2 pt-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="secondary" className="w-full">
                    <ExternalLink size={16} className="mr-2" />
                    Open in new tab
                  </Button>
                </a>
                <a
                  href={resumeUrl}
                  download="Shahbaz_CV.pdf"
                  className="w-full"
                >
                  <Button variant="default" className="w-full">
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-5 py-3.5 border-t border-border/50 bg-surface/80">
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close
              </Button>
              <a
                href={resumeUrl}
                download="Shahbaz_CV.pdf"
              >
                <Button variant="default" size="sm">
                  <Download size={15} className="mr-1.5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-6 right-6 z-50 h-11 w-11 rounded-[14px]',
            'bg-primary text-white shadow-lg shadow-primary/25',
            'hover:bg-primary/90 hover:shadow-primary/40',
            'flex items-center justify-center transition-all duration-300'
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
